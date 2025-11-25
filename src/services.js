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
    container.innerHTML = ""; // Clear it first just in case

    services.forEach((serviceName) => {
      // Create the <p> tag
      const p = document.createElement("p");

      // Add the text
      p.textContent = serviceName;

      // Put the <p> inside the container
      container.appendChild(p);
    });
    console.log("Services loaded successfully");
  } else {
    console.error("Error: Could not find #service-list in the HTML.");
  }
}
