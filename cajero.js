class Billete{
	constructor(v, c){
		this.valor = v;
		this.cantidad = c;
		this.imagen = new Image();
		this.imagen.src = imagenes[this.valor];
	}

	mostrarBilletes(){
		for (var i = 1; i <= this.cantidad; i++) {
			resultado.innerHTML += "<img src='"+this.imagen.src+"' />";
		}
	}
}

function mostrarError(dinero){
	resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad";
	resultado.innerHTML += "Este cajero cuenta con un capital menor a $" + dinero +".<br />";
	resultado.innerHTML += "Intente con una cantidad menor a $" + dinero +".<br />";
}

function contandoBilletes(dinero){
	for(var bi of caja){
		if(dinero > 0){
			div = Math.floor(dinero / bi.valor);
			if(div > bi.cantidad){
				papeles = bi.cantidad;
			}
			else{
				papeles = div;
			}
			entregado.push (new Billete(bi.valor, papeles));
			dinero = dinero - (bi.valor * papeles);
		}
		bi.cantidad -= papeles;
	}
}

function mostrandoBilletes(){
	resultado.innerHTML = "Tome su dinero.<br/>";
	for(var e of entregado){
		if(e.cantidad > 0){
			e.mostrarBilletes();
		}
	}
}

function actualizarCapital(dinero){
	capital -= dinero;
	saldo.innerHTML = "Se cuenta con $" + capital + " pesos.";
}

function entregarDinero(){
	var t = document.getElementById("dinero");
	var lista = "";
	dinero = parseInt(t.value);
	resultado.innerHTML = "";
	if(dinero > capital){
		mostrarError(dinero);
	}
	else{
		actualizarCapital(dinero);
		contandoBilletes(dinero);
		mostrandoBilletes();
		entregado = [];
	}
}

function muestraCapital(){
	saldo.innerHTML = "Se cuenta con $";

	for(var d of caja){
		capital += (d.valor * d.cantidad);
	}

	saldo.innerHTML += capital + " pesos.";
}

var imagenes = [];
imagenes[1000] = "b1000.png";
imagenes[500] = "b500.png";
imagenes[200] = "b200.png";
imagenes[100] = "b100.png";
imagenes[50] = "b50.png";
imagenes[20] = "b20.png";
imagenes[10] = "m10.png";
imagenes[5] = "m5.png";
imagenes[2] = "m2.png";
imagenes[1] = "m1.png";

function muestraCaja(){
	caja.push(new Billete(1000, 100));
	caja.push(new Billete(500, 100));
	caja.push(new Billete(200, 100));
	caja.push(new Billete(100, 100));
	caja.push(new Billete(50, 100));
	caja.push(new Billete(20, 100));
	caja.push(new Billete(10, 100));
	caja.push(new Billete(5, 100));	
	caja.push(new Billete(2, 100));	
	caja.push(new Billete(1, 100));	
}

var caja = [];
var entregado = [];

var dinero = 0;
var div = 0;
var papeles = 0;

var b = document.getElementById("extraer");
var resultado = document.getElementById("resultado");
var saldo = document.getElementById("saldo");

var capital = 0;

muestraCaja();

muestraCapital();

b.addEventListener("click", entregarDinero);
