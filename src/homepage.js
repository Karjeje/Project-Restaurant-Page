import picture from "./waffle.jpeg";

function loadHomepage() {

    const container = document.querySelector("#content");

    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Vafankulo's Diner";

    const wafflePic = document.createElement("img");
    wafflePic.src = picture;

    const description = document.createElement("p");
    description.textContent = "The best wuaffles in town buddyahil!"

    container.appendChild(restaurantName);
    container.appendChild(wafflePic);
    container.appendChild(description);

}

export {loadHomepage}