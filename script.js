const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const nome = document.getElementById("nome");

function calcularImc() {
    const imc = parseFloat(peso.value) / ( parseFloat(altura.value) ** 2);
    
    if (imc < 18.5) {
        resultado.textContent = nome.value + ", seu IMC é " + imc + ". Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.textContent = nome.value + ", seu IMC é " + imc + ". Você está com o peso ideal. Parabéns!";
    } else if (imc >= 24.9 && imc < 29.9) {
        resultado.textContent = nome.value + ", seu IMC é " + imc + ". Você está acima do peso.";
    } else if (imc >= 29.9 && imc < 34.9) {
        resultado.textContent = nome.value + ", seu IMC é " + imc + ". Você está com obesidade grau I.";
    } else if (imc >= 34.9 && imc < 39.9) {
        resultado.textContent = nome.value + ", seu IMC é " + imc + ". Você está com obesidade grau II.";
    } else {
        resultado.textContent = nome.value + ", seu IMC é " + imc + ". Você está com obesidade grau III.";
    }

}

calcular.addEventListener("click", calcularImc);

// if (imc.value < 18.5) {
//     calcularImc;
//     resultado.textContent = nome + ", seu IMC é " + calcularImc.imc + ". Você está abaixo do peso."
// } else {
//     alert ("ta errado nega")
// }

// function abaixoDoPeso() {
//     if (resultado.value < 18.5) {
//         alert("Seu IMC é de " + resultado.value + ". Você está abaixo do peso.")
//     } else {
//         alert("Preencha todos os campos!");
//     }
// }

// calcular.addEventListener("click", abaixoDoPeso);