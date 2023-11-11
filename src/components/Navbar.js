

export default function Navbar(){
    let nav = document.createElement("nav");
    nav.setAttribute("class", "w-screen h-12 flex items-center px-4 bg-orange-500 text-white fixed top-0 left-0 shadow-md");

    let navTitle = document.createElement("h1");
    navTitle.setAttribute("class", "font-bold text-white uppercase text-3xl select-none");
    navTitle.textContent = "jvalley";

    // navigasi
    let menu = document.createElement("menu");
    let menuHome = document.createElement("a");
    let menuAbout = document.createElement("a");

    menu.setAttribute("class", "flex items-center ml-auto gap-4 font-thin");

    menuHome.textContent = "HOME";
    menuHome.setAttribute("href", "/");

    menuAbout.textContent = "ABOUT";
    menuAbout.setAttribute("href", "/about");

    menu.appendChild(menuHome);
    menu.appendChild(menuAbout);

    nav.appendChild(navTitle);
    nav.appendChild(menu);

    return nav
}