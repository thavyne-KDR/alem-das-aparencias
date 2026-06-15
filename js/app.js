document.addEventListener("DOMContentLoaded", () => {
    const dados = window.ExperienciaDados;
    const telas = {
        splash: document.getElementById("splash-screen"),
        intro: document.getElementById("intro-screen"),
        quiz: document.getElementById("quiz-screen"),
        feedback: document.getElementById("feedback-screen"),
        reflection: document.getElementById("reflection-screen"),
        result: document.getElementById("result-screen"),
    };

    const estadoInicial = () => ({
        indiceAtual: 0,
        escolhas: [],
        pontos: {
            escuta: 0,
            contexto: 0,
            acao: 0
        },
        reflexao: ""
    });

    let estado = estadoInicial();

    const startBtn = document.getElementById("start-btn");
    const introBtn = document.getElementById("intro-btn");
    const nextQuestionBtn = document.getElementById("next-question-btn");
    const finishBtn = document.getElementById("finish-btn");
    const restartBtn = document.getElementById("restart-btn");
    const reflectionInput = document.getElementById("reflection");
    const reflectionCount = document.getElementById("reflection-count");

    function mostrarTela(nome) {
        Object.values(telas).forEach((tela) => tela.classList.add("hidden"));
        telas[nome].classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: "auto" });
    }

    function renderizarQuiz() {
        const situacao = dados.situacoes[estado.indiceAtual];

        window.ExperienciaQuiz.renderizarSituacao(
            situacao,
            estado.indiceAtual,
            dados.situacoes.length,
            registrarEscolha
        );

        mostrarTela("quiz");
    }

    function registrarEscolha(indiceAlternativa) {
        const situacao = dados.situacoes[estado.indiceAtual];
        const alternativa = situacao.alternativas[indiceAlternativa];

        estado.escolhas.push({
            tema: situacao.tema,
            texto: alternativa.texto,
            pontos: alternativa.pontos
        });

        Object.keys(estado.pontos).forEach((indicador) => {
            estado.pontos[indicador] += alternativa.pontos[indicador];
        });

        window.ExperienciaQuiz.renderizarFeedback(alternativa);
        mostrarTela("feedback");
    }

    function avancarDepoisDoFeedback() {
        estado.indiceAtual += 1;

        if (estado.indiceAtual >= dados.situacoes.length) {
            mostrarTela("reflection");
            return;
        }

        renderizarQuiz();
    }

    function atualizarReflexao() {
        const texto = reflectionInput.value.trim();
        estado.reflexao = texto;

        if (reflectionCount) {
            reflectionCount.textContent = `${reflectionInput.value.length}/420`;
        }

        finishBtn.disabled = texto.length < 8;
    }

    function calcularIndicadores() {
        const maximo = dados.situacoes.length * 3;

        return dados.indicadores.map((indicador) => ({
            ...indicador,
            valor: Math.round((estado.pontos[indicador.id] / maximo) * 100)
        }));
    }

    function obterIndicadorMaisForte(indicadores) {
        return [...indicadores].sort((a, b) => b.valor - a.valor)[0];
    }

    function criarElemento(tag, classe, texto) {
        const elemento = document.createElement(tag);

        if (classe) {
            elemento.className = classe;
        }

        if (texto !== undefined) {
            elemento.textContent = texto;
        }

        return elemento;
    }

    function criarResumoCard(valor, rotulo, texto, ocuparLinha) {
        const card = criarElemento("article", ocuparLinha ? "summary-card full" : "summary-card");
        const label = criarElemento("span", "summary-label", rotulo);

        if (valor) {
            card.appendChild(criarElemento("span", "summary-value", valor));
        }

        card.appendChild(label);

        if (texto) {
            card.appendChild(criarElemento("p", "summary-text", texto));
        }

        return card;
    }

    function criarInsightCard(titulo, descricao) {
        const card = criarElemento("article", "insight-card");

        card.append(
            criarElemento("h3", "", titulo),
            criarElemento("p", "", descricao)
        );

        return card;
    }

    function renderizarResultado() {
        const resumo = document.getElementById("result-summary");
        const insights = document.getElementById("result-insights");
        const canvas = document.getElementById("grafico");
        const indicadores = calcularIndicadores();
        const destaque = obterIndicadorMaisForte(indicadores);
        const media = Math.round(indicadores.reduce((total, item) => total + item.valor, 0) / indicadores.length);
        const temasVisitados = estado.escolhas.map((escolha) => escolha.tema).join(", ");

        resumo.replaceChildren(
            criarResumoCard(
                 "",
                 "Sua reflexão",
                  estado.reflexao,
                  true
         ),

            criarResumoCard(
                 "",
                 "Situações exploradas",
                 temasVisitados,
                 true
        )
    );

        insights.replaceChildren(
            criarInsightCard(
                `Aspecto mais presente: ${destaque.nome}`,
                "Essa lente apareceu com mais força nas suas escolhas. Ela pode ser um bom começo para conversar com alguém depois da apresentação."
            ),
            ...indicadores.map((indicador) => criarInsightCard(
                indicador.nome,
                indicador.descricao
            ))
        );

        window.ExperienciaGrafico.desenhar(canvas, indicadores);
        mostrarTela("result");
    }

    function reiniciar() {
        estado = estadoInicial();
        reflectionInput.value = "";
        atualizarReflexao();
        mostrarTela("splash");
    }

    startBtn.addEventListener("click", () => mostrarTela("intro"));
    introBtn.addEventListener("click", renderizarQuiz);
    nextQuestionBtn.addEventListener("click", avancarDepoisDoFeedback);
    finishBtn.addEventListener("click", renderizarResultado);
    restartBtn.addEventListener("click", reiniciar);
    reflectionInput.addEventListener("input", atualizarReflexao);

    atualizarReflexao();
});
