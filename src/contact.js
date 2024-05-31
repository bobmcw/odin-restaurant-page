const contact = (who,role,phone,mail) =>{
    const contactcard = document.createElement("div");
    contactcard.classList.add("contactCard");
    const header = Object.assign(document.createElement("h2"),{innerText: who});
    const role2 = Object.assign(document.createElement("p"),{innerText: role});
    const phone2 = Object.assign(document.createElement("p"),{innerText: phone});
    const mail2 = Object.assign(document.createElement("p"),{innerText: mail});
    contactcard.append(header,role2,phone2,mail2);
    return contactcard;
}
export default function renderContact(){
    const contactbody = document.createElement("div");
    contactbody.classList.add("contact");
    contactbody.appendChild(contact("Bob Mc","Manager","123-45678","bob@email.com"));
    contactbody.appendChild(contact("Baba Booey","Lead cook","567-8900","ilovecooking@email.com"));
    contactbody.appendChild(contact("Place Holder","Placeholder","000-0000","placeholder@email.com"));
    return contactbody;

}