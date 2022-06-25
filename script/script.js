function abrirModal() {
    var abrir = document.querySelector('section.modal_redefinir')

    abrir.style.display = 'block'
}


function fecharModal() {
    var fechar = document.querySelector('section.modal_redefinir')

    fechar.style.display = 'none'
}



var containerLogo = document.querySelector('div.container_logo')

document.querySelector('input#inputs').onclick = () => {
    containerLogo.style.display = 'none'
}

