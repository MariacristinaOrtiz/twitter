window.addEventListener('load', function(event) {
  /* escribir las funcione*/
  var input = document.getElementById('input');
  console.log(input);
  input.addEventListener('focus', insertTextarea);
  function insertTextarea() {
    var father = document.getElementById('form').parentNode;
    var form = document.getElementById('form');
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
    father.replaceChild(div, form);
    /* desacticar el button twiteear*/
    var textareaActive = document.querySelector('.textarea');
    textareaActive.addEventListener('keypress', buttonActive);
    function buttonActive() {
      button.setAttribute('id', 'button-active');
    }
    /* function para agregar los tweets*/
    var button = document.querySelector('.button');
    var divFather = document.getElementById('div-father');
    console.log(button);
    button.addEventListener('click', showTweet);
    function showTweet() {
      if (textarea.value) {
        var container = document.createElement('ul');
        container.classList.add('new-tweets');
        var liBeforeOne = document.createElement('li');
        liBeforeOne.innerHTML = '<span class="inline-block photo"><img src="assets/imgs/cris.jpg" alt="cris"></span>' + '<a href ="https://twitter.com/crisma17101990">MCOV</a>';
        var liOne = document.createElement('li');
        liOne.textContent = textarea.value;
        var liTwo = document.createElement('li');
        liTwo.textContent = Date();
        container.appendChild(liBeforeOne);
        container.appendChild(liOne);
        container.appendChild(liTwo);
        divFather.appendChild(container);
        textarea.value = '';
        button.removeAttribute('id', 'button-active');
      } else {
        button.removeAttribute('id', 'button-active');
      }
    }
  }
});
