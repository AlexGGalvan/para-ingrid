(function () {
  "use strict";

  var menuView = document.getElementById("menu-view");
  var storyView = document.getElementById("story-view");
  var ingridLetterView = document.getElementById("ingrid-letter-view");
  var ingridView = document.getElementById("ingrid-view");
  var prisaView = document.getElementById("prisa-view");
  var perfumeView = document.getElementById("perfume-view");
  var amorView = document.getElementById("amor-view");
  var quedarmeView = document.getElementById("quedarme-view");
  var nudoView = document.getElementById("nudo-view");
  var ternuraView = document.getElementById("ternura-view");
  var ocasoView = document.getElementById("ocaso-view");
  var btnIngrid = document.getElementById("btn-ingrid");
  var btnIngridLetter = document.getElementById("btn-ingrid-letter");
  var btnPrisa = document.getElementById("btn-prisa");
  var btnPerfume = document.getElementById("btn-perfume");
  var btnAmor = document.getElementById("btn-amor");
  var btnQuedarme = document.getElementById("btn-quedarme");
  var btnNudo = document.getElementById("btn-nudo");
  var btnTernura = document.getElementById("btn-ternura");
  var btnOcaso = document.getElementById("btn-ocaso");
  var btnBack1 = document.getElementById("btn-back-1");
  var btnBack2 = document.getElementById("btn-back-2");
  var btnBack3 = document.getElementById("btn-back-3");
  var btnBack4 = document.getElementById("btn-back-4");
  var btnBack5 = document.getElementById("btn-back-5");
  var btnBack6 = document.getElementById("btn-back-6");
  var btnBack7 = document.getElementById("btn-back-7");
  var btnBack8 = document.getElementById("btn-back-8");
  var btnBackStory = document.getElementById("btn-back-story");
  var btnBackIngridLetter = document.getElementById("btn-back-ingrid-letter");
  var btnLeerHistoria = document.getElementById("btn-leer-historia");
  var btnResetIngrid = document.getElementById("btn-reset-ingrid");
  var btnResetPrisa = document.getElementById("btn-reset-prisa");
  var btnResetPerfume = document.getElementById("btn-reset-perfume");
  var btnResetAmor = document.getElementById("btn-reset-amor");
  var btnResetQuedarme = document.getElementById("btn-reset-quedarme");
  var btnResetNudo = document.getElementById("btn-reset-nudo");
  var btnResetTernura = document.getElementById("btn-reset-ternura");
  var btnResetOcaso = document.getElementById("btn-reset-ocaso");
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
  var amorArea = document.getElementById("poem-area-amor");
  var amorHint = document.getElementById("hint-amor");
  var amorScrollColumn = document.getElementById("verses-column-amor");
  var amorPanel = document.getElementById("amor-panel");
  var amorHearts = document.getElementById("amor-hearts");
  var amorPager = document.getElementById("pager-amor");
  var quedarmeArea = document.getElementById("poem-area-quedarme");
  var quedarmeHint = document.getElementById("hint-quedarme");
  var quedarmeScrollColumn = document.getElementById("verses-column-quedarme");
  var quedarmePanel = document.getElementById("quedarme-panel");
  var quedarmeSuns = document.getElementById("quedarme-suns");
  var quedarmePager = document.getElementById("pager-quedarme");
  var nudoArea = document.getElementById("poem-area-nudo");
  var nudoHint = document.getElementById("hint-nudo");
  var nudoScrollColumn = document.getElementById("verses-column-nudo");
  var nudoPanel = document.getElementById("nudo-panel");
  var nudoKnots = document.getElementById("nudo-knots");
  var nudoPager = document.getElementById("pager-nudo");
  var ternuraArea = document.getElementById("poem-area-ternura");
  var ternuraHint = document.getElementById("hint-ternura");
  var ternuraScrollColumn = document.getElementById("verses-column-ternura");
  var ternuraPanel = document.getElementById("ternura-panel");
  var ternuraCuritas = document.getElementById("ternura-curitas");
  var ternuraPager = document.getElementById("pager-ternura");
  var ocasoArea = document.getElementById("poem-area-ocaso");
  var ocasoHint = document.getElementById("hint-ocaso");
  var ocasoScrollColumn = document.getElementById("verses-column-ocaso");
  var ocasoPanel = document.getElementById("ocaso-panel");
  var ocasoIcons = document.getElementById("ocaso-icons");
  var ocasoPager = document.getElementById("pager-ocaso");

  var dataEl = document.getElementById("poem-data");
  var area = document.getElementById("poem-area");
  var track = document.getElementById("acronym-track");
  var panel = document.getElementById("verse-panel");
  var hint = document.getElementById("hint");
  var doneMsg = document.getElementById("done-msg");
  var scrollColumn = document.getElementById("verses-column");
  var ingridPager = document.getElementById("pager-ingrid");
  var storyArea = document.getElementById("story-area");
  var versesColumnStory = document.getElementById("verses-column-story");
  var ingridLetterArea = document.getElementById("ingrid-letter-area");
  var versesColumnIngridLetter = document.getElementById("verses-column-ingrid-letter");

  /**
   * Respuestas a «¿Ya le pongo punto?» · regístrate en https://formspree.io ,
   * crea un formulario y pega aquí la URL (ejemplo: https://formspree.io/f/abcdefgh).
   * Las respuestas llegan al correo de esa cuenta. Déjalo en "" hasta configurarlo.
   */
  var STORY_RESPONSE_FORM_URL = "https://formspree.io/f/xkoypgpl";

  if (
    !menuView ||
    !storyView ||
    !ingridLetterView ||
    !ingridView ||
    !prisaView ||
    !perfumeView ||
    !amorView ||
    !quedarmeView ||
    !nudoView ||
    !ternuraView ||
    !ocasoView ||
    !btnIngrid ||
    !btnIngridLetter ||
    !btnPrisa ||
    !btnPerfume ||
    !btnAmor ||
    !btnQuedarme ||
    !btnNudo ||
    !btnTernura ||
    !btnOcaso ||
    !btnBack1 ||
    !btnBack2 ||
    !btnBack3 ||
    !btnBack4 ||
    !btnBack5 ||
    !btnBack6 ||
    !btnBack7 ||
    !btnBack8 ||
    !btnBackStory ||
    !btnBackIngridLetter ||
    !btnLeerHistoria ||
    !btnResetIngrid ||
    !btnResetPrisa ||
    !btnResetPerfume ||
    !btnResetAmor ||
    !btnResetQuedarme ||
    !btnResetNudo ||
    !btnResetTernura ||
    !btnResetOcaso ||
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
    !amorArea ||
    !amorPanel ||
    !amorHint ||
    !amorScrollColumn ||
    !amorHearts ||
    !amorPager ||
    !quedarmeArea ||
    !quedarmePanel ||
    !quedarmeHint ||
    !quedarmeScrollColumn ||
    !quedarmeSuns ||
    !quedarmePager ||
    !nudoArea ||
    !nudoPanel ||
    !nudoHint ||
    !nudoScrollColumn ||
    !nudoKnots ||
    !nudoPager ||
    !ternuraArea ||
    !ternuraPanel ||
    !ternuraHint ||
    !ternuraScrollColumn ||
    !ternuraCuritas ||
    !ternuraPager ||
    !ocasoArea ||
    !ocasoPanel ||
    !ocasoHint ||
    !ocasoScrollColumn ||
    !ocasoIcons ||
    !ocasoPager ||
    !dataEl ||
    !area ||
    !track ||
    !panel ||
    !scrollColumn
    || !ingridPager
    || !storyArea
    || !versesColumnStory
    || !ingridLetterArea
    || !versesColumnIngridLetter
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

  var AMOR_POEM =
    "¿En qué momento se termina el amor?\n" +
    "¿Cuando llegan los días difíciles,\n" +
    "cuando la voz tiembla,\n" +
    "cuando el corazón se abre\n" +
    "y ya no puede esconder lo que le duele?\n" +
    "\n" +
    "Porque amar cuando todo es risa\n" +
    "no exige demasiado.\n" +
    "Cualquiera puede quedarse\n" +
    "cuando la vida se ve bonita\n" +
    "y no hay heridas que cuidar.\n" +
    "\n" +
    "Pero mi amor no nació\n" +
    "para huir cuando pesa el alma,\n" +
    "ni para medir su fuerza\n" +
    "solo cuando todo está en calma.\n" +
    "\n" +
    "Tampoco necesito ponerlo a prueba;\n" +
    "yo sé que resistiría.\n" +
    "No porque sea perfecto,\n" +
    "sino porque es sincero\n" +
    "incluso cuando duele.\n" +
    "\n" +
    "Mi amor no está hecho\n" +
    "solo para los días buenos.\n" +
    "Está aquí para cuidar lo frágil,\n" +
    "para no temer, para dejar de fingir…\n" +
    "y simplemente vivir.";

  var QUEDARME_POEM =
    "No sé qué ruta habrá para encontrarme,\n" +
    "cuando despierta el cuarto tan vacío;\n" +
    "la luz cae despacio sobre el frío,\n" +
    "como si el alba aún quisiera salvarme.\n" +
    "\n" +
    "Yo no le pido al tiempo acompañarme,\n" +
    "ni hacer de tu silencio un desafío;\n" +
    "guardo tu imagen, clara como un río,\n" +
    "por si tus ojos vuelven a nombrarme.\n" +
    "\n" +
    "Si alguna vez la más simple mañana\n" +
    "me deja abrir los ojos junto a ti,\n" +
    "sabré por qué esperé junto a mi ventana.\n" +
    "\n" +
    "No sé a dónde tenga que ir sin ti,\n" +
    "pero al mirar tu luz sobre mi mañana,\n" +
    "sabría dónde quedarme: junto a ti.";

  var NUDO_POEM =
    "Ayer quise explicarte\n" +
    "por qué escribirte me salva,\n" +
    "pero hubo una palabra\n" +
    "que no quiso salir de mí.\n" +
    "\n" +
    "No era grande,\n" +
    "no era difícil,\n" +
    "pero traía todo el peso\n" +
    "de imaginar la vida sin ti.\n" +
    "\n" +
    "Se me hizo nudo la garganta,\n" +
    "como si el alma supiera\n" +
    "que decir \"perderte\"\n" +
    "era aceptar un dolor\n" +
    "que todavía no estoy listo para nombrar.\n" +
    "\n" +
    "Por eso lo dije rápido,\n" +
    "antes de quebrarme otra vez:\n" +
    "pensar en haberte perdido\n" +
    "me dolía demasiado.\n" +
    "\n" +
    "Porque no eras solo alguien bonita\n" +
    "pasando por mi historia;\n" +
    "eras esa mezcla extraña y perfecta\n" +
    "de mejor amiga,\n" +
    "de hogar,\n" +
    "de esposa.\n" +
    "\n" +
    "Y quizá por eso me tembló la voz:\n" +
    "porque hay personas\n" +
    "que uno no quiere perder,\n" +
    "no por miedo a estar solo,\n" +
    "sino porque al encontrarlas\n" +
    "algo dentro dice:\n" +
    "\"Me caes muy bien.\"";

  var TERNURA_POEM =
    "Hay formas de querer\n" +
    "que no hacen ruido,\n" +
    "pero se notan.\n" +
    "\n" +
    "Se notan en una mirada\n" +
    "que no sabe dónde esconderse,\n" +
    "en unas manos inquietas,\n" +
    "en una risa que intenta disimular\n" +
    "todo lo que el corazón ya confesó.\n" +
    "\n" +
    "Cuando volviste a caminar hacia mí,\n" +
    "después de habernos perdido un rato,\n" +
    "te vi venir con ese miedo tierno\n" +
    "de quien no teme al camino,\n" +
    "sino a lo mucho que le importa llegar.\n" +
    "\n" +
    "Y no sé cómo explicarlo,\n" +
    "pero algo en mí descansó.\n" +
    "\n" +
    "Porque tus nervios\n" +
    "no se sintieron como duda,\n" +
    "se sintieron como cuidado.\n" +
    "Como si entrar de nuevo a mi vida\n" +
    "fuera una puerta delicada\n" +
    "que no querías cerrar mal.\n" +
    "\n" +
    "Y yo, que tantas veces\n" +
    "confundí el amor con ansiedad,\n" +
    "con esfuerzo,\n" +
    "con tener que ganarme un lugar,\n" +
    "empecé a entender\n" +
    "que quizá querer bonito\n" +
    "se parece más a esto:\n" +
    "a reír sin medir el tiempo,\n" +
    "a sentir paz en un abrazo,\n" +
    "a no necesitar pruebas\n" +
    "porque las acciones hablan bajito,\n" +
    "pero hablan claro.\n" +
    "\n" +
    "Contigo hay algo\n" +
    "que no empuja,\n" +
    "no exige,\n" +
    "no corre.\n" +
    "Solo llega,\n" +
    "se sienta junto a mí,\n" +
    "me mira de esa forma tuya\n" +
    "y le enseña a mi corazón\n" +
    "que también puede ser amado\n" +
    "sin tener que ponerse a la defensiva.\n" +
    "\n" +
    "Y hay un niño dentro de mí\n" +
    "que todavía no sabe bien\n" +
    "qué hacer con tanta ternura.\n" +
    "Un niño que aprendió\n" +
    "a esperar poco,\n" +
    "a cuidarse solo,\n" +
    "a no creer tan fácil\n" +
    "cuando alguien parecía quedarse.\n" +
    "Pero contigo,\n" +
    "poco a poco,\n" +
    "ese niño baja la guardia.\n" +
    "\n" +
    "Porque tu forma de querer\n" +
    "no promete salvarlo todo,\n" +
    "pero sí le susurra algo\n" +
    "que nunca había entendido:\n" +
    "que el amor verdadero\n" +
    "no siempre llega con grandes palabras;\n" +
    "a veces viene caminando nervioso hacia ti,\n" +
    "con miedo de caer,\n" +
    "pero con más miedo\n" +
    "de no llegar.";

  var OCASO_POEM =
    "No sé si el atardecer sea tan bonito\n" +
    "como dicen los que nunca te han visto llegar.\n" +
    "Porque yo he visto al cielo pintarse de oro,\n" +
    "pero también te he visto sonreír,\n" +
    "y desde entonces entiendo\n" +
    "que hay luces que no necesitan esconderse en el horizonte\n" +
    "para quedarse dentro de uno.\n" +
    "\n" +
    "Cuando te vas,\n" +
    "no siento que te pierdo.\n" +
    "Te pienso como el sol cuando baja despacio:\n" +
    "se va, sí,\n" +
    "pero no se despide con tristeza,\n" +
    "sino dejando en el cielo una promesa\n" +
    "de que mañana volverá a tocarlo todo.\n" +
    "\n" +
    "Por eso no le reclamo al tiempo\n" +
    "cuando se pone lento al extrañarte.\n" +
    "No culpo a los minutos\n" +
    "por alargarse cuando pienso en ti,\n" +
    "porque hasta en esa espera\n" +
    "hay algo bonito:\n" +
    "la certeza de que tu recuerdo\n" +
    "también sabe acompañarme.\n" +
    "\n" +
    "Y aunque a veces te extraño\n" +
    "con esa calma que pesa poquito en el pecho,\n" +
    "no me duele como ausencia,\n" +
    "me queda más bien como luz.\n" +
    "Como ese último color del día\n" +
    "que no se queda para siempre,\n" +
    "pero alcanza para hacer hermoso\n" +
    "todo lo que toca.\n" +
    "\n" +
    "Si el mundo dice\n" +
    "que no hay nada más bello que un atardecer,\n" +
    "yo no discutiría.\n" +
    "Solo pensaría en ti,\n" +
    "porque quien tuvo la suerte de verte sonreír\n" +
    "sabe, sin tener que explicarlo,\n" +
    "que ningún cielo pintado de oro\n" +
    "se compara\n" +
    "con la luz que dejas cuando sonríes.";

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

  var amorHeartsEls = Array.prototype.slice.call(
    amorHearts.querySelectorAll(".heart")
  );
  var amorFill = 0;
  var amorParas = AMOR_POEM.split(/\n\s*\n/);
  var amorShown = 0;

  function resetAmorHearts() {
    amorFill = 0;
    amorShown = 0;
    amorHeartsEls.forEach(function (el) {
      el.textContent = "♡";
      el.classList.remove("is-full");
    });
    amorHint.classList.remove("is-hidden");
    amorPanel.textContent = "";
    amorPanel.classList.remove("has-text");
    setPager(amorPager, 0, amorParas.length);
  }

  function fillNextAmorHeart() {
    if (amorFill < amorHeartsEls.length) {
      var elAmor = amorHeartsEls[amorFill];
      elAmor.textContent = "♥";
      elAmor.classList.add("is-full");
      amorFill += 1;
    }
  }

  function revealNextAmorParagraph() {
    if (amorShown >= amorParas.length) return;
    var nextAmor = amorParas[amorShown].trim();
    amorShown += 1;
    if (!nextAmor) return;

    amorPanel.textContent = nextAmor;
    amorPanel.classList.add("has-text");
    amorPanel.classList.remove("verse-enter");
    void amorPanel.offsetWidth;
    amorPanel.classList.add("verse-enter");
    amorPanel.scrollTop = 0;
    amorScrollColumn.scrollTop = 0;
    setPager(amorPager, amorShown, amorParas.length);
  }

  function amorProgress() {
    if (amorFill === 0 && amorShown === 0) {
      amorHint.classList.add("is-hidden");
    }
    fillNextAmorHeart();
    revealNextAmorParagraph();
    if (amorFill >= amorHeartsEls.length && amorShown >= amorParas.length) {
      amorHint.classList.add("is-hidden");
    }
  }

  function onAmorActivate(e) {
    if (e.type === "keydown" && e.key !== " " && e.key !== "Enter") return;
    if (e.type === "keydown") e.preventDefault();
    amorProgress();
  }

  amorArea.addEventListener(
    "pointerup",
    function (e) {
      if (e.button !== 0 && e.button !== -1) return;
      if (e.target.closest("#btn-back-4")) return;
      onAmorActivate(e);
    },
    { passive: true }
  );
  amorArea.addEventListener("keydown", onAmorActivate);

  var quedarmeSunsEls = Array.prototype.slice.call(
    quedarmeSuns.querySelectorAll(".sun")
  );
  var quedarmeFill = 0;
  var quedarmeParas = QUEDARME_POEM.split(/\n\s*\n/);
  var quedarmeShown = 0;

  function resetQuedarme() {
    quedarmeFill = 0;
    quedarmeShown = 0;
    quedarmeSunsEls.forEach(function (el) {
      el.classList.remove("is-full");
    });
    quedarmeHint.classList.remove("is-hidden");
    quedarmePanel.textContent = "";
    quedarmePanel.classList.remove("has-text");
    setPager(quedarmePager, 0, quedarmeParas.length);
  }

  function fillNextSun() {
    if (quedarmeFill < quedarmeSunsEls.length) {
      quedarmeSunsEls[quedarmeFill].classList.add("is-full");
      quedarmeFill += 1;
    }
  }

  function revealNextQuedarmeParagraph() {
    if (quedarmeShown >= quedarmeParas.length) return;
    var nextQ = quedarmeParas[quedarmeShown].trim();
    quedarmeShown += 1;
    if (!nextQ) return;

    quedarmePanel.textContent = nextQ;
    quedarmePanel.classList.add("has-text");
    quedarmePanel.classList.remove("verse-enter");
    void quedarmePanel.offsetWidth;
    quedarmePanel.classList.add("verse-enter");
    quedarmePanel.scrollTop = 0;
    quedarmeScrollColumn.scrollTop = 0;
    setPager(quedarmePager, quedarmeShown, quedarmeParas.length);
  }

  function quedarmeProgress() {
    if (quedarmeFill === 0 && quedarmeShown === 0) {
      quedarmeHint.classList.add("is-hidden");
    }
    fillNextSun();
    revealNextQuedarmeParagraph();
    if (
      quedarmeFill >= quedarmeSunsEls.length &&
      quedarmeShown >= quedarmeParas.length
    ) {
      quedarmeHint.classList.add("is-hidden");
    }
  }

  function onQuedarmeActivate(e) {
    if (e.type === "keydown" && e.key !== " " && e.key !== "Enter") return;
    if (e.type === "keydown") e.preventDefault();
    quedarmeProgress();
  }

  quedarmeArea.addEventListener(
    "pointerup",
    function (e) {
      if (e.button !== 0 && e.button !== -1) return;
      if (e.target.closest("#btn-back-5")) return;
      onQuedarmeActivate(e);
    },
    { passive: true }
  );
  quedarmeArea.addEventListener("keydown", onQuedarmeActivate);

  var nudoKnotEls = Array.prototype.slice.call(
    nudoKnots.querySelectorAll(".knot")
  );
  var nudoFill = 0;
  var nudoParas = NUDO_POEM.split(/\n\s*\n/);
  var nudoShown = 0;

  function resetNudo() {
    nudoFill = 0;
    nudoShown = 0;
    nudoKnotEls.forEach(function (el) {
      el.classList.remove("is-full");
    });
    nudoHint.classList.remove("is-hidden");
    nudoPanel.textContent = "";
    nudoPanel.classList.remove("has-text");
    setPager(nudoPager, 0, nudoParas.length);
  }

  function fillNextKnot() {
    if (nudoFill < nudoKnotEls.length) {
      nudoKnotEls[nudoFill].classList.add("is-full");
      nudoFill += 1;
    }
  }

  function revealNextNudoParagraph() {
    if (nudoShown >= nudoParas.length) return;
    var nextN = nudoParas[nudoShown].trim();
    nudoShown += 1;
    if (!nextN) return;

    nudoPanel.textContent = nextN;
    nudoPanel.classList.add("has-text");
    nudoPanel.classList.remove("verse-enter");
    void nudoPanel.offsetWidth;
    nudoPanel.classList.add("verse-enter");
    nudoPanel.scrollTop = 0;
    nudoScrollColumn.scrollTop = 0;
    setPager(nudoPager, nudoShown, nudoParas.length);
  }

  function nudoProgress() {
    if (nudoFill === 0 && nudoShown === 0) {
      nudoHint.classList.add("is-hidden");
    }
    fillNextKnot();
    revealNextNudoParagraph();
    if (
      nudoFill >= nudoKnotEls.length &&
      nudoShown >= nudoParas.length
    ) {
      nudoHint.classList.add("is-hidden");
    }
  }

  function onNudoActivate(e) {
    if (e.type === "keydown" && e.key !== " " && e.key !== "Enter") return;
    if (e.type === "keydown") e.preventDefault();
    nudoProgress();
  }

  nudoArea.addEventListener(
    "pointerup",
    function (e) {
      if (e.button !== 0 && e.button !== -1) return;
      if (e.target.closest("#btn-back-6")) return;
      if (e.target.closest("#btn-reset-nudo")) return;
      onNudoActivate(e);
    },
    { passive: true }
  );
  nudoArea.addEventListener("keydown", onNudoActivate);

  var ternuraCuritaEls = Array.prototype.slice.call(
    ternuraCuritas.querySelectorAll(".curita")
  );
  var ternuraFill = 0;
  var ternuraParas = TERNURA_POEM.split(/\n\s*\n/);
  var ternuraShown = 0;

  function resetTernuraCuritas() {
    ternuraFill = 0;
    ternuraShown = 0;
    ternuraCuritaEls.forEach(function (el) {
      el.classList.remove("is-full");
    });
    ternuraHint.classList.remove("is-hidden");
    ternuraPanel.textContent = "";
    ternuraPanel.classList.remove("has-text");
    setPager(ternuraPager, 0, ternuraParas.length);
  }

  function fillNextTernuraCurita() {
    if (ternuraFill < ternuraCuritaEls.length) {
      ternuraCuritaEls[ternuraFill].classList.add("is-full");
      ternuraFill += 1;
    }
  }

  function revealNextTernuraParagraph() {
    if (ternuraShown >= ternuraParas.length) return;
    var nextT = ternuraParas[ternuraShown].trim();
    ternuraShown += 1;
    if (!nextT) return;

    ternuraPanel.textContent = nextT;
    ternuraPanel.classList.add("has-text");
    ternuraPanel.classList.remove("verse-enter");
    void ternuraPanel.offsetWidth;
    ternuraPanel.classList.add("verse-enter");
    ternuraPanel.scrollTop = 0;
    ternuraScrollColumn.scrollTop = 0;
    setPager(ternuraPager, ternuraShown, ternuraParas.length);
  }

  function ternuraProgress() {
    if (ternuraFill === 0 && ternuraShown === 0) {
      ternuraHint.classList.add("is-hidden");
    }
    fillNextTernuraCurita();
    revealNextTernuraParagraph();
    if (
      ternuraFill >= ternuraCuritaEls.length &&
      ternuraShown >= ternuraParas.length
    ) {
      ternuraHint.classList.add("is-hidden");
    }
  }

  function onTernuraActivate(e) {
    if (e.type === "keydown" && e.key !== " " && e.key !== "Enter") return;
    if (e.type === "keydown") e.preventDefault();
    ternuraProgress();
  }

  ternuraArea.addEventListener(
    "pointerup",
    function (e) {
      if (e.button !== 0 && e.button !== -1) return;
      if (e.target.closest("#btn-back-7")) return;
      if (e.target.closest("#btn-reset-ternura")) return;
      onTernuraActivate(e);
    },
    { passive: true }
  );
  ternuraArea.addEventListener("keydown", onTernuraActivate);

  var ocasoIconEls = Array.prototype.slice.call(
    ocasoIcons.querySelectorAll("span.ocaso")
  );
  var ocasoFill = 0;
  var ocasoParas = OCASO_POEM.split(/\n\s*\n/);
  var ocasoShown = 0;

  function resetOcasoIcons() {
    ocasoFill = 0;
    ocasoShown = 0;
    ocasoIconEls.forEach(function (el) {
      el.classList.remove("is-full");
    });
    ocasoHint.classList.remove("is-hidden");
    ocasoPanel.textContent = "";
    ocasoPanel.classList.remove("has-text");
    ocasoPanel.classList.remove("ocaso-panel--finale");
    setPager(ocasoPager, 0, ocasoParas.length);
  }

  function fillNextOcaso() {
    if (ocasoFill < ocasoIconEls.length) {
      ocasoIconEls[ocasoFill].classList.add("is-full");
      ocasoFill += 1;
    }
  }

  function revealNextOcasoParagraph() {
    if (ocasoShown >= ocasoParas.length) return;
    ocasoPanel.classList.remove("ocaso-panel--finale");

    var isLastStanza = ocasoShown === ocasoParas.length - 1;
    var block = ocasoParas[ocasoShown].trim();
    ocasoShown += 1;
    if (!block) return;

    ocasoPanel.textContent = "";

    if (isLastStanza) {
      var lines = block
        .split("\n")
        .map(function (ln) {
          return ln.trim();
        })
        .filter(function (ln) {
          return ln.length;
        });
      var underlineRe = /^porque quien tuvo la suerte\b/i;
      var underlineStart = -1;
      for (var li = 0; li < lines.length; li++) {
        if (underlineRe.test(lines[li])) {
          underlineStart = li;
          break;
        }
      }
      if (underlineStart > 0) {
        ocasoPanel.classList.add("ocaso-panel--finale");
        var leadEl = document.createElement("p");
        leadEl.className = "ocaso-stanza-lead";
        leadEl.textContent = lines.slice(0, underlineStart).join("\n");
        ocasoPanel.appendChild(leadEl);
        var codaEl = document.createElement("p");
        codaEl.className = "ocaso-stanza-coda";
        codaEl.textContent = lines.slice(underlineStart).join("\n");
        ocasoPanel.appendChild(codaEl);
      } else if (underlineStart === 0) {
        ocasoPanel.classList.add("ocaso-panel--finale");
        var codaOnly = document.createElement("p");
        codaOnly.className = "ocaso-stanza-coda";
        codaOnly.textContent = lines.join("\n");
        ocasoPanel.appendChild(codaOnly);
      } else {
        ocasoPanel.textContent = block;
      }
    } else {
      ocasoPanel.textContent = block;
    }

    ocasoPanel.classList.add("has-text");
    ocasoPanel.classList.remove("verse-enter");
    void ocasoPanel.offsetWidth;
    ocasoPanel.classList.add("verse-enter");
    ocasoPanel.scrollTop = 0;
    ocasoScrollColumn.scrollTop = 0;
    setPager(ocasoPager, ocasoShown, ocasoParas.length);
  }

  function ocasoProgress() {
    if (ocasoFill === 0 && ocasoShown === 0) {
      ocasoHint.classList.add("is-hidden");
    }
    fillNextOcaso();
    revealNextOcasoParagraph();
    if (
      ocasoFill >= ocasoIconEls.length &&
      ocasoShown >= ocasoParas.length
    ) {
      ocasoHint.classList.add("is-hidden");
    }
  }

  function onOcasoActivate(e) {
    if (e.type === "keydown" && e.key !== " " && e.key !== "Enter") return;
    if (e.type === "keydown") e.preventDefault();
    ocasoProgress();
  }

  ocasoArea.addEventListener(
    "pointerup",
    function (e) {
      if (e.button !== 0 && e.button !== -1) return;
      if (e.target.closest("#btn-back-8")) return;
      if (e.target.closest("#btn-reset-ocaso")) return;
      onOcasoActivate(e);
    },
    { passive: true }
  );
  ocasoArea.addEventListener("keydown", onOcasoActivate);

  function resetIngridLetterScroll() {
    window.scrollTo(0, 0);
    ingridLetterView.scrollTop = 0;
    ingridLetterArea.scrollTop = 0;
    versesColumnIngridLetter.scrollTop = 0;
  }

  var letterBtnIntroTimer = null;
  var letterBtnIntroCleanupTimer = null;
  var letterBtnIntroRaf = 0;

  function clearIngridLetterBtnIntro() {
    if (letterBtnIntroTimer !== null) {
      window.clearTimeout(letterBtnIntroTimer);
      letterBtnIntroTimer = null;
    }
    if (letterBtnIntroCleanupTimer !== null) {
      window.clearTimeout(letterBtnIntroCleanupTimer);
      letterBtnIntroCleanupTimer = null;
    }
    if (letterBtnIntroRaf) {
      window.cancelAnimationFrame(letterBtnIntroRaf);
      letterBtnIntroRaf = 0;
    }
    btnIngridLetter.classList.remove("is-intro-reveal", "is-intro-pending");
  }

  function finishIngridLetterBtnIntro() {
    btnIngridLetter.classList.remove("is-intro-reveal", "is-intro-pending");
    if (letterBtnIntroCleanupTimer !== null) {
      window.clearTimeout(letterBtnIntroCleanupTimer);
      letterBtnIntroCleanupTimer = null;
    }
  }

  function playIngridLetterBtnIntro() {
    if (!btnIngridLetter) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    clearIngridLetterBtnIntro();
    void btnIngridLetter.offsetWidth;

    btnIngridLetter.classList.add("is-intro-pending");
    letterBtnIntroTimer = window.setTimeout(function () {
      letterBtnIntroTimer = null;
      void btnIngridLetter.offsetWidth;
      btnIngridLetter.classList.remove("is-intro-pending");
      btnIngridLetter.classList.add("is-intro-reveal");
      letterBtnIntroCleanupTimer = window.setTimeout(finishIngridLetterBtnIntro, 1400);
    }, 60);
  }

  function scheduleIngridLetterBtnIntro() {
    if (!btnIngridLetter) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    clearIngridLetterBtnIntro();
    letterBtnIntroRaf = window.requestAnimationFrame(function () {
      letterBtnIntroRaf = window.requestAnimationFrame(function () {
        letterBtnIntroRaf = 0;
        try {
          btnIngridLetter.scrollIntoView({ block: "center", inline: "nearest" });
        } catch (err) {}
        playIngridLetterBtnIntro();
      });
    });
  }

  btnIngridLetter.addEventListener("transitionend", function (e) {
    if (e.target !== btnIngridLetter) return;
    if (e.propertyName !== "opacity") return;
    if (!btnIngridLetter.classList.contains("is-intro-reveal")) return;
    finishIngridLetterBtnIntro();
  });

  function showView(view) {
    menuView.hidden = view !== "menu";
    storyView.hidden = view !== "story";
    ingridLetterView.hidden = view !== "ingrid-letter";
    ingridView.hidden = view !== "ingrid";
    prisaView.hidden = view !== "prisa";
    perfumeView.hidden = view !== "perfume";
    amorView.hidden = view !== "amor";
    quedarmeView.hidden = view !== "quedarme";
    nudoView.hidden = view !== "nudo";
    ternuraView.hidden = view !== "ternura";
    ocasoView.hidden = view !== "ocaso";

    if (view === "story") {
      versesColumnStory.scrollTop = 0;
      storyArea.focus({ preventScroll: true });
    }

    if (view === "ingrid-letter") {
      resetIngridLetterScroll();
      requestAnimationFrame(function () {
        resetIngridLetterScroll();
        requestAnimationFrame(function () {
          resetIngridLetterScroll();
          ingridLetterArea.focus({ preventScroll: true });
        });
      });
    }

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

    if (view === "amor") {
      resetAmorHearts();
      amorArea.focus();
    }

    if (view === "quedarme") {
      resetQuedarme();
      quedarmeArea.focus();
    }

    if (view === "nudo") {
      resetNudo();
      nudoArea.focus();
    }

    if (view === "ternura") {
      resetTernuraCuritas();
      ternuraArea.focus();
    }

    if (view === "ocaso") {
      resetOcasoIcons();
      ocasoArea.focus();
    }

    if (view === "menu") {
      scheduleIngridLetterBtnIntro();
    }
  }

  btnIngrid.addEventListener("click", function () {
    showView("ingrid");
  });

  btnIngridLetter.addEventListener("click", function () {
    showView("ingrid-letter");
  });

  btnPrisa.addEventListener("click", function () {
    showView("prisa");
  });

  btnPerfume.addEventListener("click", function () {
    showView("perfume");
  });

  btnAmor.addEventListener("click", function () {
    showView("amor");
  });

  btnQuedarme.addEventListener("click", function () {
    showView("quedarme");
  });

  btnNudo.addEventListener("click", function () {
    showView("nudo");
  });

  btnTernura.addEventListener("click", function () {
    showView("ternura");
  });

  btnOcaso.addEventListener("click", function () {
    showView("ocaso");
  });

  btnLeerHistoria.addEventListener("click", function () {
    showView("story");
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

  btnBack4.addEventListener("click", function () {
    showView("menu");
  });

  btnBack5.addEventListener("click", function () {
    showView("menu");
  });

  btnBack6.addEventListener("click", function () {
    showView("menu");
  });

  btnBack7.addEventListener("click", function () {
    showView("menu");
  });

  btnBack8.addEventListener("click", function () {
    showView("menu");
  });

  btnBackStory.addEventListener("click", function () {
    showView("menu");
  });

  btnBackIngridLetter.addEventListener("click", function () {
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

  btnResetAmor.addEventListener("click", function (e) {
    e.stopPropagation();
    resetAmorHearts();
    amorArea.focus();
  });

  btnResetQuedarme.addEventListener("click", function (e) {
    e.stopPropagation();
    resetQuedarme();
    quedarmeArea.focus();
  });

  btnResetNudo.addEventListener("click", function (e) {
    e.stopPropagation();
    resetNudo();
    nudoArea.focus();
  });

  btnResetTernura.addEventListener("click", function (e) {
    e.stopPropagation();
    resetTernuraCuritas();
    ternuraArea.focus();
  });

  btnResetOcaso.addEventListener("click", function (e) {
    e.stopPropagation();
    resetOcasoIcons();
    ocasoArea.focus();
  });

  (function setupStoryFollowup() {
    var form = document.getElementById("story-followup-form");
    var text = document.getElementById("story-response-text");
    var submitBtn = document.getElementById("story-followup-submit");
    var statusEl = document.getElementById("story-form-status");
    var note = document.getElementById("story-form-note");
    if (!form || !text || !submitBtn || !statusEl || !note) return;

    var Honey = form.querySelector('input[name="_gotcha"]');
    var endpointOk =
      typeof STORY_RESPONSE_FORM_URL === "string" &&
      STORY_RESPONSE_FORM_URL.indexOf("https://") === 0 &&
      STORY_RESPONSE_FORM_URL.length > 12;

    function configureNote() {
      if (endpointOk) {
        note.textContent =
          "";
        note.classList.remove("is-muted", "is-warn");
        submitBtn.removeAttribute("aria-disabled");
        submitBtn.disabled = false;
      } else {
        note.textContent =
          "El envío aún no está conectado: quien creó esta página debe añadir en script.js una URL gratuita de Formspree para que tus palabras lleguen a su correo.";
        note.classList.add("is-muted", "is-warn");
        submitBtn.setAttribute("aria-disabled", "true");
        submitBtn.disabled = true;
      }
      statusEl.textContent = "";
      statusEl.classList.remove("is-ok", "is-err");
    }

    configureNote();

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      statusEl.textContent = "";
      statusEl.classList.remove("is-ok", "is-err");

      if (!endpointOk) {
        statusEl.classList.add("is-err");
        statusEl.textContent = "Por ahora no se puede enviar.";
        return;
      }

      if (Honey && Honey.value) return;

      var body = text.value.trim();
      if (!body.length) {
        statusEl.classList.add("is-err");
        statusEl.textContent = "Escribe algo antes de enviar.";
        text.focus();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.setAttribute("aria-busy", "true");

      fetch(STORY_RESPONSE_FORM_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          respuesta: body,
          _subject: "Historia · ¿Ya le pongo punto?"
        })
      })
        .then(function (res) {
          if (res.ok) {
            text.value = "";
            statusEl.classList.add("is-ok");
            statusEl.textContent =
              "❤️❤️❤️❤️❤️❤️";
            return;
          }
          return res.json().catch(function () {
            return {};
          }).then(function (data) {
            var msg =
              (data.errors && data.errors.form && Array.isArray(data.errors.form))
                ? data.errors.form.join(" ")
                : (data.error &&
                    typeof data.error === "object" &&
                    data.error.title)
                  ? data.error.title
                  : "";
            statusEl.classList.add("is-err");
            statusEl.textContent =
              msg || "No se pudo enviar. Intenta de nuevo más tarde.";
          });
        })
        .catch(function () {
          statusEl.classList.add("is-err");
          statusEl.textContent =
            "Hay un problema de red o bloqueó el envío este dispositivo. Intenta después.";
        })
        .then(function () {
          submitBtn.removeAttribute("aria-busy");
          if (endpointOk) {
            submitBtn.disabled = false;
          }
        });
    });
  })();

  (function initMenuPersonalCarousel() {
    var root = document.getElementById("menu-personal-carousel");
    var strip = document.getElementById("menu-personal-carousel-strip");
    if (!root || !strip) return;

    var slides = strip.querySelectorAll(".menu-personal-carousel__slide");
    var dots = root.querySelectorAll(".menu-personal-carousel__dot");
    if (!slides.length || dots.length !== slides.length) return;

    var idx = 0;
    var n = slides.length;
    var intervalMs = 5500;
    var timerId = null;

    function setAriaHidden() {
      for (var s = 0; s < slides.length; s++) {
        slides[s].setAttribute("aria-hidden", s === idx ? "false" : "true");
      }
    }

    function apply() {
      root.setAttribute("data-index", String(idx));
      setAriaHidden();
      for (var d = 0; d < dots.length; d++) {
        var on = d === idx;
        dots[d].classList.toggle("is-active", on);
        dots[d].setAttribute("aria-selected", on ? "true" : "false");
      }
    }

    function go(i) {
      idx = (i % n + n) % n;
      apply();
    }

    function next() {
      go(idx + 1);
    }

    function start() {
      stop();
      timerId = window.setInterval(next, intervalMs);
    }

    function stop() {
      if (timerId !== null) {
        window.clearInterval(timerId);
        timerId = null;
      }
    }

    for (var b = 0; b < dots.length; b++) {
      (function (i) {
        dots[i].addEventListener("click", function () {
          stop();
          go(i);
          start();
        });
      })(b);
    }

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", function (e) {
      if (!root.contains(e.relatedTarget)) start();
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else start();
    });

    apply();
    start();
  })();

  (function initPresentationEmbed() {
    var frame = document.getElementById("ppt-embed-frame");
    if (!frame) return;
    var mq = window.matchMedia("(min-width: 721px)");
    function apply() {
      if (!mq.matches) {
        frame.removeAttribute("src");
        return;
      }
      if (window.location.protocol !== "http:" && window.location.protocol !== "https:") {
        return;
      }
      var fileUrl = new URL("assets/por_que_me_gustas_ingrid.pptx", window.location.href).href;
      frame.setAttribute(
        "src",
        "https://view.officeapps.live.com/op/embed.aspx?src=" + encodeURIComponent(fileUrl)
      );
    }
    apply();
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", apply);
    } else if (typeof mq.addListener === "function") {
      mq.addListener(apply);
    }
  })();

  (function initSharedFeelingsReveal() {
    var section = document.querySelector(".shared-feelings-section");
    if (!section) return;

    function reveal() {
      section.classList.add("is-revealed");
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      return;
    }

    if (!window.IntersectionObserver) {
      reveal();
      return;
    }

    var obs = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            reveal();
            obs.disconnect();
            return;
          }
        }
      },
      { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );
    obs.observe(section);
  })();

  showView("menu");
})();
