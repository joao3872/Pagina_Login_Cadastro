let voltar = document.querySelector('.voltar')



function iconVoltar() {
    voltar.addEventListener('mouseenter', () => {
        voltar.setAttribute('src', 'imagens/arrow-left-solid2.svg')
    })

    voltar.addEventListener('mouseleave', () => {
        voltar.setAttribute('src', 'imagens/arrow-left-solid.svg')
    })

    voltar.addEventListener('touchstart', () => {
        voltar.setAttribute('src', 'imagens/arrow-left-solid2.svg')
    })

    voltar.addEventListener('touchend', () => {
        setTimeout(() => {
            voltar.setAttribute('src', 'imagens/arrow-left-solid.svg')
        }, 3000)
    })
}

iconVoltar()





const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')

function changeTheme(event) {
    if (event.matches) {
        voltar.setAttribute('src', 'imagens/arrow-left-solid2.svg')

        voltar.addEventListener('mouseenter', () => {
            voltar.setAttribute('src', 'imagens/arrow-left-solid.svg')
        })
    
        voltar.addEventListener('mouseleave', () => {
            voltar.setAttribute('src', 'imagens/arrow-left-solid2.svg')
        })
    
        voltar.addEventListener('touchstart', () => {
            voltar.setAttribute('src', 'imagens/arrow-left-solid.svg')
        })
    
        voltar.addEventListener('touchend', () => {
            setTimeout(() => {
                voltar.setAttribute('src', 'imagens/arrow-left-solid2.svg')
            }, 3000)
        })
    }
}

// Escuta a mudança de Tema, na função changeTheme(event) com base no perfersColorScheme.

prefersColorScheme.addListener(changeTheme)

// Após as mudanças serem escutadas, as mudanças são aplicadas.

changeTheme(prefersColorScheme)
