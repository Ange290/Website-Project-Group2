const loadComponents = (id, url, callback) => {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
      if (callback) {
        callback();
      }
    })
    .catch((err) => console.error(err));
};

window.onload = () => {
  loadComponents("hero", "src/sections/hero.html");
  loadComponents("about", "src/sections/about.html");

  loadComponents("service", "src/sections/service.html", renderServices);

  loadComponents(
    "eventBanner",
    "src/sections/eventBanner.html",
    renderPartnerList
  );

  loadComponents("footer", "src/sections/footer.html");
};
