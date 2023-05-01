const cambioTexto = () =>{
    document.getElementById('boton').textContent = '¡Hola Mundo!'; 
}
function cambioColor (){
    var color = document.getElementById('color')
    if (color.style.backgroundColor == "aqua"){
        color.style.backgroundColor = "red";}
    else{
        color.style.backgroundColor = "aqua";
    }
}
const alerta = () =>{
    return alert('¡Haz hecho clic!');
}

function ocultarMostrar(){
    var boton2 = document.getElementById('boton2');
    var ocultar = document.getElementById('ocultar');
    if (boton2.textContent =='ocultar'){
        boton2.textContent = 'mostrar';
        ocultar.style.display = 'none';
    }else{
        boton2.textContent = 'ocultar';
        ocultar.style.display ='block';
        ocultar.textContent = '¿Otra vez?';
    }
}