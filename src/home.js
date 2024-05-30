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
    };
const createDay = (day,opening,closing) =>{
    const line = document.createElement("p");
    line.innerText = `${day}: ${opening}am - ${closing}pm`
    return line;
}
const info = () =>{
    const infobody = document.createElement("div");
    const header = document.createElement("h2");
    header.innerText = "Hours we are open!";
    infobody.appendChild(header);
    infobody.appendChild(createDay("Sunday",8,8));
    infobody.appendChild(createDay("Monday",8,6));
    infobody.appendChild(createDay("Tuesday",8,6));
    infobody.appendChild(createDay("Wednesday",8,6));
    infobody.appendChild(createDay("Thursday",8,6));
    infobody.appendChild(createDay("Friday",8,9));
    infobody.appendChild(createDay("Saturday",8,9));
    return infobody; 
}
const location = () => {
    const locationbody = document.createElement("div");
    const header = document.createElement("h3");
    header.innerText = "Location";
    const text = document.createElement("p");
    text.innerText = "123 Main street New York City NY";
    locationbody.appendChild(header);
    locationbody.appendChild(text);
    return locationbody;
}

export default function renderHome() {
    const homeBody = document.createElement("div");
    homeBody.classList.add("home");

    const header = document.createElement("h1");
    header.innerText = "Welcome to our kitchen!";
    homeBody.appendChild(header);
    homeBody.appendChild(galery())
    homeBody.appendChild(info())
    homeBody.appendChild(location())

    return homeBody;
}