let closeIcon = document.querySelector('.close')

function iconClose() {
    closeIcon.addEventListener('mouseenter', () => {
        closeIcon.setAttribute('src', 'imagens/xmark-solid.svg')
    })

    closeIcon.addEventListener('mouseleave', () => {
        closeIcon.setAttribute('src', 'imagens/close.svg')
    })

    closeIcon.addEventListener('touchstart', () => {
        closeIcon.setAttribute('src', 'imagens/xmark-solid.svg')
    })

    closeIcon.addEventListener('touchend', () => {
        setTimeout(() => {
            closeIcon.setAttribute('src', 'imagens/close.svg')
        }, 3000)
    })
}

iconClose()





const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')

function changeTheme(event) {
    if (event.matches) {
        closeIcon.setAttribute('src', 'imagens/xmark-solid.svg')

        closeIcon.addEventListener('mouseenter', () => {
            closeIcon.setAttribute('src', 'imagens/close.svg')
        })
    
        closeIcon.addEventListener('mouseleave', () => {
            closeIcon.setAttribute('src', 'imagens/xmark-solid.svg')
        })
    
        closeIcon.addEventListener('touchstart', () => {
            closeIcon.setAttribute('src', 'imagens/close.svg')
        })
    
        closeIcon.addEventListener('touchend', () => {
            setTimeout(() => {
                closeIcon.setAttribute('src', 'imagens/xmark-solid.svg')
            }, 3000)
        })
    }
}

// Escuta a mudança de Tema, na função changeTheme(event) com base no perfersColorScheme.

prefersColorScheme.addListener(changeTheme)

// Após as mudanças serem escutadas, as mudanças são aplicadas.

changeTheme(prefersColorScheme)
