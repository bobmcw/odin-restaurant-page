import img1 from './images/1.jpeg';
const menuItem = (itemname,description,imagesrc) => {
    const item = document.createElement("div");
    const header = document.createElement("h4");
    header.innerText = itemname;
    const desc = document.createElement("p");
    desc.innerText = description;
    const image = document.createElement("img");
    image.src = imagesrc;
    item.appendChild(header);
    item.appendChild(desc);
    item.appendChild(image);
    return item;
}
export default function renderMenu(){
    const menuBody = document.createElement("div");
    const beverageHeader = document.createElement("h3");
    const beverages = document.createElement("div");
    beverageHeader.innerText = "Beverages";
    beverages.appendChild(beverageHeader);
    beverages.appendChild(menuItem("coffee","a tasty black coffee to start your day off!",img1));
    menuBody.appendChild(beverages);
    return menuBody;
}