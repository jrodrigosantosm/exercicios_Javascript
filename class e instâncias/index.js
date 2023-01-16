class user{
    constructor(fullname, email, key){
        this.fullname = fullname
        this.email = email
        this.key = key
}}
const btn = document.getElementById("btn").addEventListener("click",function (){
const fullname = document.getElementById("name").value
const email = document.getElementById("email").value
const key = document.getElementById("key").value 
let usuario = new user(fullname,email,key)
console.log(usuario)
    if (usuario.email == "ex@gmail.com"){
        alert("usuário cadastrado")
}})