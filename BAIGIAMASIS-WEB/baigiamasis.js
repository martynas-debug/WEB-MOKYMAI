let calculateButton = document.getElementById('calculate');

let numbers = document.getElementById('numbers');

let isActive = false;

let num = 0;

function toogleActive () {
    isActive = !isActive;
    calculateButton.textContent = isActive ? "baigti": "pradeti";
    num = 0;
}

setInterval(() => {
    if (isActive) {
        num++
        numbers.textContent = num;
    }
}, 0);