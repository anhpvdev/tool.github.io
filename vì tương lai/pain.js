let canvas;
let ctx;
let rawImage;
let pos = {x:0, y:0};
var d = 0;


function startdraw(){
    d = 1;
    document.getElementById('canvas').style.zIndex = '3'
}
function enddraw(){
    d = 0
    document.getElementById('canvas').style.zIndex = '1'
}

function save(){
    raw = tf.browser.fromPixels(rawImage, 1);
    resize = tf.image.resizeBilinear(raw, [20,20]);
    tensor = resize.expandDims(0);
    tensor.print();
}

function getPosition(e){
    // pos.x = e.clientX - canvas.getBoundingClientRect().left
    // pos.y = e.clientY - canvas.getBoundingClientRect().top
    pos.x = e.pageX - canvas.getBoundingClientRect().left;
    pos.y = e.pageY - canvas.getBoundingClientRect().top;
    console.log(pos.x,pos.y)
}

function pain(e){
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d');
    canvas.addEventListener('mousedown',getPosition)
    canvas.addEventListener('mousemove',draw)
    
    rawImage =  document.getElementById('canvas-img')
    clear = document.getElementById('clear')
    
}

function draw(e){
   if(d==1){
    if(e.buttons !=1) return;
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.lineCap= 'round';
    // ctx.style = 'white';
    ctx.strokeStyle = 'white'
    ctx.moveTo(pos.x,pos.y)
    getPosition(e);
    ctx.lineTo(pos.x, pos.y)
    ctx.stroke();
    
    rawImage.src = canvas.toDataURL('image/png')
   }
}
document.addEventListener('DOMContentLoaded', pain)

clear.addEventListener('click', function(){
    var canvas = canvas.getBoundingClientRect()[0]
    ctx.clearRect(0,0,800, 2000)
})