import renderHome from "./home";

const renderPage = (page) => { 
    const content = document.querySelector('#content');
    content.innerHTML = "";
    content.appendChild(page);
}

export default function renderHeader(){
    const header = document.querySelector("header");
    const home = document.createElement("button");
    home.classList.add("navbutton");
    home.innerText = "Home";
    home.addEventListener("click",() =>{
        renderPage(renderHome());
    });
    header.appendChild(home);
}