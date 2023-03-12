const tituloClasse = document.querySelector(".titulo")
const tituloID = document.querySelector("#titulo")
const tituloTAG = document.querySelector("h2")

// <variável>.textContent = "novo texto"
tituloClasse.textContent = "Novo texto :D"

// <variável>.remove()
// tituloClasse.remove()

// console.log("qualquer coisa")
console.log(1+2);

let opcao = confirm("Manter o H2 da página? (seja piedoso 😢)")

if (opcao){
    alert("O H2 sobrevive mais um dia")
    tituloTAG.innerText =  "Obrigado 🛐"
}
else{
    tituloTAG.remove()
    alert("V-v-você o matou...")
}

/* <variáverl>.addEventListener("<nomeDoEvento>", function(){
    <comandinhos mesmo>
 })*/

tituloClasse.addEventListener("click", function(){
    tituloClasse.innerText = "Alterações mesmo 🍓"
})

tituloID.addEventListener("mouseenter", function(){
    tituloID.innerText = "Entrou 🤭"
})
tituloID.addEventListener("mouseleave", function(){
    tituloID.innerText = "Saiu 😢"
})