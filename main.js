const btn = document.querySelector('#menuBtn')
const sidebar = document.querySelector('.sideBar')
const container = document.querySelector('.container')
/* menu abri, fecha e empurrando o conteudo */
btn.onclick = function () {
  /*abrir e fechar menu */
  sidebar.classList.toggle('open'),
    /*empurrando tudo  */
    container.classList.toggle('open')
}
