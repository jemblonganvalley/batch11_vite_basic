import Navbar from "./src/components/Navbar";
import "./src/index.css";
import RenderAbout from "./src/pages/About";
import RenderHome from "./src/pages/Home";

let { pathname } = new URL(window.location.href);

document.body.prepend(Navbar());

// ROUTING 
switch(pathname){
  case "/":
    RenderHome();
    break;

  case "/about":
    RenderAbout()
    break;

  default:
    console.info("page tidak ditemukan !");
}






