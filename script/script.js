window.onload = function(){
  let button = document.querySelector('.hamburger');
  let menu = document.querySelector('.menu-conteiner');
  let body = document.querySelector('body');

  button.onclick = function(){
    menu.classList.toggle('show');
    body.classList.toggle('block');
  }
}
