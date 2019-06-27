//alert("Ola mundo");
//console.log("Oi Mundo");
//console.log(document);
//console.log(document.querySelector("h1"));
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
// Fazendo o imc do info-imc da tabela
// Validando peso e altura
// Fazendo um loop para validar a lista inteira e converter o imc
var pacientes = document.querySelectorAll(".paciente");
for (i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso").textContent;
    var tdAltura = paciente.querySelector(".info-altura").textContent;
    paciente.querySelector(".info-imc").textContent = tdPeso / (tdAltura * tdAltura);
    var pesoIsValid = true;
    var alturaIsValid = true;

    if (tdPeso <= 0 || tdPeso >= 1000) {
        console.log("Peso inválido");
        pesoIsValid = false;
        paciente.querySelector(".info-imc").textContent = "Peso inválido";
        //paciente.style.color = "red"; Deixa a linha da tabela com a cor vermelha
        paciente.classList.add("paciente-invalido"); // Deixa o bacgroundcolor com outra cor, ClassList acessa todos metodos do objeto e o add você adiciona o novo método do css
    }

    if (tdAltura <= 0 || tdAltura >= 2.60) {
        console.log("Altura inválida");
        alturaIsValid = false;
        paciente.querySelector(".info-imc").textContent = "Altura inválida";
        paciente.style.backgroundColor = "lightcoral";
    }

    if (pesoIsValid && alturaIsValid) {
        paciente.querySelector(".info-imc").textContent = (tdPeso / (tdAltura * tdAltura)).toFixed(2);
    }
}