var textoDeEntrada = document.querySelector("#input-texto");
var btnCriptografar = document.querySelector("#btn-cripto");
btnCriptografar.addEventListener("click", function(event){
    event.preventDefault();
    var texto = textoDeEntrada.value;
    var arrayTexto = texto.split("");
    console.log(arrayTexto);
});

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/