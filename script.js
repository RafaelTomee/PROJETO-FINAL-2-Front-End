function jogoNumeroSecreto() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let chute;
    let tentativas = 0;

    do {
        let entrada = prompt("Tente adivinhar o número secreto entre 1 e 10:");

        if (entrada === null) {
            alert("Jogo cancelado.");
            break;
        }

        chute = parseInt(entrada);

        if (isNaN(chute)) {
            alert("Por favor, digite um número válido.");
            continue;
        }

        tentativas++;

        if (chute < numeroSecreto) {
            alert("O número secreto é maior!");
        } else if (chute > numeroSecreto) {
            alert("O número secreto é menor!");
        } else {
            alert(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
        }
    } while (chute !== numeroSecreto);
}

function jogoCalculoMedia() {
    const quantidade = parseInt(prompt("Quantos números você deseja para calcular a média?"));
    let soma = 0;

    for (let i = 1; i <= quantidade; i++) {
        let numero = parseFloat(prompt(`Digite o ${i}º número:`));
        soma += numero;
    }

    let media = soma / quantidade;
    alert(`A média dos números é: ${media.toFixed(2)}`);
}

function mostrarJogo() {
    document.getElementById("inputContainer").style.display = "block";
}

function somaNumeros() {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    const resultadoEl = document.getElementById("resultado");

    if (isNaN(num1) || isNaN(num2)) {
        resultadoEl.style.display = "block";
        resultadoEl.innerText = "Digite dois números válidos!";
        return;
    }

    const resultado = num1 + num2;
    resultadoEl.style.display = "block";
    resultadoEl.innerText = `A soma de ${num1} + ${num2} é: ${resultado}`;
}
