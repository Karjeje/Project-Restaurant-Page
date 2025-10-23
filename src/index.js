import "./styles.css";
import {loadHomepage} from "./homepage.js";
import { loadMenu } from "./menu.js";
import { loadContactpage } from "./contact.js";

console.log("vafankulo")

const homeBtn = document.querySelector(".homebutton");
const menuBtn = document.querySelector(".menubutton");
const contactBtn = document.querySelector(".contactbutton");
const container = document.querySelector("#content")

homeBtn.addEventListener("click", function() {
    container.innerHTML = "";
    loadHomepage();
});

menuBtn.addEventListener("click", function() {
    container.innerHTML = "";
    loadMenu();
});

contactBtn.addEventListener("click", function() {
    container.innerHTML = "";
    loadContactpage();
});

