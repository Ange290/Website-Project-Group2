function renderPartnerList() {
  const partners = [
    { name: "Ace Hotel", url: "https://acehotel.com/" },
    { name: "ARMEDANGELS", url: "https://www.armedangels.com/en" },
    { name: "BERLIN DESIGN WEEK", url: "https://berlindesignweek.com/" },
    { name: "Berliner Berg", url: "https://berlinerberg.com/" },
    {
      name: "BITE CLUB",
      url: "https://www.instagram.com/biteclubberlin/?hl=de",
    },
    {
      name: "Budweiser Budvar",
      url: "https://budweiserbudvar.com/?redirect_from=de&redirect_code=3",
    },
    {
      name: "ChungKing Noodles",
      url: "https://www.instagram.com/chungkingnoodles/?hl=de",
    },
    {
      name: "Designpreis Brandenburg",
      url: "https://designpreis-brandenburg.de/",
    },
    { name: "Die Techniker", url: "https://www.tk.de/techniker" },
    {
      name: "European Street Food Awards",
      url: "https://europeanstreetfood.com/",
    },
    { name: "Grundmann Dentistry", url: "https://www.grundmann-dentistry.de/" },
    {
      name: "HORNBACH Werkstück",
      url: "https://www.hornbach.de/aktuelles/werkstueck-edition/",
    },
    {
      name: "HORNBACH macht Schule",
      url: "https://www.hornbach.de/nachhaltigkeit/hornbach-macht-schule/",
    },
    { name: "iF Design", url: "https://ifdesign.com/de/" },
    { name: "Kopka", url: "https://kopka.berlin/" },
    { name: "KLH Maßschuhe", url: "https://klh-massschuhe.com/de" },
    { name: "Lode & Stijn", url: "https://www.lode-stijn.de/" },
    { name: "Luya", url: "https://luya.bio/" },
    { name: "MEISSEN", url: "https://www.meissen.com/de/" },
    { name: "MEISSEN IKONEN", url: "https://www.meissen.com/de/" },
    { name: "Motel Beer & Coffee", url: "https://www.motelminibar.com/" },
    { name: "PAPER & TEA", url: "https://www.paperandtea.de/" },
    { name: "rocket & basil", url: "https://www.rocketandbasil.com/" },
    { name: "Seebeger Gruppe", url: "https://gruppe.seeberger.de/de/" },
    { name: "Shiori", url: "https://shioriberlin.com/" },
    {
      name: "SPOC Magazin",
      url: "https://www.verfassungsschutz.de/SharedDocs/publikationen/DE/wirtschafts-wissenschaftsschutz/2023-03-23-spoc-magazin.html",
    },
    { name: "stocubo", url: "https://www.stocubo.de/de/" },
    { name: "STUR", url: "https://sturcookware.de/" },
    { name: "World of Coffee", url: "https://www.worldofcoffee.org/" },
    { name: "yamo", url: "https://yamo.bio/" },
  ];

  const listContainer = document.getElementById("partner-list");

  if (listContainer) {
    listContainer.innerHTML = "";

    partners.forEach((partner) => {
      const li = document.createElement("li");
      const link = document.createElement("a");

      link.href = partner.url;
      link.textContent = partner.name;

      link.target = "_blank";

      li.appendChild(link);
      listContainer.appendChild(li);
    });

  } else {
    console.error("Error: Could not find #partner-list in the HTML.");
  }
}
