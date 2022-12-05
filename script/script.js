let inputSenha = document.querySelector('.senha')

let repetirSenha = document.querySelector('.repetir_senha')

// Elementos usados para exibir e ocultar a senha.
let exibirSenha = document.querySelector('.exibirSenha')

let exibirSenhaText = document.querySelector('.exibirText')

let iconExibir = document.querySelector('#exibir')



function abrirModal() {
    var abrir = document.querySelector('section.modal_redefinir')

    abrir.style.display = 'block'
}


function fecharModal() {
    var fechar = document.querySelector('section.modal_redefinir')

    fechar.style.display = 'none'
}



// Exibe e Oculta os caracteres do input de senha e do input de repetir senha.
exibirSenha.addEventListener('click', () => {
    if (inputSenha.type === "password" && repetirSenha.type === "password") {
        inputSenha.type = 'text'
        repetirSenha.type = 'text'

        exibirSenhaText.textContent = 'Ocultar Senha'
        iconExibir.style.color = 'var(--orange)'
        exibirSenhaText.style.color = 'var(--orange)'
    } else {
        inputSenha.type = 'password'
        repetirSenha.type = 'password'

        exibirSenhaText.textContent = 'Exibir Senha'
        iconExibir.style.color = 'var(--green)'
        exibirSenhaText.style.color = 'var(--green)'
    }
})
