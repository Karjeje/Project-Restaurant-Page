function loadMenu() {

    const container = document.querySelector("#content");

    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "Menu"

    const beverages = document.createElement("div");
    beverages.classList.add("beverages")
    const beveragesTitle = document.createElement("h2");
    beveragesTitle.textContent = "Beverages";

    const beverageOne = document.createElement("div");
    beverageOne.classList.add("item");
    const beverageOneTitleAndPrice = document.createElement("div");
    beverageOneTitleAndPrice.classList.add("titleandprice");
    const beverageOneTitle = document.createElement("h3")
    beverageOneTitle.textContent = "Waffle Smoothie";
    const beverageOnePrice = document.createElement("span");
    beverageOnePrice.textContent = "5$"
    const beverageOneDescription = document.createElement("p")
    beverageOneDescription.textContent = "A powerful smoothie full of wuaffles buddyashil!";


    const waffles = document.createElement("div");
    waffles.classList.add("waffles");
    const wafflesTitle = document.createElement("h2");
    wafflesTitle.textContent = "Wuaffles";

    const waffleOne = document.createElement("div");
    waffleOne.classList.add("item");
    const waffleOneTitleAndPrice = document.createElement("div");
    waffleOneTitleAndPrice.classList.add("titleandprice");
    const waffleOneTitle = document.createElement("h3")
    waffleOneTitle.textContent = "Buddy Waffle";
    const waffleOnePrice = document.createElement("span");
    waffleOnePrice.textContent = "10$"
    const waffleOneDescription = document.createElement("p")
    waffleOneDescription.textContent = "For the best buddies buddyashile!";

    const waffleTwo = document.createElement("div");
    waffleTwo.classList.add("item");
    const waffleTwoTitleAndPrice = document.createElement("div");
    waffleTwoTitleAndPrice.classList.add("titleandprice");
    const waffleTwoTitle = document.createElement("h3")
    waffleTwoTitle.textContent = "Buddyahile Waffle";
    const waffleTwoPrice = document.createElement("span");
    waffleTwoPrice.textContent = "12$"
    const waffleTwoDescription = document.createElement("p")
    waffleTwoDescription.textContent = "For the biggest buddyashile fans!";

    waffleOneTitleAndPrice.appendChild(waffleOneTitle);
    waffleOneTitleAndPrice.appendChild(waffleOnePrice);
    waffleOne.appendChild(waffleOneTitleAndPrice);
    waffleOne.appendChild(waffleOneDescription);

    waffleTwoTitleAndPrice.appendChild(waffleTwoTitle);
    waffleTwoTitleAndPrice.appendChild(waffleTwoPrice);
    waffleTwo.appendChild(waffleTwoTitleAndPrice);
    waffleTwo.appendChild(waffleTwoDescription);

    waffles.appendChild(wafflesTitle);
    waffles.appendChild(waffleOne);
    waffles.appendChild(waffleTwo);

    beverageOneTitleAndPrice.appendChild(beverageOneTitle);
    beverageOneTitleAndPrice.appendChild(beverageOnePrice);
    beverageOne.appendChild(beverageOneTitleAndPrice);
    beverageOne.appendChild(beverageOneDescription);

    beverages.appendChild(beveragesTitle);
    beverages.appendChild(beverageOne);

    container.appendChild(pageTitle);
    container.appendChild(beverages);
    container.appendChild(waffles);
    
}

export {loadMenu};