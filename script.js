const textArea = document.querySelector('.cajatexto');
const mensaje = document.querySelector('.texto-resultado');

function btnEncriptador(){
    const textEncriptado = encriptador(textArea.value);
    mensaje.value = textEncriptado;
    textArea.value = '';
    mensaje.style.backgroundImage = "none";
}

function encriptador(textOriginal){
    const matriz = [['u','.4t'],['e','/8g'],['o','?5b'],['a','*9d'],['i','-0r']];
    textOriginal = textOriginal.toLowerCase();
    let textEncriptado1 = '';

    for (let i=0; i<matriz.length; i++){
        if (textOriginal.includes(matriz[i][0])){
            textOriginal = textOriginal.replaceAll(matriz[i][0], matriz[i][1]);
            textEncriptado1 = textOriginal;
        }
    }
    return textEncriptado1;
}

function btnDesencriptar(){
    const textDesencriptado = desencriptador(mensaje.value);
    textArea.value = textDesencriptado;
    mensaje.value = '';
}

function desencriptador(textEncriptado){
    const matriz = [['u','.4t'],['e','/8g'],['o','?5b'],['a','*9d'],['i','-0r']];
    let textOriginal1 = '';

    for (let e=0; e<matriz.length; e++){
        if (textEncriptado.includes(matriz[e][1])){
            textEncriptado = textEncriptado.replaceAll(matriz[e][1], matriz[e][0]);
            textOriginal1 = textEncriptado;
        }
    }
    return textOriginal1
}