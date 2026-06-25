# Além das Aparências

Jogo educacional sobre percepção social e relações étnico-raciais. A proposta é colocar a pessoa jogadora diante de cenas do cotidiano, pedir que ela escolha uma reação e, em seguida, apresentar uma pista de contexto sobre o que pode estar em jogo naquela situação.

O projeto não funciona como prova, diagnóstico ou ranking. Ele foi pensado como uma experiência interativa de aprendizagem: um espaço para observar escolhas, reconhecer padrões e abrir conversas mais honestas sobre racismo, escuta, contexto e ação.

## Como funciona

- O jogo apresenta 100 rodadas com situações inspiradas no cotidiano.
- Em cada rodada, a pessoa escolhe uma entre quatro cartas de reação.
- Depois da escolha, uma pista educativa é desbloqueada.
- Ao final, o jogo mostra um painel com quatro habilidades:
  - Escuta
  - Contexto
  - Ação
  - Pausa crítica

## Tecnologias

- React
- TypeScript
- Vite
- CSS Modules
- ESLint

## Como rodar o projeto

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

No Windows, se o PowerShell bloquear a execução do `npm`, use:

```bash
npm.cmd run dev
```

## Scripts disponíveis

```bash
npm run dev
```

Roda o projeto em modo de desenvolvimento.

```bash
npm run build
```

Gera a versão de produção.

```bash
npm run lint
```

Verifica problemas de lint no código.

```bash
npm run preview
```

Abre uma prévia local da versão gerada pelo build.

## Estrutura principal

```text
src/
  components/        Componentes reutilizáveis
  data/              Perguntas e pistas do jogo
  hooks/             Controle de estado do quiz
  pages/             Telas da experiência
  styles/            Estilos globais
  types/             Tipagens compartilhadas
  utils/             Cálculo de pontuação e resumo final
```

## Objetivo pedagógico

O jogo trabalha situações em que o racismo pode aparecer de forma explícita, sutil, institucional ou naturalizada. As respostas não buscam rotular a pessoa jogadora, mas indicar tendências de leitura e convidar à reflexão.

A ideia central é simples: algumas cenas parecem pequenas quando vistas isoladamente, mas ganham outro sentido quando observadas como parte de padrões sociais mais amplos.

## Status

Projeto em desenvolvimento.
