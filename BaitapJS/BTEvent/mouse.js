let imgObj = null;
const step = 10;
imgObj = document.getElementById("myImage");
window.onload = init;
function init(){
    imgObj = document.getElementById("myImage");
    imgObj.style.position = 'relative';
    imgObj.style.left = 0;
}
function moveRight(){
    imgObj.style.left = parseInt(imgObj.style.left) + step + "px";
}

