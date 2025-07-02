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

        // Funções do Jogo do Número Secreto
        function verificarPalpite() {
            const palpite = parseInt(document.getElementById('palpite').value);
            const resultadoDiv = document.getElementById('resultado-jogo');
            const tentativasDiv = document.getElementById('tentativas-info');
            
            if (isNaN(palpite) || palpite < 1 || palpite > 100) {
                resultadoDiv.innerHTML = '<div class="error">Por favor, digite um número entre 1 e 100!</div>';
                return;
            }
            
            tentativas++;
            tentativasDiv.innerHTML = `<div class="info">Tentativas: ${tentativas}</div>`;
            
            if (palpite === numeroSecreto) {
                resultadoDiv.innerHTML = `<div class="success">🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!</div>`;
                // Usando alert conforme solicitado
                alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativas!`);
            } else if (palpite < numeroSecreto) {
                resultadoDiv.innerHTML = '<div class="info">📈 O número secreto é MAIOR que ' + palpite + '!</div>';
            } else {
                resultadoDiv.innerHTML = '<div class="info">📉 O número secreto é MENOR que ' + palpite + '!</div>';
            }
            
            document.getElementById('palpite').value = '';
        }

        function reiniciarJogo() {
            numeroSecreto = Math.floor(Math.random() * 100) + 1;
            tentativas = 0;
            document.getElementById('palpite').value = '';
            document.getElementById('resultado-jogo').innerHTML = '';
            document.getElementById('tentativas-info').innerHTML = '<div class="info">Tentativas: 0</div>';
        }

        // Funções do Cálculo de Média
        function calcularMedia() {
            const nota1 = parseFloat(document.getElementById('nota1').value) || 0;
            const nota2 = parseFloat(document.getElementById('nota2').value) || 0;
            const nota3 = parseFloat(document.getElementById('nota3').value) || 0;
            const nota4 = parseFloat(document.getElementById('nota4').value) || 0;
            
            const media = (nota1 + nota2 + nota3 + nota4) / 4;
            const resultadoDiv = document.getElementById('resultado-media');
            
            let situacao = '';
            let classe = '';
            
            if (media >= 7) {
                situacao = 'Aprovado! 🎉';
                classe = 'success';
            } else if (media >= 5) {
                situacao = 'Recuperação 📚';
                classe = 'info';
            } else {
                situacao = 'Reprovado 😞';
                classe = 'error';
            }
            
            resultadoDiv.innerHTML = `
                <div class="${classe}">
                    <strong>Média: ${media.toFixed(2)}</strong><br>
                    Situação: ${situacao}
                </div>
            `;
            
            // Usando alert conforme a estrutura do jogo anterior
            alert(`Média calculada: ${media.toFixed(2)}\nSituação: ${situacao}`);
        }

        function limparNotas() {
            document.getElementById('nota1').value = '';
            document.getElementById('nota2').value = '';
            document.getElementById('nota3').value = '';
            document.getElementById('nota4').value = '';
            document.getElementById('resultado-media').innerHTML = '';
        }

        // Funções do Formulário
        function processarFormulario() {
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const idade = document.getElementById('idade').value;
            const curso = document.getElementById('curso').value;
            const resultadoDiv = document.getElementById('resultado-formulario');
            
            if (!nome || !email || !idade || !curso) {
                resultadoDiv.innerHTML = '<div class="error">Por favor, preencha todos os campos!</div>';
                return;
            }
            
            const dadosProcessados = {
                nome: nome,
                email: email,
                idade: parseInt(idade),
                curso: curso
            };
            
            resultadoDiv.innerHTML = `
                <div class="success">
                    <h3>Dados Processados com Sucesso!</h3>
                    <p><strong>Nome:</strong> ${dadosProcessados.nome}</p>
                    <p><strong>Email:</strong> ${dadosProcessados.email}</p>
                    <p><strong>Idade:</strong> ${dadosProcessados.idade} anos</p>
                    <p><strong>Curso:</strong> ${dadosProcessados.curso}</p>
                </div>
            `;
            
            alert(`Formulário enviado com sucesso!\nNome: ${nome}\nEmail: ${email}\nIdade: ${idade}\nCurso: ${curso}`);
        }

        function limparFormulario() {
            document.getElementById('meuFormulario').reset();
            document.getElementById('resultado-formulario').innerHTML = '';
        }

        // Event listeners para tecla Enter
        document.getElementById('palpite').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                verificarPalpite();
            }
        });

        // Inicialização
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Aplicação carregada com sucesso!');
        });