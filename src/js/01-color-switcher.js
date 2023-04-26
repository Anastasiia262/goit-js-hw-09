const refs = {};
refs.body = document.querySelector('body');
refs.start = document.querySelector('[data-start]');
refs.stop = document.querySelector('[data-stop]');

refs.start.addEventListener('click', changeColor);
refs.stop.addEventListener('click', stopChangeColor);

let colorMexanizm = null;
let isActiveFunction = false;


function changeColor() {
    if (!isActiveFunction) {
        isActiveFunction = true;

        colorMexanizm = setInterval(() => {
            refs.body.style.backgroundColor = getRandomHexColor()
        }, 1000);
    }
};

function stopChangeColor() {
    clearInterval(colorMexanizm);
    isActiveFunction = false;
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
