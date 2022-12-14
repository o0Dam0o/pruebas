class Productos {
	constructor(nombre, descripcion, precio, stock, comprar, vender) {
		this.nombre = nombre.toUpperCase();
		this.descripcion = descripcion.toLowerCase();
		this.stock = parseInt(stock);
		this.precio = parseFloat(precio);
		this.comprar = parseInt(comprar);
		this.vender = parseInt(vender);
	}
	iva21() {
		this.precio = this.precio * 1.21;
	}
	mostrarDatos() {
		alert(productos[0].nombre);
	}
	comprarProducto() {
		this.stock = this.stock + this.comprar;
	}
	verderProducto() {
		this.stock = this.stock - this.vender;
	}
}
const productos = [];
function addArticulos() {
	let cantidad = parseInt(prompt("Cuantos Productos vas a crear ?"));
	for (let i = 1; i <= cantidad; i++) {
		productos.push(
			new Productos(
				prompt("Nombre del producto " + i),
				prompt("Descripcion del producto " + i),
				prompt("Precio del producto " + i),
				prompt("Stock del producto " + i),
				0,
				0
			)
		);
	}
}
let obj = "";
let indes = 0;

function buscarArticulo(obj) {
	obj = prompt("Busca por nombre del producto ?");
	for (const producto of productos) {
		if (producto.nombre == obj.toUpperCase()) {
			alert("Encontrado");
			break;
		}
	}
	console.log(obj);
	const o = productos.findIndex((element) => {
		return element.nombre === obj.toUpperCase();
	});
	console.log(o);
	editar(o);
}
function editar(o) {
	let encendido = true;
	while (encendido) {
		console.log(productos);
		let opt = parseInt(
			prompt(`Editar un producto\n
		1.Nombre del producto\n
		2.Descripcion del Producto\n
		3.Precio del Producto\n
		4.Eliminar Producto\n
		5.Volver al Menu
		`)
		);
		switch (opt) {
			case 1:
				opc = prompt("Nuevo Nombre = ");
				productos[o].nombre = opc;
				alert(`Nombre de Producto: ${productos[o].nombre}`);
				break;
			case 2:
				opc = prompt("Nueva Descripcion = ");
				productos[o].descripcion = opc;
				alert(
					`Nombre de Producto: ${productos[o].nombre}\nDescripcion : ${productos[o].descripcion}`
				);
				break;
			case 3:
				opc = parseInt(prompt("Nuevo Precio = "));
				productos[o].precio = opc;
				alert(
					`Nombre de Producto: ${productos[o].nombre}\nPrecio : $${productos[o].precio}`
				);
				break;
			case 4:
				productos.splice(o, 1);
				console.log(o);
				console.log(productos);
				alert("Eliminado");
				menu();
			default:
				encendido = false;
				break;
		}
	}
	console.log(productos);
}

let encendido = true;
function menu() {
	while (encendido) {
		let opciones = parseInt(
			prompt(
				`Bienvenido\n
		1.Agregar articulos\n
		2.Editar articulos\n
		3.Ver articulos\n
		4.Salir`
			)
		);
		switch (opciones) {
			case 1:
				addArticulos();
				let iva = prompt("Queres Agregar el IVA 21% ?\n-Si\n-No");
				if (iva.toLowerCase() == "no") {
					for (const producto of productos) {
						alert(
							`Nombre de Producto ${producto.nombre}\nPrecio sin iva: $${producto.precio}`
						);
					}
				} else if (iva.toLowerCase() == "si") {
					for (const producto of productos) {
						producto.iva21();
						alert(
							`Nombre de Producto ${producto.nombre}\nPrecio con iva: $${producto.precio}`
						);
					}
				} else {
					alert("error de caracter seras llevado al menu ");
					menu();
				}
				console.log(iva);
				break;
			case 2:
				buscarArticulo();
				break;
			case 3:
				console.log(productos);
				for (const producto of productos) {
					alert(
						`Nombre del producoto: ${producto.nombre} \nDescripcion: ${producto.descripcion}\nPrecios: $${producto.precio}`
					);
				}
				break;
			case 4:
				alert("Hasta la Proxima");
				encendido = false;
				break;
			default:
				break;
		}
	}
}
menu();
