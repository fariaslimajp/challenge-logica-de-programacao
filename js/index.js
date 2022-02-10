var textoDeEntrada = document.querySelector("#input-texto");
var textoDeSaida = document.querySelector("#msg");
var btnCriptografar = document.querySelector("#btn-cripto");
var btnDescriptografar = document.querySelector("#btn-descripto");
var btnCopiar = document.querySelector("#btn-copiar");

//evento do botão criptografar
btnCriptografar.addEventListener("click", function(event){
    event.preventDefault(); // evita que a página atualize ao clicar no botão do formulário

    var arrayTexto = lerTexto();

    var textoCriptografado = criptografaTexto(arrayTexto);

    mostraMensagem(textoCriptografado);

    textoDeEntrada.value = null;
});

//evento do botão descriptografar
btnDescriptografar.addEventListener("click", function(event){
    event.preventDefault(); // evita que a página atualize ao clicar no botão do formulário

    var arrayTexto = lerTexto();
    var textoDescriptografado = descriptografaTexto(arrayTexto);
    mostraMensagem(textoDescriptografado);
    textoDeEntrada.value = null;
});

//evento do botao copiar
btnCopiar.addEventListener("click", function(){

    navigator.clipboard.writeText(textoDeSaida.value)
        .then(() => {
        console.log("Texto copiado para a área de transferência")
    })
        .catch(err => {
        console.log('Alguma coisa aconteceu de errado!', err);
    })
});

function lerTexto(){
    // Ler o texto dentro do input e retorna esse texto como um Array

    var texto = textoDeEntrada.value;
    var arrayTexto = texto.split("");

    return arrayTexto;
}
