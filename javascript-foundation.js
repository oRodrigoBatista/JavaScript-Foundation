let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')


let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxNota3 = document.querySelector('#nota3')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}

function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''
}

function formatarSituacao(situacaoFinal) {
    console.log('Situação Final ' + situacaoFinal)
    switch(situacaoFinal) {

        default:
            console.log('Situação Indefinida')
    } 

}


function validarNumero(numero) {
    let num1 = cxNota1.value
    let num2 = cxNota2.value
    let num3 = cxNota3.value
    if(num1|| num2|| num3)
     {
        formulario.reset() 
        aviso.textContent= 'Digite uma nota entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 2000);
    }
}


btnCalcular.addEventListener('click', function(e) {
    console.log('Calcular Média')

    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let nota3 = parseFloat(cxNota3.value)
    let media = calcularMedia(nota1, nota2, nota3)
    
    console.log(nota1)
    console.log(nota2)
    console.log(nota3)
    console.log(media)

    if(isNaN(media) || media < 0) {
        console.log("Não é um número")
        cxSituacao.value = ''
    } else {
        cxMedia.value = parseFloat(media)
        cxSituacao.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }
    e.preventDefault()
})


btnLimpar.addEventListener('click', function() {
    
})