const inputName = document.querySelector(".inputName");
const newGameButton = document.querySelector(".newGameButton");
const newGameForm = document.querySelector(".newGameForm");


function validateInput(event) { 
    if (event.target.value.length >= 3) {
        newGameButton.removeAttribute("disabled")
    } else {
        newGameButton.setAttribute("disabled", "true")
    } 
}

function handleSubmintNewGame(event) {
    event.preventDefault()
    console.log(inputName.value);
    localStorage.setItem("@memoryGame:playerName", inputName.value)
    inputName.value = "";

    window.location.href = "pages/cards.html";

}

inputName.addEventListener("input", validateInput);
newGameForm.addEventListener("submit", handleSubmintNewGame);

localStorage.removeItem("myKeyAplication")