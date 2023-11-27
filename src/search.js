import searchPeople from "./searchPeople.js";
import people from "./array.js";

const searchPeopleOnPage = () => {
    const searchField = document.getElementById("searchField").value;
    const searchValue = document.getElementById("searchValue").value;
    const searchResultElement = document.getElementById("searchResult");

    if (searchField && searchValue) {
        searchPeople(people, searchField, searchValue)
            .then((results) => {searchResultElement.innerHTML = `Результати пошуку:<br>${results.map((person) => JSON.stringify(person)).join(" ")}`;})
            .catch((error) => {searchResultElement.textContent = `Помилка: ${error}`;});
    } else {
        searchResultElement.textContent = "Заповніть обидва поля";
    }
}
let search = document.getElementById("search")
search ? search.onclick = () => searchPeopleOnPage() : null;


/*=====Task 8=====*/
searchPeople(people, 'name', 'Person 5')
    .then(result => {console.log("Результати пошуку:", result); return result})
    .then(result => result.forEach(element => {
        console.log(element.greeting(), element.getInfo('gender'))}))
    .catch(error => console.error("Помилка:", error));
searchPeople(people, 'age', 35)
    .then(result => {console.log("Результати пошуку:", result); return result})
    .then(result => result.forEach(element => {
        console.log(element.greeting(), element.getInfo('gender'))}))
    .catch(error => console.error("Помилка:", error));
searchPeople(people, 'weight', 55)
    .then(result => {console.log("Результати пошуку:", result); return result})
    .then(result => result.forEach(element => {
        console.log(element.greeting(), element.getInfo('gender'))}))
    .catch(error => console.error("Помилка:", error));