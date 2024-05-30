import img1 from './images/1.jpeg';
import img2 from './images/2.jpeg';
import img3 from './images/3.jpeg';
const images = [img1,img2,img3]
const galery = () => {
    const galeryObject = document.createElement("div");
    galeryObject.classList.add("galery")
    images.forEach(element => {
        const image = document.createElement("img");
        image.src = element;
        galeryObject.appendChild(image);
    });    
    return galeryObject;
    }

export default function renderHome() {
    const homeBody = document.createElement("div");
    homeBody.classList.add("home");

    const header = document.createElement("h1");
    header.innerText = "Welcome to my kitchen!";
    homeBody.appendChild(header);
    homeBody.appendChild(galery())

    return homeBody;
}