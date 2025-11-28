function creatHeader() {
  const header = document.createElement("header");
  header.innerHTML = `<section class=" font-outfit w-full fixed z-50 md:fixed md:z-50">
  <header

    class="font-outfitmt-12 md:mt-7 md:mx-9 lg:mt-5 lg:mx-9 mx-5 flex justify-between items-center lg:justify-between mt-10"

  >

    <div class="text-0.9 md:text-2xl block lg:pt-3">

      <p>DE</p>

      <p>EN</p>

    </div>



    <div>

      <img

        src="/src/assets/images/Vector 5.png"

        class="relative ml-5 lg:hidden"

        alt="Baumeister Logo"

      />

      <p class="absolute top-10 md:top-9 lg:top-14 lg:left-[31rem] ml-9 font-semibold text-2 lg:2rem">

        Baumeister

      </p>

    </div>



    <div

      class="menuList text-2 hidden lg:block lg:text-2xl lg:relative lg:top-0 lg:left-0 absolute top-40 space-y-3 left-28 md:left-72 text-center lg:text-right text-secondary lg:text-black md:text-5xl md:space-y-10 lg:space-y-0"

    >

      <p>About</p>

      <p>Services</p>

      <p id="references">References</p>

      <p>Contact</p>

    </div>

    <div class="lg:hidden">

      <div class="menu">

        <img

          src="/src/assets/images/Menu button.png"

          alt="Humburger Menu Button"

          class="w-10 h-1.4 md:w-3.9 md:h-2.3"

        />

      </div>

      <div class="close-menu hidden relative bottom-1">

        <img

          src="/src/assets/images/Close Button.png"

          alt="Close Menu Button"

          class="w-10 h-1.8 md:w-3.9 md:h-2.8"

        />

      </div>

    </div>

  </header>
</section>
`;
  return header;
}
document.body.prepend(creatHeader());

const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");
const menuLists = document.querySelector(".menuList");
const toggle = () => {
  [menu, closeMenu].forEach((element) => element.classList.toggle("hidden"));
  menuLists.classList.toggle("hidden");
};
menu.addEventListener("click", toggle);
closeMenu.addEventListener("click", toggle);
const references = document.getElementById("references");
references.addEventListener("click", () => {
  window.location.href = "references.html";
});
