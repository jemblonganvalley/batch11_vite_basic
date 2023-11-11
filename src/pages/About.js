import { PageTitle } from "../components/PageTitle";

export default function RenderAbout(){
    let app = document.getElementById("app");

    // element <a></a>
    let a = document.createElement("a");
    a.textContent = "home";
    a.setAttribute("href", "/");

    app.appendChild(PageTitle("About Page"))
    app.appendChild(a);

}

