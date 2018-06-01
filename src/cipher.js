// const mensajeUsuario;
// const offset;
// const mensajeResuelto;
// const ascii;
// const mensajeEnNumeros;

function encode() {
  const offset = parseInt(document.getElementById('recorrido').value);
  const mensajeUsuario = document.getElementById('string').value;
  let mensajeEncriptado = '';
  for(i=0; i<mensajeUsuario.length; i++) {
    const codigoAscii = mensajeUsuario.charCodeAt(i);
    const codigoAsciiNuevo = (codigoAscii - 65 + offset) % 26 + 65;
    const deCodigoAcaracter = String.fromCharCode(codigoAsciiNuevo);
    mensajeEncriptado = mensajeEncriptado + deCodigoAcaracter;  
  }
  document.getElementById('retorna-texto-cifrado').value = mensajeEncriptado;

}

function decode(mensajeEncriptado, offset) {
  const mensajeDesencriptado = '';
  return mensajeDesencriptado;
}


