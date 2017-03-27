function mostar() {
  var texto= document.getElementById("comentario").value;
  document.getElementById("textoPrevio").innerHTML=texto

}

/*function publicar() {
  var texto= document.getElementById("comentario").value;
  document.getElementById("publicacion").innerHTML=texto

};*/
function textoFuente(valor){
  switch (valor) {
      case 1:
        document.getElementById("textoPrevio").style.fontSize = "400%";
        break;
      case 2:
        document.getElementById("textoPrevio").style.fontSize = "200%";
        break;
      case 3:
        document.getElementById("textoPrevio").style.fontSize = "100%";
        break;
      case 4:
        document.getElementById("textoPrevio").style.textAlign = "left"
        break;
      case 5:
        document.getElementById("textoPrevio").style.textAlign = "center"
        break;
      case 6:
        document.getElementById("textoPrevio").style.textAlign = "right"
        break;
      case 7:
        var color =prompt("Engresa tu color hexadecimal: \n " + "");
        document.getElementById("textoPrevio").style.color=color;
        break;
        case 8:
        var fondo =prompt("Engresa tu color hexadecimal: \n " + "");
        document.getElementById("textoPrevio").style.backgroundColor=fondo;
        break;
  }
};

function textoClonar(textoPrevio) {
  var largo= textoPrevio.length;
  var clon = textoPrevio.slice(0, largo)
  document.getElementById("lista").innerHTML= clon;

};


function agregarComentario(){
    var texto=document.getElementById('comentario').value;
    var div=document.createElement('DIV');
    var hr=document.createElement('HR');
  if( div.innerHTML=texto==''){
    (alert('No hay comentario'));
  }else{
    div.innerHTML=texto==''?'':texto;
    document.getElementById('seccion').appendChild(hr);
    document.getElementById('lista').appendChild(div,hr);
    // document.getElementById('seccion').appendChild(hr);
    document.getElementById('comentario').value ="";
    document.getElementById('textoPrevio').value ="";
  }
};
function borrar(){
    lis=document.getElementById('lista').getElementsByTagName('li');
    for(var i=0; i<lis.length;i++){
        lis[i].onclick=function(){
            if(confirm('¿seguro que quieres eliminar tu comentario?'))
            this.parentNode.removeChild(this);
        };
    }

}
