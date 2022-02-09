var textoDeEntrada = document.querySelector("#input-texto");
var btnCriptografar = document.querySelector("#btn-cripto");
var btnDescriptografar = document.querySelector("#btn-descripto");

//evento do botão criptografar
btnCriptografar.addEventListener("click", function(event){
    event.preventDefault(); // evita que a página atualize ao clicar no botão do formulário

    var arrayTexto = lerTexto();

    var textoCriptografado = criptografaTexto(arrayTexto);

    mostraMensagem(textoCriptografado);
});

//evento do botão descriptografar
btnDescriptografar.addEventListener("click", function(event){
    event.preventDefault(); // evita que a página atualize ao clicar no botão do formulário

    var arrayTexto = lerTexto();
    var textoDescriptografado = descriptografaTexto(arrayTexto);
    mostraMensagem(textoDescriptografado);
});

function lerTexto(){
    // Ler o texto dentro do input e retorna esse texto como um Array

    var texto = textoDeEntrada.value;
    var arrayTexto = texto.split("");

    return arrayTexto;
}