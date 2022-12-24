const buttonEncrypt = document.getElementById('bt-enc');
const buttonDesencrypt = document.getElementById('bt-des');
let input = document.getElementById('encrypt');
const vowels = ['a', 'e', 'i', 'o', 'u'];
const reemplazo = ['ai', 'enter', 'imes', 'ober', 'ufat'];
let resultado = document.getElementById('text-encrypt');
let miniDiv = document.getElementById('elementos');
const newChild = document.createElement('h4');
const newButton = document.createElement('button');


/**
 * Añade un controlador de eventos al botón "buttonEncrypt"
 * para encriptar el texto del input
 */
buttonEncrypt.addEventListener ('click', () => {
    //obtiene el valor del input
    let textoObtenido = input.value;
    //convierte el texto a minúsculas
    let minusculas = textoObtenido.toLowerCase();
    //Encripta el texto y lo almacena en una variable
    let textoEncriptado1 = encriptar(minusculas);
    //Establece el texto del botón "newButton" y su clase CSS
    newButton.textContent = "Copiar texto encriptado";
    newButton.className = "copy-button";
    //Establece el contenido del elemento "newChild" como el texto desencriptado"
    newChild.textContent = textoEncriptado1;
    //Borra el contenido del elemento "resultado" y agrega los elementos "newChild" y "newButton"
    resultado.innerHTML = '';
    resultado.appendChild(newChild);
    resultado.appendChild(newButton);
});


/**
 * Añade un controlador de eventos al botón "buttonDesencrypt" 
 * para desencriptar el texto del input
 */
buttonDesencrypt.addEventListener ('click', () => {
    //obtiene el valor del input
    let textoObtenido = input.value;
    //convierte el texto a minúsculas
    let minusculas = textoObtenido.toLowerCase();
    //Desencripta el texto y lo almacena en una variable
    let textoDesencriptado1 = desencriptar(minusculas);
    //Establece el texto del botón "newButton" y su clase CSS
    newButton.textContent = "Copiar texto encriptado";
    newButton.className = "copy-button";
    //Establece el contenido del elemento "newChild" como el texto desencriptado"
    newChild.textContent = textoDesencriptado1;
    //Borra el contenido del elemento "resultado" y agrega los elementos "newChild" y "newButton"
    resultado.innerHTML = '';
    resultado.appendChild(newChild);
    resultado.appendChild(newButton);
});

/**
 * Agrega un evento de clic al botón que permite copiar el texto encriptado
 * al protapapeles del navegador
 */
newButton.addEventListener('click', () => {
    navigator.clipboard.writeText(newChild.textContent);
  });
  
/**
 * Encripta el texto proporcionado reemplazando las vocales
 * por su correspondiente valor en el arreglo "reemplazo"
 * @param {string} texto - El texto a encriptar
 * @returns {string} El texto encriptado
 */
function encriptar (texto) {
    //Inicializa una cadena vacía para almacenar el texto encriptado
    let textoEncriptado = "";
    //Divide el texto en un arreglo de caracteres
    let caracteres = texto.split("");
    //Recorre el arreglo de caracteres
    for (let i = 0; i < caracteres.length; i++) {
        //Si el carácter es una vocal, lo reemplaza por su correspondiente valor en el arreglo "reemplazo"
        if (vowels.includes(caracteres[i])) {
            textoEncriptado += reemplazo[vowels.indexOf(caracteres[i])];
        } 
        //Si el carácter no es una vocal, lo agrega tal cual al texto encriptado
        else {
            textoEncriptado += caracteres[i];
        }
    }
    //Devuelve el texto encriptado
    return textoEncriptado;
}

/**
 * Esta función desencripta un texto que previamente ha sido encriptado utilizando la función 'encriptar'
 * @param {string} textoEncriptado El texto que se desea desencriptar
 * @returns {string} El texto desencriptado
 */
function desencriptar (textoEncriptado) {
    //Inicializa una variable con el texto encriptado
    let textoDesencriptado = textoEncriptado;
    //Recorre el arreglo "reemplazo"
    for (let i = 0; i < reemplazo.length; i++) {
        //Crea una expresión regular para buscar el valor actual del arreglo "reemplazo" en el texto encriptado
        let expresionRegular = new RegExp(reemplazo[i], "g");
        //Reemplaza todas las coincidencias del valor actual del arreglo "reemplazo" por la correspondiente vocal del arreglo "vowels"
        textoDesencriptado = textoDesencriptado.replace(expresionRegular, vowels[i]);
    }
    //Devuelve el texto desencriptado
    return textoDesencriptado;
}