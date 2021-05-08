
const step = 10;
function docReady() {
    let image = document.getElementById('nobita');
    image.style.transition = '2s';
   
    window.addEventListener('keydown', moveSelection);
}
function moveToUp(){
    let image = document.getElementById('nobita');
    image.style.top = parseInt(image.style.top) - step + "px";
}
function moveToRight(){
    let image = document.getElementById('nobita');
    image.style.left = parseInt(image.style.left) + step + "px";
}
function moveToDown(){
    let image = document.getElementById('nobita');
    image.style.top = parseInt(image.style.top) + step + "px";
}
function moveToLeft(){
    let image = document.getElementById('nobita');
    image.style.left = parseInt(image.style.left) - step + "px";
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            moveToLeft();
            break;
        case 38:
            moveToUp();
            
            break;
        case 39:
            moveToRight();
            break;
        case 40:
            moveToDown();
            break;
        default:
            alert("Please press arrow on the keyboard");

    }
}

