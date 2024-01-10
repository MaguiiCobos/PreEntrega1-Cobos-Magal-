//Simulador de tiempo de espera para comprar una entrada a un concierto

let nombreUsuario = prompt("Ingresá tu nombre")
let seguirComprando     //1 SI / 2 NO
let concierto

do {
    concierto = parseInt(prompt("Hola, " + nombreUsuario + "\n¿A qué concierto deseas asistir? (seleccione solo una opción) \n 1) Taylor Swift \n 2) Arctic Monkeys \n 3) 5SOS"))
    switch (concierto) {
        case 1:
            tiempoDemora(12, 5)  //tiempo promedio de demora 12 minutos, personas adelante 5
            comprarEntradas(35000)    //precio entrada: $35000
            alert("Compra exitosa")
            break;
        case 2:  
            tiempoDemora(8, 10)  //tiempo promedio de demora 8 minutos, personas adelante 10
            comprarEntradas(25000)    //precio entrada: $25000
            alert("Compra exitosa")
            break;
        case 3:  
            tiempoDemora(15, 3)  //tiempo promedio de demora 15 minutos, personas adelante 3
            comprarEntradas(10000)    //precio entrada: $10000
            alert("Compra exitosa")
            break;
        default: 
            alert("La opción ingresada es incorrecta. Intentelo nuevamente")
            break;
    }

    seguirComprando = prompt("¿Quiere seguir comprando? \n 1) SI \n 2) NO")
    if (seguirComprando == 2) {
        alert("Muchas gracias por su compra. Disfrute del concierto")
    }
    else if (seguirComprando != 1 && seguirComprando != 2){
        do {
            alert("La opción ingresada es incorrecta. Intentelo nuevamente")
            seguirComprando = prompt("¿Quiere seguir comprando? \n 1) SI \n 2) NO")
        } while (seguirComprando != 1 && seguirComprando != 2);
    }
} while (seguirComprando == 1);

//FUNCIONES

function tiempoDemora(minutos, fila) {
    let demora = minutos * fila
    alert("Estas en la fila \n El tiempo de demora aproximado es de " + demora + " minutos")
}

function comprarEntradas(precio) {
    alert("Es tu turno de comprar")
    let cantidad = parseInt(prompt("¿Cuantas entradas querés comprar?"))
    let precioTotal = cantidad * precio
    alert("Monto a pagar: $" + precioTotal)
}
