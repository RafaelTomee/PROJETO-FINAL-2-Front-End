        // Variáveis globais para o jogo do número secreto
        let numeroSecreto = Math.floor(Math.random() * 100) + 1;
        let tentativas = 0;

        // Função para abrir o exemplo 1 - Jogo do Número Secreto
        function abrirJogoNumeroSecreto() {
            esconderTodosConteudos();
            document.getElementById('numero-secreto').classList.add('active');
            reiniciarJogo();
        }

        // Função para abrir o exemplo 2 - Cálculo de Média
        function abrirCalculoMedia() {
            esconderTodosConteudos();
            document.getElementById('calculo-media').classList.add('active');
            limparNotas();
        }

        // Função para abrir o exemplo 3 - Formulário
        function abrirFormulario() {
            esconderTodosConteudos();
            document.getElementById('formulario').classList.add('active');
            limparFormulario();
        }

        // Função auxiliar para esconder todos os conteúdos
        function esconderTodosConteudos() {
            const conteudos = document.querySelectorAll('.content-area');
            conteudos.forEach(conteudo => {
                conteudo.classList.remove('active');
            });
        }

        // Jogo do Número Secreto


function abrirJogoNumeroSecreto() {
    document.getElementById('numero-secreto').style.display = 'block';
    document.getElementById('calculo-media').style.display = 'none';
    document.getElementById('formulario').style.display = 'none';
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    document.getElementById('resultado-jogo').innerHTML = '';
    document.getElementById('tentativas-info').innerHTML = 'Tentativas: 0';
}

function verificarPalpite() {
    let palpite = parseInt(document.getElementById('palpite').value);
    let resultado = document.getElementById('resultado-jogo');

    if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
        resultado.innerHTML = 'Digite um número entre 1 e 100.';
        return;
    }

    tentativas++;

    if (palpite === numeroSecreto) {
        resultado.innerHTML = `Acertou! Era ${numeroSecreto}. Tentativas: ${tentativas}`;
        alert(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`);
    } else if (palpite < numeroSecreto) {
        resultado.innerHTML = 'Tente um número maior!';
    } else {
        resultado.innerHTML = 'Tente um número menor!';
    }

    document.getElementById('tentativas-info').innerHTML = 'Tentativas: ' + tentativas;
    document.getElementById('palpite').value = '';
}

// Cálculo de Média
function abrirCalculoMedia() {
    document.getElementById('numero-secreto').style.display = 'none';
    document.getElementById('calculo-media').style.display = 'block';
    document.getElementById('formulario').style.display = 'none';
    limparNotas();
}

function calcularMedia() {
    let n1 = parseFloat(document.getElementById('nota1').value);
    let n2 = parseFloat(document.getElementById('nota2').value);
    let n3 = parseFloat(document.getElementById('nota3').value);
    let n4 = parseFloat(document.getElementById('nota4').value);

    let media = (n1 + n2 + n3 + n4) / 4;
    let resultado = document.getElementById('resultado-media');
    let situacao = '';

    if (media >= 7) {
        situacao = 'Aprovado';
    } else if (media >= 5) {
        situacao = 'Recuperação';
    } else {
        situacao = 'Reprovado';
    }

    resultado.innerHTML = `Média: ${media.toFixed(2)} - ${situacao}`;
    alert(`Média: ${media.toFixed(2)}\nSituação: ${situacao}`);
}

function limparNotas() {
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
    document.getElementById('nota4').value = '';
    document.getElementById('resultado-media').innerHTML = '';
}

// Formulário
function abrirFormulario() {
    document.getElementById('numero-secreto').style.display = 'none';
    document.getElementById('calculo-media').style.display = 'none';
    document.getElementById('formulario').style.display = 'block';
    document.getElementById('resultado-formulario').innerHTML = '';
    document.getElementById('meuFormulario').reset();
}

function enviarFormulario() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let idade = document.getElementById('idade').value;
    let curso = document.getElementById('curso').value;
    let resultado = document.getElementById('resultado-formulario');

    if (!nome || !email || !idade || !curso) {
        resultado.innerHTML = 'Preencha todos os campos.';
        return;
    }

    resultado.innerHTML = `Nome: ${nome}<br>Email: ${email}<br>Idade: ${idade}<br>Curso: ${curso}`;
    alert(`Formulário enviado!\nNome: ${nome}\nEmail: ${email}\nIdade: ${idade}\nCurso: ${curso}`);
}
