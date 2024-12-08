// Container do verificador de senha.
let verificarCaracteres = document.querySelector('.verificar_caracteres')

// imagem da espada.
let espada = document.querySelector('.espada')


let inputNome = document.querySelector('.input_nome')

let inputEmail = document.querySelector('.email')

let inputSenha = document.querySelector('.senha')

let repetirSenha = document.querySelector('.repetir_senha')

let avisoNome = document.querySelector('.avisoNome')

let avisoEmail = document.querySelector('.avisoEmail')

let avisoGeral = document.querySelector('.avisoGeral')


let close = document.querySelector('.close')

let voltar = document.querySelector('.voltar')


// Círculo usado nas animações.
let circleCortado = document.querySelectorAll('.circle_cortado')

// Círculos que mudam a cor, quando pelo menos um caractere específico é digitado.
let circle = document.querySelectorAll('.circle')

// É o último componente que aparece, quando as animações terminam.
let check = document.querySelectorAll('.check')


// São os círculos, referente a cada um dos tipos de caracteres.
let upper = document.querySelector('#uppercase')

let number = document.querySelector('#number')

let lower = document.querySelector('#lowercase')

let especiais = document.querySelector('#especiais')


// Círculo que muda de cor, quando é digitado 8 caracteres ou mais. Assim indicando que o tamanho mínimo de caracteres da senha, foi atingido.
let tamanho = document.querySelector('#tamanho')


// Serve para exibir a palavra OK, para ajudar a entender, que aquele tipo de caractere já foi digitado.
let upperText = document.querySelector('#upper')

let numberText = document.querySelector('#numero')

let lowerText = document.querySelector('#lower')

let especiaisText = document.querySelector('#simbolos')


// Para ocultar a palavra OK, de cada um dos requisitos.
let confirma = document.querySelectorAll('.confirma')


let mensagemErro = document.querySelector('.mensagemErro')

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



// Faz a verificação no input de nome, se digitar caracteres que não são permitidos, aparece uma mensagem de aviso.
inputNome.addEventListener('keyup', () => {
    let number = /[0-9]/g
    let especiais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<,.])/

    blockCaracteres = (inputNome.value.match(number) || inputNome.value.match(especiais))

    if (blockCaracteres || inputNome.value.length < 6) {
        avisoNome.textContent = 'Não digite: símbolos especiais, números ou menos de 6 letras.'
        avisoNome.style.display = 'block'

        btnEnviar.setAttribute('disabled', true)
        btnEnviar.classList.add('btn_disabled')
    } else {
        avisoNome.textContent = ''
        avisoNome.style.display = 'none'
    }
})


// Verifica o input de e-mail, se digitar caracteres não permitidos, vai aparecer a mensagem de aviso.
inputEmail.addEventListener('keyup', () => {
    let especiaisNot = /([,,*, ,!,",~,?,#,$,%,>,<,&,+,_,^,',},:,{,),;,(,/,-])/
    let especialNot = ' @'
    let especialNot2 = '@.com'
    let especialNot3 = '@'

    verificarEspeciaisNot = (inputEmail.value.match(especiaisNot) || inputEmail.value.match(especialNot) || inputEmail.value.match(especialNot2) || !inputEmail.value.match(especialNot3))

    if (verificarEspeciaisNot) {
        avisoEmail.textContent = 'Não aperte no espaço, não digite @.com, e digite o seu e-mail corretamente.'
        avisoEmail.style.display = 'block'

        btnEnviar.setAttribute('disabled', true)
        btnEnviar.classList.add('btn_disabled')
    } else {
        avisoEmail.textContent = ''
        avisoEmail.style.display = 'none'
    }
})



// revela o verificador de senha.
inputSenha.addEventListener('focus', () => {
    verificarCaracteres.style.display = 'flex'
})


// Todas as funcionalidades do verificador.
inputSenha.addEventListener('keyup', () => {
    let upperCaseLetters = /[A-Z]/g
    
    // Verifica, se o input possui em seu valor uma ou mais letras maiúsculas.
    if (inputSenha.value.match(upperCaseLetters)) {
        upper.style.background = 'var(--orange-red)'
        upperText.textContent = 'OK'
    } else {
        upper.style.background = 'var(--red)'
        upperText.textContent = ''
    }
    
    
    let numbers = /[0-9]/g
    
    // Verifica no valor do input, se possui um ou mais números.
    if (inputSenha.value.match(numbers)) {
        number.style.background = 'var(--orange)'
        numberText.textContent = 'OK'
    } else {
        number.style.background = 'var(--red)'
        numberText.textContent = ''
    }
    
    
    let lowerCaseLetters = /[a-z]/g
    
    // Verifica, se o input possui em seu valor uma ou mais letras minúsculas.
    if (inputSenha.value.match(lowerCaseLetters)) {
        lowerText.textContent = 'OK'
        lower.style.background = 'var(--yellow)'
    } else {
        lowerText.textContent = ''
        lower.style.background = 'var(--red)'
    }
    
    
    let simbolos = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/
    
    // Verifica se no valor do input, possui um ou mais símbolos especiais.
    if (inputSenha.value.match(simbolos)) {
        especiais.style.background = 'var(--blue)'
        especiaisText.textContent = 'OK'
    } else {
        especiais.style.background = 'var(--red)'
        especiaisText.textContent = ''
    }
    
    
    // Condição lógica:
    let verificarTudo = (inputSenha.value.match(upperCaseLetters) && inputSenha.value.match(numbers) && inputSenha.value.match(lowerCaseLetters) && inputSenha.value.match(simbolos))
    

    /* Condições para executar as animações,  em intervalos corretos.
    
    E para desabilitar o botão de submit, se estiver faltado qualquer um dos caracteres dos requisitos, mesmo se o tamanho da senha for maior ou igual a oito.
    
    E a mensagem de erro aparece, quando o tamanho da senha é menor que oito.*/
    if (inputSenha.value.length >= 8 && verificarTudo) {
        tamanho.style.background = 'var(--green)'
        
        if (inputSenha.value.length < 8) {
            espada.style.display = 'none'
        } else if (event.keyCode != 8 && inputSenha.value.length > 8) {
            espada.style.display = 'block'
        } else if (event.keyCode == 8 || inputSenha.value.length > 8) {
            espada.style.display = 'none'
        } else {
            espada.style.display = 'block'
        
            setTimeout(function () {
                espada.style.display = 'none'
            }, 5000)
            
            setTimeout(function () {
                animacoes()
            }, 5300)
        }
        
        mensagemErro.style.display = 'none'
    } else if (inputSenha.value.length < 8) {
        for (let c = 0; c < check.length; c++) {
            check[c].style.display = 'none'
        }
        
        for (c = 0; c < circle.length; c++) {
            circle[c].style.display = 'block'
        }
        
        btnEnviar.setAttribute('disabled', true)
        btnEnviar.classList.add('btn_disabled')
        
        mensagemErro.style.display = 'block'
    } else {
        tamanho.style.background = 'var(--red)'
        
        btnEnviar.setAttribute('disabled', true)
        btnEnviar.classList.add('btn_disabled')
        
        mensagemErro.style.display = 'block'
    }
    
    
    if (inputSenha.value == '') {
        tamanho.style.background = 'var(--red)'
    }    
})



// função para realizar as animações finais.
function animacoes() {
    for (x = 0; x < confirma.length; x++) {
        confirma[x].style.display = 'none'
    }


    for (i = 0; i < circleCortado.length; i++) {
        circleCortado[i].style.display = 'flex'
    }
    
    
    setTimeout(function () {
        for (let i = 0; i < circleCortado.length; i++) {
            circleCortado[i].style.display = 'none'
        }
        
        for (let c = 0; c < check.length; c++) {
            check[c].style.display = 'block'
        }
    }, 4000)
    
    
    
    for (c = 0; c < circle.length; c++) {
        circle[c].style.display = 'none'
    }
}


// Ocultar o verificador de senha, quando o input de repetir senha, estiver focado. E exibe uma mensagem de aviso, caso um ou mais inputs, estiver vázio.
repetirSenha.addEventListener('focus', () => {
    verificarCaracteres.style.display = 'none'

    const inputsVazio = (inputNome.value == "" || inputEmail.value == "" || inputSenha.value == "" || repetirSenha.value == "")

    if (inputsVazio) {
        avisoGeral.style.display = 'block'
        avisoGeral.textContent = 'Por favor ! Preencha todos os campos.'
    }
})


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
        avisoGeral.style.display = 'none'
    }
})



// Exibe e Oculta os caracteres do input de senha e do input de repetir senha.
exibirSenha.addEventListener('click', () => {
    if (inputSenha.type === "password" && repetirSenha.type === "password") {
        inputSenha.type = 'text'
        repetirSenha.type = 'text'

        exibirSenhaText.textContent = 'Ocultar Senha'
        iconExibir.setAttribute('src', 'imagens/eye-solid2.svg')
        exibirSenhaText.style.color = 'var(--orange)'
    } else {
        inputSenha.type = 'password'
        repetirSenha.type = 'password'

        exibirSenhaText.textContent = 'Exibir Senha'
        iconExibir.setAttribute('src', 'imagens/eye-solid.svg')
        exibirSenhaText.style.color = 'var(--green)'
    }
})


// Desabilita o submit em 0.100 segundos.
function blockSubmit() {
    setTimeout(() => {
        btnEnviar.setAttribute('disabled', true)
        btnEnviar.classList.add('btn_disabled')
    }, 100)
}

blockSubmit()




close.addEventListener('mouseenter', () => {
    close.setAttribute('src', 'imagens/xmark-solid.svg')
})

close.addEventListener('mouseleave', () => {
    close.setAttribute('src', 'imagens/close.svg')
})



voltar.addEventListener('mouseenter', () => {
    voltar.setAttribute('src', 'imagens/arrow-left-solid2.svg')
})

voltar.addEventListener('mouseleave', () => {
    voltar.setAttribute('src', 'imagens/arrow-left-solid.svg')
})
