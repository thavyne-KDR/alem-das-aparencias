window.ExperienciaQuiz = (() => {
    const letras = ["A", "B", "C", "D"];

    function renderizarSituacao(situacao, indiceAtual, total, aoEscolher) {
        const contexto = document.getElementById("question-context");
        const pergunta = document.getElementById("question");
        const respostas = document.getElementById("answers");

        if (!contexto || !pergunta || !respostas) {
            return;
        }

        window.ExperienciaProgresso.atualizarContador(indiceAtual, total, situacao.tema);
        window.ExperienciaProgresso.atualizarBarra(indiceAtual, total);

        contexto.style.display = "none";
        pergunta.textContent = situacao.pergunta;
        respostas.replaceChildren();

        situacao.alternativas.forEach((alternativa, indiceAlternativa) => {
            const botao = document.createElement("button");
            botao.className = "answer-option";
            botao.type = "button";
            botao.dataset.answerIndex = String(indiceAlternativa);

            const marcador = document.createElement("span");
            marcador.className = "answer-marker";
            marcador.setAttribute("aria-hidden", "true");
            marcador.textContent = letras[indiceAlternativa];

            const texto = document.createElement("span");
            texto.className = "answer-text";
            texto.textContent = alternativa.texto;

            botao.append(marcador, texto);
            botao.addEventListener("click", () => aoEscolher(indiceAlternativa));
            respostas.appendChild(botao);
        });
    }

    function renderizarFeedback(alternativa) {
        const escolha = document.getElementById("feedback-choice");
        const texto = document.getElementById("feedback-text");
        const dica = document.getElementById("feedback-tip");

        if (escolha) {
            escolha.style.display = "none";
        }

        if (texto) {
            texto.textContent = alternativa.feedback;
        }

        if (dica) {
            dica.textContent = alternativa.dica;
        }
    }

    return {
        renderizarSituacao,
        renderizarFeedback
    };
})();
