let inputSenha = document.querySelector('.senha')

let repetirSenha = document.querySelector('.repetir_senha')


let avisoSenha = document.querySelector('.avisoSenha')


// Botão de submit do formulário.
let btnEnviar = document.querySelector('.btn_cadastrar')


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


// Desabilita o botão de submit, se os caracteres do input de senha, for diferente dos caracteres do input de repetir senha e exibe uma mensagem de aviso.
repetirSenha.addEventListener('keyup', () => {
    if (inputSenha.value != repetirSenha.value) {
        btnEnviar.setAttribute('disabled', true)
        btnEnviar.classList.add('btn_disabled')
        
        avisoSenha.style.display = 'block'
    } else {
        btnEnviar.removeAttribute('disabled')
        btnEnviar.classList.remove('btn_disabled')
        
        avisoSenha.style.display = 'none'
    }
})



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
