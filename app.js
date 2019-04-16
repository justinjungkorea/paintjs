const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");
const color = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");

context.strokeStyle = "black";
context.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPaining(){
    painting = true;
}

function onMouseMove(e){
    const x = e.offsetX;
    const y = e.offsetY;

    if(!painting){
        context.beginPath();
        context.moveTo(x, y);
    }
    else{
        context.lineTo(x, y);
        context.stroke();
    }
}

function handleColorClick(e){
    const palette = e.target.style.backgroundColor;
    context.strokeStyle = palette;
}

function pencil(e){
    context.lineWidth = range.value;
}

if(canvas){ 
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPaining);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(color).forEach(temp => temp.addEventListener('click', handleColorClick));

range.addEventListener('click',pencil);