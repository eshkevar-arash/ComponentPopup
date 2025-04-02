let btnNewsLetter = document.querySelector('.btn-newsletter')
let overlay = document.querySelector('.overlay')
let boxBtnClose = document.querySelector('.box__btn-close')
btnNewsLetter.addEventListener('click', () => {
    overlay.classList.add('overlay--fade')
})
boxBtnClose.addEventListener('click', ()=> {
    overlay.classList.remove('overlay--fade')
})