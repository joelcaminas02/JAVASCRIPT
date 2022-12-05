var XMLHttpRequestObject = false;
    if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}    

function sacardatos(){
    if(XMLHttpRequestObject) {
        let imagen = document.createElement('img');
        imagen.setAttribute('src', 'gif.gif');
        imagen.setAttribute('id', 'imagen');
        var lugar = document.getElementById("contenedor");
        lugar.appendChild(imagen);
        XMLHttpRequestObject.open("GET", 'ejercicio9.php');
        XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        lugar.innerHTML = XMLHttpRequestObject.responseText;        
        imagen.remove();
        }
        
    }
    XMLHttpRequestObject.send(null);
    }
}

window.onload = function(){
    document.getElementById('boton').onclick = sacardatos
}