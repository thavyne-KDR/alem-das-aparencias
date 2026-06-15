window.ExperienciaProgresso = (() => {
    function atualizarBarra(indiceAtual, total) {
        const barra = document.getElementById("progress-bar");
        if (!barra || total === 0) {
            return;
        }

        const progresso = Math.min(((indiceAtual + 1) / total) * 100, 100);
        barra.style.width = `${progresso}%`;
    }

    function atualizarContador(indiceAtual, total, tema) {
        const contador = document.getElementById("question-counter");
        const temaElemento = document.getElementById("question-theme");

        if (contador) {
            contador.textContent = `Cena ${indiceAtual + 1} de ${total}`;
        }

        if (temaElemento) {
            temaElemento.textContent = tema;
        }
    }

    return {
        atualizarBarra,
        atualizarContador
    };
})();
