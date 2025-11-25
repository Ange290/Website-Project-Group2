function renderServices() {
  const services = [
    "Brand strategy",
    "Corporate Identity & Website development",
    "SEO & copywriting",
    "Media Relations",
    "Digital marketing & content production",
    "Influencer relations",
  ];

  const container = document.getElementById("service-list");

  if (container) {
    container.innerHTML = "";

    services.forEach((serviceName) => {
      const p = document.createElement("p");

      p.textContent = serviceName;

      container.appendChild(p);
    });
    console.log("Services loaded successfully");
  } else {
    console.error("Error: Could not find #service-list in the HTML.");
  }
}
