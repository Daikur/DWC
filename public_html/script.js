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

    var nodoCarrito = document.getElementById("carrito");

    var imgCarrito = document.createElement("img");
    imgCarrito.setAttribute("src", imagenCarrito);
    imgCarrito.setAttribute("width", "300");
    imgCarrito.setAttribute("height", "300");

    if (document.getElementById("c" + articulo) !== null) {
        nodo1 = document.getElementById("c" + articulo);
        penultimoNodo = nodo1.lastChild.previousSibling;
        ultimoNodo = penultimoNodo.previousSibling;
        cantidad = ultimoNodo.firstChild.nodeValue;

        unidades = cantidad.toString().split(":")[1];

        stock = document.createElement("p");
        stock.appendChild(document.createTextNode("Cantidad:" + (parseInt(unidades) + 1)));
        nodo1.replaceChild(stock, ultimoNodo);

        nodoParrafoPrecio = nodo1.childNodes[3];
        precioBase = nodo1.childNodes[1].firstChild.nodeValue.toString().split(" ")[1];

        valorPrecio = nodoParrafoPrecio.firstChild.nodeValue.toString().split(" ")[2];

        nuevoPrecio = document.createElement("p");
        nuevoPrecio.appendChild(document.createTextNode("Precio Total: " + ((parseInt(valorPrecio)) + (parseInt(precioBase))) + " €"));
        nodo1.replaceChild(nuevoPrecio, nodoParrafoPrecio);



        parrafoViejo = document.getElementById("precioFinal");
        precioTexto = document.getElementById("precioFinal").firstChild.textContent;
        precioFinal = precioTexto.split(" ")[2];

        precioFinalNuevo = (parseInt(precioFinal)) + (parseInt(precio));
        document.getElementById("precioFinal").firstChild.nodeValue = precioFinalNuevo;

    } else {
        nodoItem = document.createElement("div");
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

        var precioTotal = document.createElement("p");
        precioTotal.setAttribute("id", "precioTotal");
        precioTotal.appendChild(document.createTextNode("Precio Total: " + precio + " €"));
        nodoItem.appendChild(precioTotal);

        var botonesCarrito = document.createElement("p");
        botonesCarrito.setAttribute("id", "botones_carrito");
        nodoItem.appendChild(botonesCarrito);

        var botonRestarUnidades = document.createElement("button");
        var botonBorrarElemento = document.createElement("button");

        botonRestarUnidades.setAttribute("id", "botonRestar");
        botonRestarUnidades.setAttribute("onclick", "restar(this)");

        botonBorrarElemento.setAttribute("id", "botonBorrar");
        botonBorrarElemento.setAttribute("onclick", "borrar(this)");

        botonRestarUnidades.appendChild(document.createTextNode("Borrar Unidad"));
        botonBorrarElemento.appendChild(document.createTextNode("Borrar del carrito"));

        botonesCarrito.appendChild(botonRestarUnidades);
        botonesCarrito.appendChild(botonBorrarElemento);

        precioFinal = document.getElementById("precioFinal").firstChild;
        precioFinal.appendChild(document.createTextNode(precio + " €"));
    }
}
function restar(nodo) {
    var nodoCantidad = nodo.parentNode.previousSibling;
    var nodoPaso = nodoCantidad.previousSibling;
    var textoCantidad = nodoPaso.firstChild.nodeValue;
    var numeroCantidad = parseInt(textoCantidad.split(":")[1]);
    numeroCantidad--;
    nodo1 = nodo.parentNode;
    nodoPadre = nodo1.parentNode;

    if (numeroCantidad < 1) {
        nodoPadre.parentNode.removeChild(nodoPadre);
    } else {
        var nuevoP = document.createElement("p");
        nuevoP.setAttribute("id", "cantidad");
        nuevoP.appendChild(document.createTextNode("Cantidad:" + numeroCantidad));
        nodoPadre.replaceChild(nuevoP, nodoPaso);


        var precioTotalProvisional = nodoItem.childNodes[3].firstChild.nodeValue.toString().split(" ")[2];
        var precioTotal = ((parseInt(precioTotalProvisional)) - (parseInt(precioBase)));

        var nuevoPrecioTotal = document.createElement("p");
        nuevoPrecioTotal.setAttribute("id", "precioTotal");
        nuevoPrecioTotal.appendChild(document.createTextNode("Precio Total: " + precioTotal + " €"));
        
        var nodoViejo = nodoItem.childNodes[3];
        
        nodoPadre.replaceChild(nuevoPrecioTotal,nodoViejo);
    }
}

function borrar(nodo) {
    nodo1 = nodo.parentNode;
    nodoPadre = nodo1.parentNode;
    nodoPadre.parentNode.removeChild(nodoPadre);
}