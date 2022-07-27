//Calculadora
let num1 = 0;
let num2 = 0;

function menu() {
	let opciones = parseInt(
		prompt(
			`Bienvenido\nQue herramientas queres usar ?\n1.Calculadora\n2.Generador de tablas\n3.Sacar tu promedio\n4.Numero par o impar\n5.Salir`
		)
	);
	if (opciones == 1) {
		calculardora();
	} else if (opciones == 2) {
		tabla();
	} else if (opciones == 3) {
		calificacion();
	} else if (opciones == 4) {
		parImpar();
	} else {
		alert("Hasta luego");
	}
}

function calculardora() {
	let opciones = parseInt(
		prompt(
			"Calculadora\n1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir\n5.Porcertaje\n6.Volver al menu"
		)
	);
	function operaciones(num1, num2, opciones) {
		switch (opciones) {
			case 1:
				return num1 + num2;
				break;
			case 2:
				return num1 - num2;
				break;
			case 3:
				return num1 * num2;
				break;
			case 4:
				return num1 / num2;
				break;
			case 5:
				return (num1 * num2) / 100;
			default:
				return 0;
				break;
		}
	}
	while (opciones != 666) {
		switch (opciones) {
			case 1:
				num1 = parseInt(prompt("Ingrese Numero :"));

				num2 = parseInt(prompt("Ingrese Numero :"));
				alert(`${num1} + ${num2} = ${operaciones(num1, num2, opciones)} `);
				seguir = parseInt(
					prompt("1.Serguir con el calculo\n2.Cambiar tipo de calculo")
				);
				if (seguir == 2) {
					calculardora();
				}
				break;
			case 2:
				num1 = parseInt(prompt("Ingrese Numero :"));

				num2 = parseInt(prompt("Ingrese Numero :"));
				alert(`${num1} - ${num2} = ${operaciones(num1, num2, opciones)} `);
				seguir = parseInt(
					prompt("1.Serguir con el calculo\n2.Cambiar tipo de calculo")
				);
				if (seguir == 2) {
					calculardora();
				}
				break;
			case 3:
				num1 = parseInt(prompt("Ingrese Numero :"));

				num2 = parseInt(prompt("Ingrese Numero :"));
				alert(`${num1} x ${num2} = ${operaciones(num1, num2, opciones)} `);
				seguir = parseInt(
					prompt("1.Serguir con el calculo\n2.Cambiar tipo de calculo")
				);
				if (seguir == 2) {
					calculardora();
				}
				break;
			case 4:
				num1 = parseInt(prompt("Ingrese Numero :"));

				num2 = parseInt(prompt("Ingrese Numero :"));
				alert(`${num1} / ${num2} = ${operaciones(num1, num2, opciones)} `);
				seguir = parseInt(
					prompt("1.Serguir con el calculo\n2.Cambiar tipo de calculo")
				);
				if (seguir == 2) {
					calculardora();
				}
				break;
			case 5:
				num1 = parseInt(prompt("Ingrese Numero :"));

				num2 = parseInt(prompt("Ingrese Numero :"));
				alert(`${num1} % ${num2} = ${operaciones(num1, num2, opciones)} `);
				seguir = parseInt(
					prompt("1.Serguir con el calculo\n2.Cambiar tipo de calculo")
				);
				if (seguir == 2) {
					calculardora();
				}
				break;
			case 6:
				menu();
				break;

			default:
				break;
		}
	}
}
function tabla() {
	while (true) {
		let tabla = parseInt(
			prompt("Ingrese hasta cuento se va a crear la tabla : ")
		);
		num1 = parseInt(prompt("Ingrese numero :"));

		for (let i = 1; i <= tabla; i++) {
			console.log(`${num1} X ${i} = ${num1 * i}`);
		}
		let opc = parseInt(
			prompt(
				`La tabla lo podes encontrar en Consola\n1. Nueva tabla\n2. Volver al menu`
			)
		);
		if (opc == 2) {
			menu();
		}
	}
}
function calificacion() {
	let nota = 0;
	let acum = 0;
	let prom = 0;
	let cantNotas = parseInt(prompt("Ingrese la cantidad de notas que desea"));
	for (let i = 0; i < cantNotas; i++) {
		nota = parseInt(prompt(`Ingrese la nota ${i + 1}`));
		acum = acum + nota;
	}
	prom = acum / cantNotas;

	alert("La suma total es " + acum);
	alert("El promedio es " + prom);
	let opc = parseInt(prompt(`1. Nueva Promedio\n2. Volver al menu`));
	if (opc == 2) {
		menu();
	}
}
function parImpar() {
	while (true) {
		num1 = parseInt(prompt("Ingrese el Numero que deseas saber :"));
		if (num1 % 2 == 0) {
			alert("El número " + num1 + " es par");
		} else {
			alert("El número " + num1 + " es impar");
		}
		let opc = parseInt(prompt(`1. Seguir sacando\n2. Volver al menu`));
		if (opc == 2) {
			menu();
		}
	}
}
menu();
