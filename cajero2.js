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

class Billete
{
	constructor(v, c)
	{
		this.valor = v;
		this.cantidad = c;
		this.imagen = new Image();
		this.imagen.src = imagenes[this.valor];
	}
}

var caja = [];
	caja.push(new Billete(1000, 10));
	caja.push(new Billete(500, 10));
	caja.push(new Billete(200, 10));
	caja.push(new Billete(100, 10)); //125
	caja.push(new Billete(50, 10));
	caja.push(new Billete(20, 10)); //30
	caja.push(new Billete(10, 10));
	caja.push(new Billete(5, 10));	
	caja.push(new Billete(2, 10));	
	caja.push(new Billete(1, 10));	

contar();

var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero()
{
	var dibujado = [];
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);
	if (total >= dinero)
	{
		for(bi of caja)
		{
			if (dinero > 0)
			{
				div = Math.floor(dinero/bi.valor);
				if (div>bi.cantidad)
				{
					papeles = bi.cantidad;
				}
				else
				{
					papeles = div;
				}
					bi.cantidad = bi.cantidad-papeles;
				for (var i = 0; i < papeles; i++)
				{
					dibujado.push ( new Billete(bi.valor, 1) );
				}
				dinero -= (bi.valor * papeles);
			}
		}
		if (dinero == 0)
		{
			resultado.innerHTML += "Se ha retirado: <br />";
			for(var e of dibujado)
			{		
				resultado.innerHTML += "<img src=" + e.imagen.src + " />";
			}
			resultado.innerHTML += "<hr />";
		contar();	
		}
		else
		{
			resultado.innerHTML += "No tengo los billetes para esa suma, intenta otro valor <hr />";
		}

	}
	else
	{
		resultado.innerHTML += "Soy un cajero pobre y no tengo dinero :( <hr />";
	}	
}

function contar()
{
	total = 0
	for (var tot of caja)
	{
		total = total + tot.valor * tot.cantidad;
	}
	console.log(total);
}