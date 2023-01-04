const btnNovaTec = document.getElementById("btnNovatec")

const lista = []

const name = document.getElementById('name').value

    btnNovaTec.addEventListener("submit", function (ev){
    ev.preventDefault()

        const div = document.getElementById("div")

        const form = document.createElement('li')

        const label = document.createElement('label')
        label.innerText = 'Nova tecnología '
        const input = document.createElement("input")

        const linha = document.createElement('br')

        const labelRadio = document.createElement('label')
        labelRadio.innerText = '\nExperiência: '

        const inputRadio1 = document.createElement('input')
        inputRadio1.type = 'radio'
        inputRadio1.name = 'exp'
        inputRadio1.value = '2 anos'
        const labelRadio1 = document.createElement('label')
        labelRadio1.innerText = ' 2 anos     /'

        const inputRadio2 = document.createElement('input')
        inputRadio2.type = 'radio'
        inputRadio2.name = 'exp'
        inputRadio2.value = '5 anos'
        const labelRadio2 = document.createElement('label')
        labelRadio2.innerText = ' 5 anos\n'

        const btnRemove = document.createElement('button')
        btnRemove.type = 'button'
        btnRemove.innerText = 'Remover Tecnologia'
        btnRemove.addEventListener("click", function(){
                document.removeChild(form)
            })

        


        form.append(label, input, labelRadio, inputRadio1, labelRadio1, inputRadio2, labelRadio2, btnRemove)

        div.append(form)
})




