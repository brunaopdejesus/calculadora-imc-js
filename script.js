const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

function calcularImc() {
    const imc = parseFloat(peso.value) / ( parseFloat(altura.value) ** 2);
    resultado.textContent = imc;
}

calcular.addEventListener("click", calcularImc);





// function calculoImc() {
//     resultado.value = parseInt(peso) / parseInt(altura * altura);
    
// }

// calcular.addEventListener("click", calculoImc);




// function abaixoDoPeso() {
//     if (resultado.value < 18.5) {
//         alert("Seu IMC é de " + resultado.value + ". Você está abaixo do peso.")
//     } else {
//         alert("Preencha todos os campos!");
//     }
// }

// calcular.addEventListener("click", abaixoDoPeso);