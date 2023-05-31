var dia, mes, anio;
var contador=0;

dia=22;//prompt("Ingrese el día actual"); Este codigo permite ingresar dato por teclado
mes="mayo";
anio=2023;

document.write("La fecha es: ",dia,"/",mes,"/",anio);
document.write("<br>");

if(dia>=30){
    document.write("El mes se termino");
}
while(dia<=30){
    dia=dia+1;
    document.write(dia);
    document.write("<br>");
}

/**Código JQuery que captura el evento Click en el botón de ID prueba */
$('#prueba').on("click",function(){
    Mensaje();
    //document.write("Se presiono el botón prueba");
});

function Mensaje(){
    document.write("Bienvenido a JavaScript");
}

function Iterador(){
    contador++;
    alert("El contador vale: "+contador);
}

function ValidarClave(){
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%!])[A-Za-z\d@#$%!]{8,}$/;
    var clave = document.getElementById("password").value;
    alert("El password es: "+clave);
    if(regex.test(clave)){
        alert("El password cumple la politica");
    }else{
        alert("Otro ingreso fallido");
    }
}