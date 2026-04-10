const btnEl = document.getElementById("btn");




function calcularImc() {
    const alturaValor = document.getElementById("altura").value;
    const pesoValor = document.getElementById("peso").value;
    const IMC = pesoValor / ((alturaValor/100)**2);
    const imcFormatado = IMC.toFixed(2);
    const seuIMC = document.getElementById("resultado-imc").value = imcFormatado;
}

btnEl.addEventListener("click", () => {
    calcularImc()
});

