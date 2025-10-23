function loadContactpage() {

    const container = document.querySelector("#content");

    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "Contact"

    const contactBoxOne = document.createElement("div");
    contactBoxOne.classList.add("item");
    contactBoxOne.classList.add("contact")
    const contactOne = document.createElement("h3");
    contactOne.textContent = "Vafankular";
    const contactOneData = document.createElement("div");
    contactOneData.classList.add("databox")
    const contactOneFunc = document.createElement("span");
    contactOneFunc.textContent = "Chef, Manager, you name it...";
    const contactOneTel = document.createElement("span");
    contactOneTel.textContent = "045...vafankulo";
    const contactOneMail = document.createElement("span");
    contactOneMail.textContent = "vafankulo@gemajel.com"

    container.appendChild(pageTitle);
    container.appendChild(contactBoxOne);
    contactBoxOne.appendChild(contactOne);
    contactBoxOne.appendChild(contactOneData);
    contactOneData.appendChild(contactOneFunc);
    contactOneData.appendChild(contactOneTel);
    contactOneData.appendChild(contactOneMail);
}

export {loadContactpage};