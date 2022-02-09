var textoDeEntrada = document.querySelector("#input-texto");
var btnCriptografar = document.querySelector("#btn-cripto");
btnCriptografar.addEventListener("click", function(event){
    event.preventDefault();
    var texto = textoDeEntrada.value;
    var arrayTexto = texto.split("");
    criptografaTexto(arrayTexto);
    console.log(arrayTexto);    
});
