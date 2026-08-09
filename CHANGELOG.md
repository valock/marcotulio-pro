# Histórico de versões

Registro do que mudou no marcotulio.pro e em que data entrou no ar.

Serve para uma coisa prática: quando o Search Console mostrar uma subida ou uma
queda, dá para voltar aqui e ver o que foi publicado naquela semana. Sem isso,
qualquer análise de causa vira chute.

Cada versão tem uma tag no Git. Para ver o código exato de uma versão:

```bash
git show v1.1.0
git diff v1.0.0 v1.1.0 --stat
```

Como as versões são numeradas:

- **MAIOR** (`2.0.0`): mudança estrutural no site ou virada de posicionamento.
  O dia do CRECI vai ser uma dessas.
- **MENOR** (`1.1.0`): seção nova, página nova relevante ou mudança que altera
  como o site é encontrado.
- **CORREÇÃO** (`1.1.1`): ajuste de performance, acessibilidade, texto ou dado.

---

## v1.1.1 · 9 de agosto de 2026

Fecha os itens que sobraram no PageSpeed depois que o desempenho no celular
subiu de 74 para 100.

- Os três logos da home (Caixa, Minha Casa Minha Vida e FGTS) eram PNG grandes
  servidos em tamanho de selo. Viraram WebP no dobro do tamanho de exibição:
  **124 KB no total passaram a 9 KB**, com a mesma nitidez em tela retina.
- O botão de WhatsApp do topo perdia o nome acessível no celular, porque o CSS
  esconde o texto abaixo de certa largura e sobrava só o ícone. Ganhou
  `aria-label`, o que resolve a auditoria de acessibilidade e a de navegação
  agêntica ao mesmo tempo.

## v1.1.0 · 9 de agosto de 2026

Seção editorial nova, separada do conteúdo de imóveis.

- **`/uberlandia-tech`**: hub sobre tecnologia, IA, infraestrutura e o efeito
  disso no território. Identidade visual própria para o leitor perceber que
  mudou de assunto.
- **`/tech/observatorio-ia-uberlandia`**: leitura do CSV público do Observatório
  de IA de Uberlândia. 117 iniciativas únicas, 37 startups, 15 ligadas à UFU e
  apenas 2 de infraestrutura de computação.
- Link no rodapé de 72 páginas, card na home, 6 atalhos novos.

## v1.0.0 · 8 de agosto de 2026

Correção dos dois gargalos apontados no diagnóstico de 53 dias de Search
Console. É a linha de base a partir da qual dá para comparar.

- **Fontes hospedadas no próprio domínio.** Bricolage Grotesque e Hanken Grotesk
  saíram do Google e foram para `/fonts/`, com `@font-face` embutido e
  `preload`. Como o Google entrega uma fonte variável por família, 3 arquivos de
  160 KB substituíram os 10 estáticos de 515 KB.
  Resultado medido: **desempenho no celular de 74 para 100 e LCP de 5,4s para 1,0s**.
- **71 descrições e 23 títulos reescritos** para caber no que o celular mostra.
  Antes, as 70 descrições do site eram cortadas no meio.
- **Trez Residence** ganhou o endereço no título e foi reescrito em cima da
  unidade que voltou para a construtora.
- **Matíz** ganhou o preço no título e um bloco sobre a janela de negociação.
- **`/plantao`**: página reeditável a cada fim de semana, com schema de Evento.
- 721 travessões removidos de 38 arquivos.

## v0.9.0 · 7 de agosto de 2026

- `/tambore-miranda` e `/ficha-tambore`, primeira frente de alto padrão.
- Post do Vila Osvaldo.

## v0.8.0 · 5 de agosto de 2026

- `/indique`, página do programa de indicação.
- Post do paper do primeiro imóvel em 2026.

## v0.7.0 · 4 de agosto de 2026

- Home integrada ao portal de imóveis renovado.
- Opção Studios: post hub e três posts dedicados.
- Aba de Notícias separada do blog.

## v0.6.0 · 23 e 30 de julho de 2026

- Matíz Residence, Jardim Mansour e o post do dia da assinatura com a Caixa.
- Correção de cache dos heros, com nomes de arquivo novos.
