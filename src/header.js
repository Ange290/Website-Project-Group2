function createHeader() {
  const isGreen = window.location.pathname.includes("/sections/") || 
                  window.location.pathname.includes("contact.html") || 
                  window.location.pathname.includes("references.html");

  const textColorClass = isGreen ? "text-green-800" : "text-black";
  const logoColorClass = isGreen ? "text-green-800" : ""; 
  const menuButtonSrc = isGreen ? "/src/assets/images/greenbtn.png" : "/src/assets/images/Menu button.png";
  
  const aboutLink = isGreen ? "/index.html#about" : "#about";
  const serviceLink = isGreen ? "/index.html#service" : "#service";
  const referencesLink = "/src/sections/references.html";
  const contactLink = "/src/sections/contact.html";

  const header = document.createElement("header");
  header.innerHTML = `
    <div class="mobile-menu hidden lg:hidden fixed inset-0 z-40">
      <div class="font-outfit flex flex-col items-center justify-start pt-28 space-y-12 text-4xl md:text-6xl font-semibold text-[#00672E]">
        <a href="${aboutLink}">About</a>
        <a href="${serviceLink}">Services</a>
        <a href="${referencesLink}">References</a>
        <a href="${contactLink}">Contact</a>
      </div>
    </div>

    <nav class="font-outfit w-full fixed top-0 left-0 z-50 bg-transparent">
      <div class="relative flex justify-between items-center px-5 pt-5 md:px-9 md:pt-5 lg:items-start lg:px-12 lg:pt-4">
        <div class="text-sm md:text-base lg:text-lg font-medium z-50 ${textColorClass}">
          <p class="cursor-pointer hover:opacity-70 leading-tight">DE</p>
          <p class="cursor-pointer hover:opacity-70 leading-tight">EN</p>
        </div>

        <div class="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:top-7 z-50">
          <div class="relative lg:hidden">
            <img src="/src/assets/images/Vector 5.png" class="w-40 md:w-52" alt="Baumeister Logo Background" />
            <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-xl md:text-2xl whitespace-nowrap ${logoColorClass}">Baumeister</p>
          </div>
          <p class="hidden lg:block font-semibold text-4xl xl:text-5xl whitespace-nowrap ${logoColorClass}">Baumeister</p>
        </div>

        <div class="menuList hidden lg:flex lg:flex-col lg:items-end lg:text-lg xl:text-xl font-medium z-50">
          <a href="${aboutLink}" class="${textColorClass} font-medium hover:opacity-70 transition-opacity">About</a>
          <a href="${serviceLink}" class="${textColorClass} font-medium hover:opacity-70 transition-opacity">Services</a>
          <a href="${referencesLink}" class="${textColorClass} font-medium hover:opacity-70 transition-opacity">References</a>
          <a href="${contactLink}" class="${textColorClass} font-medium hover:opacity-70 transition-opacity">Contact</a>
        </div>

        <div class="lg:hidden z-50 flex items-center">
          <div class="menu-btn cursor-pointer">
            <img src="${menuButtonSrc}" alt="Menu" class="w-10 h-auto md:w-12" />
          </div>
          <div class="close-btn hidden cursor-pointer ml-2">
            <img src="/src/assets/images/Close Button.png" alt="Close" class="w-10 h-auto md:w-12" onerror="this.style.display='none'" />
          </div>
        </div>
      </div>
    </nav>
  `;
  return header;
}

document.body.prepend(createHeader());

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");

function toggleMenu() {
  if (!menuBtn || !closeBtn || !mobileMenu) return;
  menuBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
  if (!mobileMenu.classList.contains("hidden")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

const mobileLinks = mobileMenu.querySelectorAll("a");
for (let i = 0; i < mobileLinks.length; i++) {
  mobileLinks[i].addEventListener("click", toggleMenu);
}
