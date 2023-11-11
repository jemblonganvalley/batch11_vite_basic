import { PageTitle } from "../components/PageTitle";

function RenderHome(){
    let app = document.getElementById("app");

    // element <a></a>
    let a = document.createElement("a");
    a.textContent = "about";
    a.setAttribute("href", "/about");

    app.appendChild(PageTitle("Home Page"));
    app.appendChild(a);
 
}

export default RenderHome;


