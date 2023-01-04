let form = document.getElementById('formNovaTec')
let ul = document.getElementById('ul')

let btnNewtec = document.getElementById('btnNewtec')
//formulario e nome do input
let newTec = []
//lista de tecnologias

btnNewtec.addEventListener('click', function(ev){
    ev.preventDefault()
    let li = document.createElement('li')
    let inputNewtec = document.createElement('input')
        inputNewtec.type = 'text'
        inputNewtec.className = 'inputNewtec'
    let labelNewtec = document.createElement('label')
        labelNewtec.innerText = 'Nova tecnologia: '
    //campo de nome de nova tecnologia

    let labelexp = document.createElement('label')
        labelexp.innerText = 'Exeperiência:  '
    //campos de experiência:
        let inputradio1 = document.createElement('input')
                inputradio1.type ='radio'
                inputradio1.value = 'Até 2 anos'
                inputradio1.className = 'inputradio'
            let labelradio1 = document.createElement('label')
                labelradio1.innerText = 'Até 2 anos: '
        //opção 1 
        let inputradio2 = document.createElement('input')
                inputradio2.type ='radio'
            let labelradio2 = document.createElement('label')
                labelradio2.innerText = '   3 - 5 anos  '
                inputradio2.value = '3 - 5 anos'
                inputradio2.className = 'inputradio'
        //opção 2
        let inputradio3 = document.createElement('input')
                inputradio3.type ='radio'
            let labelradio3 = document.createElement('label')
                labelradio3.innerText = '   Mais de 5 anos  '
                inputradio3.value = 'Mais de 5 anos'
                inputradio3.className = 'inputradio'
        //opção 3   
        
    let del = document.createElement('button')
        del.type ='button'
        del.innerText = 'Deletar tecnologia'
        del.addEventListener('click', function(){
            ul.removeChild(li)
        })

    li.append(labelNewtec, inputNewtec, labelexp, labelradio1 ,inputradio1, labelradio2, inputradio2, labelradio3, inputradio3, del)
    ul.append(li)
})

let salvar = document.getElementById('btnsalvar')
salvar.addEventListener('click', function(ev){
    ev.preventDefault()
    let name = document.getElementById('name').value
    let lista = []
    newtecn = document.getElementsByClassName('inputNewtec').value
    let dev ={
        Nome : name,
        tecnologia : newTec
        
    }
   lista.push(dev)
console.log({lista})    
})