(function () {
  "use strict";

  (function setupEnvelopeIntro() {
    var intro = document.getElementById("envelope-intro");
    if (!intro) return;

    var trigger = document.getElementById("envelope-trigger");
    var skipBtn = document.getElementById("envelope-intro-skip");
    var letter = document.getElementById("envelope-letter");
    var letterClose = document.getElementById("envelope-letter-close");
    var letterEnter = document.getElementById("envelope-letter-enter");
    var openCardBtn = document.getElementById("btn-open-envelope-letter");

    var letterOpened = false;
    var dismissing = false;

    function resetEnvelopeState() {
      letterOpened = false;
      dismissing = false;
      if (trigger) {
        trigger.classList.remove("is-open");
        trigger.removeAttribute("aria-disabled");
      }
      intro.classList.remove("is-opening", "is-leaving");
      if (letter) {
        letter.classList.remove("is-shown");
        letter.hidden = true;
      }
    }

    function openEnvelopeIntro() {
      resetEnvelopeState();
      document.documentElement.classList.add("envelope-show");
      requestAnimationFrame(function () {
        if (trigger) trigger.focus({ preventScroll: true });
      });
    }

    function openEnvelope() {
      if (letterOpened) return;
      letterOpened = true;
      trigger.classList.add("is-open");
      trigger.setAttribute("aria-disabled", "true");
      intro.classList.add("is-opening");

      window.setTimeout(function () {
        letter.hidden = false;
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            letter.classList.add("is-shown");
            var closeBtn = letter.querySelector(".envelope-letter__close");
            if (closeBtn) closeBtn.focus({ preventScroll: true });
          });
        });
      }, 900);
    }

    function dismissIntro() {
      if (dismissing) return;
      dismissing = true;
      intro.classList.add("is-leaving");
      window.setTimeout(function () {
        document.documentElement.classList.remove("envelope-show");
        resetEnvelopeState();
      }, 640);
    }

    if (trigger) {
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        openEnvelope();
      });
    }
    if (skipBtn) {
      skipBtn.addEventListener("click", function (e) {
        e.preventDefault();
        dismissIntro();
      });
    }
    if (letterClose) {
      letterClose.addEventListener("click", function (e) {
        e.preventDefault();
        dismissIntro();
      });
    }
    if (letterEnter) {
      letterEnter.addEventListener("click", function (e) {
        e.preventDefault();
        dismissIntro();
      });
    }
    if (openCardBtn) {
      openCardBtn.addEventListener("click", function (e) {
        e.preventDefault();
        openEnvelopeIntro();
      });
    }
    function isIntroActive() {
      return (
        document.documentElement.classList.contains("envelope-show") &&
        !dismissing
      );
    }
    document.addEventListener("keydown", function (e) {
      if (!isIntroActive()) return;
      if (e.key === "Escape") {
        e.preventDefault();
        dismissIntro();
      } else if ((e.key === "Enter" || e.key === " ") && !letterOpened) {
        if (document.activeElement === trigger) {
          e.preventDefault();
          openEnvelope();
        }
      }
    });
  })();

  var menuView = document.getElementById("menu-view");
  var storyView = document.getElementById("story-view");
  var ingridLetterView = document.getElementById("ingrid-letter-view");
  var paraTiLetterView = document.getElementById("para-ti-letter-view");
  var ingridView = document.getElementById("ingrid-view");
  var prisaView = document.getElementById("prisa-view");
  var perfumeView = document.getElementById("perfume-view");
  var amorView = document.getElementById("amor-view");
  var quedarmeView = document.getElementById("quedarme-view");
  var nudoView = document.getElementById("nudo-view");
  var ternuraView = document.getElementById("ternura-view");
  var ocasoView = document.getElementById("ocaso-view");
  var nadaView = document.getElementById("nada-view");
  var tiempoView = document.getElementById("tiempo-view");
  var btnIngrid = document.getElementById("btn-ingrid");
  var btnIngridLetter = document.getElementById("btn-ingrid-letter");
  var btnParaTiLetter = document.getElementById("btn-para-ti-letter");
  var btnPrisa = document.getElementById("btn-prisa");
  var btnPerfume = document.getElementById("btn-perfume");
  var btnAmor = document.getElementById("btn-amor");
  var btnQuedarme = document.getElementById("btn-quedarme");
  var btnNudo = document.getElementById("btn-nudo");
  var btnTernura = document.getElementById("btn-ternura");
  var btnOcaso = document.getElementById("btn-ocaso");
  var btnNada = document.getElementById("btn-nada");
  var btnTiempo = document.getElementById("btn-tiempo");
  var btnBack1 = document.getElementById("btn-back-1");
  var btnBack2 = document.getElementById("btn-back-2");
  var btnBack3 = document.getElementById("btn-back-3");
  var btnBack4 = document.getElementById("btn-back-4");
  var btnBack5 = document.getElementById("btn-back-5");
  var btnBack6 = document.getElementById("btn-back-6");
  var btnBack7 = document.getElementById("btn-back-7");
  var btnBack8 = document.getElementById("btn-back-8");
  var btnBack9 = document.getElementById("btn-back-9");
  var btnBack10 = document.getElementById("btn-back-10");
  var btnBackStory = document.getElementById("btn-back-story");
  var btnBackIngridLetter = document.getElementById("btn-back-ingrid-letter");
  var btnBackParaTiLetter = document.getElementById("btn-back-para-ti-letter");
  var btnLeerHistoria = document.getElementById("btn-leer-historia");
  var btnResetIngrid = document.getElementById("btn-reset-ingrid");
  var btnResetPrisa = document.getElementById("btn-reset-prisa");
  var btnResetPerfume = document.getElementById("btn-reset-perfume");
  var btnResetAmor = document.getElementById("btn-reset-amor");
  var btnResetQuedarme = document.getElementById("btn-reset-quedarme");
  var btnResetNudo = document.getElementById("btn-reset-nudo");
  var btnResetTernura = document.getElementById("btn-reset-ternura");
  var btnResetOcaso = document.getElementById("btn-reset-ocaso");
  var btnResetNada = document.getElementById("btn-reset-nada");
  var btnResetTiempo = document.getElementById("btn-reset-tiempo");
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
  var nadaArea = document.getElementById("poem-area-nada");
  var nadaHint = document.getElementById("hint-nada");
  var nadaScrollColumn = document.getElementById("verses-column-nada");
  var nadaPanel = document.getElementById("nada-panel");
  var nadaIcons = document.getElementById("nada-icons");
  var nadaPager = document.getElementById("pager-nada");
  var tiempoArea = document.getElementById("poem-area-tiempo");
  var tiempoHint = document.getElementById("hint-tiempo");
  var tiempoScrollColumn = document.getElementById("verses-column-tiempo");
  var tiempoPanel = document.getElementById("tiempo-panel");
  var tiempoHourglasses = document.getElementById("tiempo-hourglasses");
  var tiempoPager = document.getElementById("pager-tiempo");

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
  var paraTiLetterArea = document.getElementById("para-ti-letter-area");
  var versesColumnParaTiLetter = document.getElementById("verses-column-para-ti-letter");

  /**
   * Respuestas a «¿Ya le pongo punto?» · regístrate en https://formspree.io ,
   * crea un formulario y pega aquí la URL (ejemplo: https://formspree.io/f/abcdefgh).
   * Las respuestas llegan al correo de esa cuenta. Déjalo en "" hasta configurarlo.
   */
  var STORY_RESPONSE_FORM_URL = "https://formspree.io/f/xkoypgpl";

  /**
   * Recuerdos con fotos · crea un proyecto en Supabase, ejecuta
   * supabase-recuerdos-setup.sql y pega aquí los valores públicos.
   */
  var PHOTO_MEMORY_SUPABASE_URL = "https://ewmvgauuvppjosthllrr.supabase.co";
  var PHOTO_MEMORY_SUPABASE_ANON_KEY = "sb_publishable_-oCMCeTdP9uJNw9uuZWnUg_gHtS6nJN";
  var PHOTO_MEMORY_BUCKET = "ingrid-recuerdos";
  var PHOTO_MEMORY_TABLE = "photo_memories";
  var PHOTO_MEMORY_MAX_SIZE_BYTES = 5 * 1024 * 1024;
  var PHOTO_MEMORY_ALLOWED_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/heic",
    "image/heif"
  ];

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

  var NADA_BLOCKS = [
    {
      lead: ["No tengo nada,"],
      glow: ["pero todo lo que soy", "es tuyo."]
    },
    {
      lead: ["Y aún con las manos vacías,", "mi corazón te elegiría igual."]
    },
    {
      lead: ["Y si algún día"],
      glow: ["lo tengo todo,", "será porque te tengo a ti."]
    },
    {
      lead: [
        "Porque hay riquezas",
        "que no se guardan en las manos,",
        "sino en la persona",
        "que uno ama."
      ]
    }
  ];

  var TIEMPO_BLOCKS = [
    [
      "¿Qué es el tiempo realmente?",
      "Dicen que el día tiene veinticuatro horas,",
      "pero yo empiezo a dudarlo cuando pienso en ti,",
      "porque hay jornadas que se estiran demasiado",
      "si no te veo,",
      "y hay tardes contigo que se me van completas",
      "en lo que dura una mirada."
    ].join("\n"),
    {
      lead: [
        "A veces me pregunto cómo le haces,",
        "si tu día viene cargado de pendientes,",
        "si tu mundo no siempre te da descanso,",
        "si hay cosas que reclaman tu nombre",
        "antes de que yo pueda hacerlo."
      ],
      glow: [
        "Y aun así, entre todo lo que te ocupa,",
        "encuentras la manera de hacerme espacio,",
        "como si verme no fuera un sobrante de tu agenda,",
        "sino una elección pequeña"
      ],
      tail: ["que vale más que cualquier hora libre."]
    },
    [
      "Y entonces ya no sé si el tiempo se cuenta en minutos,",
      "o en ganas.",
      "Porque dos meses, para cualquiera,",
      "podrían parecer apenas el principio;",
      "pero para mí tienen el peso de algo que no llegó de paso.",
      "Se sienten como la primera página",
      "de una historia que todavía no termina de escribirse,",
      "pero que ya sabe hacia dónde quiere ir."
    ].join("\n"),
    [
      "Contigo el calendario pierde autoridad.",
      "No me importa tanto cuánto llevamos,",
      "sino la forma en que todo se vuelve más claro",
      "cuando estás cerca.",
      "Hay personas que tardan años en sentirse importantes,",
      "y luego estás tú,",
      "haciéndome pensar en un futuro entero",
      "sin que el presente me parezca insuficiente."
    ].join("\n"),
    [
      "Qué extraño es esto:",
      "las horas se vuelven pesadas cuando no estás,",
      "como si cada una caminara más lento",
      "solo para recordarme tu ausencia;",
      "pero cuando te tengo enfrente,",
      "quisiera negociar con el mundo una pausa,",
      "pedirle al reloj que no avance,",
      "a la tarde que no se acabe,",
      "al instante que nos permita quedarnos",
      "un poquito más dentro de él."
    ].join("\n"),
    {
      lead: [
        "Sé que todavía falta tiempo.",
        "Faltan días, conversaciones, pruebas, paciencia,",
        "momentos que tendrán que llegar sin prisa.",
        "Pero también sé que hay certezas",
        "que no necesitan tener fecha para existir.",
        "Y una de ellas eres tú:"
      ],
      glow: [
        "yo sé que vas a ser mi esposa,",
        "no porque quiera adelantar la historia,",
        "sino porque cuando miro hacia adelante,",
        "tu nombre aparece con una naturalidad",
        "que no me asusta,",
        "me afirma."
      ]
    },
    [
      "Por eso, si el tiempo insiste en pasar,",
      "que pase.",
      "Que traiga lo que tenga que traer,",
      "que acomode lo que tenga que acomodar,",
      "que nos enseñe a llegar bien",
      "a todo lo que todavía nos espera.",
      "Porque si al final de cada espera",
      "estás tú,",
      "entonces el tiempo no es distancia,",
      "ni demora,",
      "ni amenaza.",
      "Es solamente la forma en que la vida",
      "nos está preparando",
      "para pertenecernos mejor."
    ].join("\n")
  ];

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

  var nadaIconEls = Array.prototype.slice.call(
    nadaIcons.querySelectorAll(".nada-icon")
  );
  var nadaFill = 0;
  var nadaShown = 0;

  function resetNada() {
    nadaFill = 0;
    nadaShown = 0;
    nadaIconEls.forEach(function (el) {
      el.classList.remove("is-full", "is-active");
    });
    nadaHint.classList.remove("is-hidden");
    nadaPanel.textContent = "";
    nadaPanel.classList.remove("has-text");
    setPager(nadaPager, 0, NADA_BLOCKS.length);
  }

  function fillNextNadaIcon() {
    if (nadaFill < nadaIconEls.length) {
      if (nadaFill > 0) {
        nadaIconEls[nadaFill - 1].classList.remove("is-active");
      }
      var el = nadaIconEls[nadaFill];
      el.classList.add("is-full", "is-active");
      nadaFill += 1;
    }
  }

  function revealNextNadaParagraph() {
    if (nadaShown >= NADA_BLOCKS.length) return;
    var block = NADA_BLOCKS[nadaShown];
    nadaShown += 1;
    if (!block) return;

    nadaPanel.textContent = "";
    if (block.lead && block.lead.length) {
      var leadEl = document.createElement("p");
      leadEl.className = "nada-stanza-lead";
      leadEl.textContent = block.lead.join("\n");
      nadaPanel.appendChild(leadEl);
    }
    if (block.glow && block.glow.length) {
      var glowEl = document.createElement("p");
      glowEl.className = "nada-stanza-glow";
      glowEl.textContent = block.glow.join("\n");
      nadaPanel.appendChild(glowEl);
    }

    nadaPanel.classList.add("has-text");
    nadaPanel.classList.remove("verse-enter");
    void nadaPanel.offsetWidth;
    nadaPanel.classList.add("verse-enter");
    nadaPanel.scrollTop = 0;
    nadaScrollColumn.scrollTop = 0;
    setPager(nadaPager, nadaShown, NADA_BLOCKS.length);
  }

  function nadaProgress() {
    if (nadaFill === 0 && nadaShown === 0) {
      nadaHint.classList.add("is-hidden");
    }
    fillNextNadaIcon();
    revealNextNadaParagraph();
    if (
      nadaFill >= nadaIconEls.length &&
      nadaShown >= NADA_BLOCKS.length
    ) {
      nadaHint.classList.add("is-hidden");
    }
  }

  function onNadaActivate(e) {
    if (e.type === "keydown" && e.key !== " " && e.key !== "Enter") return;
    if (e.type === "keydown") e.preventDefault();
    nadaProgress();
  }

  nadaArea.addEventListener(
    "pointerup",
    function (e) {
      if (e.button !== 0 && e.button !== -1) return;
      if (e.target.closest("#btn-back-9")) return;
      if (e.target.closest("#btn-reset-nada")) return;
      onNadaActivate(e);
    },
    { passive: true }
  );
  nadaArea.addEventListener("keydown", onNadaActivate);

  var tiempoHourglassEls = tiempoHourglasses
    ? Array.prototype.slice.call(tiempoHourglasses.querySelectorAll(".hourglass"))
    : [];
  var tiempoFill = 0;
  var tiempoShown = 0;

  function renderTiempoBlock(block) {
    if (!tiempoPanel || !block) return;

    tiempoPanel.textContent = "";
    tiempoPanel.classList.remove("tiempo-panel--structured");

    if (typeof block === "string") {
      tiempoPanel.textContent = block.trim();
      return;
    }

    tiempoPanel.classList.add("tiempo-panel--structured");

    if (block.lead && block.lead.length) {
      var leadEl = document.createElement("p");
      leadEl.className = "tiempo-stanza-lead";
      leadEl.textContent = block.lead.join("\n");
      tiempoPanel.appendChild(leadEl);
    }
    if (block.glow && block.glow.length) {
      var glowEl = document.createElement("p");
      glowEl.className = "tiempo-stanza-glow";
      glowEl.textContent = block.glow.join("\n");
      tiempoPanel.appendChild(glowEl);
    }
    if (block.tail && block.tail.length) {
      var tailEl = document.createElement("p");
      tailEl.className = "tiempo-stanza-lead";
      tailEl.textContent = block.tail.join("\n");
      tiempoPanel.appendChild(tailEl);
    }
  }

  function resetTiempo() {
    tiempoFill = 0;
    tiempoShown = 0;
    tiempoHourglassEls.forEach(function (el) {
      el.classList.remove("is-full");
    });
    if (tiempoHint) tiempoHint.classList.remove("is-hidden");
    if (tiempoPanel) {
      tiempoPanel.textContent = "";
      tiempoPanel.classList.remove("has-text", "tiempo-panel--structured");
    }
    setPager(tiempoPager, 0, TIEMPO_BLOCKS.length);
  }

  function fillNextHourglass() {
    if (tiempoFill < tiempoHourglassEls.length) {
      tiempoHourglassEls[tiempoFill].classList.add("is-full");
      tiempoFill += 1;
    }
  }

  function revealNextTiempoParagraph() {
    if (tiempoShown >= TIEMPO_BLOCKS.length || !tiempoPanel) return;
    var block = TIEMPO_BLOCKS[tiempoShown];
    tiempoShown += 1;
    if (!block) return;

    renderTiempoBlock(block);
    tiempoPanel.classList.add("has-text");
    tiempoPanel.classList.remove("verse-enter");
    void tiempoPanel.offsetWidth;
    tiempoPanel.classList.add("verse-enter");
    tiempoPanel.scrollTop = 0;
    if (tiempoScrollColumn) tiempoScrollColumn.scrollTop = 0;
    setPager(tiempoPager, tiempoShown, TIEMPO_BLOCKS.length);
  }

  function tiempoProgress() {
    if (tiempoFill === 0 && tiempoShown === 0 && tiempoHint) {
      tiempoHint.classList.add("is-hidden");
    }
    fillNextHourglass();
    revealNextTiempoParagraph();
    if (
      tiempoFill >= tiempoHourglassEls.length &&
      tiempoShown >= TIEMPO_BLOCKS.length &&
      tiempoHint
    ) {
      tiempoHint.classList.add("is-hidden");
    }
  }

  function onTiempoActivate(e) {
    if (e.type === "keydown" && e.key !== " " && e.key !== "Enter") return;
    if (e.type === "keydown") e.preventDefault();
    tiempoProgress();
  }

  if (tiempoArea) {
    tiempoArea.addEventListener(
      "pointerup",
      function (e) {
        if (e.button !== 0 && e.button !== -1) return;
        if (e.target.closest("#btn-back-10")) return;
        if (e.target.closest("#btn-reset-tiempo")) return;
        onTiempoActivate(e);
      },
      { passive: true }
    );
    tiempoArea.addEventListener("keydown", onTiempoActivate);
  }

  function resetIngridLetterScroll() {
    window.scrollTo(0, 0);
    ingridLetterView.scrollTop = 0;
    ingridLetterArea.scrollTop = 0;
    versesColumnIngridLetter.scrollTop = 0;
  }

  function resetParaTiLetterScroll() {
    if (!paraTiLetterView) return;
    window.scrollTo(0, 0);
    paraTiLetterView.scrollTop = 0;
    if (paraTiLetterArea) paraTiLetterArea.scrollTop = 0;
    if (versesColumnParaTiLetter) versesColumnParaTiLetter.scrollTop = 0;
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
    paraTiLetterView.hidden = view !== "para-ti-letter";
    ingridView.hidden = view !== "ingrid";
    prisaView.hidden = view !== "prisa";
    perfumeView.hidden = view !== "perfume";
    amorView.hidden = view !== "amor";
    quedarmeView.hidden = view !== "quedarme";
    nudoView.hidden = view !== "nudo";
    ternuraView.hidden = view !== "ternura";
    ocasoView.hidden = view !== "ocaso";
    nadaView.hidden = view !== "nada";
    if (tiempoView) tiempoView.hidden = view !== "tiempo";

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

    if (view === "para-ti-letter") {
      resetParaTiLetterScroll();
      requestAnimationFrame(function () {
        resetParaTiLetterScroll();
        requestAnimationFrame(function () {
          resetParaTiLetterScroll();
          paraTiLetterArea.focus({ preventScroll: true });
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

    if (view === "nada") {
      resetNada();
      nadaArea.focus();
    }

    if (view === "tiempo") {
      resetTiempo();
      if (tiempoArea) tiempoArea.focus();
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

  if (btnParaTiLetter) {
    btnParaTiLetter.addEventListener("click", function () {
      showView("para-ti-letter");
    });
  }

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

  btnNada.addEventListener("click", function () {
    showView("nada");
  });

  if (btnTiempo) {
    btnTiempo.addEventListener("click", function () {
      showView("tiempo");
    });
  }

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

  btnBack9.addEventListener("click", function () {
    showView("menu");
  });

  if (btnBack10) {
    btnBack10.addEventListener("click", function () {
      showView("menu");
    });
  }

  btnBackStory.addEventListener("click", function () {
    showView("menu");
  });

  btnBackIngridLetter.addEventListener("click", function () {
    showView("menu");
  });

  if (btnBackParaTiLetter) {
    btnBackParaTiLetter.addEventListener("click", function () {
      showView("menu");
    });
  }

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

  btnResetNada.addEventListener("click", function (e) {
    e.stopPropagation();
    resetNada();
    nadaArea.focus();
  });

  if (btnResetTiempo) {
    btnResetTiempo.addEventListener("click", function (e) {
      e.stopPropagation();
      resetTiempo();
      if (tiempoArea) tiempoArea.focus();
    });
  }

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

  // =============================================================
  // Contadores de tiempo (hero) — días, horas y minutos
  // =============================================================
  (function setupDayCounters() {
    var nodes = document.querySelectorAll(".day-counter[data-counter-start]");
    if (!nodes.length) return;

    function deltaSince(year, monthIdx, day, hour, minute) {
      var h = typeof hour === "number" && !isNaN(hour) ? hour : 0;
      var min = typeof minute === "number" && !isNaN(minute) ? minute : 0;
      var start = new Date(year, monthIdx, day, h, min, 0, 0).getTime();
      var totalMs = Math.max(0, Date.now() - start);
      var oneDay = 24 * 60 * 60 * 1000;
      var oneHour = 60 * 60 * 1000;
      var oneMin = 60 * 1000;
      var days = Math.floor(totalMs / oneDay);
      var rest = totalMs - days * oneDay;
      var hours = Math.floor(rest / oneHour);
      rest -= hours * oneHour;
      var minutes = Math.floor(rest / oneMin);
      return { days: days, hours: hours, minutes: minutes };
    }

    function update() {
      for (var i = 0; i < nodes.length; i++) {
        var raw = nodes[i].getAttribute("data-counter-start");
        if (!raw) continue;
        var parts = raw.split("-");
        if (parts.length !== 3) continue;
        var y = parseInt(parts[0], 10);
        var m = parseInt(parts[1], 10) - 1;
        var d = parseInt(parts[2], 10);
        if (isNaN(y) || isNaN(m) || isNaN(d)) continue;

        var hour = 0;
        var minute = 0;
        var timeRaw = nodes[i].getAttribute("data-counter-time");
        if (timeRaw) {
          var tp = timeRaw.split(":");
          if (tp.length >= 2) {
            hour = parseInt(tp[0], 10);
            minute = parseInt(tp[1], 10);
            if (isNaN(hour)) hour = 0;
            if (isNaN(minute)) minute = 0;
          }
        }

        var delta = deltaSince(y, m, d, hour, minute);

        var dEl = nodes[i].querySelector("[data-counter-value]");
        if (dEl) dEl.textContent = String(delta.days);

        var uEl = nodes[i].querySelector("[data-counter-unit]");
        if (uEl) uEl.textContent = delta.days === 1 ? "día" : "días";

        var hEl = nodes[i].querySelector("[data-counter-hours]");
        if (hEl) hEl.textContent = String(delta.hours);

        var mEl = nodes[i].querySelector("[data-counter-minutes]");
        if (mEl) mEl.textContent = String(delta.minutes);
      }
    }

    update();
    // Refresca cada minuto para que h:m queden al día.
    window.setInterval(update, 60 * 1000);
    // Y al volver a la pestaña, refresca al momento.
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) update();
    });
  })();

  // =============================================================
  // Índice de capítulos como pestañas (rediseño v2 - modo tabs)
  // =============================================================
  (function setupChapterTabs() {
    var nav = document.getElementById("menu-nav");
    var toggle = document.getElementById("menu-nav-toggle");
    var list = document.getElementById("menu-nav-list");
    if (!nav || !list) return;

    var links = list.querySelectorAll(".menu-nav__link");
    if (!links.length) return;

    var menuViewEl = document.getElementById("menu-view");
    var scrollContainer = menuViewEl
      ? menuViewEl.querySelector(".verses-column")
      : null;

    var tabs = [];
    for (var i = 0; i < links.length; i++) {
      var target = links[i].getAttribute("data-target");
      if (!target) continue;
      var sec = document.getElementById(target);
      if (sec) {
        tabs.push({ id: target, link: links[i], section: sec });
      }
    }
    if (!tabs.length) return;

    // Pestaña activa actual (se preserva al entrar/salir de poemas)
    var activeId = null;
    for (var p = 0; p < tabs.length; p++) {
      if (tabs[p].section.classList.contains("is-active")) {
        activeId = tabs[p].id;
        break;
      }
    }
    if (!activeId) activeId = tabs[0].id;

    function isMobile() {
      return window.matchMedia("(max-width: 760px)").matches;
    }

    function setOpen(open) {
      if (!toggle) return;
      nav.setAttribute("data-open", open ? "true" : "false");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute(
        "aria-label",
        open ? "Cerrar índice de capítulos" : "Abrir índice de capítulos"
      );
    }

    if (toggle) {
      toggle.addEventListener("click", function (ev) {
        ev.preventDefault();
        var isOpen = nav.getAttribute("data-open") === "true";
        setOpen(!isOpen);
      });
    }

    function scrollToTop() {
      if (scrollContainer && scrollContainer.scrollHeight - scrollContainer.clientHeight > 4) {
        scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    function activateTab(targetId, opts) {
      opts = opts || {};
      if (!targetId) return;
      activeId = targetId;
      for (var k = 0; k < tabs.length; k++) {
        var on = tabs[k].id === targetId;
        tabs[k].section.classList.toggle("is-active", on);
        tabs[k].link.classList.toggle("is-active", on);
        tabs[k].link.setAttribute("aria-selected", on ? "true" : "false");
        // Reinicia la animación cuando una pestaña vuelve a activarse
        if (on) {
          var node = tabs[k].section;
          node.style.animation = "none";
          // Forzar reflow para que el animation: none surta efecto
          void node.offsetWidth;
          node.style.animation = "";
        }
      }
      if (opts.scroll !== false) scrollToTop();
    }

    for (var j = 0; j < tabs.length; j++) {
      (function (entry) {
        entry.link.addEventListener("click", function (ev) {
          ev.preventDefault();
          activateTab(entry.id);
          if (isMobile()) {
            window.setTimeout(function () {
              setOpen(false);
            }, 80);
          }
        });
      })(tabs[j]);
    }

    // Cierra el drawer móvil al tocar fuera del nav
    document.addEventListener("click", function (ev) {
      if (!isMobile()) return;
      if (nav.getAttribute("data-open") !== "true") return;
      if (nav.contains(ev.target)) return;
      setOpen(false);
    });

    // Estado inicial coherente con el HTML
    activateTab(activeId, { scroll: false });

    // Oculta el nav cuando no estamos en la vista de menú,
    // pero conserva la pestaña activa para cuando se vuelva.
    function syncNavVisibility() {
      var visible = menuViewEl && !menuViewEl.hidden;
      nav.style.display = visible ? "" : "none";
      if (!visible) {
        setOpen(false);
      } else {
        // Re-aplica la pestaña activa por si algo cambió mientras estaba oculto.
        activateTab(activeId, { scroll: false });
      }
    }
    syncNavVisibility();
    var observer = new MutationObserver(syncNavVisibility);
    if (menuViewEl) {
      observer.observe(menuViewEl, { attributes: true, attributeFilter: ["hidden"] });
    }
  })();

  (function setupNewPoemPop() {
    var pop = document.getElementById("new-poem-pop");
    if (!pop) return;

    var openBtn = document.getElementById("new-poem-pop-open");
    var closeBtn = document.getElementById("new-poem-pop-close");
    var storageKey = "para-ingrid:new-poem-pop:" + (pop.getAttribute("data-key") || "v1");

    function isDismissed() {
      try {
        return window.localStorage && localStorage.getItem(storageKey) === "1";
      } catch (e) {
        return false;
      }
    }
    function persistDismiss() {
      try {
        if (window.localStorage) localStorage.setItem(storageKey, "1");
      } catch (e) { /* ignore */ }
    }

    function reveal() {
      if (isDismissed()) return;
      pop.hidden = false;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          pop.classList.add("is-visible");
        });
      });
    }

    function hide(immediate) {
      pop.classList.remove("is-visible");
      pop.classList.add("is-hiding");
      var done = function () {
        pop.hidden = true;
        pop.classList.remove("is-hiding");
      };
      if (immediate) return done();
      window.setTimeout(done, 480);
    }

    if (openBtn) {
      openBtn.addEventListener("click", function () {
        persistDismiss();
        hide(true);
        showView("menu");
        var recuerdosTab = document.querySelector('.menu-nav__link[data-target="cap-recuerdos"]');
        if (recuerdosTab) recuerdosTab.click();
      });
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        persistDismiss();
        hide(false);
      });
    }

    var menuViewEl = document.getElementById("menu-view");
    function trySync() {
      if (!menuViewEl || menuViewEl.hidden) {
        if (!pop.hidden && !pop.classList.contains("is-hiding")) hide(true);
        return;
      }
      var hero = document.getElementById("cap-hero");
      var onHero = hero && hero.classList.contains("is-active");
      if (isDismissed() || !onHero) {
        if (!pop.hidden) hide(true);
        return;
      }
      if (pop.hidden) reveal();
    }
    trySync();
    if (menuViewEl) {
      new MutationObserver(trySync).observe(menuViewEl, {
        attributes: true, attributeFilter: ["hidden"]
      });
    }
    var hero = document.getElementById("cap-hero");
    if (hero) {
      new MutationObserver(trySync).observe(hero, {
        attributes: true, attributeFilter: ["class"]
      });
    }
  })();

  (function setupPhotoMemories() {
    var toggleBtn = document.getElementById("photo-memory-toggle");
    var formShell = document.getElementById("photo-memory-form-shell");
    var form = document.getElementById("photo-memory-form");
    var fileInput = document.getElementById("photo-memory-file");
    var descriptionInput = document.getElementById("photo-memory-description");
    var frameInput = document.getElementById("photo-memory-frame");
    var preview = document.getElementById("photo-memory-preview");
    var previewCard = document.getElementById("photo-memory-preview-card");
    var previewImg = document.getElementById("photo-memory-preview-img");
    var previewCaption = document.getElementById("photo-memory-preview-caption");
    var submitBtn = document.getElementById("photo-memory-submit");
    var statusEl = document.getElementById("photo-memory-status");
    var configNote = document.getElementById("photo-memory-config-note");
    var gallery = document.getElementById("photo-memory-gallery");
    var empty = document.getElementById("photo-memory-empty");
    if (
      !toggleBtn ||
      !formShell ||
      !form ||
      !fileInput ||
      !descriptionInput ||
      !frameInput ||
      !preview ||
      !previewCard ||
      !previewImg ||
      !previewCaption ||
      !submitBtn ||
      !statusEl ||
      !gallery ||
      !empty
    ) {
      return;
    }

    var frames = {
      polaroid: "Polaroid suave",
      rosa: "Rosa romantico",
      dorado: "Dorado calido",
      jardin: "Jardin"
    };
    var previewUrl = "";
    var client = null;
    var uploadOpen = false;

    function hasOwn(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }

    function isConfigured() {
      return (
        typeof PHOTO_MEMORY_SUPABASE_URL === "string" &&
        PHOTO_MEMORY_SUPABASE_URL.indexOf("https://") === 0 &&
        typeof PHOTO_MEMORY_SUPABASE_ANON_KEY === "string" &&
        PHOTO_MEMORY_SUPABASE_ANON_KEY.length > 20
      );
    }

    function getClient() {
      if (client) return client;
      if (!isConfigured()) return null;
      if (!window.supabase || typeof window.supabase.createClient !== "function") {
        return null;
      }
      client = window.supabase.createClient(
        PHOTO_MEMORY_SUPABASE_URL,
        PHOTO_MEMORY_SUPABASE_ANON_KEY
      );
      return client;
    }

    function setStatus(message, kind) {
      statusEl.textContent = message || "";
      statusEl.classList.remove("is-ok", "is-err", "is-warn");
      if (kind) statusEl.classList.add("is-" + kind);
    }

    function setFormEnabled(enabled) {
      fileInput.disabled = !enabled;
      descriptionInput.disabled = !enabled;
      frameInput.disabled = !enabled;
      submitBtn.disabled = !enabled;
      submitBtn.setAttribute("aria-disabled", enabled ? "false" : "true");
    }

    function setUploadOpen(open) {
      uploadOpen = !!open;
      formShell.hidden = !uploadOpen;
      toggleBtn.classList.toggle("is-open", uploadOpen);
      toggleBtn.setAttribute("aria-expanded", uploadOpen ? "true" : "false");
      toggleBtn.setAttribute(
        "aria-label",
        uploadOpen
          ? "Ocultar formulario para subir una foto"
          : "Mostrar formulario para subir una foto"
      );
      var text = toggleBtn.querySelector(".photo-memory-toggle__text");
      if (text) text.textContent = uploadOpen ? "Ocultar formulario" : "Agregar recuerdo";
      if (uploadOpen) {
        window.setTimeout(function () {
          fileInput.focus({ preventScroll: true });
        }, 80);
      }
    }

    function normalizeFrame(frame) {
      return hasOwn(frames, frame) ? frame : "polaroid";
    }

    function frameLabel(frame) {
      frame = normalizeFrame(frame);
      return frames[frame];
    }

    function formatDate(value) {
      if (!value) return "";
      try {
        return new Date(value).toLocaleDateString("es-MX", {
          day: "numeric",
          month: "long",
          year: "numeric"
        });
      } catch (e) {
        return "";
      }
    }

    function fileExtension(file) {
      var name = file && file.name ? file.name.toLowerCase() : "";
      var idx = name.lastIndexOf(".");
      if (idx === -1) return "jpg";
      var ext = name.slice(idx + 1).replace(/[^a-z0-9]/g, "");
      if (ext === "jpeg" || ext === "jpg") return "jpg";
      if (ext === "png" || ext === "webp" || ext === "heic" || ext === "heif") return ext;
      return "jpg";
    }

    function hasAllowedType(file) {
      if (!file) return false;
      if (file.type && PHOTO_MEMORY_ALLOWED_TYPES.indexOf(file.type) !== -1) {
        return true;
      }
      return /(\.jpe?g|\.png|\.webp|\.heic|\.heif)$/i.test(file.name || "");
    }

    function makeUploadPath(file) {
      var now = new Date();
      var day = now.toISOString().slice(0, 10);
      var suffix = Math.random().toString(36).slice(2, 8);
      return (
        "uploads/" +
        day +
        "/" +
        String(now.getTime()) +
        "-" +
        suffix +
        "." +
        fileExtension(file)
      );
    }

    function validate(file, description) {
      if (!file) return "Elige una foto antes de guardar.";
      if (!hasAllowedType(file)) {
        return "Solo puedo guardar fotos JPG, PNG, WebP o HEIC.";
      }
      if (file.size > PHOTO_MEMORY_MAX_SIZE_BYTES) {
        return "La foto debe pesar menos de 5 MB.";
      }
      if (!description.length) {
        return "Escribe una descripcion cortita para la foto.";
      }
      if (description.length > 240) {
        return "La descripcion no puede pasar de 240 caracteres.";
      }
      return "";
    }

    function revokePreviewUrl() {
      if (previewUrl) {
        try {
          URL.revokeObjectURL(previewUrl);
        } catch (e) {}
        previewUrl = "";
      }
    }

    function updatePreview() {
      var file = fileInput.files && fileInput.files[0] ? fileInput.files[0] : null;
      var frame = normalizeFrame(frameInput.value);
      var description = descriptionInput.value.trim();

      previewCard.className =
        "photo-memory-card photo-memory-card--preview photo-memory-frame--" + frame;
      previewCaption.textContent = description || "Tu descripcion aparecera aqui.";

      if (!file) {
        revokePreviewUrl();
        previewImg.removeAttribute("src");
        preview.hidden = true;
        return;
      }

      revokePreviewUrl();
      previewUrl = URL.createObjectURL(file);
      previewImg.src = previewUrl;
      preview.hidden = false;
    }

    function publicUrlFor(path) {
      var api = getClient();
      if (!api || !path) return "";
      var result = api.storage.from(PHOTO_MEMORY_BUCKET).getPublicUrl(path);
      return result && result.data ? result.data.publicUrl : "";
    }

    function createMemoryCard(item) {
      var frame = normalizeFrame(item.frame);
      var article = document.createElement("article");
      article.className = "photo-memory-card photo-memory-frame--" + frame;
      article.setAttribute("data-memory-id", item.id || "");

      var img = document.createElement("img");
      img.loading = "lazy";
      img.decoding = "async";
      img.src = item.public_url || publicUrlFor(item.image_path);
      img.alt = item.description
        ? "Recuerdo subido por Ingrid: " + item.description
        : "Recuerdo subido por Ingrid";

      var body = document.createElement("div");
      body.className = "photo-memory-card__body";

      var desc = document.createElement("p");
      desc.className = "photo-memory-card__description";
      desc.textContent = item.description || "Un recuerdo guardado con carino.";

      var meta = document.createElement("p");
      meta.className = "photo-memory-card__meta";
      var dateText = formatDate(item.created_at);
      meta.textContent = dateText
        ? frameLabel(frame) + " · " + dateText
        : frameLabel(frame);

      var deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "photo-memory-delete";
      deleteBtn.textContent = "Borrar";
      deleteBtn.setAttribute(
        "aria-label",
        item.description
          ? "Borrar recuerdo: " + item.description
          : "Borrar recuerdo"
      );
      deleteBtn.addEventListener("click", function () {
        deleteMemory(item, deleteBtn);
      });

      body.appendChild(desc);
      body.appendChild(meta);
      article.appendChild(img);
      article.appendChild(body);
      article.appendChild(deleteBtn);
      return article;
    }

    function deleteMemory(item, button) {
      var api = getClient();
      if (!api || !item || !item.id || !item.image_path) return;
      if (!window.confirm("¿Quieres borrar esta foto de recuerdos?")) return;

      if (button) {
        button.disabled = true;
        button.setAttribute("aria-busy", "true");
      }
      setStatus("Borrando recuerdo...", "");

      api
        .from(PHOTO_MEMORY_TABLE)
        .delete()
        .eq("id", item.id)
        .select("id")
        .then(function (deleteResult) {
          if (deleteResult.error) throw deleteResult.error;
          if (!deleteResult.data || !deleteResult.data.length) {
            throw new Error("No rows deleted");
          }
          return api.storage.from(PHOTO_MEMORY_BUCKET).remove([item.image_path]);
        })
        .then(
          function () {
            setStatus("Recuerdo borrado.", "ok");
            loadMemories();
          },
          function () {
            setStatus(
              "No pude borrar el recuerdo. Vuelve a ejecutar supabase-recuerdos-setup.sql para activar permisos de borrado.",
              "err"
            );
            if (button) {
              button.disabled = false;
              button.removeAttribute("aria-busy");
            }
          }
        );
    }

    function renderMemories(items) {
      gallery.textContent = "";
      if (!items || !items.length) {
        empty.hidden = false;
        return;
      }
      empty.hidden = true;
      items.forEach(function (item) {
        gallery.appendChild(createMemoryCard(item));
      });
    }

    function loadMemories() {
      var api = getClient();
      if (!api) return;

      gallery.textContent = "";
      var loading = document.createElement("p");
      loading.className = "photo-memory-loading";
      loading.textContent = "Cargando recuerdos...";
      gallery.appendChild(loading);
      empty.hidden = true;

      api
        .from(PHOTO_MEMORY_TABLE)
        .select("id,image_path,description,frame,created_at")
        .order("created_at", { ascending: false })
        .limit(60)
        .then(function (result) {
          if (result.error) {
            setStatus("No pude cargar la galeria. Revisa la configuracion de Supabase.", "err");
            renderMemories([]);
            return;
          }
          renderMemories(result.data || []);
        });
    }

    function resetFormAfterUpload() {
      form.reset();
      revokePreviewUrl();
      previewImg.removeAttribute("src");
      preview.hidden = true;
      updatePreview();
    }

    fileInput.addEventListener("change", updatePreview);
    descriptionInput.addEventListener("input", updatePreview);
    frameInput.addEventListener("change", updatePreview);

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();

      var api = getClient();
      if (!api) {
        setStatus("Todavia falta conectar Supabase para poder subir fotos.", "warn");
        if (configNote) configNote.hidden = false;
        return;
      }

      var file = fileInput.files && fileInput.files[0] ? fileInput.files[0] : null;
      var description = descriptionInput.value.trim();
      var frame = normalizeFrame(frameInput.value);
      var validationError = validate(file, description);
      if (validationError) {
        setStatus(validationError, "err");
        return;
      }

      var path = makeUploadPath(file);
      submitBtn.disabled = true;
      submitBtn.setAttribute("aria-busy", "true");
      setStatus("Guardando recuerdo...", "");

      api.storage
        .from(PHOTO_MEMORY_BUCKET)
        .upload(path, file, {
          cacheControl: "3600",
          contentType: file.type || "image/jpeg",
          upsert: false
        })
        .then(function (uploadResult) {
          if (uploadResult.error) throw uploadResult.error;
          return api
            .from(PHOTO_MEMORY_TABLE)
            .insert({
              image_path: path,
              description: description,
              frame: frame
            })
            .select("id,image_path,description,frame,created_at")
            .single();
        })
        .then(
          function (insertResult) {
            if (insertResult.error) {
              setStatus("La foto subio, pero no pude guardar la descripcion.", "err");
              return;
            }
            setStatus("Recuerdo guardado. Ya vive en nuestra galeria.", "ok");
            resetFormAfterUpload();
            setUploadOpen(false);
            loadMemories();
          },
          function () {
            setStatus("No pude guardar el recuerdo. Intenta otra vez en un momento.", "err");
          }
        )
        .then(function () {
          submitBtn.removeAttribute("aria-busy");
          submitBtn.disabled = false;
        });
    });

    toggleBtn.addEventListener("click", function () {
      setUploadOpen(!uploadOpen);
    });

    if (!getClient()) {
      setFormEnabled(false);
      if (configNote) configNote.hidden = false;
      setStatus("La pestaña esta lista; falta pegar las credenciales publicas de Supabase.", "warn");
      renderMemories([]);
      setUploadOpen(false);
      return;
    }

    setFormEnabled(true);
    if (configNote) configNote.hidden = true;
    setUploadOpen(false);
    updatePreview();
    loadMemories();
  })();

  showView("menu");
})();
