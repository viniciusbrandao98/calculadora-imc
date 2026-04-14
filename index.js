const btnEl = document.getElementById("btn");
const mensagemCondicao = document.getElementById("condicao-peso");
const campoAltura = document.getElementById("altura");
const campoPeso = document.getElementById("peso");
const campoResultado = document.getElementById("resultado-imc");

function calcularImc() {
    const altura = campoAltura.value;
    const peso = campoPeso.value;
    const IMC = peso / ((altura / 100) ** 2);
    const imcFormatado = IMC.toFixed(2);
    campoResultado.value = imcFormatado;
    if (altura === "" || peso === "") {
        alert("Opa! Você esqueceu de preencher o peso ou a altura.");
        return;
    } 
    if (imcFormatado < 18.5) {
        mensagemCondicao.innerText = "Abaixo do peso";
        mensagemCondicao.style.color = "blue";
    } else if (imcFormatado <= 24.9) {
        mensagemCondicao.innerText = "Peso normal";
        mensagemCondicao.style.color = "green";
    } else if (imcFormatado <= 29.9) {
        mensagemCondicao.innerText = "Sobrepeso";
        mensagemCondicao.style.color = "yellow";
    } else if (imcFormatado <= 35) {
        mensagemCondicao.innerText = "Obesidade";
        mensagemCondicao.style.color = "orange";
    } else {
        mensagemCondicao.innerText = "Obesidade extrema";
        mensagemCondicao.style.color = "red";
    }
}


btnEl.addEventListener("click", () => {
    calcularImc();
    setTimeout(() => {
       campoAltura.value = "";
       campoPeso.value = "";
       campoResultado.value = ""
       campoResultado.value = "";
       mensagemCondicao.innerText = "";
    }, 5000);
});

