var focus = document.querySelector('#insert-texto');
focus.focus();

function cifrar(texto) {
   var ingresado = document.querySelector("#insert-texto").value;
   var convertMin = ingresado.toLowerCase();
   var texto = convertMin;
   
   var txtCifrado = [];

    for(i = 0; i<texto.length; i++){
        if(texto[i] == 'a'){
            txtCifrado += 'ai';
        }else if(texto[i] == 'e'){
            txtCifrado+="enter";
        }else if(texto[i] == 'i'){
            txtCifrado+="imes";
        }else if(texto[i] == 'o'){
            txtCifrado+="ober";
        }else if(texto[i] == 'u'){
            txtCifrado+="ufat";
        }else{
            txtCifrado+=texto[i];
        }
        
    }
    document.querySelector("#Txt-enc-descp").value = txtCifrado; 
 
    return txtCifrado;
}
   var botonencriptar = document.querySelector("#btn-encriptar");
    botonencriptar.onclick = cifrar;


function descifrar(texto){
    var ingresado = document.querySelector("#insert-texto").value;
    var convertMin = ingresado.toLowerCase();
    var texto = convertMin;
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    document.querySelector("#Txt-enc-descp").value = texto; 
    return texto;
}

 var btndesencriptar = document.querySelector("#btn-desencriptar");
    btndesencriptar.onclick = descifrar;


function copiar(){
    var texto = document.getElementById('Txt-enc-descp');
    texto.select();
    texto.setSelectionRange(0,9999999);
    document.execCommand('copy');
}
