function calcular(){
    // Declaração de variáveis 
    var kid = document.getElementsByClassName("inputs")[0]
    var adult = document.getElementsByClassName("inputs")[1]
    var time = document.getElementsByClassName("inputs")[2]
    var container = document.getElementsByClassName("results")[0]
    var num_cerveja = document.getElementById("num_cerveja")
    var num_carne = document.getElementById("num_carne")
    var num_refri = document.getElementById("num_refri")
    var sum = 0

    // Verifica se os caracteres digitados são números inteiros, maiores que zero e diferentes de null
    if (!(kid.value % 1 === 0 && kid.value > 0 && kid.value != null) || !(adult.value % 1 === 0 && adult.value > 0 && adult.value != null) || !(time.value % 1 === 0 && time.value > 0 && time.value != null)){
        alert("Digite Caracteres válidos!")
        //Limpa os campos do input
        adult.value = ""
        kid.value = ""
        time.value = ""
        return
    }

    // Verifica se a duração é maior que 6 horas e faz as contas
    if (time.value <= 6){
        carne = (adult.value * 0.5) + (kid.value * 0.2)
        beer = adult.value * 4
        coca = (adult.value * 0.5) + (kid.value * 1)
    }
    else{
        carne = (adult.value * 0.6) + (kid.value * 0.3)
        beer = adult.value * 6
        coca = (adult.value * 1) + (kid.value * 2)
    }

    // Mostra os resultados
    container.style.opacity = "1"
    num_carne.innerHTML =  carne + "kg de carne"
    num_cerveja.innerHTML = beer + "l de cerveja"
    num_refri.innerHTML = coca + "l de Refrigerante"

    console.log(Number.isInteger(adult.value))
}   