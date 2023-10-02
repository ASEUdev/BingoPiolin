function dividirNumeros() {
    let columnas = [];
    let inicio = 1;

    for (let letra = "B".charCodeAt(0); letra <= "O".charCodeAt(0); letra++) {
        let columna = [];
        for (let i = inicio; i <= inicio + 14; i++) {
            columna.push(i);
        }
        columnas.push(columna);
        inicio += 15;
    }
    return columnas;
}

function crearCeldas() {
    let numerosPorColumna = dividirNumeros();

    for (let i = 0; i < 5; i++) {
        let columna = numerosPorColumna[i];
        let filaId = "fila" + (i + 1);
        let filaElement = document.getElementById(filaId);

        for (let j = 0; j < columna.length; j++) {
            let cell = document.createElement("td");
            cell.id = `n${columna[j]}`;
            cell.textContent = columna[j];
            filaElement.appendChild(cell);
        }
    }
}
let generados = [];
let mostrables = [];

function generarValor() {
    let min = Math.ceil(1);
    let max = Math.floor(76);
    let letras = ["B", "I", "N", "G", "O"];
    while (true) {
        let valor = Math.floor(Math.random() * (max - min) + min);
        if (!generados.includes(valor)) {
            let cell = document.getElementById(`n${valor}`);
            cell.style.backgroundColor = "green";
            generados.push(valor);
            if (mostrables.length >= 5) {
                mostrables.shift();
            }
            mostrables.push(designarLetra(letras, valor));
            return designarLetra(letras, valor);
        }
        if (generados.length === 75) {
            alert("Ya se han jugado todos los numeros");
            return;
        }
    }
}
function designarLetra(letras, valor) {
    if (valor < 16) {
        return `${letras[0]}${valor}`;
    } else if (valor >= 16 && valor <= 30) {
        return `${letras[1]}${valor}`;
    } else if (valor >= 31 && valor <= 45) {
        return `${letras[2]}${valor}`;
    } else if (valor >= 46 && valor <= 60) {
        return `${letras[3]}${valor}`;
    } else if (valor >= 61 && valor <= 75) {
        return `${letras[4]}${valor}`;
    }
}
function mostrarValor() {
    let texto = document.getElementById("valorGenerado");
    texto.textContent = generarValor();
}
let interval;
function autoGen() {
    if (!interval) {
        interval = setInterval(() => {
            if (generados.length === 75) {
                clearInterval(interval);
                interval = null;
            }
            mostrarValor();
        }, 1000);
    }
}
function cancelGen() {
    clearInterval(interval);
    interval = null;
    value = false;
}
function resetBingo(){
    for(let x = 0; x < generados.length; x++){
        let cell = document.getElementById(`n${generados[x]}`);
        cell.style.backgroundColor = "transparent";
    }
    let valor = document.getElementById("valorGenerado");
    valor.textContent = "";
    generados = [];
    mostrables = [];
}
window.onload = crearCeldas;
