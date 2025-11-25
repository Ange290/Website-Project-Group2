const body = document.body;
body.classList.add("md:px-8","lg:px-20");
const header = document.createElement("header");
header.classList.add("font-outfit", "text-green-800", "px-6", "pt-8");
body.appendChild(header);

//  small and large screens, hidden on medium 
const heading = document.createElement("h1");
heading.textContent = "IMPRINT";
heading.classList.add("block", "text-2xl", "font-bold", "pb-2", "md:hidden","lg:block","lg:text-2xl");
header.appendChild(heading);

// Hidden on small and large screens, visible on medium 
const heading2 = document.createElement("h1");
heading2.textContent = "IMPRESSUM";
heading2.classList.add("hidden", "md:block", "md:text-xl", "font-bold", "pb-2","lg:hidden");
header.appendChild(heading2);

const p1 = document.createElement("p");
p1.innerHTML = ` <strong>Agentur Baumeister</strong><br>
    Katrin Baumeister<br>
    Böckhstraße 13<br>
    10967 Berlin<br><br>`
p1.classList.add("pt-4","text-2xl","md:text-3xl", "lg:text-5xl");
header.appendChild(p1);

//flex
const bigDiv = document.createElement("div");
bigDiv.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3","lg:gap-x-20");

//first div
const container = document.createElement("div");
container.classList.add("font-outfit", "text-green-800","pt-2","md:pt-10", "pb-8","px-6","md:text-left", "lg:col-span-2");

const p2 = document.createElement("p");
p2.innerHTML = `+49 (0)30 - 490 827 87<br>
hallo@agentur-baumeister.com`
p2.classList.add("text-2xl","pb-6","md:text-3xl", "lg:text-5xl","lg:pb-16");
container.appendChild(p2);

const p3 = document.createElement("p");
p3.innerHTML = `<strong>UST-IDNR.</strong><br>
DE 274 486 923`
p3.classList.add("text-2xl","pb-6", "md:text-3xl" , "lg:text-5xl","lg:pb-16");
container.appendChild(p3);

const p4 = document.createElement("p");
p4.innerHTML = `<strong>REGISTERED OFFICE</strong><br>
Berlin, Germany`
p4.classList.add("text-2xl","pb-6", "md:text-3xl" , "lg:text-5xl");
container.appendChild(p4);
bigDiv.appendChild(container);

//second div
const container2 = document.createElement("div");
container2.classList.add("font-outfit", "text-green-800", "py-10", "px-6","md:text-right");

const headingDisclaimer = document.createElement("h1"); // Changed from heading2 to headingDisclaimer
headingDisclaimer.textContent = "DISCLAIMER";
headingDisclaimer.classList.add("text-xl", "font-bold","pb-2");
container2.appendChild(headingDisclaimer);

const p5 = document.createElement("p");
p5.innerHTML = `Despite all due care, no liability can be accepted for the accuracy, completeness and up-to-dateness of the information provided. The same applies to third-party websites to which
www.agentur-baumeister.com refers by means of hyperlinks. Katrein Baumeister, Agentur Baumeister accepts no liability for the content of these websites.`;
p5.classList.add("text-2xl","pb-6","pt-4", "md:text-xl","lg:text-xl");
container2.appendChild(p5);
bigDiv.appendChild(container2);
body.appendChild(bigDiv);