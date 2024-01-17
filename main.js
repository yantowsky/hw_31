let divBlock = document.querySelector(".block");
console.log(divBlock);

function getPositionLeft() {
    let positLeft = Math.round(Math.random() * window.innerWidth);
    return (positLeft < (window.innerWidth - divBlock.clientWidth)) ? positLeft : (positLeft -= divBlock.clientWidth);
}

function getPositionTop() {
    let positTop = Math.round(Math.random() * window.innerHeight);
    return (positTop < (window.innerHeight - divBlock.clientHeight)) ? positTop : (positTop -= divBlock.clientHeight);
}

function getRgbNumColor() {
    return Math.round(Math.random() * 255);
}

setInterval(() => {
    divBlock.style.setProperty("left", `${getPositionLeft()}px`);
    divBlock.style.setProperty("top", `${getPositionTop()}px`);
}, 1000);

setInterval(() => {
    divBlock.style.backgroundColor = `rgb(${getRgbNumColor()}, ${getRgbNumColor()}, ${getRgbNumColor()})`;
}, 500);