(function () {
  var note = document.getElementById("sky-note");
  var title = document.getElementById("sky-note-title");
  var text = document.getElementById("sky-note-text");
  var closeBtn = document.getElementById("sky-note-close");
  var nodes = document.querySelectorAll("[data-sky-id]");
  var activeNode = null;

  var constellationMessages = {
    leo: {
      title: "Leo",
      text: "Como Leo brillaba en lo alto, así comenzó a brillar en mí la certeza de que eras tú."
    },
    virgo: {
      title: "Virgo",
      text: "Virgo estaba en el cielo, pero mi paz esa noche estaba aquí, contigo."
    },
    bootes: {
      title: "Bootes",
      text: "Entre tantas estrellas, encontrarte a ti fue como hallar una guía que mi corazón llevaba tiempo buscando."
    },
    "osa-mayor": {
      title: "Osa Mayor",
      text: "Aun en la inmensidad del cielo, nada se veía tan bonito como el inicio de nuestra historia."
    },
    geminis: {
      title: "Géminis",
      text: "Dos estrellas unidas en el cielo… como si el universo ya ensayara la idea de nosotros."
    },
    escorpio: {
      title: "Escorpio",
      text: "Hasta las constelaciones más intensas se quedan cortas para explicar lo que sentí aquella noche."
    },
    orion: {
      title: "Orión",
      text: "Aunque Orión ya se despedía del cielo, esa noche en mí apenas comenzaba algo eterno."
    },
    luna: {
      title: "Luna",
      text: "La luna iluminaba el cielo, pero tú iluminabas todo lo que yo sentía."
    },
    jupiter: {
      title: "Júpiter",
      text: "Júpiter brillaba con fuerza, pero no más que la felicidad que sentí cuando por fin fuimos nosotros."
    },
    venus: {
      title: "Venus",
      text: "Si Venus es el astro del amor, entonces esa noche el cielo también estaba de nuestro lado."
    }
  };

  function showMessage(id) {
    var message = constellationMessages[id];
    if (!message || !note || !title || !text) return;

    note.hidden = false;
    note.classList.add("is-changing");
    window.setTimeout(function () {
      title.textContent = message.title;
      text.textContent = message.text;
      note.classList.add("is-open");
      note.classList.remove("is-changing");
    }, 130);
  }

  function activate(node) {
    var id = node.getAttribute("data-sky-id");
    if (activeNode && activeNode !== node) {
      activeNode.classList.remove("is-active");
      activeNode.setAttribute("aria-pressed", "false");
    }
    activeNode = node;
    node.classList.add("is-active");
    node.setAttribute("aria-pressed", "true");
    showMessage(id);
  }

  function reset() {
    if (activeNode) {
      activeNode.classList.remove("is-active");
      activeNode.setAttribute("aria-pressed", "false");
      activeNode = null;
    }
    if (note) {
      note.classList.remove("is-open", "is-changing");
      note.hidden = true;
    }
    if (title) title.textContent = "El cielo guardó algo para nosotros";
    if (text) text.textContent = "Toca una estrella, la luna o un planeta para descubrir el mensaje de aquella noche.";
  }

  for (var i = 0; i < nodes.length; i++) {
    nodes[i].setAttribute("aria-pressed", "false");
    nodes[i].addEventListener("click", function () {
      activate(this);
    });
    nodes[i].addEventListener("keydown", function (ev) {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        activate(this);
      }
    });
  }

  if (closeBtn) closeBtn.addEventListener("click", reset);
})();
