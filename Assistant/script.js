const buttons = document.querySelectorAll('.move-button');
const buttonCont = document.querySelector('.container');
const movingImage = document.querySelector('.img-cont');
const desc = document.querySelector('p');

const buttonTexts = [
    "This is button one. it returns a value of one",
    "This is button two. it returns a value of two",
    "This is button three. it returns a value of three",
    "This is button four. it returns a value of four",
    "This is button five. it returns a value of five",
    "This is button six. it returns a value of six"
];

buttons.forEach((button, index) => {
    const buttonRect = button.getBoundingClientRect();
    const buttonContRect = buttonCont.getBoundingClientRect();

    const x = buttonRect.left - buttonContRect.left;
    const y = buttonRect.top - buttonContRect.top;

    button.setAttribute('data-x', x);
    button.setAttribute('data-y', y);

    button.addEventListener('click', (e) => {
        const x = parseInt(e.target.getAttribute('data-x'));
        const y = parseInt(e.target.getAttribute('data-y'));


        movingImage.style.left = x + "px";
        movingImage.style.top = y + 300 + "px";
        const buttonText = buttonTexts[index];
        desc.textContent = buttonText;
    });
});
