var cvs = document.getElementById("menu");
var ctx = cvs.getContext("2d");

var bg = new Image();

bg.src = "img/bg.jpg";

var scaleMenu = 1;

function drawMenu() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    scaleMenu = window.innerWidth / bg.width;
    if(window.innerHeight / bg.height > scaleMenu)
        scaleMenu = window.innerHeight / bg.height;
    ctx.drawImage(bg, 0, 0, scaleMenu * bg.width, scaleMenu * bg.height);
}

let menu = setInterval(drawMenu, 100);