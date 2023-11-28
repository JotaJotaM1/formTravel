
/* Function to delete the placeholder when selected*/
function clearPlaceholder(inputField) {
    inputField.placeholder = '';
  }

/* Function to return the placeholder when no data is entered*/
  function restorePlaceholder(inputField) {
    if (!inputField.value) {
      inputField.placeholder = inputField.getAttribute('data-original-placeholder');
    }
  }

/*Function to validate the type of data that is entered in this case only text*/
  function validateText(inputField) {
    var inputValue = inputField.value;
    var onlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúüñÑ\s]+$/.test(inputValue);

    if (!onlyLetters) {
      alert('Solo se permiten letras y espacios en blanco.');
    }
}



