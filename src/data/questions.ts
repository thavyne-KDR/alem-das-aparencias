import type { CategoryScores, Question } from '../types';

type QuestionFocus = keyof CategoryScores;

interface QuestionSeed {
  focus: QuestionFocus;
  situation: string;
  dismissal: string;
  recognition: string;
  action: string;
  reflectionTitle: string;
  reflectionText: string;
}

const scoreProfiles: Record<QuestionFocus, CategoryScores[]> = {
  escuta: [
    { escuta: 0, contexto: 0, atitude: 0, reflexao: 0 },
    { escuta: 1, contexto: 1, atitude: 0, reflexao: 2 },
    { escuta: 3, contexto: 2, atitude: 1, reflexao: 2 },
    { escuta: 3, contexto: 3, atitude: 2, reflexao: 3 },
  ],
  contexto: [
    { escuta: 0, contexto: 0, atitude: 0, reflexao: 0 },
    { escuta: 1, contexto: 1, atitude: 0, reflexao: 1 },
    { escuta: 2, contexto: 3, atitude: 1, reflexao: 3 },
    { escuta: 2, contexto: 3, atitude: 3, reflexao: 3 },
  ],
  atitude: [
    { escuta: 0, contexto: 0, atitude: 0, reflexao: 0 },
    { escuta: 1, contexto: 1, atitude: 0, reflexao: 1 },
    { escuta: 2, contexto: 2, atitude: 2, reflexao: 2 },
    { escuta: 3, contexto: 3, atitude: 3, reflexao: 2 },
  ],
  reflexao: [
    { escuta: 0, contexto: 0, atitude: 0, reflexao: 0 },
    { escuta: 1, contexto: 1, atitude: 0, reflexao: 2 },
    { escuta: 2, contexto: 2, atitude: 1, reflexao: 3 },
    { escuta: 2, contexto: 3, atitude: 3, reflexao: 3 },
  ],
};

const hesitationOptions: Record<QuestionFocus, string[]> = {
  escuta: [
    'Sinto que tem algo incômodo ali, mas ainda fico sem jeito para escutar melhor',
    'Percebo o desconforto, só que minha primeira reação é tentar suavizar a conversa',
    'Entendo que a pessoa pode ter sido afetada, mas tenho medo de falar da forma errada',
    'Noto que a cena mexeu com alguém, mas ainda não sei como acolher sem tomar espaço',
  ],
  contexto: [
    'Acho que pode ter algo maior por trás, mas ainda não consigo nomear o padrão',
    'Fico com a sensação de que não é um caso solto, embora eu ainda não saiba explicar bem',
    'Desconfio que a cena tem contexto, mas minha leitura ainda fica meio incompleta',
    'Vejo que talvez exista uma desigualdade ali, mas preciso ligar melhor os pontos',
  ],
  atitude: [
    'Reconheço que algo está errado, mas hesito em me posicionar no momento',
    'Tenho vontade de intervir, só que fico calculando o clima antes de fazer qualquer coisa',
    'Percebo o problema, mas acabo esperando alguém tomar a primeira atitude',
    'Sinto que deveria agir, mas travo por medo de piorar a situação',
  ],
  reflexao: [
    'Fico pensando sobre a situação, mas deixo para lidar com isso depois',
    'A cena me incomoda, só que minha resposta ainda fica presa na dúvida',
    'Prefiro observar mais um pouco antes de me comprometer com uma posição',
    'Guardo a pergunta na cabeça, mas não transformo isso em conversa ou ação naquele momento',
  ],
};

const dismissalTemplates = [
  (text: string) => `Vejo como ${text} e sigo sem mexer no assunto`,
  (text: string) => `Penso que pode ser só ${text} e deixo a cena passar`,
  (text: string) => `Assumo que é ${text}, sem ligar isso a racismo`,
  (text: string) => `Tento explicar como ${text} e não entro na discussão`,
  (text: string) => `Leio como ${text}, mesmo percebendo que alguém ficou desconfortável`,
];

const recognitionTemplates = [
  (text: string) => `Percebo que ${text} e tento olhar a cena com mais cuidado`,
  (text: string) => `Leio a situação como sinal de que ${text} e penso no contexto`,
  (text: string) => `Não fecho os olhos: ${text}. A partir daí, observo quem foi afetado`,
  (text: string) => `Reconheço que ${text} e procuro não tratar como coincidência`,
  (text: string) => `Entendo que ${text}; isso muda a forma como interpreto a cena`,
];

const questionSeeds = [
  {
    focus: 'atitude',
    situation:
      'Você entra em uma loja de roupas de grife com uma amiga negra. O segurança começa a segui-la discretamente pelos corredores, enquanto ignora outras pessoas na loja.',
    dismissal: 'um protocolo padrão da loja',
    recognition: 'a vigilância seletiva pode estar recaindo sobre sua amiga',
    action: 'Fico ao lado dela, pergunto se está tudo bem e questiono a abordagem se ela quiser',
    reflectionTitle: 'Vigilância seletiva',
    reflectionText:
      'A abordagem seletiva em espaços comerciais é uma forma comum de racismo cotidiano. Reconhecer o padrão ajuda a não tratar a humilhação como um detalhe isolado.',
  },
  {
    focus: 'atitude',
    situation:
      'Em uma reunião de trabalho, uma colega negra apresenta uma ideia. O grupo ouve em silêncio. Minutos depois, um colega branco sugere algo muito similar e recebe elogios entusiasmados.',
    dismissal: 'uma diferença natural de comunicação',
    recognition: 'a autoria da ideia da colega foi apagada',
    action: 'Retomo a fala dela na reunião e digo que a ideia já havia sido apresentada por ela',
    reflectionTitle: 'Invisibilidade nas palavras',
    reflectionText:
      'Quando ideias de pessoas negras são ignoradas e reaparecem valorizadas em outras vozes, existe um apagamento de autoria. Nomear isso em público pode redistribuir reconhecimento.',
  },
  {
    focus: 'contexto',
    situation:
      'Um amigo diz que não tem preconceito porque "trata todo mundo igual, não enxerga cor". Você está conversando com um grupo de pessoas de diferentes origens.',
    dismissal: 'uma frase justa e suficiente',
    recognition: 'não enxergar cor pode apagar experiências reais de racismo',
    action: 'Explico que tratar com equidade exige reconhecer as desigualdades que já existem',
    reflectionTitle: 'A ilusão da neutralidade',
    reflectionText:
      'A intenção de ser imparcial pode virar silêncio sobre desigualdades concretas. Ver a cor não é reduzir uma pessoa a ela; é não fingir que o racismo não atua por meio dela.',
  },
  {
    focus: 'contexto',
    situation:
      'Você percebe que em sua empresa os cargos de liderança são ocupados exclusivamente por pessoas brancas, apesar de a equipe ser diversa. O assunto vem à tona em uma conversa informal.',
    dismissal: 'resultado natural de mérito individual',
    recognition: 'a ausência de pessoas negras na liderança pode indicar barreiras estruturais',
    action: 'Defendo que a empresa revise critérios de promoção, mentoria e acesso a oportunidades',
    reflectionTitle: 'O teto que ninguém vê',
    reflectionText:
      'Quando um padrão se repete, ele deixa de parecer coincidência. A ideia de mérito precisa ser observada junto das condições desiguais de acesso, indicação e avaliação.',
  },
  {
    focus: 'escuta',
    situation:
      'Uma colega negra conta que se sentiu mal com um elogio que recebeu: "Você fala tão bem! Parece uma outra pessoa quando abre a boca." Ela está visivelmente incomodada.',
    dismissal: 'um elogio sincero sem impacto relevante',
    recognition: 'o elogio carrega uma expectativa baixa sobre pessoas negras',
    action: 'Escuto sem corrigir o sentimento dela e pergunto como posso apoiá-la naquela situação',
    reflectionTitle: 'Elogios que machucam',
    reflectionText:
      'Microagressões muitas vezes aparecem como elogios, mas carregam pressupostos raciais. Escutar o impacto antes de defender a intenção muda a qualidade da conversa.',
  },
  {
    focus: 'atitude',
    situation:
      'Você está em uma roda de conversa e alguém faz uma piada com conotação racial. Parte do grupo ri, outros ficam em silêncio. A única pessoa negra no grupo se recolhe.',
    dismissal: 'uma brincadeira sem consequência',
    recognition: 'o silêncio do grupo pode normalizar a piada racista',
    action: 'Digo que a piada foi inadequada e ajudo a mudar o tom da conversa sem expor quem foi atingido',
    reflectionTitle: 'O peso do silêncio',
    reflectionText:
      'Em situações de racismo, o silêncio costuma proteger o conforto de quem agrediu. Intervir desloca o constrangimento para onde ele deveria estar.',
  },
  {
    focus: 'contexto',
    situation:
      'Em uma conversa sobre violência urbana, alguém afirma: "A maioria dos crimes é cometida por pessoas negras; os dados falam por si." O grupo parece concordar.',
    dismissal: 'uma leitura objetiva dos números',
    recognition: 'dados de criminalização dependem de como policiamento, abordagem e punição acontecem',
    action: 'Questiono a conclusão e lembro que dados sem contexto podem reforçar preconceitos como se fossem fatos neutros',
    reflectionTitle: 'Dados sem contexto',
    reflectionText:
      'Estatísticas não existem fora das instituições que as produzem. Quando abordagens seletivas entram na conta, números podem revelar desigualdade institucional, não essência de um grupo.',
  },
  {
    focus: 'contexto',
    situation:
      'Você assiste a uma reportagem sobre cotas raciais em universidades. Um entrevistado diz: "As cotas são injustas; deveriam selecionar por renda, não por raça."',
    dismissal: 'uma crítica equilibrada às cotas',
    recognition: 'raça e renda se cruzam, mas não produzem exatamente as mesmas barreiras',
    action: 'Defendo que políticas raciais respondem a uma exclusão histórica específica e podem coexistir com critérios sociais',
    reflectionTitle: 'Corrigir não é privilegiar',
    reflectionText:
      'A desigualdade racial foi construída por mecanismos raciais. Reparações efetivas precisam olhar para renda, território e também para a marca racial que organiza oportunidades.',
  },
  {
    focus: 'atitude',
    situation:
      'No trabalho, uma gerente comenta que o cabelo natural de uma funcionária negra "não combina com a imagem profissional" da empresa.',
    dismissal: 'uma exigência estética comum do ambiente corporativo',
    recognition: 'a ideia de profissionalismo está sendo medida por um padrão branco de aparência',
    action: 'Questiono o critério usado e defendo que cabelo natural não pode ser tratado como falta de profissionalismo',
    reflectionTitle: 'Profissional para quem?',
    reflectionText:
      'Padrões de aparência também carregam história. Quando o cabelo negro é visto como inadequado, o ambiente cobra assimilação em vez de respeito.',
  },
  {
    focus: 'contexto',
    situation:
      'Em uma escola, o livro de História mostra pessoas negras quase sempre como escravizadas, enquanto cientistas, artistas e líderes aparecem majoritariamente brancos.',
    dismissal: 'uma escolha normal do material didático',
    recognition: 'o currículo pode reduzir pessoas negras à dor e apagar protagonismos',
    action: 'Sugiro complementar as aulas com referências negras em ciência, arte, política e pensamento social',
    reflectionTitle: 'Memória incompleta',
    reflectionText:
      'Ensinar apenas a violência sofrida por pessoas negras produz uma imagem limitada de humanidade. Representação histórica também é disputa de futuro.',
  },
  {
    focus: 'escuta',
    situation:
      'Durante uma festa, alguém pede para tocar no cabelo de uma mulher negra antes mesmo de ouvir a resposta, como se fosse uma curiosidade pública.',
    dismissal: 'um gesto curioso e inofensivo',
    recognition: 'o corpo dela está sendo tratado como objeto disponível',
    action: 'Interrompo com cuidado e lembro que curiosidade não substitui consentimento',
    reflectionTitle: 'Curiosidade tem limite',
    reflectionText:
      'O toque não autorizado comunica posse. Escutar um limite, especialmente quando envolve corpos historicamente objetificados, é parte básica do respeito.',
  },
  {
    focus: 'contexto',
    situation:
      'Em um processo seletivo, pessoas negras chegam até a etapa final, mas são recusadas porque "não têm fit cultural" com a equipe.',
    dismissal: 'uma avaliação subjetiva normal de contratação',
    recognition: 'fit cultural pode esconder preferência por perfis parecidos com quem já está no poder',
    action: 'Peço critérios objetivos de avaliação e dados sobre quem avança, quem é recusado e por quê',
    reflectionTitle: 'O filtro invisível',
    reflectionText:
      'Critérios vagos abrem espaço para vieses antigos parecerem intuição. Diversidade exige medir também as portas que parecem neutras.',
  },
  {
    focus: 'atitude',
    situation:
      'Na portaria do prédio, um entregador negro é barrado e tratado com desconfiança, enquanto entregadores brancos entram sem a mesma demora.',
    dismissal: 'um cuidado normal com segurança',
    recognition: 'o controle de entrada pode estar sendo aplicado de forma racializada',
    action: 'Questiono a diferença de tratamento e peço que o procedimento seja o mesmo para todas as pessoas',
    reflectionTitle: 'Segurança seletiva',
    reflectionText:
      'Segurança não deveria depender da cor de quem chega. Procedimentos iguais precisam ser realmente iguais na prática, não apenas no discurso.',
  },
  {
    focus: 'atitude',
    situation:
      'Em um restaurante, um casal negro chega antes, mas várias mesas de pessoas brancas são atendidas primeiro. A equipe parece evitar contato visual com eles.',
    dismissal: 'um erro de organização do atendimento',
    recognition: 'a demora seletiva pode comunicar que aquele casal pertence menos ao espaço',
    action: 'Chamo a atenção da equipe para a ordem de chegada e apoio o casal se eles quiserem registrar a reclamação',
    reflectionTitle: 'Pertencimento negado',
    reflectionText:
      'Racismo cotidiano também aparece em pequenas recusas de atenção. Ser ignorado em um serviço é receber uma mensagem sobre quem é esperado ali.',
  },
  {
    focus: 'escuta',
    situation:
      'Uma paciente negra relata dor intensa no hospital, mas o profissional de saúde sugere que ela está exagerando e pede para esperar mais.',
    dismissal: 'uma triagem médica comum em dia cheio',
    recognition: 'a dor de pessoas negras pode ser subestimada por vieses raciais',
    action: 'Levo o relato dela a sério e ajudo a pedir uma reavaliação clara e respeitosa',
    reflectionTitle: 'Dor ouvida pela metade',
    reflectionText:
      'Escutar a dor de alguém não é favor; é cuidado básico. Vieses raciais na saúde podem transformar descrença em risco concreto.',
  },
  {
    focus: 'reflexao',
    situation:
      'Uma estudante negra passa em uma universidade concorrida. Antes de parabenizá-la, alguém pergunta se ela entrou por cota.',
    dismissal: 'uma pergunta neutra sobre o processo seletivo',
    recognition: 'a pergunta coloca a competência dela sob suspeita antes de qualquer celebração',
    action: 'Parabenizo a conquista e digo que ninguém deveria ter seu mérito questionado por ser uma pessoa negra',
    reflectionTitle: 'Suspeita antes do aplauso',
    reflectionText:
      'Questionar primeiro a forma de entrada revela uma expectativa: a de que a presença negra precisa se explicar. Reparação não diminui conquista.',
  },
  {
    focus: 'contexto',
    situation:
      'Você está em um carro com amigos negros quando uma blitz manda apenas o veículo de vocês encostar, embora outros carros passem sem abordagem.',
    dismissal: 'uma fiscalização aleatória do trânsito',
    recognition: 'abordagens policiais podem seguir padrões racializados',
    action: 'Mantenho a calma, observo os detalhes da abordagem e apoio meus amigos caso queiram registrar o ocorrido',
    reflectionTitle: 'Quando o acaso tem padrão',
    reflectionText:
      'Uma abordagem isolada pode parecer sorte ou azar. Muitas abordagens parecidas, vividas por um mesmo grupo, revelam uma experiência social compartilhada.',
  },
  {
    focus: 'reflexao',
    situation:
      'Em uma discussão online, alguém afirma que falar de racismo contra pessoas negras é injusto porque também existe "racismo reverso".',
    dismissal: 'um ponto válido sobre igualdade de tratamento',
    recognition: 'preconceitos individuais não têm o mesmo peso que sistemas históricos de exclusão',
    action: 'Explico a diferença entre ofensa individual e racismo como estrutura de poder',
    reflectionTitle: 'Poder não é simetria',
    reflectionText:
      'Racismo não é apenas antipatia. Ele envolve instituições, memória, acesso e distribuição de poder; por isso nem toda ofensa opera do mesmo jeito.',
  },
  {
    focus: 'escuta',
    situation:
      'Uma mulher negra contesta uma decisão injusta na equipe. Depois, colegas dizem que ela foi "agressiva", embora homens tenham falado mais alto sem receber a mesma crítica.',
    dismissal: 'uma percepção comum sobre tom de voz',
    recognition: 'mulheres negras podem ser lidas como agressivas mesmo quando estão sendo firmes',
    action: 'Pergunto quais comportamentos concretos justificam a crítica e lembro que firmeza não é agressividade',
    reflectionTitle: 'O tom vigiado',
    reflectionText:
      'A cobrança sobre o tom muitas vezes desloca o foco do conteúdo para o corpo que fala. Escutar com justiça exige comparar padrões de avaliação.',
  },
  {
    focus: 'atitude',
    situation:
      'Uma criança diz que uma boneca negra não pode ser princesa porque "princesa é branca". Os adultos ao redor riem sem corrigir.',
    dismissal: 'uma fase infantil sem importância',
    recognition: 'a criança está repetindo referências limitadas sobre beleza e valor',
    action: 'Converso com a criança de forma simples e mostro exemplos de princesas e protagonistas negras',
    reflectionTitle: 'Imaginação também educa',
    reflectionText:
      'Crianças aprendem hierarquias pelo que veem e pelo que não veem. Corrigir com afeto amplia o mundo sem transformar a criança em culpada.',
  },
  {
    focus: 'contexto',
    situation:
      'No condomínio, moradores reclamam de uma família que usa símbolos de uma religião de matriz africana e chamam aquilo de "coisa estranha".',
    dismissal: 'uma diferença de gosto religioso',
    recognition: 'a reação pode expressar racismo religioso contra tradições afro-brasileiras',
    action: 'Defendo o direito de culto da família e proponho que a administração trate a reclamação como discriminação',
    reflectionTitle: 'Fé sob suspeita',
    reflectionText:
      'Religiões de matriz africana enfrentam preconceito por sua ligação com a história negra. Chamar de estranhamento o que é intolerância mantém a violência no campo do gosto.',
  },
  {
    focus: 'reflexao',
    situation:
      'Um amigo diz que não se relaciona com pessoas negras por "preferência", como se desejo não tivesse nenhuma influência social.',
    dismissal: 'uma preferência pessoal que não deve ser discutida',
    recognition: 'desejos também são moldados por padrões de beleza e hierarquias raciais',
    action: 'Pergunto de onde vêm essas preferências e proponho pensar sobre quem foi ensinado a parecer desejável',
    reflectionTitle: 'Desejo aprendido',
    reflectionText:
      'A intimidade parece privada, mas também é educada por imagens, piadas, rejeições e idealizações. Refletir sobre desejo não obriga ninguém a se relacionar; abre espaço para perceber filtros.',
  },
  {
    focus: 'contexto',
    situation:
      'Uma notícia sobre suspeitos usa uma foto escura e desfavorável quando a pessoa é negra, mas escolhe uma imagem sorridente quando a pessoa é branca.',
    dismissal: 'uma escolha estética da redação',
    recognition: 'imagens podem reforçar quem é visto como perigoso e quem é visto como humano',
    action: 'Questiono o padrão editorial e peço critérios consistentes para todas as coberturas',
    reflectionTitle: 'A foto também acusa',
    reflectionText:
      'A forma de mostrar uma pessoa influencia como o público lê culpa, ameaça e inocência. Jornalismo responsável precisa olhar para seus enquadramentos.',
  },
  {
    focus: 'atitude',
    situation:
      'Um professor elogia pouco uma aluna negra excelente e oferece tarefas menos desafiadoras a ela, dizendo que está "respeitando o ritmo" da estudante.',
    dismissal: 'uma adaptação pedagógica gentil',
    recognition: 'baixas expectativas podem limitar oportunidades de aprendizagem',
    action: 'Converso com o professor sobre expectativas iguais e acesso real a desafios acadêmicos',
    reflectionTitle: 'Proteção que limita',
    reflectionText:
      'Expectativas reduzidas podem parecer cuidado, mas comunicam menos confiança. Educação antirracista também é oferecer desafio, repertório e apoio.',
  },
  {
    focus: 'escuta',
    situation:
      'Em uma reunião sobre diversidade, todos olham para o único funcionário negro quando surge uma pergunta sobre racismo, esperando que ele represente todas as pessoas negras.',
    dismissal: 'uma consulta natural a quem tem vivência no tema',
    recognition: 'a pessoa está sendo colocada no papel de porta-voz obrigatório',
    action: 'Tiro o peso dele, digo que a responsabilidade é coletiva e sugiro buscar referências preparadas para o tema',
    reflectionTitle: 'Representar cansa',
    reflectionText:
      'Vivência não é obrigação pedagógica permanente. Escutar pessoas negras inclui respeitar quando elas não querem explicar tudo para o grupo.',
  },
  {
    focus: 'reflexao',
    situation:
      'No almoço de família, alguém diz que "racismo acabou" porque hoje existem leis e pessoas negras famosas na televisão.',
    dismissal: 'um otimismo razoável sobre progresso social',
    recognition: 'avanços legais e exemplos individuais não eliminam desigualdades persistentes',
    action: 'Respondo com calma que progresso existe, mas não autoriza negar experiências atuais de racismo',
    reflectionTitle: 'Exceção não apaga regra',
    reflectionText:
      'Histórias de sucesso importam, mas não substituem a análise de padrões. Uma sociedade pode mudar em alguns pontos e continuar desigual em muitos outros.',
  },
  {
    focus: 'contexto',
    situation:
      'Uma campanha de beleza se anuncia diversa, mas quase todas as modelos negras têm pele clara, cabelos alisados e traços próximos ao padrão branco.',
    dismissal: 'uma escolha de casting suficiente para representar diversidade',
    recognition: 'a marca está usando diversidade sem ampliar de fato o padrão de beleza',
    action: 'Questiono a campanha e procuro apoiar marcas que incluam diferentes tons de pele, cabelos e traços',
    reflectionTitle: 'Diversidade filtrada',
    reflectionText:
      'Representação pode ser esvaziada quando só aceita corpos negros próximos ao ideal dominante. Incluir é ampliar o que pode ser visto como belo.',
  },
  {
    focus: 'contexto',
    situation:
      'Você percebe que currículos com nomes associados a pessoas negras recebem menos retorno, mesmo quando as experiências são parecidas.',
    dismissal: 'uma coincidência do processo seletivo',
    recognition: 'nomes também podem ativar vieses raciais em recrutamento',
    action: 'Defendo triagens com critérios objetivos, revisão de dados e etapas que reduzam vieses iniciais',
    reflectionTitle: 'O nome na porta',
    reflectionText:
      'Antes da entrevista, muitas oportunidades já foram filtradas. Quando o nome pesa mais que a trajetória, a seleção não é tão neutra quanto parece.',
  },
  {
    focus: 'atitude',
    situation:
      'Em um banco, a porta giratória trava repetidas vezes para um cliente negro bem vestido, enquanto outros clientes entram sem revista.',
    dismissal: 'um problema mecânico sem leitura social',
    recognition: 'a suspeita pode estar sendo aplicada ao corpo dele, não ao objeto que carrega',
    action: 'Observo a diferença de tratamento e apoio o cliente caso ele queira pedir explicação ou registrar reclamação',
    reflectionTitle: 'A porta que escolhe',
    reflectionText:
      'Dispositivos de segurança são operados por pessoas e critérios. Quando só alguns corpos viram suspeitos, a tecnologia apenas encobre a decisão.',
  },
  {
    focus: 'contexto',
    situation:
      'Na escola, estudantes negros recebem advertências por "indisciplina" em situações parecidas com as de estudantes brancos que recebem apenas conversa.',
    dismissal: 'diferença individual de comportamento',
    recognition: 'a disciplina escolar pode punir mais duramente estudantes negros',
    action: 'Peço que a escola compare registros, critérios e encaminhamentos para identificar tratamento desigual',
    reflectionTitle: 'Punição desigual',
    reflectionText:
      'A escola ensina também por suas punições. Quando a mesma atitude recebe respostas diferentes, estudantes aprendem quem é visto como problema.',
  },
  {
    focus: 'atitude',
    situation:
      'Uma vaga de atendimento exige "cabelo discreto" e o recrutador comenta que tranças podem "chamar atenção demais".',
    dismissal: 'uma regra comum de apresentação pessoal',
    recognition: 'a regra transforma características negras em desvio profissional',
    action: 'Peço que a exigência seja reescrita com critérios objetivos e sem controle racializado de aparência',
    reflectionTitle: 'Discrição para quem?',
    reflectionText:
      'O que é chamado de discreto costuma ter um rosto conhecido. Políticas de aparência precisam separar higiene e função de preferências racializadas.',
  },
  {
    focus: 'contexto',
    situation:
      'Um evento sobre inovação anuncia um painel de especialistas, mas todas as pessoas convidadas são brancas. A organização diz que "não encontrou nomes".',
    dismissal: 'uma dificuldade real de agenda',
    recognition: 'redes de indicação podem invisibilizar especialistas negros',
    action: 'Envio referências de profissionais negros e sugiro que a curadoria amplie suas redes antes de fechar painéis',
    reflectionTitle: 'Quem é lembrado',
    reflectionText:
      'Ausência em palcos raramente é ausência de competência. Muitas vezes é um retrato das redes que decidem quem será visto como especialista.',
  },
  {
    focus: 'atitude',
    situation:
      'Em uma conversa, alguém faz um comentário sexualizado sobre o corpo de uma mulher negra e trata isso como elogio.',
    dismissal: 'um elogio desajeitado sobre beleza',
    recognition: 'o comentário reproduz a hipersexualização de corpos negros',
    action: 'Digo que o comentário foi inadequado e reforço que elogio não autoriza objetificação',
    reflectionTitle: 'Elogio ou posse',
    reflectionText:
      'Corpos negros foram historicamente transformados em objeto de curiosidade e controle. Chamar objetificação de elogio apaga esse peso.',
  },
  {
    focus: 'atitude',
    situation:
      'No grupo do condomínio, alguém posta a foto de um jovem negro caminhando na rua e pergunta se ele é "suspeito", sem qualquer ocorrência concreta.',
    dismissal: 'um cuidado preventivo da vizinhança',
    recognition: 'a suspeita está sendo construída pela aparência do jovem',
    action: 'Questiono a postagem, peço que removam a imagem e lembro que exposição sem motivo também é violência',
    reflectionTitle: 'Suspeita compartilhada',
    reflectionText:
      'Grupos de vizinhança podem transformar preconceito em vigilância coletiva. Um corpo negro circulando não é evidência de ameaça.',
  },
  {
    focus: 'atitude',
    situation:
      'O alarme de uma loja toca quando várias pessoas saem juntas, mas o segurança aborda apenas uma cliente negra para revistar a bolsa.',
    dismissal: 'uma escolha prática para resolver rápido',
    recognition: 'a revista seletiva revela quem foi presumido culpado',
    action: 'Pergunto por que só ela foi abordada e peço que o procedimento seja aplicado de forma igual ou revisto',
    reflectionTitle: 'Culpa presumida',
    reflectionText:
      'Ser tratado como suspeito antes de qualquer prova é uma experiência recorrente de desumanização. Igualdade de procedimento precisa ser observável.',
  },
  {
    focus: 'escuta',
    situation:
      'No elevador, uma pessoa aperta a bolsa contra o corpo quando um homem negro entra. Ele percebe e fica visivelmente constrangido.',
    dismissal: 'um reflexo individual de autoproteção',
    recognition: 'o gesto comunica medo racializado e produz humilhação',
    action: 'Não finjo que nada aconteceu; acolho o constrangimento dele e converso depois com quem fez o gesto, se houver abertura',
    reflectionTitle: 'O gesto fala',
    reflectionText:
      'Nem todo racismo vem em frase alta. Gestos pequenos, repetidos ao longo da vida, dizem a uma pessoa que sua presença é lida como perigo.',
  },
  {
    focus: 'atitude',
    situation:
      'A empresa oferece uma formação sobre relações raciais e alguns colegas chamam o tema de "mimimi" antes mesmo de ouvir a proposta.',
    dismissal: 'uma resistência comum a treinamentos corporativos',
    recognition: 'desqualificar o tema impede que experiências de racismo sejam levadas a sério',
    action: 'Defendo a importância da formação e convido o grupo a criticar com argumentos depois de participar',
    reflectionTitle: 'Deboche como barreira',
    reflectionText:
      'Chamar uma pauta de exagero antes de escutar é uma forma de encerrar a conversa. O deboche protege o conforto de quem não quer rever práticas.',
  },
  {
    focus: 'contexto',
    situation:
      'Uma empresa recruta quase sempre nas mesmas universidades caras e depois afirma que há poucos candidatos negros qualificados.',
    dismissal: 'uma busca natural pelos melhores cursos',
    recognition: 'a origem das vagas pode limitar quem sequer fica sabendo das oportunidades',
    action: 'Sugiro parcerias com universidades públicas, coletivos negros e programas de formação diversos',
    reflectionTitle: 'Pipeline escolhido',
    reflectionText:
      'O funil começa antes da candidatura. Se a busca acontece só em espaços historicamente privilegiados, a falta de diversidade já foi produzida pela estratégia.',
  },
  {
    focus: 'contexto',
    situation:
      'Um estágio importante não é remunerado. A equipe diz que isso separa "quem realmente quer", mas poucas pessoas negras conseguem aceitar a vaga.',
    dismissal: 'um teste legítimo de dedicação',
    recognition: 'trabalhar de graça favorece quem já tem suporte financeiro',
    action: 'Defendo bolsa, auxílio transporte ou outro formato que não exclua quem precisa se sustentar',
    reflectionTitle: 'Dedicação custa',
    reflectionText:
      'Oportunidades não remuneradas transformam privilégio em currículo. Quando só alguns podem pagar para aprender, o mérito já começa desigual.',
  },
  {
    focus: 'atitude',
    situation:
      'Uma professora negra chega para palestrar e a equipe do evento pergunta se ela é da limpeza, mesmo estando com crachá de convidada.',
    dismissal: 'uma confusão sem intenção ruim',
    recognition: 'a autoridade dela foi negada por uma expectativa racial sobre funções',
    action: 'Corrijo a situação na hora, apresento a professora com seu título e peço desculpas pelo tratamento',
    reflectionTitle: 'Autoridade questionada',
    reflectionText:
      'Nem toda confusão é aleatória. Quando pessoas negras são repetidamente associadas a posições subalternas, a surpresa diante da autoridade revela um padrão.',
  },
  {
    focus: 'contexto',
    situation:
      'Na edição de uma reportagem, escolhem uma imagem em que um adolescente negro aparece sério e de capuz para ilustrar uma matéria sobre violência.',
    dismissal: 'uma imagem forte para chamar atenção',
    recognition: 'a escolha visual reforça a associação entre juventude negra e ameaça',
    action: 'Proponho trocar a imagem e discutir critérios para não criminalizar rostos negros sem necessidade',
    reflectionTitle: 'Enquadrar é narrar',
    reflectionText:
      'A imagem não apenas acompanha o texto; ela cria sentido. Escolhas visuais podem naturalizar medo quando repetem sempre o mesmo rosto para o perigo.',
  },
  {
    focus: 'contexto',
    situation:
      'Em uma reunião de pais, alguém diz que funk e rap deveriam ser proibidos na festa da escola porque "atraem coisa ruim".',
    dismissal: 'uma preocupação com o ambiente escolar',
    recognition: 'expressões culturais negras e periféricas estão sendo criminalizadas',
    action: 'Pergunto quais critérios musicais serão usados e defendo que estilos não sejam tratados como ameaça por origem social ou racial',
    reflectionTitle: 'Cultura sob suspeita',
    reflectionText:
      'Quando algumas expressões culturais são vistas como arte e outras como risco, há uma hierarquia de classe e raça em funcionamento.',
  },
  {
    focus: 'contexto',
    situation:
      'Uma marca usa símbolos de culturas negras no carnaval, mas sua equipe de criação e seus fornecedores quase não incluem pessoas negras.',
    dismissal: 'uma homenagem estética à cultura popular',
    recognition: 'a empresa se beneficia da cultura negra sem repartir poder ou renda',
    action: 'Questiono quem está sendo pago, creditado e contratado para produzir aquela campanha',
    reflectionTitle: 'Apropriar sem repartir',
    reflectionText:
      'Celebrar uma cultura enquanto exclui seus criadores transforma homenagem em extração. Reconhecimento precisa aparecer em crédito, decisão e remuneração.',
  },
  {
    focus: 'escuta',
    situation:
      'Em um almoço, alguém chama uma comida de origem afro-brasileira de "exótica" e faz careta antes de provar.',
    dismissal: 'uma reação pessoal a um prato diferente',
    recognition: 'a palavra usada pode marcar a cultura negra como estranha ou inferior',
    action: 'Pergunto o que a pessoa quis dizer e lembro que comidas carregam histórias, afetos e pertencimento',
    reflectionTitle: 'O estranho fabricado',
    reflectionText:
      'Chamar de exótico pode parecer neutro, mas muitas vezes coloca uma cultura fora do centro do que é considerado normal ou refinado.',
  },
  {
    focus: 'atitude',
    situation:
      'Uma criança negra chega chorando porque colegas chamaram seu cabelo de "feio" e disseram que ele deveria ser alisado.',
    dismissal: 'uma provocação infantil comum',
    recognition: 'a agressão ensina vergonha sobre características negras',
    action: 'Acolho a criança, aciono a escola e proponho uma conversa pedagógica sobre racismo e respeito',
    reflectionTitle: 'Infância ferida',
    reflectionText:
      'Bullying racial não é brincadeira comum. Ele age sobre autoestima, pertencimento e segurança de crianças que ainda estão formando sua imagem de si.',
  },
  {
    focus: 'contexto',
    situation:
      'Um sistema de reconhecimento facial falha repetidamente com rostos negros, mas a equipe técnica trata isso como problema menor.',
    dismissal: 'uma limitação técnica inevitável',
    recognition: 'tecnologias também reproduzem desigualdades quando são treinadas e testadas de forma desigual',
    action: 'Peço auditoria do sistema, testes com grupos diversos e suspensão do uso até entender o risco',
    reflectionTitle: 'Código com viés',
    reflectionText:
      'Tecnologia não é neutra só porque é automática. Dados, equipes e decisões humanas entram no sistema e podem amplificar discriminações.',
  },
  {
    focus: 'contexto',
    situation:
      'Uma novela tem vários personagens negros, mas quase todos são empregados, criminosos ou alívio cômico, enquanto os protagonistas são brancos.',
    dismissal: 'uma escolha criativa sem impacto social',
    recognition: 'representações repetidas moldam quem é visto como protagonista e quem é visto como apoio',
    action: 'Comento o padrão e valorizo obras que mostrem pessoas negras em papéis complexos e diversos',
    reflectionTitle: 'Quem pode ser centro',
    reflectionText:
      'A ficção organiza imaginação social. Quando alguns grupos aparecem sempre nos mesmos lugares, o público aprende limites sobre quem pode desejar, decidir e liderar.',
  },
  {
    focus: 'escuta',
    situation:
      'Uma colega negra nascida no Brasil ouve repetidamente a pergunta "mas de onde você é de verdade?", como se ela não pudesse pertencer dali.',
    dismissal: 'uma curiosidade inocente sobre origem',
    recognition: 'a pergunta pode sugerir que ela é estrangeira em seu próprio país',
    action: 'Escuto como ela se sente e evito insistir em perguntas que transformem pertencimento em prova',
    reflectionTitle: 'Pertencer sem explicar',
    reflectionText:
      'Perguntas sobre origem podem carregar a ideia de que algumas pessoas precisam justificar presença. A curiosidade não deve apagar pertencimento.',
  },
  {
    focus: 'escuta',
    situation:
      'Alguém diz a um colega: "Você nem parece negro", tentando elogiar sua aparência, sua fala ou seus hábitos.',
    dismissal: 'um elogio mal formulado',
    recognition: 'a frase associa valor a estar distante da negritude',
    action: 'Digo que o elogio reforça preconceito e convido a pessoa a elogiar sem negar quem ele é',
    reflectionTitle: 'Elogiar apagando',
    reflectionText:
      'Quando o elogio depende de afastar alguém de sua identidade, ele carrega desprezo pelo grupo de origem. Reconhecer isso é mais honesto do que defender a intenção.',
  },
  {
    focus: 'contexto',
    situation:
      'Uma vaga antiga pede "boa aparência" e a equipe diz que todo mundo entende o que isso significa para atendimento ao público.',
    dismissal: 'uma expressão tradicional de contratação',
    recognition: 'boa aparência pode funcionar como código para excluir corpos fora do padrão branco',
    action: 'Proponho remover a expressão e definir apenas requisitos ligados à função',
    reflectionTitle: 'Código antigo',
    reflectionText:
      'Termos aparentemente vagos podem carregar histórias de exclusão. Em recrutamento, clareza protege pessoas candidatas e também a organização.',
  },
  {
    focus: 'atitude',
    situation:
      'Uma família negra visita um apartamento para alugar. Depois da visita, a imobiliária diz que o imóvel "acabou de ficar indisponível", mas o anúncio continua ativo.',
    dismissal: 'uma mudança comum no mercado imobiliário',
    recognition: 'pode haver discriminação no acesso à moradia',
    action: 'Ajudo a documentar as mensagens e incentivo a família a pedir explicações formais pelos canais adequados',
    reflectionTitle: 'Casa negada',
    reflectionText:
      'A discriminação habitacional raramente se anuncia pelo nome. Ela aparece em desculpas vagas, portas fechadas e critérios que mudam conforme a pessoa interessada.',
  },
  {
    focus: 'atitude',
    situation:
      'Um motorista de aplicativo cancela a corrida depois de ver que o passageiro é um homem negro esperando em determinado bairro.',
    dismissal: 'uma decisão individual de segurança do motorista',
    recognition: 'o cancelamento pode combinar racismo e estigma territorial',
    action: 'Registro o padrão no aplicativo e apoio o passageiro a relatar a discriminação com detalhes',
    reflectionTitle: 'Mobilidade vigiada',
    reflectionText:
      'Ter o deslocamento negado por aparência ou território limita o direito de circular. Racismo cotidiano também acontece quando serviços decidem quem merece acesso.',
  },
  {
    focus: 'atitude',
    situation:
      'Um adolescente negro caminha no shopping e seguranças se aproximam várias vezes, mesmo sem qualquer comportamento diferente dos demais jovens.',
    dismissal: 'uma ronda normal em local movimentado',
    recognition: 'a presença dele está sendo tratada como suspeita',
    action: 'Observo a abordagem, ofereço apoio ao adolescente e procuro a administração para questionar o procedimento',
    reflectionTitle: 'Juventude sob escolta',
    reflectionText:
      'Para muitos jovens negros, lazer também vem acompanhado de vigilância. O impacto não está só na abordagem, mas na mensagem de não pertencimento.',
  },
  {
    focus: 'atitude',
    situation:
      'No happy hour da empresa, alguém faz uma piada comparando a cor da pele de um colega negro a comida ou bebida. O grupo ri.',
    dismissal: 'uma brincadeira sem maldade entre colegas',
    recognition: 'a piada usa o corpo dele como objeto de ridicularização',
    action: 'Digo que a piada não foi adequada e mudo a conversa sem exigir que o colega explique por que doeu',
    reflectionTitle: 'Humor com alvo',
    reflectionText:
      'Piadas revelam quem o grupo se permite constranger. Quando o riso depende de marcar raça, o problema não é sensibilidade; é a escolha do alvo.',
  },
  {
    focus: 'escuta',
    situation:
      'Uma influenciadora negra relata ataques racistas nas redes. Um amigo responde que ela deveria ignorar porque "haters sempre existem".',
    dismissal: 'uma regra geral da internet',
    recognition: 'ataques racistas têm impacto específico e não são apenas crítica comum',
    action: 'Valido o relato, ajudo a denunciar as mensagens e evito reduzir violência racial a comentário desagradável',
    reflectionTitle: 'Não é só hate',
    reflectionText:
      'A internet amplia vozes e também violências. Nomear ataques racistas permite cuidado, denúncia e responsabilização mais adequados.',
  },
  {
    focus: 'contexto',
    situation:
      'Em um debate sobre bolsas para estudantes negros, alguém diz que políticas específicas criam privilégios e dividem a sociedade.',
    dismissal: 'uma defesa justa de igualdade formal',
    recognition: 'igualdade formal pode manter desigualdades quando pontos de partida são diferentes',
    action: 'Explico que políticas específicas podem reduzir barreiras criadas historicamente, não criar superioridade',
    reflectionTitle: 'Igualdade de chegada',
    reflectionText:
      'Tratar todos do mesmo jeito depois de séculos de exclusão não produz o mesmo resultado para todos. Algumas políticas existem para aproximar condições reais.',
  },
  {
    focus: 'contexto',
    situation:
      'Na aula, a história da África aparece quase só ligada à escravidão, sem filosofia, impérios, tecnologia, literatura ou resistência.',
    dismissal: 'um recorte inevitável do programa',
    recognition: 'o currículo limita a compreensão da contribuição africana e afro-brasileira',
    action: 'Sugiro materiais complementares e cobro que a escola trate África e diáspora com complexidade',
    reflectionTitle: 'Antes da violência',
    reflectionText:
      'Povos africanos não começaram na escravidão. Ensinar história com dignidade exige mostrar criação, poder, pensamento e continuidade cultural.',
  },
  {
    focus: 'atitude',
    situation:
      'Em uma clínica, a recepcionista entrega o crachá de acompanhante a uma médica negra, presumindo que ela não poderia ser a profissional responsável.',
    dismissal: 'uma confusão administrativa sem importância',
    recognition: 'a competência dela foi invisibilizada por uma expectativa racial',
    action: 'Corrijo a recepcionista na hora e reforço o cargo da médica com naturalidade e respeito',
    reflectionTitle: 'Quem veste autoridade',
    reflectionText:
      'Quando a autoridade negra surpreende, o ambiente revela suas expectativas. Corrigir rápido evita que a pessoa atingida carregue sozinha o constrangimento.',
  },
  {
    focus: 'atitude',
    situation:
      'Uma loja pede que um cliente negro pague antes de experimentar um tênis caro, embora outros clientes experimentem sem a mesma exigência.',
    dismissal: 'uma política comercial flexível da loja',
    recognition: 'a regra está sendo aplicada de forma seletiva',
    action: 'Pergunto se a política vale para todos e incentivo o cliente a exigir o mesmo tratamento recebido pelos demais',
    reflectionTitle: 'Confiança desigual',
    reflectionText:
      'A suspeita altera até rituais simples de consumo. Quando a confiança é oferecida a uns e negada a outros, a loja comunica hierarquia.',
  },
  {
    focus: 'contexto',
    situation:
      'Um colega diz que bolsas afirmativas tiram vaga de quem estudou mais, sem considerar trajetórias escolares muito desiguais.',
    dismissal: 'uma defesa legítima de esforço pessoal',
    recognition: 'o esforço não acontece em condições iguais para todas as pessoas',
    action: 'Mostro que mérito precisa ser lido junto de acesso a escola, tempo, renda, segurança e redes de apoio',
    reflectionTitle: 'Mérito situado',
    reflectionText:
      'Valorizar esforço é importante, mas esforço não flutua no vazio. Pessoas atravessam obstáculos diferentes antes de chegar à mesma prova.',
  },
  {
    focus: 'reflexao',
    situation:
      'A única funcionária negra da equipe é sempre chamada para organizar ações de diversidade, além de suas tarefas, sem reconhecimento ou tempo reservado.',
    dismissal: 'um convite natural por ela ter vivência',
    recognition: 'a empresa está transferindo trabalho institucional para uma pessoa afetada pelo problema',
    action: 'Proponho dividir responsabilidades, reconhecer horas de trabalho e contratar apoio especializado quando necessário',
    reflectionTitle: 'Trabalho invisível',
    reflectionText:
      'Diversidade não pode depender do cansaço de quem já enfrenta a desigualdade. Responsabilidade institucional precisa aparecer em tempo, orçamento e reconhecimento.',
  },
  {
    focus: 'escuta',
    situation:
      'Um gestor corrige publicamente o português de uma colega negra várias vezes, mas ignora erros parecidos de colegas brancos.',
    dismissal: 'um cuidado com comunicação profissional',
    recognition: 'a correção seletiva pode humilhar e reforçar estereótipos de competência',
    action: 'Observo o padrão, converso com o gestor sobre critérios iguais e apoio a colega se ela quiser levar o caso adiante',
    reflectionTitle: 'Correção como controle',
    reflectionText:
      'Corrigir pode ensinar ou pode marcar inferioridade. Quando a correção escolhe sempre os mesmos corpos, vale perguntar o que está sendo realmente avaliado.',
  },
  {
    focus: 'reflexao',
    situation:
      'Após um assalto no bairro, alguém descreve o suspeito apenas como "um homem negro", sem roupa, altura, direção ou qualquer detalhe útil.',
    dismissal: 'uma informação objetiva para alertar vizinhos',
    recognition: 'usar só a raça como pista transforma muitos inocentes em suspeitos',
    action: 'Peço descrições concretas e lembro que alertas vagos podem colocar outros homens negros em risco',
    reflectionTitle: 'Descrição que acusa muitos',
    reflectionText:
      'Uma descrição útil identifica uma pessoa; uma descrição racial vaga amplia suspeita sobre um grupo inteiro. A diferença pode afetar vidas reais.',
  },
  {
    focus: 'atitude',
    situation:
      'Uma pessoa branca aparece em uma festa fantasiada com pele escurecida para imitar uma celebridade negra e diz que é só homenagem.',
    dismissal: 'uma fantasia bem-intencionada',
    recognition: 'escurecer a pele como fantasia retoma práticas racistas de ridicularização',
    action: 'Digo que a homenagem não precisa imitar cor de pele e explico por que a escolha é ofensiva',
    reflectionTitle: 'Fantasia não apaga história',
    reflectionText:
      'Certas imagens carregam histórias de humilhação pública. A intenção de homenagear não elimina o significado social de pintar a pele como personagem.',
  },
  {
    focus: 'escuta',
    situation:
      'Uma profissional negra recebe feedback de que precisa ser "menos intensa", embora seus resultados sejam bons e colegas brancos sejam elogiados por assertividade.',
    dismissal: 'um conselho de desenvolvimento comportamental',
    recognition: 'a mesma postura pode ser lida de forma desigual conforme raça e gênero',
    action: 'Peço exemplos concretos do feedback e comparo se o critério é aplicado do mesmo modo a outras pessoas',
    reflectionTitle: 'Assertiva ou intensa',
    reflectionText:
      'Feedback vago pode vestir preconceito de orientação profissional. Critérios claros ajudam a separar desenvolvimento real de controle de comportamento.',
  },
  {
    focus: 'atitude',
    situation:
      'Em uma reunião, um analista negro é interrompido várias vezes. Quando ele tenta concluir, alguém diz que ele está tomando muito espaço.',
    dismissal: 'uma dinâmica normal de reunião cheia',
    recognition: 'a fala dele está sendo limitada enquanto outras pessoas circulam livremente',
    action: 'Intervenho para devolver a palavra a ele e proponho uma regra de fala para o grupo',
    reflectionTitle: 'Espaço de fala concreto',
    reflectionText:
      'Dar voz não é slogan; é organizar a conversa para que pessoas não sejam cortadas sempre nos mesmos lugares. Facilitação também é antirracismo.',
  },
  {
    focus: 'contexto',
    situation:
      'Um banco nega crédito a uma empreendedora negra com a justificativa de "perfil de risco", sem explicar critérios claros.',
    dismissal: 'uma decisão técnica do sistema financeiro',
    recognition: 'modelos de risco podem reproduzir desigualdades históricas de renda, território e acesso bancário',
    action: 'Peço transparência nos critérios e incentivo a busca por canais de revisão da decisão',
    reflectionTitle: 'Risco para quem?',
    reflectionText:
      'Sistemas financeiros parecem impessoais, mas usam dados de uma sociedade desigual. Sem revisão, podem transformar exclusão antiga em cálculo moderno.',
  },
  {
    focus: 'atitude',
    situation:
      'Um professor chama religiões de matriz africana de superstição, enquanto trata outras tradições religiosas como cultura ou filosofia.',
    dismissal: 'uma opinião pessoal sobre religião',
    recognition: 'há desrespeito seletivo contra tradições negras',
    action: 'Questiono a diferença de tratamento e peço que o conteúdo seja apresentado com respeito e precisão',
    reflectionTitle: 'Sagrado desigual',
    reflectionText:
      'Racismo religioso aparece quando algumas crenças recebem dignidade e outras viram caricatura. Respeito começa por nomear corretamente.',
  },
  {
    focus: 'reflexao',
    situation:
      'Em uma postagem sobre racismo, alguém comenta "lá vem vitimismo" sem responder ao fato narrado pela pessoa negra.',
    dismissal: 'uma crítica direta ao exagero nas redes',
    recognition: 'a palavra vitimismo encerra a escuta antes de analisar o relato',
    action: 'Peço que a pessoa responda ao conteúdo concreto do relato em vez de desqualificar quem falou',
    reflectionTitle: 'Palavra que bloqueia',
    reflectionText:
      'Algumas palavras funcionam como portas fechadas. Chamar de vitimismo pode ser uma forma rápida de não lidar com dor, evidência e responsabilidade.',
  },
  {
    focus: 'contexto',
    situation:
      'Um museu convida artistas negros apenas em novembro, mas durante o resto do ano mantém sua programação quase toda branca.',
    dismissal: 'uma homenagem pontual importante',
    recognition: 'a presença negra está sendo confinada a uma data simbólica',
    action: 'Pergunto como a instituição inclui artistas negros na curadoria permanente, não só em campanhas temáticas',
    reflectionTitle: 'Calendário não basta',
    reflectionText:
      'Datas de memória são importantes, mas não substituem presença contínua. Representação real entra no orçamento, na curadoria e na rotina.',
  },
  {
    focus: 'atitude',
    situation:
      'Na formatura, familiares negros de uma aluna são orientados para a entrada de funcionários, enquanto familiares brancos seguem para a plateia sem pergunta.',
    dismissal: 'uma falha de orientação do evento',
    recognition: 'a família foi associada ao trabalho de serviço antes de ser reconhecida como convidada',
    action: 'Intervenho com a equipe, acompanho a família até a plateia e peço retratação pelo constrangimento',
    reflectionTitle: 'Convidados sob suspeita',
    reflectionText:
      'O pertencimento também é testado em celebrações. Quando famílias negras precisam provar que são convidadas, a festa comunica exclusão.',
  },
  {
    focus: 'atitude',
    situation:
      'Durante uma reunião, alguém pede para "limpar a pauta racial" do projeto porque falar de racismo pode afastar patrocinadores.',
    dismissal: 'uma estratégia de comunicação prudente',
    recognition: 'a pauta está sendo silenciada para preservar conforto institucional',
    action: 'Defendo manter o tema com responsabilidade e mostro que apagar o problema compromete a honestidade do projeto',
    reflectionTitle: 'Conforto patrocinado',
    reflectionText:
      'Quando uma instituição só aceita diversidade sem conflito, ela prefere imagem a transformação. Falar com cuidado não é o mesmo que apagar.',
  },
  {
    focus: 'atitude',
    situation:
      'Em um restaurante, uma mulher negra bem vestida entra e o atendente pergunta imediatamente se ela veio retirar entrega.',
    dismissal: 'uma confusão comum em horário movimentado',
    recognition: 'a pergunta revela uma expectativa sobre qual lugar ela ocupa no restaurante',
    action: 'Corrijo a suposição com naturalidade e peço que o atendimento seja feito como com qualquer cliente',
    reflectionTitle: 'Mesa ou serviço',
    reflectionText:
      'O problema não está em ser entregadora; está em presumir função antes de reconhecer a pessoa. Expectativas raciais organizam até a recepção.',
  },
  {
    focus: 'contexto',
    situation:
      'Na sala de aula, a professora chama o lápis bege de "cor de pele" e uma criança negra pergunta por que a pele dela não conta.',
    dismissal: 'uma expressão antiga sem intenção ruim',
    recognition: 'a linguagem transforma uma pele em padrão universal e outras em exceção',
    action: 'Sugiro dizer "lápis bege" e usar materiais que representem muitos tons de pele',
    reflectionTitle: 'A cor que vira padrão',
    reflectionText:
      'Palavras simples carregam mundo. Quando só uma pele é chamada de pele, crianças aprendem quem é centro e quem precisa de adjetivo.',
  },
  {
    focus: 'atitude',
    situation:
      'Em uma reunião familiar, alguém chama o cabelo crespo de uma criança de "cabelo ruim" e recomenda alisar cedo para evitar sofrimento.',
    dismissal: 'um conselho prático de cuidado',
    recognition: 'a fala ensina rejeição a uma característica negra',
    action: 'Interrompo com afeto e digo que o cabelo dela é bonito e merece cuidado, não vergonha',
    reflectionTitle: 'Vergonha herdada',
    reflectionText:
      'Muitas feridas raciais começam em frases domésticas. Proteger uma criança inclui interromper carinhos que carregam desprezo.',
  },
  {
    focus: 'escuta',
    situation:
      'Uma pessoa evita chamar uma colega de negra e insiste em dizer "morena", mesmo depois de ela se apresentar como mulher negra.',
    dismissal: 'uma tentativa educada de não ofender',
    recognition: 'evitar a palavra negra pode tratar a identidade dela como algo negativo',
    action: 'Respeito a forma como ela se nomeia e explico que negro não é xingamento quando usado com respeito',
    reflectionTitle: 'Nomear sem medo',
    reflectionText:
      'A linguagem pode revelar desconforto com a negritude. Escutar como alguém se identifica é mais respeitoso do que substituir sua palavra por eufemismo.',
  },
  {
    focus: 'escuta',
    situation:
      'Alguém chama um colega negro de "negro de alma branca" para elogiar sua educação e seu jeito de falar.',
    dismissal: 'uma expressão antiga usada com carinho',
    recognition: 'a frase associa qualidades positivas à branquitude',
    action: 'Digo que a expressão é racista e proponho elogiar diretamente a qualidade sem negar a identidade dele',
    reflectionTitle: 'Elogio envenenado',
    reflectionText:
      'Algumas frases parecem afetuosas porque foram normalizadas. Olhar para o sentido delas mostra quais identidades foram ligadas a valor e quais foram desvalorizadas.',
  },
  {
    focus: 'atitude',
    situation:
      'Um professor suspeita que uma aluna negra plagiou o trabalho porque o texto está "bom demais", sem levantar a mesma suspeita sobre colegas brancos.',
    dismissal: 'um cuidado acadêmico contra plágio',
    recognition: 'a competência dela está sendo tratada como improvável',
    action: 'Peço que qualquer verificação siga o mesmo critério para todos e que a aluna não seja constrangida sem evidência',
    reflectionTitle: 'Competência sob prova',
    reflectionText:
      'Cobrar integridade acadêmica é legítimo. O problema surge quando a suspeita nasce da surpresa diante da excelência de uma estudante negra.',
  },
  {
    focus: 'atitude',
    situation:
      'No supermercado, uma mãe negra e seu filho são seguidos por um funcionário em todos os corredores, enquanto outros clientes circulam livremente.',
    dismissal: 'uma ronda preventiva da loja',
    recognition: 'a família está sendo vigiada por suspeita racializada',
    action: 'Pergunto à gerência qual é o motivo da vigilância e apoio a mãe se ela quiser formalizar a reclamação',
    reflectionTitle: 'Comprar sob suspeita',
    reflectionText:
      'A humilhação de ser seguido também educa crianças sobre como o mundo as enxerga. Intervir pode impedir que a violência pareça normal.',
  },
  {
    focus: 'escuta',
    situation:
      'Uma gestante negra relata preocupação durante o pré-natal, mas sua fala é tratada como ansiedade exagerada e não recebe explicação detalhada.',
    dismissal: 'uma tentativa de tranquilizar a paciente',
    recognition: 'a escuta insuficiente pode colocar mulheres negras em maior vulnerabilidade no cuidado',
    action: 'Levo a preocupação a sério, peço explicações claras e incentivo que ela tenha acompanhamento respeitoso',
    reflectionTitle: 'Cuidado que escuta',
    reflectionText:
      'No cuidado em saúde, escutar é parte da intervenção. Minimizar preocupações pode aumentar riscos e reforçar a sensação de abandono.',
  },
  {
    focus: 'contexto',
    situation:
      'Em uma conversa sobre moradia, alguém descreve um bairro de maioria negra como "naturalmente perigoso", sem falar de investimento público, transporte ou serviços.',
    dismissal: 'uma leitura realista sobre segurança',
    recognition: 'o território está sendo racializado e separado de sua história de abandono',
    action: 'Trago a conversa para políticas públicas, infraestrutura e estigma territorial, em vez de culpar moradores',
    reflectionTitle: 'Território marcado',
    reflectionText:
      'Bairros não nascem com destino. Eles são moldados por investimento, presença do Estado, oportunidades e narrativas sobre quem mora ali.',
  },
  {
    focus: 'contexto',
    situation:
      'Um aplicativo de avatares oferece muitas opções de cabelo e roupa, mas quase nenhum tom de pele escuro ou traço negro.',
    dismissal: 'uma limitação visual sem grande impacto',
    recognition: 'a ausência de opções comunica quem foi imaginado como usuário padrão',
    action: 'Envio feedback pedindo representação ampla e considero alternativas que incluam melhor seus usuários',
    reflectionTitle: 'Design também escolhe',
    reflectionText:
      'Interfaces carregam suposições sobre quem existe. Quando uma pessoa não consegue se representar, a exclusão aparece como detalhe de produto.',
  },
  {
    focus: 'atitude',
    situation:
      'Uma engenheira negra apresenta uma solução técnica e um cliente pergunta se há "alguém mais experiente" para confirmar, ignorando seu currículo.',
    dismissal: 'uma dúvida normal do cliente sobre segurança técnica',
    recognition: 'a autoridade dela está sendo questionada sem motivo técnico',
    action: 'Reforço a competência dela diante do cliente e redireciono as perguntas técnicas para quem apresentou a solução',
    reflectionTitle: 'Autoridade interrompida',
    reflectionText:
      'Profissionais negros muitas vezes precisam provar repetidamente o que já está em seus cargos e entregas. Aliados podem devolver autoridade em vez de assistir.',
  },
  {
    focus: 'contexto',
    situation:
      'O RH afirma que não contrata mais pessoas negras porque "não aparecem candidatos", mas nunca divulgou vagas em redes, coletivos ou territórios diversos.',
    dismissal: 'uma limitação inevitável do mercado',
    recognition: 'a empresa está confundindo ausência no radar com ausência de talento',
    action: 'Proponho ampliar canais de divulgação e acompanhar dados de candidatura, entrevista e contratação',
    reflectionTitle: 'Talento fora do radar',
    reflectionText:
      'Não encontrar alguém pode dizer mais sobre onde se procura do que sobre quem existe. Recrutamento diverso precisa sair do caminho habitual.',
  },
  {
    focus: 'escuta',
    situation:
      'Uma colega com tranças pede que parem de tocar em seu cabelo. Alguns respondem que ela está sendo antipática.',
    dismissal: 'uma reação exagerada a um gesto curioso',
    recognition: 'o limite corporal dela está sendo desrespeitado',
    action: 'Apoio o limite dela e digo que ninguém precisa ser simpático quando seu corpo é tocado sem permissão',
    reflectionTitle: 'Limite não é grosseria',
    reflectionText:
      'Pessoas negras não precisam transformar invasão em aula gentil para merecer respeito. O limite é suficiente por si só.',
  },
  {
    focus: 'reflexao',
    situation:
      'Ao conhecer um colega negro, alguém pergunta se ele samba bem, como se habilidade artística viesse automaticamente da raça.',
    dismissal: 'uma tentativa simpática de puxar assunto',
    recognition: 'o comentário reduz a pessoa a um estereótipo cultural',
    action: 'Digo que a pergunta parte de um estereótipo e tento conhecer a pessoa sem presumir gostos ou talentos',
    reflectionTitle: 'Estereótipo simpático',
    reflectionText:
      'Estereótipos positivos ainda são caixas. Eles parecem elogiosos, mas tiram da pessoa o direito de ser complexa e imprevisível.',
  },
  {
    focus: 'reflexao',
    situation:
      'Circula um vídeo de violência policial contra um homem negro. Antes de saber o contexto, alguém diz: "Alguma coisa ele deve ter feito."',
    dismissal: 'uma cautela antes de julgar a polícia',
    recognition: 'a fala presume culpa da vítima e inocência automática da instituição',
    action: 'Peço que a conversa comece pelos fatos visíveis e pelo direito de qualquer pessoa a tratamento digno',
    reflectionTitle: 'Culpa automática',
    reflectionText:
      'Presumir culpa antes de saber o que ocorreu revela quais vidas recebem dúvida e quais recebem defesa. Direitos não dependem de simpatia pela vítima.',
  },
  {
    focus: 'atitude',
    situation:
      'Na foto oficial da turma, crianças negras são colocadas no fundo e nas laterais, enquanto crianças brancas ficam no centro da imagem.',
    dismissal: 'uma composição casual para organizar a foto',
    recognition: 'a imagem pode repetir uma hierarquia de visibilidade',
    action: 'Peço uma nova organização da foto e converso com a escola sobre cuidado com representação',
    reflectionTitle: 'Centro da imagem',
    reflectionText:
      'Fotografias escolares viram memória. Quem aparece no centro, nas bordas ou escondido aprende algo sobre lugar social.',
  },
  {
    focus: 'escuta',
    situation:
      'Em uma feira, clientes tentam negociar agressivamente com uma vendedora negra, mas pagam sem discutir em barracas de vendedores brancos.',
    dismissal: 'uma diferença normal de negociação',
    recognition: 'o trabalho dela pode estar sendo menos valorizado por viés racial',
    action: 'Pago o preço justo, valorizo o produto e não trato o tempo dela como algo disponível para exploração',
    reflectionTitle: 'Valor negociado',
    reflectionText:
      'Desvalorizar o trabalho de alguém também pode ser racismo cotidiano. A pergunta é por que algumas pessoas precisam justificar mais o preço do que outras.',
  },
  {
    focus: 'contexto',
    situation:
      'No aeroporto, um viajante negro é escolhido para revista extra e perguntas longas, enquanto pessoas brancas com bagagens semelhantes passam direto.',
    dismissal: 'um procedimento aleatório de segurança',
    recognition: 'controle de fronteira e segurança podem operar por perfilamento racial',
    action: 'Observo, registro detalhes e apoio o viajante se ele quiser pedir justificativa formal do procedimento',
    reflectionTitle: 'Fronteira no corpo',
    reflectionText:
      'A mobilidade de pessoas negras pode ser fiscalizada com mais desconfiança. O problema não é haver segurança; é quem vira alvo preferencial dela.',
  },
  {
    focus: 'escuta',
    situation:
      'Uma mulher negra LGBT relata que sente racismo em espaços LGBT e LGBTfobia em espaços negros. Alguém responde que ela está dividindo a luta.',
    dismissal: 'uma preocupação com unidade do movimento',
    recognition: 'experiências de opressão podem se cruzar e criar vulnerabilidades específicas',
    action: 'Escuto sem disputar prioridade e reconheço que uma luta mais forte precisa incluir experiências cruzadas',
    reflectionTitle: 'Mais de uma fronteira',
    reflectionText:
      'Pessoas não vivem identidades em gavetas separadas. Escutar intersecções amplia a política, porque mostra quem fica de fora quando a luta simplifica demais.',
  },
  {
    focus: 'contexto',
    situation:
      'Em um curso universitário, quase todos os textos obrigatórios são de autores brancos, mesmo em temas discutidos há décadas por intelectuais negros.',
    dismissal: 'uma tradição acadêmica consolidada',
    recognition: 'o cânone também é construído por exclusões de raça, gênero e território',
    action: 'Sugiro bibliografia complementar de autores negros e pergunto como o programa define obras centrais',
    reflectionTitle: 'Quem vira referência',
    reflectionText:
      'Conhecimento reconhecido não é apenas o melhor conhecimento; muitas vezes é o mais legitimado por instituições. Ampliar referências muda as perguntas possíveis.',
  },
  {
    focus: 'reflexao',
    situation:
      'Uma empresa publica uma homenagem no Dia da Consciência Negra, mas não tem metas, orçamento ou ações internas para combater desigualdades raciais.',
    dismissal: 'uma mensagem simbólica positiva',
    recognition: 'o discurso público pode estar desconectado de compromisso real',
    action: 'Pergunto quais ações concretas acompanham a campanha e cobro transparência sobre avanços e limites',
    reflectionTitle: 'Post não é política',
    reflectionText:
      'Comunicação pode abrir conversas, mas não substitui mudança institucional. Sem ação, a homenagem vira estética de responsabilidade.',
  },
  {
    focus: 'atitude',
    situation:
      'Em uma biblioteca, estudantes negros conversando baixo são advertidos por barulho, enquanto outro grupo branco fala no mesmo volume sem ser abordado.',
    dismissal: 'uma tentativa comum de manter silêncio',
    recognition: 'a regra de silêncio está sendo aplicada de forma desigual',
    action: 'Pergunto à equipe qual critério foi usado e peço tratamento equivalente para todos os grupos',
    reflectionTitle: 'Regra seletiva',
    reflectionText:
      'Regras justas podem ser injustas na aplicação. Observar quem é corrigido e quem passa despercebido revela o funcionamento real da norma.',
  },
  {
    focus: 'contexto',
    situation:
      'Um filtro de câmera clareia automaticamente a pele em fotos e a equipe chama isso de "embelezamento padrão".',
    dismissal: 'uma preferência estética do aplicativo',
    recognition: 'a ferramenta associa beleza a pele mais clara',
    action: 'Questiono o padrão do filtro e peço controles que respeitem tons de pele sem clarear usuários automaticamente',
    reflectionTitle: 'Beleza calibrada',
    reflectionText:
      'Quando uma tecnologia decide melhorar uma imagem clareando pele, ela revela qual aparência considera ideal. Até filtros carregam política estética.',
  },
  {
    focus: 'contexto',
    situation:
      'Uma região de maioria negra recebe lixão, enchentes frequentes e pouco saneamento, mas a prefeitura trata tudo como problema técnico isolado.',
    dismissal: 'uma dificuldade urbana sem relação racial',
    recognition: 'desigualdade ambiental também pode seguir linhas raciais e territoriais',
    action: 'Levo a discussão para investimento público, saúde coletiva e participação dos moradores nas decisões',
    reflectionTitle: 'Ambiente desigual',
    reflectionText:
      'Racismo também aparece na distribuição de risco: quem convive com lixo, calor, enchente e ausência de serviço. Território e raça se encontram no cotidiano.',
  },
  {
    focus: 'contexto',
    situation:
      'Em um debate sobre cotas em concursos públicos, alguém diz que o serviço público deveria ser "cego para raça" para ser justo.',
    dismissal: 'uma defesa correta de impessoalidade',
    recognition: 'a impessoalidade formal não elimina barreiras acumuladas antes da prova',
    action: 'Explico que ações afirmativas podem tornar o serviço público mais representativo sem abandonar critérios de seleção',
    reflectionTitle: 'Estado com rosto plural',
    reflectionText:
      'Instituições que atendem toda a sociedade também precisam refletir essa sociedade. Representatividade não é enfeite; influencia confiança, prioridade e acesso.',
  },
  {
    focus: 'escuta',
    situation:
      'Uma pessoa branca pergunta em voz alta se "pode falar negro" e olha para a colega negra como se ela tivesse que autorizar a turma inteira.',
    dismissal: 'uma dúvida linguística legítima',
    recognition: 'a colega foi colocada como consultora obrigatória sobre raça',
    action: 'Respondo sem transferir o peso para ela e digo que o mais importante é respeitar como as pessoas se nomeiam',
    reflectionTitle: 'Dúvida sem peso',
    reflectionText:
      'Perguntar pode ser bom, mas a pergunta também pode deslocar trabalho emocional. Aprender sobre linguagem é responsabilidade de todos, não de uma pessoa isolada.',
  },
  {
    focus: 'contexto',
    situation:
      'Ao falar de uma executiva negra bem-sucedida, alguém diz que ela é "prova de que quem quer consegue", ignorando quantas pessoas ficaram sem acesso ao mesmo caminho.',
    dismissal: 'uma celebração inspiradora de esforço',
    recognition: 'uma trajetória excepcional não elimina barreiras enfrentadas pelo grupo',
    action: 'Celebro a conquista dela e lembro que histórias individuais não substituem análise estrutural',
    reflectionTitle: 'Exceção usada como regra',
    reflectionText:
      'Transformar uma vitória individual em prova contra a desigualdade coloca peso injusto sobre quem venceu e apaga quem foi impedido de chegar.',
  },
  {
    focus: 'atitude',
    situation:
      'Alguém reage à frase "vidas negras importam" dizendo que "todas as vidas importam", como se a afirmação inicial excluísse outras pessoas.',
    dismissal: 'uma defesa inclusiva da vida de todos',
    recognition: 'a resposta desvia o foco de um grupo que está denunciando vulnerabilidade específica',
    action: 'Explico que afirmar vidas negras é destacar uma desigualdade concreta, não negar a importância das demais vidas',
    reflectionTitle: 'Foco não é exclusão',
    reflectionText:
      'Nomear uma dor específica não diminui outras dores. Às vezes, justiça começa por olhar diretamente para quem tem sido desproporcionalmente ferido.',
  },
] satisfies QuestionSeed[];

function pickByIndex<T>(items: T[], index: number): T {
  return items[index % items.length];
}

function buildOptions(question: QuestionSeed, index: number) {
  const dismissal = pickByIndex(dismissalTemplates, index)(question.dismissal);
  const hesitation = pickByIndex(hesitationOptions[question.focus], index);
  const recognition = pickByIndex(recognitionTemplates, index)(question.recognition);

  return [
    dismissal,
    hesitation,
    recognition,
    question.action,
  ] satisfies [string, string, string, string];
}

export const questions: Question[] = questionSeeds.map((question, index) => ({
  id: index + 1,
  situation: question.situation,
  options: buildOptions(question, index).map((text, optionIndex) => ({
    text,
    scores: scoreProfiles[question.focus][optionIndex],
  })),
  reflection: {
    title: question.reflectionTitle,
    text: question.reflectionText,
  },
}));
