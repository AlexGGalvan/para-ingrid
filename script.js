(function () {
  "use strict";

  var menuView = document.getElementById("menu-view");
  var ingridView = document.getElementById("ingrid-view");
  var prisaView = document.getElementById("prisa-view");
  var perfumeView = document.getElementById("perfume-view");
  var btnIngrid = document.getElementById("btn-ingrid");
  var btnPrisa = document.getElementById("btn-prisa");
  var btnPerfume = document.getElementById("btn-perfume");
  var btnBack1 = document.getElementById("btn-back-1");
  var btnBack2 = document.getElementById("btn-back-2");
  var btnBack3 = document.getElementById("btn-back-3");
  var btnResetIngrid = document.getElementById("btn-reset-ingrid");
  var btnResetPrisa = document.getElementById("btn-reset-prisa");
  var btnResetPerfume = document.getElementById("btn-reset-perfume");
  var prisaArea = document.getElementById("poem-area-prisa");
  var prisaHint = document.getElementById("hint-prisa");
  var prisaScrollColumn = document.getElementById("verses-column-prisa");
  var prisaPanel = document.getElementById("prisa-panel");
  var prisaHearts = document.getElementById("prisa-hearts");
  var prisaPager = document.getElementById("pager-prisa");
  var perfumeArea = document.getElementById("poem-area-perfume");
  var perfumeHint = document.getElementById("hint-perfume");
  var perfumeScrollColumn = document.getElementById("verses-column-perfume");
  var perfumePanel = document.getElementById("perfume-panel");
  var perfumeIcons = document.getElementById("perfume-icons");
  var perfumePager = document.getElementById("pager-perfume");

  var dataEl = document.getElementById("poem-data");
  var area = document.getElementById("poem-area");
  var track = document.getElementById("acronym-track");
  var panel = document.getElementById("verse-panel");
  var hint = document.getElementById("hint");
  var doneMsg = document.getElementById("done-msg");
  var scrollColumn = document.getElementById("verses-column");
  var ingridPager = document.getElementById("pager-ingrid");

  if (
    !menuView ||
    !ingridView ||
    !prisaView ||
    !perfumeView ||
    !btnIngrid ||
    !btnPrisa ||
    !btnPerfume ||
    !btnBack1 ||
    !btnBack2 ||
    !btnBack3 ||
    !btnResetIngrid ||
    !btnResetPrisa ||
    !btnResetPerfume ||
    !prisaArea ||
    !prisaPanel ||
    !prisaHint ||
    !prisaScrollColumn ||
    !prisaHearts ||
    !prisaPager ||
    !perfumeArea ||
    !perfumePanel ||
    !perfumeHint ||
    !perfumeScrollColumn ||
    !perfumeIcons ||
    !perfumePager ||
    !dataEl ||
    !area ||
    !track ||
    !panel ||
    !scrollColumn
    || !ingridPager
  )
    return;

  function setPager(el, current, total) {
    if (!el) return;
    var c = Math.max(0, Math.min(current, total));
    el.textContent = String(c) + "/" + String(total);
  }

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

  var PERFUME_POEM =
    "¿Dónde consigo tu perfume?\n" +
    "No hablo del que llevas en la ropa\n" +
    "o del que se queda unas horas en la piel;\n" +
    "me refiero a ese que impregnas en mis emociones\n" +
    "cuando sonríes,\n" +
    "cuando platicamos,\n" +
    "cuando me miras.\n" +
    "\n" +
    "Ese que no se va después de ocho horas,\n" +
    "ni después de doce,\n" +
    "ni siquiera después de tantos días\n" +
    "en los que ya no estás cerca\n" +
    "y aun así\n" +
    "sigo sintiendo tu aroma\n" +
    "en todo lo que me pasa por dentro.\n" +
    "\n" +
    "He intentado encontrarlo\n" +
    "en los recuerdos que me dejaste,\n" +
    "en las canciones que ahora suenan distinto,\n" +
    "en los silencios donde todavía apareces,\n" +
    "pero nada me dice de qué está hecho;\n" +
    "solo sé que parece venir de ti,\n" +
    "de esa forma tan tuya\n" +
    "de quedarse en mi mundo\n" +
    "sin tener que estar presente.\n" +
    "\n" +
    "Por eso dime,\n" +
    "¿dónde consigo tu perfume?\n" +
    "Porque ya entendí\n" +
    "que no lo busco por nostalgia,\n" +
    "sino para explicarme\n" +
    "por qué sigues aquí\n" +
    "aun cuando no estás.";

  function createAcronymPlayer(opts) {
    var letters = opts.letters;
    var stanzas = opts.stanzas;
    var areaEl = opts.area;
    var trackEl = opts.track;
    var panelEl = opts.panel;
    var hintEl = opts.hint;
    var doneEl = opts.doneMsg;
    var scrollEl = opts.scrollColumn;

    var unlocked = 0;
    var viewIndex = 0;
    var slots = [];
    var pagerEl = opts.pagerEl || null;
    var total = stanzas.length;

    function goToStanza(i) {
      if (i >= unlocked || i < 0) return;
      viewIndex = i;
      renderVerse();
      updateSlots();
    }

    function buildSlots() {
      trackEl.textContent = "";
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
          if (i < unlocked) goToStanza(i);
        });
        trackEl.appendChild(btn);
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
      setPager(pagerEl, unlocked, total);
    }

    function renderVerse() {
      if (unlocked === 0) {
        panelEl.textContent = "";
        panelEl.classList.remove("has-text");
        return;
      }
      panelEl.textContent = stanzas[viewIndex];
      panelEl.classList.add("has-text");
      panelEl.scrollTop = 0;
      scrollEl.scrollTop = 0;
      panelEl.classList.remove("verse-enter");
      void panelEl.offsetWidth;
      panelEl.classList.add("verse-enter");
    }

    function advance() {
      if (unlocked < stanzas.length) {
        unlocked += 1;
        viewIndex = unlocked - 1;
        hintEl.classList.add("is-hidden");
        renderVerse();
        updateSlots();
        doneEl.hidden = unlocked < stanzas.length;
      }
    }

    function onActivate(e) {
      if (e.type === "keydown" && e.key !== " " && e.key !== "Enter") return;
      if (e.type === "keydown") e.preventDefault();
      advance();
    }

    areaEl.addEventListener(
      "pointerup",
      function (e) {
        if (e.button !== 0 && e.button !== -1) return;
        var hit = e.target.closest(".acronym-track .slot");
        if (hit) return;
        onActivate(e);
      },
      { passive: true }
    );
    areaEl.addEventListener("keydown", onActivate);

    function reset() {
      unlocked = 0;
      viewIndex = 0;
      hintEl.classList.remove("is-hidden");
      doneEl.hidden = true;
      setPager(pagerEl, 0, total);
      buildSlots();
      updateSlots();
      renderVerse();
    }

    reset();

    return {
      reset: reset,
      focus: function () {
        areaEl.focus();
      }
    };
  }

  var data = JSON.parse(dataEl.textContent);
  var ingridLetters = data.letters;
  var lines = data.lines;

  var buckets = [[], [], [], [], [], []];
  lines.forEach(function (line) {
    buckets[line.s].push(line.t);
  });
  var ingridStanzas = buckets.map(function (chunk) {
    return chunk.join("\n");
  });

  var ingridPlayer = createAcronymPlayer({
    letters: ingridLetters,
    stanzas: ingridStanzas,
    area: area,
    track: track,
    panel: panel,
    hint: hint,
    doneMsg: doneMsg,
    scrollColumn: scrollColumn
    ,pagerEl: ingridPager
  });

  var prisaHeartsEls = Array.prototype.slice.call(
    prisaHearts.querySelectorAll(".heart")
  );
  var prisaFill = 0;
  var prisaParas = EXTRA_POEM.split(/\n\s*\n/);
  var prisaShown = 0;

  function resetPrisaHearts() {
    prisaFill = 0;
    prisaShown = 0;
    prisaHeartsEls.forEach(function (el) {
      el.textContent = "♡";
      el.classList.remove("is-full");
    });
    prisaHint.classList.remove("is-hidden");
    prisaPanel.textContent = "";
    prisaPanel.classList.remove("has-text");
    setPager(prisaPager, 0, prisaParas.length);
  }

  function fillNextHeart() {
    if (prisaFill < prisaHeartsEls.length) {
      var el = prisaHeartsEls[prisaFill];
      el.textContent = "♥";
      el.classList.add("is-full");
      prisaFill += 1;
    }
  }

  function revealNextParagraph() {
    if (prisaShown >= prisaParas.length) return;
    var next = prisaParas[prisaShown].trim();
    prisaShown += 1;
    if (!next) return;

    prisaPanel.textContent = next;
    prisaPanel.classList.add("has-text");
    prisaPanel.classList.remove("verse-enter");
    void prisaPanel.offsetWidth;
    prisaPanel.classList.add("verse-enter");
    prisaPanel.scrollTop = 0;
    prisaScrollColumn.scrollTop = 0;
    setPager(prisaPager, prisaShown, prisaParas.length);
  }

  function prisaProgress() {
    if (prisaFill === 0 && prisaShown === 0) {
      prisaHint.classList.add("is-hidden");
    }
    fillNextHeart();
    revealNextParagraph();
    if (prisaFill >= prisaHeartsEls.length && prisaShown >= prisaParas.length) {
      prisaHint.classList.add("is-hidden");
    }
  }

  function onPrisaActivate(e) {
    if (e.type === "keydown" && e.key !== " " && e.key !== "Enter") return;
    if (e.type === "keydown") e.preventDefault();
    prisaProgress();
  }

  prisaArea.addEventListener(
    "pointerup",
    function (e) {
      if (e.button !== 0 && e.button !== -1) return;
      if (e.target.closest("#btn-back-2")) return;
      onPrisaActivate(e);
    },
    { passive: true }
  );
  prisaArea.addEventListener("keydown", onPrisaActivate);

  var perfumeIconsEls = Array.prototype.slice.call(
    perfumeIcons.querySelectorAll(".perfume")
  );
  var perfumeFill = 0;
  var perfumeParas = PERFUME_POEM.split(/\n\s*\n/);
  var perfumeShown = 0;

  function resetPerfume() {
    perfumeFill = 0;
    perfumeShown = 0;
    perfumeIconsEls.forEach(function (el) {
      el.classList.remove("is-full");
    });
    perfumeHint.classList.remove("is-hidden");
    perfumePanel.textContent = "";
    perfumePanel.classList.remove("has-text");
    setPager(perfumePager, 0, perfumeParas.length);
  }

  function fillNextPerfume() {
    if (perfumeFill >= perfumeIconsEls.length) return;
    perfumeIconsEls[perfumeFill].classList.add("is-full");
    perfumeFill += 1;
  }

  function revealNextPerfumeParagraph() {
    if (perfumeShown >= perfumeParas.length) return;
    var next = perfumeParas[perfumeShown].trim();
    perfumeShown += 1;
    if (!next) return;
    perfumePanel.textContent = next;
    perfumePanel.classList.add("has-text");
    perfumePanel.classList.remove("verse-enter");
    void perfumePanel.offsetWidth;
    perfumePanel.classList.add("verse-enter");
    perfumePanel.scrollTop = 0;
    perfumeScrollColumn.scrollTop = 0;
    setPager(perfumePager, perfumeShown, perfumeParas.length);
  }

  function perfumeProgress() {
    if (perfumeFill === 0 && perfumeShown === 0) {
      perfumeHint.classList.add("is-hidden");
    }
    fillNextPerfume();
    revealNextPerfumeParagraph();
    if (
      perfumeFill >= perfumeIconsEls.length &&
      perfumeShown >= perfumeParas.length
    ) {
      perfumeHint.classList.add("is-hidden");
    }
  }

  function onPerfumeActivate(e) {
    if (e.type === "keydown" && e.key !== " " && e.key !== "Enter") return;
    if (e.type === "keydown") e.preventDefault();
    perfumeProgress();
  }

  perfumeArea.addEventListener(
    "pointerup",
    function (e) {
      if (e.button !== 0 && e.button !== -1) return;
      if (e.target.closest("#btn-back-3")) return;
      onPerfumeActivate(e);
    },
    { passive: true }
  );
  perfumeArea.addEventListener("keydown", onPerfumeActivate);

  function showView(view) {
    menuView.hidden = view !== "menu";
    ingridView.hidden = view !== "ingrid";
    prisaView.hidden = view !== "prisa";
    perfumeView.hidden = view !== "perfume";

    if (view === "ingrid") {
      ingridPlayer.reset();
      ingridPlayer.focus();
    }

    if (view === "prisa") {
      resetPrisaHearts();
      prisaArea.focus();
    }

    if (view === "perfume") {
      resetPerfume();
      perfumeArea.focus();
    }
  }

  btnIngrid.addEventListener("click", function () {
    showView("ingrid");
  });

  btnPrisa.addEventListener("click", function () {
    showView("prisa");
  });

  btnPerfume.addEventListener("click", function () {
    showView("perfume");
  });

  btnBack1.addEventListener("click", function (e) {
    e.stopPropagation();
    showView("menu");
  });

  btnBack2.addEventListener("click", function () {
    showView("menu");
  });

  btnBack3.addEventListener("click", function () {
    showView("menu");
  });

  btnResetIngrid.addEventListener("click", function (e) {
    e.stopPropagation();
    ingridPlayer.reset();
    ingridPlayer.focus();
  });

  btnResetPrisa.addEventListener("click", function (e) {
    e.stopPropagation();
    resetPrisaHearts();
    prisaArea.focus();
  });

  btnResetPerfume.addEventListener("click", function (e) {
    e.stopPropagation();
    resetPerfume();
    perfumeArea.focus();
  });

  showView("menu");
})();
