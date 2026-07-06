(function () {
  "use strict";

  var MAINTENANCE_MODE = false;
  if (!MAINTENANCE_MODE) {
    document.documentElement.classList.remove("maintenance-active");
    return;
  }

  window.PARA_INGRID_MAINTENANCE = true;
  document.documentElement.classList.add("maintenance-active");

  var file = (window.location.pathname.split("/").pop() || "index.html")
    .split("?")[0]
    .split("#")[0];
  if (file && file !== "index.html") {
    window.location.replace("index.html");
  }
})();
