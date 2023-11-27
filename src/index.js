import "./style.css";
import * as template from './template/header.mustache';
import Mustache from "mustache";

let html = Mustache.render(template());
document.body.insertAdjacentHTML('afterbegin',html);

const displayGreeting = () => {
    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;
    const currentYear = new Date().getFullYear();

    if (name && !isNaN(parseInt(year)) && year > 0 && year <= currentYear) {
        document.getElementById("greeting").textContent = "Привіт! Мене звати " + name + ", мені " + (currentYear-year) + " років!";
    } else {
        document.getElementById("greeting").textContent = "Дані введено неправильно. Заповніть обидва поля";
    }
}
let display = document.getElementById("displayGreeting");
display ? display.onclick = () => displayGreeting() : null;