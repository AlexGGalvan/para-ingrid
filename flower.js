(function () {
  "use strict";

  var flowerMessages = [
    {
      verse: "El amor es paciente, es bondadoso. 1 Corintios 13:4",
      phrase: "Ora 🤨"
    },
    {
      verse: "Sobre todo, ámense profundamente unos a otros. 1 Pedro 4:8",
      phrase: "Que bueno que ya no te has ido a dormir sola"
    },
    {
      verse: "Ponme como un sello sobre tu corazón. Cantares 8:6",
      phrase: "Ella es, lo se, la casa que tanto yo busque, la vida que quiero proteger, ella essssssssss"
    },
    {
      verse: "El amor debe ser sincero. Romanos 12:9",
      phrase: "Por que le sonries tanto al celular?"
    },
    {
      verse: "En el amor no hay temor. 1 Juan 4:18",
      phrase: "Me pregunto si algun dia me dejaran de temblar las manos..."
    },
    {
      verse: "Yo soy de mi amado, y mi amado es mío. Cantares 6:3",
      phrase: "Te quiero 💕✨"
    },
    {
      verse: "Las muchas aguas no podrán apagar el amor. Cantares 8:7",
      phrase: "Te mereces el mundo y yo te lo voy a dar..."
    },
    {
      verse: "Sean humildes, amables y pacientes, tolerándose unos a otros en amor. Efesios 4:2",
      phrase: "Lo estas sintiendo ahora?"
    },
    {
      verse: "El que ama ha nacido de Dios y conoce a Dios. 1 Juan 4:7",
      phrase: "Tiempo atras no conocia tu risa... ahora no imagino un mundo sin ella"
    },
    {
      verse: "Mejores son dos que uno. Eclesiastés 4:9",
      phrase: "Ya te aprendiste las placas de mi carro o sigues pensando que es un BYD???"
    },
    {
      verse: "Que nunca te abandonen el amor y la verdad. Proverbios 3:3",
      phrase: "Quise hacerte un ramo que no se marchitara"
    },
    {
      verse: "El amor cubre todas las faltas. Proverbios 10:12",
      phrase: "Hay sonrisas que también se vuelven oración..."
    },
    {
      verse: "El Señor te bendiga y te guarde. Números 6:24",
      phrase: "Me gusta mucho que compartimos la misma neurona"
    },
    {
      verse: "Ama al Señor tu Dios con todo tu corazón. Mateo 22:37",
      phrase: "Me encanta ponerte atencion para poder sorprenderte..."
    },
    {
      verse: "Por encima de todo, guarda tu corazón. Proverbios 4:23",
      phrase: "Y aunque te sorprendas, no me quedare sin palabras para mis votos"
    },
    {
      verse: "Donde esté tu tesoro, allí estará también tu corazón. Mateo 6:21",
      phrase: "A veces el tesoro está en una notificación tuya"
    },
    {
      verse: "El fruto del Espíritu es amor, gozo, paz. Gálatas 5:22",
      phrase: "Te vas a ver demasiado hermosa vestida de blanco..."
    },
    {
      verse: "Sean compasivos y bondadosos. Colosenses 3:12",
      phrase: "Que hermoso fue verte en la mañana..."
    },
    {
      verse: "El amor jamás se extingue. 1 Corintios 13:8",
      phrase: "Hay flores que duran un día, yo quería darte una que se quedara"
    },
    {
      verse: "Con amor eterno te he amado. Jeremías 31:3",
      phrase: "Me encantas Ingrid..."
    },
    {
      verse: "Mi amado es mío, y yo soy suya. Cantares 2:16",
      phrase: "Nunca me voy a ir de tu vida"
    },
    {
      verse: "La paz de Dios guardará sus corazones. Filipenses 4:7",
      phrase: "Siempre voy a dar todo de mi para hacerte feliz"
    },
    {
      verse: "Todo lo hace hermoso en su tiempo. Eclesiastés 3:11",
      phrase: "Me gusta pensar que Dios también sonríe con los detalles"
    },
    {
      verse: "El corazón alegre hermosea el rostro. Proverbios 15:13",
      phrase: "Tu tambien te pareces mucho a lo que Dios dice que es el amor..."
    },
    {
      verse: "Que el Señor los haga crecer y abundar en amor. 1 Tesalonicenses 3:12",
      phrase: "Hace unos meses... la conoci por feis..."
    },
    {
      verse: "Que todo lo que hagan sea hecho con amor. 1 Corintios 16:14",
      phrase: "Esto también es una forma de cuidarte desde lejos"
    },
    {
      verse: "Si nos amamos unos a otros, Dios permanece en nosotros. 1 Juan 4:12",
      phrase: "You just dont know, how beatiful you areeeeeee..."
    },
    {
      verse: "Tú eres toda hermosa, amada mía. Cantares 4:7",
      phrase: "Quería que cada flor se pareciera un poquito a lo bonita que eres"
    }
  ];

  function addParticles(root, className, total, options) {
    if (!root) return;
    for (var i = 0; i < total; i++) {
      var dot = document.createElement("span");
      dot.className = className;
      dot.style.setProperty("--x", String(Math.random() * 100) + "%");
      dot.style.setProperty("--y", String(Math.random() * 100) + "%");
      dot.style.setProperty("--s", String((options.min || 1) + Math.random() * (options.max || 3)) + "px");
      dot.style.setProperty("--d", String(Math.random() * (options.delay || 8)) + "s");
      dot.style.setProperty("--a", String(0.35 + Math.random() * 0.65));
      root.appendChild(dot);
    }
  }

  function addGypsophila(root, total) {
    if (!root) return;
    for (var i = 0; i < total; i++) {
      var bloom = document.createElement("span");
      bloom.className = "baby-bloom";
      bloom.style.setProperty("--x", String(Math.random() * 100) + "%");
      bloom.style.setProperty("--y", String(Math.random() * 100) + "%");
      bloom.style.setProperty("--r", String(-28 + Math.random() * 56) + "deg");
      bloom.style.setProperty("--d", String(0.5 + Math.random() * 2.2) + "s");
      root.appendChild(bloom);
    }
  }

  addParticles(document.getElementById("stars"), "star", 90, { min: 1, max: 2.8, delay: 9 });
  addParticles(document.getElementById("fireflies"), "firefly", 22, { min: 2, max: 5, delay: 12 });
  addGypsophila(document.getElementById("gypsophila-left"), 34);
  addGypsophila(document.getElementById("gypsophila-right"), 30);
  addGypsophila(document.getElementById("gypsophila-top"), 28);
  addGypsophila(document.getElementById("gypsophila-center"), 42);
  addGypsophila(document.getElementById("gypsophila-low"), 36);

  (function setupFlowerMessages() {
    var flowers = document.querySelectorAll(".flower");
    var note = document.getElementById("flower-note");
    var verse = document.getElementById("flower-note-verse");
    var phrase = document.getElementById("flower-note-phrase");
    var special = document.getElementById("special-message");
    var finalBlessing = document.getElementById("final-blessing");
    var rain = document.getElementById("petal-rain");
    var specialFlower = document.querySelector(".special-flower");
    var touched = {};
    var completed = false;
    var specialOpen = false;
    var noteTimer = null;
    var unlockAt = 6;

    if (!flowers.length || !note || !verse || !phrase || !special || !finalBlessing || !rain) return;

    function touchedCount() {
      return Object.keys(touched).length;
    }

    function showNote(message) {
      if (noteTimer !== null) {
        window.clearTimeout(noteTimer);
      }
      verse.textContent = message.verse;
      phrase.textContent = message.phrase;
      note.setAttribute("aria-hidden", "false");
      note.classList.remove("is-visible");
      window.requestAnimationFrame(function () {
        note.classList.add("is-visible");
      });
      noteTimer = window.setTimeout(function () {
        note.classList.remove("is-visible");
        noteTimer = window.setTimeout(function () {
          note.setAttribute("aria-hidden", "true");
          noteTimer = null;
        }, 460);
      }, 5200);
    }

    function showSpecial() {
      if (specialOpen) return;
      specialOpen = true;
      special.setAttribute("aria-hidden", "false");
      special.classList.add("is-visible");
    }

    function makePetal() {
      var petal = document.createElement("span");
      petal.className = "falling-petal";
      petal.style.setProperty("--x", String(Math.random() * 100) + "vw");
      petal.style.setProperty("--d", String(Math.random() * 2.8) + "s");
      petal.style.setProperty("--r", String(-50 + Math.random() * 100) + "deg");
      petal.style.setProperty("--s", String(0.72 + Math.random() * 0.72));
      rain.appendChild(petal);
      window.setTimeout(function () {
        petal.remove();
      }, 7200);
    }

    function completeBouquet() {
      if (completed) return;
      completed = true;
      finalBlessing.setAttribute("aria-hidden", "false");
      finalBlessing.classList.add("is-visible");
      for (var i = 0; i < 44; i++) {
        window.setTimeout(makePetal, i * 95);
      }
    }

    var messageIndex = 0;
    for (var i = 0; i < flowers.length; i++) {
      (function (flower, index, flowerMessageIndex) {
        flower.setAttribute("role", "button");
        flower.setAttribute("tabindex", "0");
        flower.setAttribute("aria-label", flower.classList.contains("special-flower") ? "Flor especial" : "Revelar mensaje de esta flor");

        function activate() {
          if (flower.classList.contains("special-flower") && touchedCount() < unlockAt) {
            showNote({
              verse: "Toca algunas flores más para abrir este mensaje especial.",
              phrase: "Esta gerbera está guardando algo bonito."
            });
            return;
          }

          touched[index] = true;
          flower.classList.add("has-message");

          if (flower.classList.contains("special-flower")) {
            showSpecial();
            completeBouquet();
          } else {
            showNote(flowerMessages[flowerMessageIndex % flowerMessages.length]);
          }

          if (specialFlower && touchedCount() >= unlockAt) {
            specialFlower.classList.add("is-unlocked");
          }

        }

        flower.addEventListener("click", activate);
        flower.addEventListener("keydown", function (event) {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            activate();
          }
        });
      })(flowers[i], i, flowers[i].classList.contains("special-flower") ? -1 : messageIndex++);
    }
  })();
})();
