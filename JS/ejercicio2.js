let edad = (parseInt(prompt("Introduce tu edad")));
let imc = (parseFloat(prompt("Introduce tu IMC")));


let clasificacion = "";
let alerta = "";


if (imc < 18.5) {
    clasificacion = "Bajo peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    clasificacion = "Peso normal";
} else if (imc >= 25 && imc <= 29.9) {
    clasificacion = "Sobrepeso";
} else if (imc >= 30 && imc <= 34.9) {
    clasificacion = "Obesidad grado 1";
} else if (imc >= 35 && imc <= 39.9) {
    clasificacion = "Obesidad grado 2";
    if (edad >= 60) {
        alerta = "Riesgo alto de enfermedades cardiovasculares";
    }
} else if (imc >= 40) {
    clasificacion = "Obesidad grado 3";
    if (edad >= 60) {
        alerta = "Riesgo muy alto de enfermedades cardiovasculares";
    }
}

console.log("Clasificación: " + clasificacion);

if (alerta) {
    console.log("Alerta: " + alerta);
}