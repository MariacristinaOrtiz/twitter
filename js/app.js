/* FUNCIÓN PARA AEGURAR QUE LA PÁGINA CARGUE TOTALMENTE ANTES DE APLICAR LOS EVENTOS*/
window.addEventListener('load', function(event) {
  /* EVENTO UNO: Al aplicar el evento "focus" reemplazar elemento form que contiene al input por un div que contiene un textarea y un button twittear*/
  var input = document.getElementById('input');
  input.addEventListener('focus', insertTextarea);
  /* Función que se ejecutara al aplicar el evento focus*/
  function insertTextarea() {
    var father = document.getElementById('form').parentNode;
    var form = document.getElementById('form');
    /* Creación del div que contiene el textarea y el button twittear*/
    var div = document.createElement('div');
    div.classList.add('inline-block');
    var textarea = document.createElement('textarea');
    textarea.setAttribute('placeholder', '¿Qué esta pasando?');
    textarea.classList.add('textarea');
    var button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Twittear';
    div.appendChild(textarea);
    div.appendChild(button);
    var spanPhoto = document.querySelector('.photo');
    spanPhoto.classList.add('span-photo');
    /* Reemplazo del div por el form al aplicar el evento focus*/
    father.replaceChild(div, form);

    /* EVENTO DOS: Acticar el button twiteear al presionar la tecla para llenar contenido en el textarea (se aplica dentro de la función del evento uno para que podamos tener acceso al textarea)*/
    var textareaActive = document.querySelector('.textarea');
    textareaActive.addEventListener('keypress', buttonActive);
    function buttonActive() {
      button.setAttribute('id', 'button-active');
    }
    /* EVENTO TRES: Al hacer click en el button twittear agrega el contenido de los tweets creados en el textarea en un div(ya existente)>ul>li.liOne), agrega el usuario(liBeforeOne), y la hora en formato 24 hora (liTwo)*/
    var button = document.querySelector('.button');
    var divFather = document.getElementById('div-father');
    button.addEventListener('click', showTweet);
    /* Función que se ejecutara al llamar al evento click*/
    function showTweet() {
      /* Condicionamos para que solo se agregue solo si el textarea tiene valor(contenido, incluye espacios(tab))*/
      if (textarea.value) {
        /* Creación del elemento "ul" y los 3 li (liBeforeOne, liOne y liTwo) contenidos en el */
        var container = document.createElement('ul');
        container.classList.add('new-tweets');
        var liBeforeOne = document.createElement('li');
        liBeforeOne.innerHTML = '<span class="inline-block photo"><img src="assets/imgs/cris.jpg" alt="cris"></span> ' + ' <a id="user" href ="https://twitter.com/crisma17101990">MCOV</a>' + '@crisma17101990';
        var liOne = document.createElement('li');
        liOne.classList.add('li-one');
        liOne.innerHTML = textarea.value;
        var liTwo = document.createElement('li');
        liTwo.classList.add('li-two');
        liTwo.textContent = new Date().getHours() + ':' + new Date().getMinutes() + ' horas';
        container.appendChild(liBeforeOne);
        container.appendChild(liOne);
        container.appendChild(liTwo);
        /* Agregación de la etiqueta ul creada al divFather ya existente en el HTML*/
        divFather.appendChild(container);
        /* Al terminar de agrgar el tweet el textarea quedara vacío para otro nuevo tweet*/
        textarea.value = '';
        /* Al terminar de agregar el tweet el button twittear se desactivara*/
        button.removeAttribute('id', 'button-active');
      } else {
        /* Si el textarea no tiene contenido el button twittear se desactivara*/
        button.removeAttribute('id', 'button-active');
      }
    }
  }
});
