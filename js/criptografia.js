
function criptografaTexto(texto){
    var textoCriptografado = "";
    texto.forEach(function(letra){
        switch(letra) {
            case "a":
                textoCriptografado += "ai";
                break;
            case "e":
                textoCriptografado += "enter";
                break;
            case "i":
                textoCriptografado += "imes";
                break;
            case "o":
                textoCriptografado += "ober";
                break;
            case "u":
                textoCriptografado += "ufat";
                break;
            default:
                textoCriptografado += letra;
        }
    })
    mostraMensagem(textoCriptografado);
}



function mostraMensagem(mensagem){
    var caixaResultado = document.querySelector("#msg");
    caixaResultado.value = mensagem;
}

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