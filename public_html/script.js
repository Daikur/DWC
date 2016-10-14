/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function carrito(articulo) {
    var nodoDiv;
    var nodoParrafo;
    var nodoTexto;
    nodoDiv = document.getElementById(articulo);
    nodoParrafo = nodoDiv.getElementsByTagName("p")[0];
    nodoTexto = nodoParrafo.firstChild.nodeValue;

    var precio = nodoTexto.toString().split(" ")[1];

    var imagenCarrito = nodoDiv.getElementsByTagName("img")[0].getAttribute("src");

//    var parrafoCarrito = nodoDiv.getElementsByTagName("p")[0];

    var nodoCarrito = document.getElementById("carrito");

    var imgCarrito = document.createElement("img");
    imgCarrito.setAttribute("src", imagenCarrito);
    imgCarrito.setAttribute("width", "300");
    imgCarrito.setAttribute("height", "300");

//    var nodoItem = document.createElement("div");
//    nodoItem.setAttribute("id", "c" + articulo);
//    nodoItem.setAttribute("class", "articulos__carrito");
//    nodoCarrito.appendChild(nodoItem);
//
//    nodoItem.appendChild(imgCarrito);
//
//
//    var cantidadCarrito = document.createElement("p");
//    cantidadCarrito.setAttribute("id", "cantidad");
//    nodoItem.appendChild(cantidadCarrito);
//
//    var precioCarrito = document.createElement("p");
//    nodoItem.appendChild(precioCarrito);
//    precioCarrito.appendChild(document.createTextNode(nodoTexto.toString()));

    if (document.getElementById("c" + articulo) !== null) {
        nodo1 = document.getElementById("c" + articulo);
        ultimoNodo = nodo1.lastChild;
        cantidad = ultimoNodo.firstChild.nodeValue;

        unidades = cantidad.toString().split(":")[1];

        stock = document.createElement("p");
        stock.appendChild(document.createTextNode("Cantidad:" + (parseInt(unidades) + 1)));
        nodo1.replaceChild(stock, ultimoNodo);

        parrafoViejo = document.getElementById("precioFinal");
        precioTexto = document.getElementById("precioFinal").firstChild.textContent;
        precioFinal = precioTexto.split(" ")[2];

        precioFinalNuevo = (parseInt(precioFinal)) + (parseInt(precio));
        document.getElementById("precioFinal").firstChild.nodeValue = precioFinalNuevo;
//        parrafoNuevo = document.createElement("p").appendChild("b");
//        parrafoNuevo.appendChild(document.createTextNode("Precio Final: "+precioFinalNuevo+" €"));
//        document.lastChild.previousSibling.replaceChild(parrafoNuevo,parrafoViejo);

    } else {
        var nodoItem = document.createElement("div");
        nodoItem.setAttribute("id", "c" + articulo);
        nodoItem.setAttribute("class", "articulos__carrito");
        nodoCarrito.appendChild(nodoItem);

        nodoItem.appendChild(imgCarrito);

        var precioCarrito = document.createElement("p");
        nodoItem.appendChild(precioCarrito);
        precioCarrito.appendChild(document.createTextNode(nodoTexto.toString()));

        var cantidadCarrito = document.createElement("p");
        cantidadCarrito.setAttribute("id", "cantidad");
        nodoItem.appendChild(cantidadCarrito);
        cantidadCarrito.appendChild(document.createTextNode("Cantidad:1"));

        precioFinal = document.getElementById("precioFinal").firstChild;
        precioFinal.appendChild(document.createTextNode(precio + " €"));
    }
}