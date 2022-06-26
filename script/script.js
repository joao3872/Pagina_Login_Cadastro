function abrirModal() {
    var abrir = document.querySelector('section.modal_redefinir')

    abrir.style.display = 'block'
}


function fecharModal() {
    var fechar = document.querySelector('section.modal_redefinir')

    fechar.style.display = 'none'
}


function esconder() {
    var logo = document.querySelector('.container_titulo')
    
    logo.classList.add('active')
}


function revelar() {
    var logo = document.querySelector('.container_titulo')
    
    logo.classList.remove('active')
}

