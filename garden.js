(function setupIngridGarden() {
  "use strict";

  var STORAGE_KEY = "ingridGardenProgress";

  var flowerQuestions = [
    {
      id: "rosa",
      flowerName: "Rosa",
      flowerEmoji: "🌹",
      title: "Agua limpia",
      question: "¿Cada cuánto es recomendable cambiar el agua de un ramo de flores?",
      options: [
        "Cada 1 o 2 días",
        "Solo cuando ya huela mal",
        "Una vez a la semana"
      ],
      correctAnswerIndex: 0,
      explanation:
        "Cambiar el agua cada 1 o 2 días ayuda a evitar bacterias y mantiene las flores frescas por más tiempo.",
      successMessage:
        "Muy bien, mi amor. Las flores duran más cuando tienen agua limpia… y a mí me encanta verte cuidar algo que nació de un detalle para ti."
    },
    {
      id: "tulipan",
      flowerName: "Tulipán",
      flowerEmoji: "🌷",
      title: "Corte en diagonal",
      question: "¿Por qué se recomienda cortar un poquito los tallos en diagonal?",
      options: [
        "Para que se vean más bonitos solamente",
        "Para que absorban mejor el agua",
        "Para que huelan más fuerte"
      ],
      correctAnswerIndex: 1,
      explanation:
        "El corte en diagonal aumenta la superficie por donde el tallo puede absorber agua.",
      successMessage:
        "Exacto, preciosa. A veces un pequeño corte ayuda a que algo siga viviendo más bonito."
    },
    {
      id: "girasol",
      flowerName: "Girasol",
      flowerEmoji: "🌻",
      title: "Hojas fuera del agua",
      question: "¿Qué es mejor hacer con las hojas que quedan debajo del nivel del agua?",
      options: [
        "Dejarlas ahí para decorar",
        "Quitarlas para que el agua no se ensucie tan rápido",
        "Cortar toda la flor"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Las hojas dentro del agua se descomponen y pueden hacer que crezcan bacterias.",
      successMessage:
        "Muy bien, mi niña. Cuidar también es saber quitar lo que puede hacer daño, aunque parezca pequeño."
    },
    {
      id: "margarita",
      flowerName: "Margarita",
      flowerEmoji: "🌼",
      title: "Luz correcta",
      question: "¿Dónde duran más las flores cortadas?",
      options: [
        "En sol directo",
        "En un lugar fresco con luz indirecta",
        "Pegadas a una ventana caliente"
      ],
      correctAnswerIndex: 1,
      explanation:
        "El sol directo y el calor pueden hacer que las flores se marchiten más rápido.",
      successMessage:
        "Correcto, amor. Las flores necesitan luz, pero también suavidad… como todo lo bonito que se cuida con paciencia."
    },
    {
      id: "lirio",
      flowerName: "Lirio",
      flowerEmoji: "🪷",
      title: "Temperatura",
      question: "¿Qué puede afectar más rápido a un ramo de flores?",
      options: [
        "Cambios fuertes de temperatura",
        "Que las mires mucho",
        "Que estén en un florero bonito"
      ],
      correctAnswerIndex: 0,
      explanation:
        "El calor fuerte o los cambios bruscos de temperatura pueden acelerar que las flores se marchiten.",
      successMessage:
        "Sí, mi amor. Aunque si las miras tú, seguro también les dan ganas de quedarse más tiempo."
    },
    {
      id: "peonia",
      flowerName: "Peonía",
      flowerEmoji: "🌸",
      title: "Frutas cerca",
      question: "¿Por qué no conviene dejar flores cerca de frutas maduras?",
      options: [
        "Porque las frutas les quitan color",
        "Porque algunas frutas liberan etileno, que puede acelerar el marchitamiento",
        "Porque las flores dejan de oler"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Algunas frutas maduras liberan etileno, un gas que puede hacer que las flores envejezcan más rápido.",
      successMessage:
        "Muy bien, amor. Hasta las flores necesitan estar en el lugar correcto para durar más."
    },
    {
      id: "clavel",
      flowerName: "Clavel",
      flowerEmoji: "💮",
      title: "Florero limpio",
      question: "Antes de poner flores nuevas en un florero, ¿qué es recomendable hacer?",
      options: [
        "Lavar bien el florero",
        "Solo agregar agua nueva",
        "Poner perfume en el agua"
      ],
      correctAnswerIndex: 0,
      explanation:
        "Un florero limpio ayuda a evitar bacterias que pueden dañar los tallos.",
      successMessage:
        "Exacto, mi vida. Lo bonito también merece empezar en un lugar limpio y cuidado."
    },
    {
      id: "orquidea",
      flowerName: "Orquídea",
      flowerEmoji: "🌺",
      title: "Flores marchitas",
      question: "¿Qué conviene hacer si una flor del ramo ya está muy marchita?",
      options: [
        "Quitarla para proteger al resto del ramo",
        "Dejarla siempre ahí",
        "Ponerle más agua encima"
      ],
      correctAnswerIndex: 0,
      explanation:
        "Retirar flores marchitas ayuda a que el resto del ramo se mantenga mejor por más tiempo.",
      successMessage:
        "Muy bien. A veces cuidar algo también significa proteger lo que todavía puede seguir floreciendo."
    }
  ];

  var wrongMessages = [
    "Casi, mi amor. Esa flor todavía necesita tantita ayuda.",
    "No pasa nada, preciosa. El jardín también se aprende cuidándolo.",
    "Casi lo tienes. Te dejo una pista para que esa flor pueda abrirse.",
    "Esta flor todavía no abre, pero con tantito cuidado lo hará."
  ];

  var unlockMessages = [
    "Has desbloqueado una {flower} para tu jardín.",
    "Tu jardín está creciendo, amor.",
    "Una flor más decidió quedarse contigo."
  ];

  var introEl = document.getElementById("garden-intro");
  var playEl = document.getElementById("garden-play");
  var finalEl = document.getElementById("garden-final");
  var startBtn = document.getElementById("garden-start");
  var resetBtn = document.getElementById("garden-reset");
  var gridEl = document.getElementById("garden-grid");
  var questionPanel = document.getElementById("garden-question-panel");
  var statusMsgEl = document.getElementById("garden-status-msg");
  var progressCountEl = document.getElementById("garden-progress-count");
  var progressFillEl = document.getElementById("garden-progress-fill");
  var confettiEl = document.getElementById("garden-confetti");
  var backToPlayBtn = document.getElementById("garden-back-to-play");

  if (!introEl || !playEl || !gridEl || !questionPanel) return;

  var state = {
    currentQuestionIndex: 0,
    unlockedFlowers: [],
    completed: false
  };

  var answering = false;

  function defaultState() {
    return {
      currentQuestionIndex: 0,
      unlockedFlowers: [],
      completed: false
    };
  }

  function loadProgress() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return defaultState();
      return {
        currentQuestionIndex:
          typeof parsed.currentQuestionIndex === "number"
            ? Math.min(Math.max(0, parsed.currentQuestionIndex), flowerQuestions.length)
            : 0,
        unlockedFlowers: Array.isArray(parsed.unlockedFlowers)
          ? parsed.unlockedFlowers.filter(function (id) {
              return flowerQuestions.some(function (q) {
                return q.id === id;
              });
            })
          : [],
        completed: !!parsed.completed
      };
    } catch (e) {
      return defaultState();
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) { /* ignore */ }
  }

  function unlockedCount() {
    return state.unlockedFlowers.length;
  }

  function getStatusMessage() {
    if (state.completed) return "El Jardín de Ingrid floreció por completo.";
    var n = unlockedCount();
    if (n === 0) return "Tu jardín está esperando por ti.";
    if (n <= 3) return "Tu jardín empieza a despertar.";
    if (n <= 6) return "Tu jardín está floreciendo bonito.";
    return "Tu jardín está casi completo.";
  }

  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function formatUnlockMessage(flowerName) {
    var tpl = pickRandom(unlockMessages);
    return tpl.replace("{flower}", flowerName.toLowerCase());
  }

  function getBudSvg() {
    return (
      '<svg viewBox="0 0 64 80" focusable="false" aria-hidden="true">' +
      '<path d="M32 76 L32 44" stroke="#4d7a48" stroke-width="2.8" stroke-linecap="round"/>' +
      '<ellipse cx="32" cy="38" rx="11" ry="15" fill="#5f9460" opacity="0.75"/>' +
      '<path d="M32 24 C32 10 32 8 32 8 C40 16 32 24 32 24 C24 16 32 8 32 8 Z" fill="#6fa866" opacity="0.8"/>' +
      "</svg>"
    );
  }

  function getFlowerSvg(id) {
    var svgs = {
      rosa:
        '<svg viewBox="0 0 64 80" focusable="false" aria-hidden="true">' +
        '<path d="M32 76 L32 48" stroke="#4d7a48" stroke-width="2.5" stroke-linecap="round"/>' +
        '<circle cx="32" cy="30" r="7" fill="#e84068"/>' +
        '<ellipse cx="32" cy="22" rx="9" ry="11" fill="#ff6b8a" transform="rotate(0 32 22)"/>' +
        '<ellipse cx="24" cy="28" rx="8" ry="10" fill="#ff5a82" transform="rotate(-35 24 28)"/>' +
        '<ellipse cx="40" cy="28" rx="8" ry="10" fill="#ff5a82" transform="rotate(35 40 28)"/>' +
        '<ellipse cx="26" cy="36" rx="7" ry="9" fill="#f04a72" transform="rotate(-55 26 36)"/>' +
        '<ellipse cx="38" cy="36" rx="7" ry="9" fill="#f04a72" transform="rotate(55 38 36)"/>' +
        '<circle cx="32" cy="30" r="4" fill="#ffd0dc" opacity="0.7"/>' +
        "</svg>",
      tulipan:
        '<svg viewBox="0 0 64 80" focusable="false" aria-hidden="true">' +
        '<path d="M32 76 L32 50" stroke="#4d7a48" stroke-width="2.5" stroke-linecap="round"/>' +
        '<path d="M32 50 C22 44 18 32 24 22 C28 30 32 34 32 34 C32 34 36 30 40 22 C46 32 42 44 32 50 Z" fill="#ff7090"/>' +
        '<path d="M32 50 C26 46 22 36 26 26 C30 34 32 38 32 38 C32 38 34 34 38 26 C42 36 38 46 32 50 Z" fill="#ff88a8" opacity="0.85"/>' +
        '<ellipse cx="32" cy="24" rx="5" ry="7" fill="#ffb0c8"/>' +
        "</svg>",
      girasol:
        '<svg viewBox="0 0 64 80" focusable="false" aria-hidden="true">' +
        '<path d="M32 76 L32 52" stroke="#4d7a48" stroke-width="2.5" stroke-linecap="round"/>' +
        '<g fill="#ffc830" transform="translate(32 32)">' +
        '<ellipse rx="4" ry="10" transform="rotate(0) translate(0 -14)"/>' +
        '<ellipse rx="4" ry="10" transform="rotate(45) translate(0 -14)"/>' +
        '<ellipse rx="4" ry="10" transform="rotate(90) translate(0 -14)"/>' +
        '<ellipse rx="4" ry="10" transform="rotate(135) translate(0 -14)"/>' +
        '<ellipse rx="4" ry="10" transform="rotate(180) translate(0 -14)"/>' +
        '<ellipse rx="4" ry="10" transform="rotate(225) translate(0 -14)"/>' +
        '<ellipse rx="4" ry="10" transform="rotate(270) translate(0 -14)"/>' +
        '<ellipse rx="4" ry="10" transform="rotate(315) translate(0 -14)"/>' +
        "</g>" +
        '<circle cx="32" cy="32" r="9" fill="#8b5a20"/>' +
        '<circle cx="32" cy="32" r="6" fill="#a06828" opacity="0.7"/>' +
        "</svg>",
      margarita:
        '<svg viewBox="0 0 64 80" focusable="false" aria-hidden="true">' +
        '<path d="M32 76 L32 50" stroke="#4d7a48" stroke-width="2.5" stroke-linecap="round"/>' +
        '<g fill="#fff8ee" stroke="#f0e8d8" stroke-width="0.5" transform="translate(32 30)">' +
        '<ellipse rx="3.5" ry="9" transform="rotate(0) translate(0 -12)"/>' +
        '<ellipse rx="3.5" ry="9" transform="rotate(40) translate(0 -12)"/>' +
        '<ellipse rx="3.5" ry="9" transform="rotate(80) translate(0 -12)"/>' +
        '<ellipse rx="3.5" ry="9" transform="rotate(120) translate(0 -12)"/>' +
        '<ellipse rx="3.5" ry="9" transform="rotate(160) translate(0 -12)"/>' +
        '<ellipse rx="3.5" ry="9" transform="rotate(200) translate(0 -12)"/>' +
        '<ellipse rx="3.5" ry="9" transform="rotate(240) translate(0 -12)"/>' +
        '<ellipse rx="3.5" ry="9" transform="rotate(280) translate(0 -12)"/>' +
        '<ellipse rx="3.5" ry="9" transform="rotate(320) translate(0 -12)"/>' +
        "</g>" +
        '<circle cx="32" cy="30" r="6" fill="#ffd040"/>' +
        "</svg>",
      lirio:
        '<svg viewBox="0 0 64 80" focusable="false" aria-hidden="true">' +
        '<path d="M32 76 L32 52" stroke="#4d7a48" stroke-width="2.5" stroke-linecap="round"/>' +
        '<path d="M32 52 C28 48 26 40 28 32 C30 38 32 42 32 42 C32 42 34 38 36 32 C38 40 36 48 32 52 Z" fill="#fff5ee" stroke="#f0e0d0" stroke-width="0.6"/>' +
        '<path d="M32 42 C30 34 30 22 32 14 C34 22 34 34 32 42 Z" fill="#fffaf5" stroke="#e8d8c8" stroke-width="0.5"/>' +
        '<ellipse cx="32" cy="16" rx="4" ry="6" fill="#fff0e8"/>' +
        '<circle cx="32" cy="38" r="2" fill="#ffd870" opacity="0.8"/>' +
        "</svg>",
      peonia:
        '<svg viewBox="0 0 64 80" focusable="false" aria-hidden="true">' +
        '<path d="M32 76 L32 50" stroke="#4d7a48" stroke-width="2.5" stroke-linecap="round"/>' +
        '<circle cx="32" cy="32" r="14" fill="#ffb8d0" opacity="0.5"/>' +
        '<circle cx="28" cy="28" r="10" fill="#ff98b8" opacity="0.7"/>' +
        '<circle cx="36" cy="28" r="10" fill="#ff98b8" opacity="0.7"/>' +
        '<circle cx="32" cy="34" r="9" fill="#ff88aa" opacity="0.8"/>' +
        '<circle cx="32" cy="30" r="6" fill="#ffd0e0"/>' +
        '<circle cx="32" cy="28" r="3" fill="#fff0f5"/>' +
        "</svg>",
      clavel:
        '<svg viewBox="0 0 64 80" focusable="false" aria-hidden="true">' +
        '<path d="M32 76 L32 50" stroke="#4d7a48" stroke-width="2.5" stroke-linecap="round"/>' +
        '<path d="M32 50 C24 46 20 36 22 26 C26 34 30 38 32 38 C34 38 38 34 42 26 C44 36 40 46 32 50 Z" fill="#ff88aa"/>' +
        '<path d="M32 38 C28 32 26 24 28 16 C30 22 32 26 32 26 C32 26 34 22 36 16 C38 24 36 32 32 38 Z" fill="#ff7090"/>' +
        '<path d="M30 20 L32 14 L34 20 Z" fill="#ffb0c0" opacity="0.8"/>' +
        '<path d="M28 24 L32 18 L36 24 Z" fill="#ff98b0" opacity="0.7"/>' +
        "</svg>",
      orquidea:
        '<svg viewBox="0 0 64 80" focusable="false" aria-hidden="true">' +
        '<path d="M32 76 L32 52" stroke="#4d7a48" stroke-width="2.5" stroke-linecap="round"/>' +
        '<ellipse cx="32" cy="38" rx="14" ry="8" fill="#c878d8" opacity="0.85"/>' +
        '<ellipse cx="32" cy="34" rx="10" ry="6" fill="#d890e8"/>' +
        '<path d="M32 30 C32 18 38 14 42 18 C38 22 34 26 32 30 Z" fill="#b060c8"/>' +
        '<path d="M32 30 C32 18 26 14 22 18 C26 22 30 26 32 30 Z" fill="#b060c8"/>' +
        '<circle cx="32" cy="36" r="4" fill="#ffe8ff"/>' +
        '<ellipse cx="32" cy="42" rx="5" ry="3" fill="#a050b8" opacity="0.7"/>' +
        "</svg>"
    };
    return svgs[id] || getBudSvg();
  }

  function showScreen(name) {
    introEl.hidden = name !== "intro";
    playEl.hidden = name !== "play";
    finalEl.hidden = name !== "final";
  }

  function updateProgressUI() {
    var count = unlockedCount();
    if (progressCountEl) progressCountEl.textContent = String(count);
    if (progressFillEl) {
      progressFillEl.style.width = String((count / flowerQuestions.length) * 100) + "%";
    }
    if (statusMsgEl) statusMsgEl.textContent = getStatusMessage();
  }

  function renderGarden() {
    gridEl.textContent = "";
    for (var i = 0; i < flowerQuestions.length; i++) {
      var q = flowerQuestions[i];
      var unlocked = state.unlockedFlowers.indexOf(q.id) !== -1;
      var card = document.createElement("article");
      card.className = "garden-flower" + (unlocked ? " is-unlocked" : " is-locked");
      card.setAttribute("role", "listitem");
      card.setAttribute("data-flower-id", q.id);
      card.innerHTML =
        '<div class="garden-flower__art" aria-hidden="true">' +
        (unlocked ? getFlowerSvg(q.id) : getBudSvg()) +
        "</div>" +
        '<span class="garden-flower__name">' +
        (unlocked ? q.flowerName : "···") +
        "</span>";
      gridEl.appendChild(card);
    }
    updateProgressUI();
  }

  function unlockFlower(id) {
    if (state.unlockedFlowers.indexOf(id) !== -1) return;
    state.unlockedFlowers.push(id);
    saveProgress();
    renderGarden();
    var card = gridEl.querySelector('[data-flower-id="' + id + '"]');
    if (card) {
      card.classList.add("is-blooming");
      window.setTimeout(function () {
        card.classList.remove("is-blooming");
      }, 1400);
    }
  }

  function renderQuestion() {
    answering = false;
    if (state.completed || state.currentQuestionIndex >= flowerQuestions.length) {
      showFinalLetter();
      return;
    }

    var q = flowerQuestions[state.currentQuestionIndex];
    questionPanel.innerHTML = "";

    var wrap = document.createElement("div");
    wrap.className = "garden-q";

    var kicker = document.createElement("p");
    kicker.className = "garden-q__kicker";
    kicker.textContent = q.title;

    var text = document.createElement("h4");
    text.className = "garden-q__text";
    text.textContent = q.question;

    var optionsEl = document.createElement("div");
    optionsEl.className = "garden-q__options";
    optionsEl.setAttribute("role", "group");
    optionsEl.setAttribute("aria-label", "Opciones de respuesta");

    var labels = ["A", "B", "C"];
    for (var i = 0; i < q.options.length; i++) {
      (function (idx) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "garden-q__option";
        btn.textContent = labels[idx] + ") " + q.options[idx];
        btn.addEventListener("click", function () {
          handleAnswer(idx);
        });
        optionsEl.appendChild(btn);
      })(i);
    }

    var feedback = document.createElement("div");
    feedback.className = "garden-feedback";
    feedback.hidden = true;

    wrap.appendChild(kicker);
    wrap.appendChild(text);
    wrap.appendChild(optionsEl);
    wrap.appendChild(feedback);
    questionPanel.appendChild(wrap);
  }

  function showFeedback(isCorrect, q, chosenIndex) {
    var wrap = questionPanel.querySelector(".garden-q");
    if (!wrap) return;

    var optionsEl = wrap.querySelector(".garden-q__options");
    var feedback = wrap.querySelector(".garden-feedback");
    if (!optionsEl || !feedback) return;

    var buttons = optionsEl.querySelectorAll(".garden-q__option");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
      if (isCorrect && i === chosenIndex) {
        buttons[i].classList.add("is-correct");
      } else if (!isCorrect) {
        buttons[i].classList.add("is-muted");
      }
    }

    feedback.hidden = false;
    feedback.innerHTML = "";

    var msg = document.createElement("p");
    msg.className = "garden-feedback__msg";
    msg.textContent = isCorrect ? q.successMessage : pickRandom(wrongMessages);

    feedback.appendChild(msg);

    if (!isCorrect) {
      var explain = document.createElement("p");
      explain.className = "garden-feedback__explain";
      explain.textContent = q.explanation;
      feedback.appendChild(explain);

      var retryBtn = document.createElement("button");
      retryBtn.type = "button";
      retryBtn.className = "garden-btn garden-btn--soft";
      retryBtn.textContent = "Intentar de nuevo";
      retryBtn.addEventListener("click", function () {
        renderQuestion();
      });
      feedback.appendChild(retryBtn);
    } else {
      var unlockNote = document.createElement("p");
      unlockNote.className = "garden-feedback__unlock";
      unlockNote.textContent = formatUnlockMessage(q.flowerName);
      feedback.appendChild(unlockNote);

      var nextBtn = document.createElement("button");
      nextBtn.type = "button";
      nextBtn.className = "garden-btn garden-btn--primary";
      nextBtn.textContent =
        state.currentQuestionIndex >= flowerQuestions.length - 1
          ? "Ver Carta"
          : "Seguir cuidando";
      nextBtn.addEventListener("click", function () {
        advanceAfterCorrect(q);
      });
      feedback.appendChild(nextBtn);
    }
  }

  function handleAnswer(chosenIndex) {
    if (answering) return;
    answering = true;

    var q = flowerQuestions[state.currentQuestionIndex];
    var isCorrect = chosenIndex === q.correctAnswerIndex;

    if (isCorrect) {
      unlockFlower(q.id);
    }

    showFeedback(isCorrect, q, chosenIndex);
  }

  function advanceAfterCorrect(q) {
    state.currentQuestionIndex += 1;
    saveProgress();
    updateProgressUI();

    if (state.currentQuestionIndex >= flowerQuestions.length) {
      state.completed = true;
      saveProgress();
      showFinalLetter();
      return;
    }

    renderQuestion();
    questionPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function spawnConfetti() {
    if (!confettiEl) return;
    confettiEl.textContent = "";
    var petals = ["🌸", "🌷", "🌹", "✨", "💮", "🌼"];
    for (var i = 0; i < 18; i++) {
      var p = document.createElement("span");
      p.className = "garden-confetti__piece";
      p.textContent = petals[i % petals.length];
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDelay = Math.random() * 2.5 + "s";
      p.style.animationDuration = 3 + Math.random() * 2 + "s";
      confettiEl.appendChild(p);
    }
  }

  function showFinalLetter() {
    state.completed = true;
    saveProgress();
    updateProgressUI();
    renderGarden();
    showScreen("final");
    spawnConfetti();
    if (finalEl) {
      finalEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function startGarden() {
    showScreen("play");
    renderGarden();
    if (state.completed) {
      showFinalLetter();
      return;
    }
    renderQuestion();
  }

  function resetGarden() {
    if (
      !window.confirm(
        "¿Quieres reiniciar tu jardín? Perderás el progreso en este navegador."
      )
    ) {
      return;
    }
    state = defaultState();
    saveProgress();
    showScreen("intro");
    renderGarden();
    questionPanel.textContent = "";
    if (confettiEl) confettiEl.textContent = "";
    updateProgressUI();
  }

  function init() {
    state = loadProgress();

    if (
      state.unlockedFlowers.length >= flowerQuestions.length &&
      !state.completed
    ) {
      state.completed = true;
      state.currentQuestionIndex = flowerQuestions.length;
      saveProgress();
    }

    renderGarden();
    updateProgressUI();

    if (state.completed) {
      showScreen("final");
      spawnConfetti();
    } else if (state.currentQuestionIndex > 0 || state.unlockedFlowers.length > 0) {
      showScreen("play");
      renderQuestion();
    } else {
      showScreen("intro");
    }

    if (startBtn) {
      startBtn.addEventListener("click", startGarden);
    }
    if (resetBtn) {
      resetBtn.addEventListener("click", resetGarden);
    }
    if (backToPlayBtn) {
      backToPlayBtn.addEventListener("click", function () {
        showScreen("play");
        renderGarden();
        updateProgressUI();
        questionPanel.innerHTML =
          '<p class="garden-complete-note">Tu jardín floreció por completo. Todas tus flores están aquí contigo.</p>';
      });
    }
  }

  init();
})();
