/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/


function criptografaTexto(texto){
    var textoCriptografado = "";
    if (texto.length == 0) {
        textoCriptografado = "Caixa de Texto vazia.";

    } else {
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
        });
    }
    return textoCriptografado;
}

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

function descriptografaTexto(texto){
    var textoDescriptografado = "";
    if (texto.length == 0) {
        textoCriptografado = "Caixa de Texto vazia.";

    } else {
       for (var i = 0; i < texto.length; i++){
            switch(texto[i]) {
                case "a":
                    if (texto[i+1] == "i") {
                        textoDescriptografado += "a";
                        i++;
                        break;
                    }


                case "e":
                    if (texto[i+1] == "n" && texto[i+2] == "t" && texto[i+3] == "e" && texto[i+4] == "r"){
                        textoDescriptografado += "e";
                        i += 4;
                        break;
                    }
                case "i":
                    if (texto[i+1] == "m" && texto[i+2] == "e" && texto[i+3] == "s"){
                        textoDescriptografado += "i";
                        i += 3;
                        break;
                    }
                case "o": //ober
                if (texto[i+1] == "b" && texto[i+2] == "e" && texto[i+3] == "r"){
                    textoDescriptografado += "o";
                    i += 3;
                    break;
                }
                case "u":
                    if (texto[i+1] == "f" && texto[i+2] == "a" && texto[i+3] == "t"){
                        textoDescriptografado += "u";
                        i += 3;
                        break;
                    }
  

                default:
                    textoDescriptografado += texto[i];
            }
        }
        if (texto.length == textoDescriptografado.length) textoDescriptografado = "Este texto já é descriptografado";
    }
    return textoDescriptografado;
}

function mostraMensagem(mensagem){
    var caixaResultado = document.querySelector("#msg");
    caixaResultado.value = mensagem;
}