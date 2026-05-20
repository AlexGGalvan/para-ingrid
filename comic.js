(function () {
  "use strict";

  const book = document.getElementById("comic-book");
  if (!book) return;

  const pages = Array.from(book.querySelectorAll(".comic-page"));
  const total = pages.length;
  const pagerLabel = document.getElementById("comic-pager");
  const btnPrev = document.getElementById("comic-prev");
  const btnNext = document.getElementById("comic-next");

  if (!pages.length) return;

  let currentIndex = 0;
  let isAnimating = false;
  const FLIP_MS = 950;

  function applyStacking() {
    pages.forEach(function (page, idx) {
      if (idx < currentIndex) {
        page.classList.add("is-flipped");
      } else {
        page.classList.remove("is-flipped");
      }
      // z-index: las páginas no volteadas más cercanas a "current" arriba;
      // las volteadas se mandan al fondo conforme se voltean más.
      let z;
      if (idx >= currentIndex) {
        z = total - idx + total;
      } else {
        z = idx;
      }
      page.style.zIndex = String(z);
      page.classList.toggle("is-current", idx === currentIndex);
    });
    updatePager();
    updateEdgeButtons();
  }

  function updatePager() {
    if (!pagerLabel) return;
    pagerLabel.textContent = (currentIndex + 1) + " / " + total;
  }

  function updateEdgeButtons() {
    if (btnPrev) {
      if (currentIndex <= 0) btnPrev.setAttribute("disabled", "true");
      else btnPrev.removeAttribute("disabled");
    }
    if (btnNext) {
      if (currentIndex >= total - 1) btnNext.setAttribute("disabled", "true");
      else btnNext.removeAttribute("disabled");
    }
  }

  function flipNext() {
    if (isAnimating) return;
    if (currentIndex >= total - 1) return;
    isAnimating = true;
    const flipping = pages[currentIndex];
    flipping.classList.add("is-flipped");
    flipping.classList.remove("is-current");
    currentIndex += 1;
    pages[currentIndex].classList.add("is-current");
    updatePager();
    updateEdgeButtons();
    window.setTimeout(function () {
      isAnimating = false;
      applyStacking();
    }, FLIP_MS);
  }

  function flipPrev() {
    if (isAnimating) return;
    if (currentIndex <= 0) return;
    isAnimating = true;
    const newIndex = currentIndex - 1;
    const returning = pages[newIndex];
    // Asegura que la página que regresa quede arriba mientras gira de vuelta.
    returning.style.zIndex = String(total + 20);
    returning.classList.remove("is-flipped");
    pages[currentIndex].classList.remove("is-current");
    currentIndex = newIndex;
    pages[currentIndex].classList.add("is-current");
    updatePager();
    updateEdgeButtons();
    window.setTimeout(function () {
      isAnimating = false;
      applyStacking();
    }, FLIP_MS);
  }

  if (btnNext) btnNext.addEventListener("click", flipNext);
  if (btnPrev) btnPrev.addEventListener("click", flipPrev);

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "ArrowRight" || ev.key === " ") {
      ev.preventDefault();
      flipNext();
    } else if (ev.key === "ArrowLeft") {
      ev.preventDefault();
      flipPrev();
    }
  });

  // Swipe táctil sobre el libro
  let touchStartX = null;
  let touchStartY = null;
  let touchStartTime = 0;

  book.addEventListener("touchstart", function (ev) {
    if (!ev.changedTouches || !ev.changedTouches.length) return;
    const t = ev.changedTouches[0];
    touchStartX = t.clientX;
    touchStartY = t.clientY;
    touchStartTime = Date.now();
  }, { passive: true });

  book.addEventListener("touchend", function (ev) {
    if (touchStartX === null) return;
    const t = ev.changedTouches[0];
    const dx = t.clientX - touchStartX;
    const dy = t.clientY - touchStartY;
    const dt = Date.now() - touchStartTime;
    touchStartX = null;
    touchStartY = null;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    if (dt > 700) return;
    if (dx < 0) flipNext();
    else flipPrev();
  }, { passive: true });

  applyStacking();
})();
