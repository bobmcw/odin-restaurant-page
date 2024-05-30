import renderHome from "./home";
import renderMenu from "./menu";

const renderPage = (page) => { 
    const content = document.querySelector('#content');
    content.innerHTML = "";
    content.appendChild(page);
}
const pageRenderButton = (name,page) => {
    const button = document.createElement("button");
    button.classList.add("navbutton");
    button.innerText = `${name}`;
    button.addEventListener("click",() =>{
        renderPage(page);
    });
    return button;
    
}

export default function renderHeader(){
    const header = document.querySelector("nav");
    header.appendChild(pageRenderButton("home",renderHome())); 
    header.appendChild(pageRenderButton("Menu",renderMenu()));
}