function calcularImc() {
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    // "" = vazio
    if (nome.trim() !== "" && altura !== NaN && peso !== NaN) {
        const imc = peso / (altura ** 2);
    } else {
        alert ("Preencha todos os campos!");
    }
}

document.getElementById("calcular").addEventListener("click", calcularImc);