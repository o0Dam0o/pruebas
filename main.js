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
	console.log(productos);
	let opt = parseInt(
		prompt(`Editar un producto\n
		1.Nombre del producto\n
		2.Descripcion del Producto\n
		3.Precio del Producto\n
		4.Eliminar Producto
		`)
	);
	switch (opt) {
		case 1:
			opc = prompt("Nuevo Nombre = ");
			productos[o].nombre = opc;
			break;
		case 2:
			opc = prompt("Nueva Descripcion = ");
			productos[o].descripcion = opc;
			break;
		case 3:
			opc = parseInt(prompt("Nuevo Precio = "));

			productos[o].precio = opc;
			break;
		case 4:
			delete productos[o];
			alert("Eliminado");
			break;
		default:
			break;
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
				let iva = parseInt(prompt("Queres Agregar el IVA 21% ?"));
				if ((iva.toLowerCase = "si")) {
					for (const producto of productos) {
						producto.iva21();
						alert(`precion con iva $${producto.precio}`);
					}
				}
				break;
			case 2:
				buscarArticulo();
				break;
			case 3:
				console.log(productos);
				for (const producto of productos) {
					alert(
						"nombre de los producotos :" +
							producto.nombre +
							"y su precios $" +
							producto.precio
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
