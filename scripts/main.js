const tituloClasse = document.querySelector(".titulo")
const tituloID = document.querySelector("#titulo")
const tituloTAG = document.querySelector("h2")

// -----------------------------------------------------
// <variável>.textContent = "novo texto"
tituloClasse.textContent = "Novo texto :D"
// -----------------------------------------------------

// <variável>.remove()
// tituloClasse.remove()

// -----------------------------------------------------

// console.log("qualquer coisa")
console.log(1+2);

// -----------------------------------------------------
let opcao = confirm("Manter o H2 da página? (seja piedoso 😢)")

if (opcao){
    alert("O H2 sobrevive mais um dia")
    tituloTAG.innerText =  "Obrigado 🛐"
}
else{
    tituloTAG.remove()
    alert("V-v-você o matou...")
}
// -----------------------------------------------------

/* <variáverl>.addEventListener("<nomeDoEvento>", function(event){
    <comandinhos mesmo>
 })*/

tituloClasse.addEventListener("click", function(event){
    tituloClasse.innerText = "Alterações mesmo 🍓"
})

tituloID.addEventListener("mouseenter", function(event){
    tituloID.innerText = "Entrou 🤭"
})
tituloID.addEventListener("mouseleave", function(event){
    tituloID.innerText = "Saiu 😢"
})

// -----------------------------------------------------

const entradaUsuario = document.querySelector("#entradaUsuario")
const copiaEntrada = document.querySelector(".copiaEntrada")

entradaUsuario.addEventListener("keypress", function(event){
    if(event.key == "Enter") copiaEntrada.innerText = entradaUsuario.value
})

// -----------------------------------------------------