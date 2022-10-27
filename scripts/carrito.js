const carrito = JSON.parse(localStorage.getItem("carrito"));

let tbody = document.querySelector("#tbody");


function rellenarCarrito(arrayCarrito)
{
    for (let producto of arrayCarrito)
    {   
        let row = document.createElement("tr");
        row.innerHTML = `<td class="tdChart">${producto.nombre}</td> <td class="tdChart">$${producto.precio}</td> <td class="tdChart">${producto.cantidad}</td> <td class="tdChart">${producto.subtotal}</td><td><button class="linkCompra eliminarProducto">Eliminar</button></td></td>`
        tbody.appendChild(row);

    let botonComprar = document.getElementById("comprarTodo");
    
    botonComprar.addEventListener("click", ()=>{
        comprar()
    })
    }
}

rellenarCarrito(carrito);

let botonesEliminar = document.querySelectorAll(".eliminarProducto");

botonesEliminar.forEach(elemento => {
    elemento.addEventListener("click", eliminarProducto)
})

function eliminarProducto(e){
    swal("Eliminaste los productos",":c","error")
    let index = carrito.findIndex(producto => producto.id == e.target.id)
    carrito.splice(index, 1);
    e.target.parentNode.parentNode.remove();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function comprar(){
    swal ("Su compra se realizo con exito", "Sera redirigido a la pagina principal", "success")
    localStorage.clear();
}