const btnEl = document.getElementById("btn");
const mensagemCondicao = document.getElementById("condicao-peso");


function calcularImc() {
    const alturaValor = document.getElementById("altura").value;
    const pesoValor = document.getElementById("peso").value;
    const IMC = pesoValor / ((alturaValor / 100) ** 2);
    const imcFormatado = IMC.toFixed(2);
    document.getElementById("resultado-imc").value = imcFormatado;
    if (alturaValor === "" || pesoValor === "") {
        alert("Opa! Você esqueceu de preencher o peso ou a altura.");
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
});

