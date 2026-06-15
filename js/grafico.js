window.ExperienciaGrafico = (() => {
    function desenhar(canvas, indicadores) {
        if (!canvas) {
            return;
        }

        const contexto = canvas.getContext("2d");
        const largura = canvas.width;
        const altura = canvas.height;
        const centroX = largura / 2;
        const centroY = altura / 2;
        const raioMaximo = 90;
        const lados = indicadores.length;

        contexto.clearRect(0, 0, largura, altura);
        contexto.lineWidth = 1;
        contexto.font = "700 13px Arial, Helvetica, sans-serif";
        contexto.textAlign = "center";
        contexto.textBaseline = "middle";

     [0.33, 0.66, 1].forEach((escala) => {
    contexto.beginPath();

    indicadores.forEach((indicador, indice) => {
        const angulo = ((Math.PI * 2) / lados) * indice - Math.PI / 2;

        const x = centroX + Math.cos(angulo) * raioMaximo * escala;
        const y = centroY + Math.sin(angulo) * raioMaximo * escala;

        if (indice === 0) {
            contexto.moveTo(x, y);
        } else {
            contexto.lineTo(x, y);
        }
    });

    contexto.closePath();
    contexto.strokeStyle = "rgba(33, 31, 34, 0.14)";
    contexto.stroke();
});

        contexto.beginPath();
        indicadores.forEach((indicador, indice) => {
            const angulo = ((Math.PI * 2) / lados) * indice - Math.PI / 2;
            const valor = Math.max(indicador.valor, 7) / 100;
            const x = centroX + Math.cos(angulo) * raioMaximo * valor;
            const y = centroY + Math.sin(angulo) * raioMaximo * valor;

            if (indice === 0) {
                contexto.moveTo(x, y);
            } else {
                contexto.lineTo(x, y);
            }
        });

        contexto.closePath();
        contexto.fillStyle = "rgba(183,106,75,0.15)";
        contexto.strokeStyle = "#B76A4B";
        contexto.lineWidth = 3;
        contexto.fill();
        contexto.stroke();

        indicadores.forEach((indicador, indice) => {
            const angulo = ((Math.PI * 2) / lados) * indice - Math.PI / 2;
            const valor = Math.max(indicador.valor, 7) / 100;
            const pontoX = centroX + Math.cos(angulo) * raioMaximo * valor;
            const pontoY = centroY + Math.sin(angulo) * raioMaximo * valor;
            const labelX = centroX + Math.cos(angulo) * (raioMaximo + 42);
            const labelY = centroY + Math.sin(angulo) * (raioMaximo + 34);

            contexto.beginPath();
            contexto.arc(pontoX, pontoY, 5, 0, Math.PI * 2);
            contexto.fillStyle = indicador.cor;
            contexto.fill();

            contexto.fillStyle = "#211F22";
            contexto.fillText(indicador.nome, labelX, labelY);
            // removido
            contexto.font = "700 13px Arial, Helvetica, sans-serif";
        });
    }

    return {
        desenhar
    };
})();
