const unahab = function (noches, huespedes) { return noches * (6000 + huespedes * 2000) }
const doshab = function (noches, huespedes) { return (noches * (6000 + huespedes * 2000)) * 2 }
const treshab = function (noches, huespedes) { return (noches * (6000 + huespedes * 2000)) * 3 }
const cuatrohab = function (noches, huespedes) { return (noches * (6000 + huespedes * 2000)) * 4 }


let respuesta

do {
   
    let noches, huespedes, habitaciones

    do {
        noches = parseFloat(prompt("ingrese cantidad de noches"))
        huespedes = parseFloat(prompt("ingrese cantidad de huespedes"))
        habitaciones = parseFloat(prompt("ingrese cantidad de habitaciones (1,2,3,4)"))

    }
    while ((isNaN(noches) || isNaN(huespedes) || isNaN(habitaciones)))

    switch (habitaciones) {
        case 1:
            console.log (unahab(noches,huespedes))
            break
        case 2:
            console.log(doshab(noches, huespedes))
            break
        case 3:
            console.log(treshab(noches, huespedes))
            break
        case 4:
            console.log(cuatrohab(noches, huespedes))
            break
        default:
            console.log("disponemos hasta 4 habitaciones")
    }

    do {
        respuesta = prompt("¿Quiere hacer otra reserva?").toLowerCase()
    }

    while (respuesta != "si" && respuesta != "no")
        


    
} while ( respuesta != "no")
