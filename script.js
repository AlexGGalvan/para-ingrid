(function () {
  "use strict";

  var dataEl = document.getElementById("poem-data");
  var area = document.getElementById("poem-area");
  var track = document.getElementById("acronym-track");
  var panel = document.getElementById("verse-panel");
  var hint = document.getElementById("hint");
  var doneMsg = document.getElementById("done-msg");
  var ctaBtn = document.getElementById("extra-cta");
  var extraPanel = document.getElementById("extra-panel");
  var scrollColumn = document.getElementById("verses-column");

  if (!dataEl || !area || !track || !panel || !ctaBtn || !extraPanel || !scrollColumn) return;

  var EXTRA_POEM =
    "Lo nuestro no fue prisa,\n" +
    "fue reconocimiento.\n" +
    "Tal vez parecía intenso\n" +
    "porque veníamos de pasar demasiado tiempo\n" +
    "buscando amor en personas equivocadas.\n" +
    "\n" +
    "Cuando te encontré,\n" +
    "no sentí que estaba corriendo;\n" +
    "sentí que por fin había llegado.\n" +
    "Como si la vida, después de tantos caminos torcidos,\n" +
    "me hubiera puesto frente a alguien\n" +
    "por quien no quería volver a perder tiempo.\n" +
    "\n" +
    "Por eso quise quererte sin pausa,\n" +
    "sin miedo, sin medir tanto cada paso;\n" +
    "porque cuando uno encuentra algo\n" +
    "que se siente como hogar,\n" +
    "no piensa en ir despacio,\n" +
    "piensa en no dejarlo ir.\n" +
    "\n" +
    "Si pudiera pedir algo,\n" +
    "no pediría que todo hubiera sido más lento;\n" +
    "pediría haberte conocido antes,\n" +
    "aunque fuera un segundo antes,\n" +
    "para quererte y cuidarte un poco más.\n" +
    "\n" +
    "Y aunque ahora no estés,\n" +
    "me quedo con la certeza\n" +
    "de que no fuimos demasiado rápido;\n" +
    "solo nos encontramos\n" +
    "cuando dos corazones cansados\n" +
    "por fin dejaron de buscar\n" +
    "en donde no era.";

  var data = JSON.parse(dataEl.textContent);
  var letters = data.letters;
  var lines = data.lines;

  var buckets = [[], [], [], [], [], []];
  lines.forEach(function (line) {
    buckets[line.s].push(line.t);
  });
  var stanzas = buckets.map(function (chunk) {
    return chunk.join("\n");
  });

  var unlocked = 0;
  var viewIndex = 0;
  var slots = [];
  var extraCtaEarned = false;
  var extraRevealed = false;

  function buildSlots() {
    track.textContent = "";
    slots = letters.map(function (ch, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "slot pending";
      btn.textContent = ch;
      btn.setAttribute("data-idx", String(i));
      btn.setAttribute("aria-label", "Ir al verso de la letra " + ch);
      btn.setAttribute("aria-disabled", "true");
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        if (i < unlocked) {
          goToStanza(i);
        }
      });
      track.appendChild(btn);
      return btn;
    });
  }

  function updateSlots() {
    slots.forEach(function (el, i) {
      el.classList.remove("revealed", "current", "pending");
      if (i < unlocked) {
        el.classList.add("revealed");
        el.setAttribute("aria-disabled", "false");
      } else {
        el.classList.add("pending");
        el.setAttribute("aria-disabled", "true");
      }
    });
    if (unlocked > 0 && viewIndex >= 0 && viewIndex < slots.length) {
      slots[viewIndex].classList.add("current");
    }
  }

  function renderVerse() {
    if (unlocked === 0) {
      panel.textContent = "";
      panel.classList.remove("has-text");
      syncCtaButton();
      return;
    }
    panel.textContent = stanzas[viewIndex];
    panel.classList.add("has-text");
    panel.scrollTop = 0;
    scrollColumn.scrollTop = 0;
    panel.classList.remove("verse-enter");
    void panel.offsetWidth;
    panel.classList.add("verse-enter");
    syncCtaButton();
    requestAnimationFrame(syncCtaButton);
  }

  function goToStanza(i) {
    if (i >= unlocked || i < 0) return;
    viewIndex = i;
    renderVerse();
    updateSlots();
  }

  function setCtaVisible(on) {
    if (on) {
      ctaBtn.classList.add("is-visible");
      ctaBtn.removeAttribute("aria-hidden");
    } else {
      ctaBtn.classList.remove("is-visible");
      ctaBtn.setAttribute("aria-hidden", "true");
    }
  }

  function scrollColumnAtEnd() {
    var pad = 48;
    if (scrollColumn.scrollHeight <= scrollColumn.clientHeight + pad) return true;
    return (
      scrollColumn.scrollTop + scrollColumn.clientHeight >=
      scrollColumn.scrollHeight - pad
    );
  }

  function syncCtaButton() {
    if (extraRevealed) {
      setCtaVisible(false);
      return;
    }
    if (
      !extraCtaEarned ||
      viewIndex !== stanzas.length - 1 ||
      unlocked < stanzas.length
    ) {
      setCtaVisible(false);
      return;
    }

    if (scrollColumnAtEnd()) {
      var wasHidden = !ctaBtn.classList.contains("is-visible");
      setCtaVisible(true);
      if (wasHidden) {
        requestAnimationFrame(function () {
          ctaBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      }
    } else {
      setCtaVisible(false);
    }
  }

  function earnExtraCta() {
    extraCtaEarned = true;
    doneMsg.hidden = true;
    syncCtaButton();
    requestAnimationFrame(syncCtaButton);
  }

  function revealExtra(e) {
    if (e) e.stopPropagation();
    if (extraRevealed) return;
    extraRevealed = true;
    setCtaVisible(false);
    extraPanel.hidden = false;
    extraPanel.textContent = EXTRA_POEM;
    extraPanel.classList.remove("verse-enter");
    void extraPanel.offsetWidth;
    extraPanel.classList.add("verse-enter");
    doneMsg.hidden = false;
    extraPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function advance() {
    if (unlocked < stanzas.length) {
      unlocked += 1;
      viewIndex = unlocked - 1;
      hint.classList.add("is-hidden");
      renderVerse();
      updateSlots();
      doneMsg.hidden = unlocked < stanzas.length;
      return;
    }

    if (extraRevealed) return;

    if (extraCtaEarned) {
      if (viewIndex < stanzas.length - 1) {
        viewIndex += 1;
        renderVerse();
        updateSlots();
        return;
      }
      return;
    }

    if (viewIndex < stanzas.length - 1) {
      viewIndex += 1;
      renderVerse();
      updateSlots();
      return;
    }

    earnExtraCta();
  }

  function onActivate(e) {
    if (e.type === "keydown" && e.key !== " " && e.key !== "Enter") return;
    if (e.type === "keydown") e.preventDefault();
    advance();
  }

  buildSlots();
  updateSlots();
  renderVerse();
  doneMsg.hidden = true;

  ctaBtn.addEventListener("click", revealExtra);

  area.addEventListener(
    "pointerup",
    function (e) {
      if (e.button !== 0 && e.button !== -1) return;
      var hit = e.target.closest(".acronym-track .slot");
      if (hit) return;
      if (e.target.closest(".extra-cta")) return;
      onActivate(e);
    },
    { passive: true }
  );

  area.addEventListener("keydown", onActivate);

  scrollColumn.addEventListener(
    "scroll",
    function () {
      syncCtaButton();
    },
    { passive: true }
  );

  window.addEventListener("resize", syncCtaButton, { passive: true });
})();
