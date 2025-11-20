class AgenturFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="mt-[60rem] font-outfit w-full p-3 md:mt-[70rem] lg:mt-20 md:p-6 lg:p-8 text-[#050505] text-base leading-snug">
        
        <img
            class="pb-14 px-20 md:mx-auto lg:pt-[20rem]"
            src="/src/assets/images/Vector 7.svg"
            alt="red for footer"
        />

        <footer class="w-full grid grid-cols-4 lg:grid-cols-5 gap-y-4 md:gap-y-6 lg:gap-y-0 items-end lg:items-start">
            
            <div class="col-span-4 md:col-span-2 lg:col-span-1 order-1 justify-self-start text-left mb-10 md:mb-0 md:self-start">
                <h3 class="font-bold text-lg mb-1">Agentur Baumeister</h3>
                <p class="font-bold text-base">Böckhstraße 13</p>
                <p class="font-bold text-base">10967 Berlin</p>
            </div>

            <div class="col-span-4 md:col-span-2 lg:col-span-1 order-2 mb-10 md:mb-0 md:text-right justify-self-start md:justify-self-end lg:justify-self-start text-left lg:text-left md:self-start">
                <a href="mailto:hallo@agentur-baumeister.com" class="block font-bold text-base underline underline-offset-4 decoration-1 mb-1">
                    hallo@agentur-baumeister.com
                </a>
                <p class="font-bold text-base">+49 (0)30 - 490 827 87</p>
            </div>

            <div class="col-span-1 flex justify-center order-5 lg:order-3 lg:col-span-1">
                <a href="#" class="hover:opacity-70 text-base font-bold">LinkedIn</a>
            </div>

            <div class="col-span-1 flex justify-end lg:justify-center order-6 lg:order-4 lg:col-span-1">
                <a href="#" class="hover:opacity-70 text-base font-bold">Instagram</a>
            </div>

            <div class="contents lg:flex lg:flex-col lg:col-span-1 lg:order-5 lg:justify-self-end lg:items-end lg:text-right">
                <div class="col-span-1 flex justify-center lg:justify-end order-4 lg:order-1 lg:mb-0">
                    <a href="#" class="hover:opacity-70 text-base font-bold">Impressum</a>
                </div>

                <div class="col-span-1 flex justify-start lg:justify-end order-3 lg:order-2">
                    <a href="#" class="hover:opacity-70 text-base font-bold">Datenschutz</a>
                </div>
            </div>
        </footer>
      </div>
    `;
  }
}

customElements.define("app-footer", AgenturFooter);
