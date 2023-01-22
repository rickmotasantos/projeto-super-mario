//passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js 
const btnAbrirModal = document.querySelector(".btn-trailer")
  //passo 3 - Dar um jeito de pegar o elemento da modal usando js
const modalAberto = document.querySelector(".modal")

const btnFechar = document.querySelector(".fechar-modal")

const video = document.getElementById("video")

const linkVideo = video.src

//passo 2 - Dar um jeito de identificar quando o usuário clicar no botão 
btnAbrirModal.addEventListener('click', () => {
        //passo 4 - Abrir a modal na tela
        modalAberto.classList.add("aberto")
        //serve pra abrir o video depois que fechar
      video.setAttribute("src", linkVideo);
        
    })

btnFechar.addEventListener('click', () => {
        modalAberto.classList.remove("aberto")
        //serve para parar o video
        video.setAttribute("src","")

    })