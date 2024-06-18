const empanadas = [
    {nombre: "Carne Suave", precio: 150},
    {nombre: "Carne Picante", precio: 170},
    {nombre: "Pollo", precio: 150},
    {nombre: "Jamon y Queso", precio: 120},
    {nombre: "Verdura", precio: 110},
    {nombre: "Humita", precio: 200},
];
let carrito = []

let seleccion = prompt("Desea comprar empanadas 'si' o 'no'")

while(seleccion != "si" && seleccion != "no") {
    alert("por favor ingrese 'si' o 'no'")
    seleccion = prompt("Desea comprar empanadas 'si' o 'no'")
}

if(seleccion == "si"){
    let todaslasEmpanadas = empanadas.map(
        (empanada) => empanada.nombre + " " + empanada.precio + "$"
    );
    alert(todaslasEmpanadas.join(" - "))
}else if(seleccion == "no"){
    alert("gracias por visitar nuestra pagina")
}

while(seleccion != "no"){
    let empanada = prompt("agregue las empanadas al carrito")
    let precio = 0
    if(empanada == "Carne Suave" || empanada == "Carne Picante" || empanada == "Pollo" || empanada == "Jamon y Queso" 
        || empanada == "Verdura" || empanada == "Humita"){
            switch(empanada){
                case "Carne Suave":
                    precio = 150
                    break;
                    
                case "Carne Picante":
                    precio = 170
                    break;
                    
                case "Pollo":
                    precio = 150
                    break;
                    
                case "Jamon y Queso":
                    precio = 120
                    break;
                    
                case "Verdura":
                    precio = 120
                    break;
                    
                case "Humita":
                    precio = 200
                    break;
                default:
                    break;
            }
    let unidades = parseInt(prompt ("cuantas empanadas desea llevar"))
    carrito.push({empanada, unidades, precio})
    console.log(carrito)
    }else {
        alert("no tenemos esas empanadas todavia o se agotaron por el momento")
    }
    seleccion = prompt("¿Desea comprar mas empanadas?")
    while(seleccion === "no"){
        alert("¡Muchas gracias por su compra, que lo disfrute!")
        carrito.forEach((carritoFinal) => {
            console.log(`empanada: ${carritoFinal.empanada}, unidades: ${carritoFinal.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
    }

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)