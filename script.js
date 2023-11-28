
/* Funcion para borrar el placeholder cuando se seleciona*/
function clearPlaceholder(inputField) {
    inputField.placeholder = '';
  }

  /* Funcion para devolver el placeholder cuando no se ponen datos*/
  function restorePlaceholder(inputField) {
    if (!inputField.value) {
      inputField.placeholder = inputField.getAttribute('data-original-placeholder');
    }
  }

  function validateText(inputField) {
    var inputValue = inputField.value;
    var onlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúüñÑ\s]+$/.test(inputValue);

    if (!onlyLetters) {
      alert('Solo se permiten letras y espacios en blanco.');
      // Puedes ajustar la lógica aquí según tus necesidades, como borrar el contenido no válido.
    }

}



