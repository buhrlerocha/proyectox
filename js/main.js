  // primer paso
  function primero() {
  var containerPosteos = document.getElementById("conversacion");
  var nuevaLista=document.getElementById ("mensajes").value;
  document.getElementById ("mensajes").value="";
  var elementoMensaje=document.createElement ("p");
  var cajaMensaje=document.createTextNode(nuevaLista);

var primerDiv=document.createElement ("div");
primerDiv.setAttribute ("class", "w-message-text");
var segundoDiv=document.createElement ("div");
segundoDiv.setAttribute ("class", "w-message-out")

  elementoMensaje.appendChild(cajaMensaje);
  primerDiv.appendChild(elementoMensaje);
  segundoDiv.appendChild(primerDiv);
  containerPosteos.appendChild(segundoDiv);

}