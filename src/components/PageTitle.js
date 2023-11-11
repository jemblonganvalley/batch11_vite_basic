

export function PageTitle(content){
    let h1 = document.createElement("h1");
    h1.setAttribute("class", "font-thin text-2xl text-orange-500");
    h1.textContent = content;
    return h1;
}

