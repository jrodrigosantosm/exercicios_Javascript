const input = document.getElementById('visorescrever')
const resposta = document.getElementById('visorresultado')
const listadeKeys = ['1','2','3','4','5','6','7','8','9','0','(',')','+','-','/','*','%','']

//a função ira adicionar um evento aos botões através do metodo forEach, por uma função de callbak, utilizando o value armezado em cada botão atraves do data-set//
document.querySelectorAll(".botoes").forEach(function(funcaodosbotoes){
    funcaodosbotoes.addEventListener("click", function(){
        const valor = funcaodosbotoes.dataset.value
        input.value += valor
    })
})



//ira fazer uma verificação, se a tecla apertada não estiver inclusa na lista, não tera um retorno//
input.addEventListener("keydown",function(ev){
    ev.preventDefault()
    if (listadeKeys.includes(ev.key)){
        input.value+=ev.key
        return
    }    

    if (ev.key ==="Backspace"){
        input.value=input.value.slice(0,-1)

    if(ev.key ==="Enter"){
        calculate()
    }    
}
})