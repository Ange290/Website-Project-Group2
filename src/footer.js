const footerData = {
  address: {
    name: "Agentur Baumeister",
    street: "Böckhstraße 13",
    city: "10967 Berlin",
  },
  contact: {
    email: "hallo@agentur-baumeister.com",
    phone: "+49 (0)30 - 490 827 87",
  },
  links: {
    linkedin: { label: "LinkedIn", url: "#" },
    instagram: { label: "Instagram", url: "#" },
    impressum: { label: "Impressum", url: "#" },
    datenschutz: { label: "Datenschutz", url: "#" },
  },
};

/**
 * RENDER FUNCTION
 * @param {string} targetId - The ID of the div where footer will be injected
 * @param {object} theme - Options for styling (textColor, bgColor, imageSrc)
 */
function renderFooter(targetId, theme = {}) {
  const textColor = theme.textColor || "text-[#050505]";
  const bgColor = theme.bgColor || "bg-[#f2f0ed]";
  const imgPath = theme.imageSrc || "/src/assets/images/Vector 7.svg";

  const container = document.getElementById(targetId);

  if (!container) {
    console.error(`Footer target element with ID '${targetId}' not found.`);
    return;
  }
  const footerHTML = `
        <div class="font-outfit w-full p-3 md:p-6 lg:p-8 ${textColor} text-base leading-snug">
            
            <img
                class="pb-14 px-20 md:mx-auto"
                src="${imgPath}"
                alt="Footer Logo"
            />

            <footer class="w-full grid grid-cols-4 lg:grid-cols-5 gap-y-4 md:gap-y-6 lg:gap-y-0 items-end lg:items-start">
                
                <div class="col-span-4 md:col-span-2 lg:col-span-1 order-1 justify-self-start text-left mb-10 md:mb-0 md:self-start">
                    <h3 class="font-bold text-lg mb-1">${footerData.address.name}</h3>
                    <p class="font-bold text-base">${footerData.address.street}</p>
                    <p class="font-bold text-base">${footerData.address.city}</p>
                </div>

                <div class="col-span-4 md:col-span-2 lg:col-span-1 order-2 mb-10 md:mb-0 md:text-right justify-self-start md:justify-self-end lg:justify-self-start text-left lg:text-left md:self-start">
                    <a href="mailto:${footerData.contact.email}" class="block font-bold text-base underline underline-offset-4 decoration-1 mb-1">
                        ${footerData.contact.email}
                    </a>
                    <p class="font-bold text-base">${footerData.contact.phone}</p>
                </div>

                <div class="col-span-1 flex justify-center order-5 lg:order-3 lg:col-span-1">
                    <a href="${footerData.links.linkedin.url}" class="hover:opacity-70 text-base font-bold">
                        ${footerData.links.linkedin.label}
                    </a>
                </div>

                <div class="col-span-1 flex justify-end lg:justify-center order-6 lg:order-4 lg:col-span-1">
                    <a href="${footerData.links.instagram.url}" class="hover:opacity-70 text-base font-bold">
                        ${footerData.links.instagram.label}
                    </a>
                </div>

                <div class="contents lg:flex lg:flex-col lg:col-span-1 lg:order-5 lg:justify-self-end lg:items-end lg:text-right">
                    
                    <div class="col-span-1 flex justify-center lg:justify-end order-4 lg:order-1 lg:mb-0">
                        <a href="${footerData.links.impressum.url}" class="hover:opacity-70 text-base font-bold">
                            ${footerData.links.impressum.label}
                        </a>
                    </div>

                    <div class="col-span-1 flex justify-start lg:justify-end order-3 lg:order-2">
                        <a href="${footerData.links.datenschutz.url}" class="hover:opacity-70 text-base font-bold">
                            ${footerData.links.datenschutz.label}
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    `;
  container.innerHTML = footerHTML;
}
