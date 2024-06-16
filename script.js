const sr = ScrollReveal({

    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,// animation repeat
})

sr.reveal(`.titulo_principal`)
sr.reveal(`.hola`,{origin:'bottom'})
sr.reveal(`.subtitulo`)
sr.reveal(`.parrafo1`,{origin:'bottom'})
sr.reveal(`.img-container`,{origin:'left'})
sr.reveal(`.titulo_tarjeta`)
sr.reveal(`.carta`,{origin:'bottom'})
sr.reveal(`.ultimo`)
sr.reveal(`.boton_ultimo`,{origin:'bottom'})
