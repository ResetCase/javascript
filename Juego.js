document.addEventListener(keydown, function (evento) {
	if(evento.keycode == 32) { 
		console.log('salta')
}
});

var ancho = 7000;
var alto = 300;


var canvas,ctx;

function inicializa(){
	canvas = document.getContext ('2d');

}


function borraCanvas(){
canvas.width = ancho;
canvas.height = alto;
}



//.......................
//bucle principal
var FPS= 10;
setInterval(function(){
	principal ();

},1000/10);


function principal (){
	borraCanvas();

}