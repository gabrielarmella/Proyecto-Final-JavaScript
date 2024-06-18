const empanadas = [
    {nombre: "carne suave", precio: 150},
    {nombre: "caarne picante", precio: 170},
    {nombre: "pollo", precio: 150},
    {nombre: "jamon y queso", precio: 120},
    {nombre: "verdura", precio: 110},
    {nombre: "humita", precio: 200},
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
    if(empanada == "carne Suave" || empanada == "carne picante" || empanada == "pollo" || empanada == "jamon y queso" 
        || empanada == "verdura" || empanada == "humita"){
            switch(empanada){
                case "carne suave":
                    precio = 150
                    break;
                    
                case "carne picante":
                    precio = 170
                    break;
                    
                case "pollo":
                    precio = 150
                    break;
                    
                case "jamon y queso":
                    precio = 120
                    break;
                    
                case "verdura":
                    precio = 120
                    break;
                    
                case "humita":
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