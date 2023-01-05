let escuro = document.getElementById('black')
let claro =  document.getElementById('white')
let titulo = document.getElementById('titulo')

//alterando as propriedades direto na tag style
function branco(){    
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}

function dark (){
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
    titulo.style.fontFamily = 'Lucida Sans'
    titulo.style.color = 'red'
    titulo.style.fontSize = '200px'
}

//alterando utilizando as class no css
function switchTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

escuro.addEventListener('click', dark)
claro.addEventListener('click', branco)
document.getElementById('switchBtn').addEventListener('click', switchTheme)