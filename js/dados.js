window.ExperienciaDados = {
    indicadores: [
        {
            id: "escuta",
            nome: "Escuta",
            cor: "#0F766E",
            descricao: "Você considerou o impacto vivido por quem está na cena."
        },
        {
            id: "contexto",
            nome: "Contexto",
            cor: "#7C3AED",
            descricao: "Você percebeu que a cena pode fazer parte de um padrão maior."
        },
        {
            id: "acao",
            nome: "Atitude",
            cor: "#E76F51",
            descricao: "Você pensou em formas de agir com cuidado e responsabilidade."
        }
    ],
    situacoes: [
        {
            tema: "Loja",
            contexto: "Um olhar que insiste",
            pergunta: "O segurança acompanha uma pessoa negra pela loja, enquanto outros clientes circulam tranquilos. O que essa cena pode mostrar?",
            alternativas: [
                {
                    texto: "Suspeita baseada em estereótipo.",
                    feedback: "Às vezes o racismo aparece sem xingamento. Ele aparece no olhar, na vigilância e no tratamento diferente.",
                    dica: "Quem recebe confiança antes mesmo de fazer algo?",
                    pontos: { escuta: 3, contexto: 3, acao: 2 }
                },
                {
                    texto: "Pode ser coincidência, mas eu observaria o padrão.",
                    feedback: "Observar o padrão importa. Uma cena isolada pode confundir; a repetição revela muita coisa.",
                    dica: "Se acontece sempre com o mesmo grupo, deixa de parecer acaso.",
                    pontos: { escuta: 2, contexto: 3, acao: 1 }
                },
                {
                    texto: "É só o trabalho do segurança.",
                    feedback: "Segurança não precisa significar constrangimento. O problema começa quando a atenção pesa mais sobre alguns corpos.",
                    dica: "Rotina para uns pode ser tensão para outros.",
                    pontos: { escuta: 1, contexto: 1, acao: 0 }
                },
                {
                    texto: "Só seria problema se a pessoa reclamasse.",
                    feedback: "Nem todo mundo reclama na hora. Às vezes a pessoa só quer sair dali sem mais exposição.",
                    dica: "Silêncio também pode ser cansaço.",
                    pontos: { escuta: 1, contexto: 1, acao: 1 }
                }
            ]
        },
        {
            tema: "Escola",
            contexto: "Risadas no fundo da sala",
            pergunta: "Uma estudante fala sobre ancestralidade africana e alguns colegas riem. O que ajuda mais?",
            alternativas: [
                {
                    texto: "Parar a risada e devolver respeito à fala.",
                    feedback: "Quando o deboche é público, o cuidado também precisa aparecer. Isso mostra que identidade e história não são piada.",
                    dica: "Mudar o clima da sala também é agir.",
                    pontos: { escuta: 3, contexto: 2, acao: 3 }
                },
                {
                    texto: "Falar com ela depois e acolher.",
                    feedback: "Acolher depois é importante. Só não dá para deixar o grupo achar que a risada foi normal.",
                    dica: "Cuidado individual e posicionamento coletivo se completam.",
                    pontos: { escuta: 3, contexto: 1, acao: 2 }
                },
                {
                    texto: "Mudar de assunto para não piorar.",
                    feedback: "Evitar conflito pode parecer leve, mas pode deixar a pessoa sozinha com o constrangimento.",
                    dica: "Alguns silêncios protegem o conforto de quem riu.",
                    pontos: { escuta: 1, contexto: 1, acao: 1 }
                },
                {
                    texto: "Rir junto para não ficar estranho.",
                    feedback: "Rir junto aproxima você do grupo, mas afasta quem virou alvo. O clima leve para uns pode machucar outros.",
                    dica: "Pertencer não precisa custar respeito.",
                    pontos: { escuta: 0, contexto: 1, acao: 0 }
                }
            ]
        },
        {
            tema: "Trabalho",
            contexto: "A palavra 'perfil'",
            pergunta: "Numa seleção, uma candidata negra é descartada como 'fora do perfil', sem explicação. O que vale perguntar?",
            alternativas: [
                {
                    texto: "Quais critérios definem esse perfil?",
                    feedback: "Quando o critério é vago, o viés entra fácil. Pedir clareza ajuda a tornar a decisão mais justa.",
                    dica: "O que não é explicado pode esconder preferência.",
                    pontos: { escuta: 2, contexto: 3, acao: 3 }
                },
                {
                    texto: "Será que confundiram familiaridade com competência?",
                    feedback: "Muitas equipes chamam de 'perfil' aquilo que parece com quem já está lá. Isso fecha portas sem parecer exclusão.",
                    dica: "Diversidade começa quando o padrão deixa de mandar sozinho.",
                    pontos: { escuta: 2, contexto: 3, acao: 2 }
                },
                {
                    texto: "A empresa escolhe quem combina com a imagem.",
                    feedback: "Imagem não deveria pesar mais que competência. Aparência como filtro pode repetir desigualdades.",
                    dica: "Quem precisa provar mais para ocupar o mesmo lugar?",
                    pontos: { escuta: 1, contexto: 1, acao: 0 }
                },
                {
                    texto: "Se os currículos são parecidos, tanto faz.",
                    feedback: "No desempate, o cuidado precisa aumentar. Pequenas escolhas também podem repetir grandes padrões.",
                    dica: "Justiça mora nos detalhes.",
                    pontos: { escuta: 1, contexto: 1, acao: 1 }
                }
            ]
        },
        {
            tema: "Internet",
            contexto: "Comentários em uma foto",
            pergunta: "Uma pessoa posta foto de tranças e recebe: 'exagerado', 'pouco profissional'. O que está em jogo?",
            alternativas: [
                {
                    texto: "Um padrão que rejeita expressões negras.",
                    feedback: "Cabelo também é identidade. Quando uma estética é chamada de inadequada, vale olhar qual padrão está sendo protegido.",
                    dica: "Profissionalismo não deveria pedir apagamento.",
                    pontos: { escuta: 3, contexto: 3, acao: 2 }
                },
                {
                    texto: "A crítica parece comum, mas pode ter direção.",
                    feedback: "Comentários sobre aparência não são sempre neutros. Eles podem carregar ideias sobre quem é visto como adequado.",
                    dica: "Quais corpos podem aparecer sem se explicar?",
                    pontos: { escuta: 2, contexto: 3, acao: 1 }
                },
                {
                    texto: "Postou, então tem que aguentar opinião.",
                    feedback: "Estar visível não autoriza desrespeito. Comentário também tem impacto.",
                    dica: "Isso acolhe, informa ou só diminui?",
                    pontos: { escuta: 1, contexto: 1, acao: 0 }
                },
                {
                    texto: "Melhor escolher algo discreto.",
                    feedback: "Essa saída joga o peso em quem foi julgado. O problema não é aparecer; é o olhar que exige esconder.",
                    dica: "Cuidado não é pedir adaptação ao preconceito.",
                    pontos: { escuta: 1, contexto: 2, acao: 0 }
                }
            ]
        },
        {
            tema: "Mídia",
            contexto: "Quem fica no centro?",
            pergunta: "Uma campanha mostra diversidade, mas pessoas negras aparecem só no fundo. O que isso comunica?",
            alternativas: [
                {
                    texto: "Presença não é protagonismo.",
                    feedback: "Aparecer importa, mas não basta. Também conta quem fala, quem lidera e quem tem história própria.",
                    dica: "Representatividade também é lugar de destaque.",
                    pontos: { escuta: 2, contexto: 3, acao: 2 }
                },
                {
                    texto: "É avanço, mas ainda dá para questionar.",
                    feedback: "Dá para reconhecer melhora sem encerrar a conversa. Inclusão real não é só preencher imagem.",
                    dica: "Quem aparece e como aparece?",
                    pontos: { escuta: 2, contexto: 3, acao: 1 }
                },
                {
                    texto: "Se apareceu na foto, já está resolvido.",
                    feedback: "A presença pode ser superficial. Às vezes a desigualdade está no espaço, no foco e no papel dado a cada pessoa.",
                    dica: "A composição também fala.",
                    pontos: { escuta: 1, contexto: 1, acao: 0 }
                },
                {
                    texto: "Publicidade só quer vender.",
                    feedback: "Publicidade vende, mas também forma imaginário. Imagens repetidas ensinam quem parece ocupar cada lugar.",
                    dica: "Imagem também educa o olhar.",
                    pontos: { escuta: 1, contexto: 1, acao: 0 }
                }
            ]
        },
        {
            tema: "Família",
            contexto: "Uma frase no almoço",
            pergunta: "Alguém diz: 'racismo acabou, hoje todo mundo tem as mesmas chances'. Como lidar?",
            alternativas: [
                {
                    texto: "Responder com calma e trazer exemplos reais.",
                    feedback: "Falar com calma não é falar fraco. Exemplos ajudam a tirar a conversa do achismo.",
                    dica: "Firmeza e escuta podem andar juntas.",
                    pontos: { escuta: 2, contexto: 3, acao: 3 }
                },
                {
                    texto: "Perguntar por que a pessoa pensa assim.",
                    feedback: "Uma pergunta boa abre espaço. Escutar o ponto de partida não significa concordar com ele.",
                    dica: "Às vezes uma pergunta desmonta uma certeza.",
                    pontos: { escuta: 3, contexto: 2, acao: 2 }
                },
                {
                    texto: "Deixar passar para não estragar o clima.",
                    feedback: "É compreensível querer paz. Mas quando ninguém responde, a frase continua parecendo normal.",
                    dica: "Uma frase curta já pode mudar a conversa.",
                    pontos: { escuta: 1, contexto: 1, acao: 0 }
                },
                {
                    texto: "Concordar para encerrar o assunto.",
                    feedback: "Falar de racismo não cria divisão. A desigualdade já existe; a conversa ajuda a enxergar.",
                    dica: "O incômodo da conversa não é o problema principal.",
                    pontos: { escuta: 1, contexto: 0, acao: 0 }
                }
            ]
        },
        {
            tema: "Saúde",
            contexto: "Uma dor minimizada",
            pergunta: "Uma mulher negra relata dor intensa, mas ouve que está exagerando. O que essa cena pede?",
            alternativas: [
                {
                    texto: "Levar a dor a sério.",
                    feedback: "Racismo também pode afetar escuta, urgência e cuidado. Dor não deveria precisar implorar para ser acreditada.",
                    dica: "Cuidado começa com escuta.",
                    pontos: { escuta: 3, contexto: 3, acao: 3 }
                },
                {
                    texto: "Buscar outra avaliação e registrar sintomas.",
                    feedback: "Isso ajuda no momento concreto. E também abre a pergunta: por que algumas pessoas precisam insistir mais?",
                    dica: "Agir agora e questionar o padrão depois.",
                    pontos: { escuta: 3, contexto: 2, acao: 3 }
                },
                {
                    texto: "Confiar só na primeira impressão.",
                    feedback: "Formação técnica importa, mas ninguém está livre de vieses. Escuta também faz parte do cuidado.",
                    dica: "Autoridade não substitui atenção.",
                    pontos: { escuta: 1, contexto: 1, acao: 0 }
                },
                {
                    texto: "Pedir que ela fale com mais calma.",
                    feedback: "Isso pode parecer ajuda, mas coloca o problema em quem sente dor. A aflição também precisa ser acolhida.",
                    dica: "Dor não precisa performar calma.",
                    pontos: { escuta: 1, contexto: 2, acao: 0 }
                }
            ]
        },
        {
            tema: "Convivência",
            contexto: "Depois de perceber",
            pergunta: "Você viu uma situação discriminatória e quer apoiar sem expor ainda mais a pessoa. Qual caminho é mais cuidadoso?",
            alternativas: [
                {
                    texto: "Perguntar o que ela precisa.",
                    feedback: "Apoiar não é tomar a cena para si. A pessoa afetada precisa participar da decisão sobre o que fazer.",
                    dica: "Caminhar junto é diferente de falar por alguém.",
                    pontos: { escuta: 3, contexto: 2, acao: 3 }
                },
                {
                    texto: "Conversar com quem errou, se for seguro.",
                    feedback: "Intervir pode ajudar quando há segurança. Falar do impacto tira a conversa do 'foi sem querer'.",
                    dica: "Intenção explica; impacto precisa ser reconhecido.",
                    pontos: { escuta: 2, contexto: 2, acao: 3 }
                },
                {
                    texto: "Filmar e postar na hora.",
                    feedback: "Denunciar pode parecer forte, mas publicar sem consentimento pode expor ainda mais quem foi atingido.",
                    dica: "Visibilidade sem cuidado pode virar espetáculo.",
                    pontos: { escuta: 1, contexto: 2, acao: 1 }
                },
                {
                    texto: "Não me envolver.",
                    feedback: "O medo é real, mas a omissão também tem efeito. Às vezes o primeiro apoio é acolher e buscar ajuda.",
                    dica: "Uma atitude pequena já pode interromper a cena.",
                    pontos: { escuta: 1, contexto: 1, acao: 0 }
                }
            ]
        }
    ]
};
