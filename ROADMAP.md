# Roadmap do marcotulio.pro

O que ainda não existe no site e está na fila para ser construído, em ordem de
prioridade. Cada item tem o problema que resolve, o que precisa ser decidido
antes de começar e o que conta como pronto.

Diferente do `CHANGELOG.md`, que registra o que já entrou no ar, aqui fica só o
que está por vir. Quando um item é entregue, ele sai deste arquivo e vira uma
entrada no changelog.

Última revisão: 16 de agosto de 2026.

---

## P0 · Calculadora de evolução de obras

O item de maior prioridade e o único que cria uma rotina semanal de conteúdo.

### O problema

Quem compra na planta assina um contrato em que o saldo devedor é corrigido
mensalmente durante a obra. Na prática, a parcela que a pessoa combinou não é
a parcela que ela vai pagar daqui a um ano, e quase ninguém explica isso antes
da assinatura. O comprador descobre no boleto.

Hoje não existe, no site, nenhuma página que responda "quanto a minha parcela
vai subir até a entrega". A dúvida chega no WhatsApp toda semana.

### O que a página faz

Duas coisas, na mesma tela:

1. **Uma calculadora.** A pessoa informa o valor do contrato, o mês de
   assinatura, o mês previsto de entrega e o que já pagou. A calculadora
   projeta a correção do saldo devedor e das parcelas até a entrega, usando o
   índice do contrato.
2. **Um painel de índices atualizados.** INCC-DI e INCC-M da Fundação Getulio
   Vargas, que é o índice usado na fase de obra da maioria dos contratos, e
   IPCA do IBGE, usado em parte dos contratos e na fase pós-chaves. Variação do
   mês, acumulado em 12 meses e acumulado no ano, com a data da última
   divulgação visível.

### A rotina semanal, que é o ponto

Esta página nasce para ser fotografada. Toda segunda-feira o print do painel de
índices vira story, com o link da página e o endereço do site na arte. É
conteúdo que se renova sozinho, não depende de lançamento novo e reforça as
duas coisas que o Instagram precisa: constância e um motivo real para o
seguidor sair do app e entrar no site.

Requisitos que isso impõe ao layout:

- O painel de índices precisa caber inteiro em um enquadramento vertical de
  story, sem rolagem e sem corte. Um bloco desenhado para 1080x1350, com os
  números grandes o suficiente para serem lidos no celular.
- O endereço `marcotulio.pro/obras` e o CRECI precisam estar dentro do próprio
  bloco, não só no rodapé da página, para sobreviverem ao recorte do print.
- A data da última atualização precisa estar visível no bloco. Story sem data
  vira story reciclado, e o seguidor percebe.

### O que precisa ser decidido antes de começar

- **De onde vêm os índices.** O INCC é publicado pelo IBRE/FGV e o IPCA pelo
  IBGE (SIDRA, série 1737). O IBGE tem API pública e estável. A FGV não tem API
  aberta equivalente, então o INCC provavelmente entra por atualização manual
  mensal, com data e fonte declaradas na página. Isso precisa estar decidido
  antes, porque muda a arquitetura: API significa página dinâmica, manual
  significa um JSON versionado no repositório.
- **Qual índice cada contrato usa.** INCC-DI e INCC-M não são a mesma série e
  os contratos das construtoras não usam todos o mesmo. A calculadora deve
  deixar o usuário escolher, com um texto explicando onde encontrar isso no
  contrato dele.
- **Onde a página fica.** Recomendação: `marcotulio.pro/obras`, no raiz, com
  redirecionamentos de `/incc`, `/evolucao-de-obras` e `/correcao-parcela`.
  Ela é ferramenta e conteúdo recorrente, não é artigo de blog.

### Guardrails

- A projeção é estimativa, e isso precisa estar dito na tela, não escondido em
  rodapé. O índice futuro não é conhecido: a projeção usa o comportamento
  passado como referência, e a página deve dizer exatamente qual premissa está
  usando.
- Nenhum número de índice entra sem fonte e sem data de divulgação visíveis.
- Nada de dado de contrato de cliente na página. A calculadora roda no
  navegador e não guarda nem envia o que foi digitado.
- A página não substitui o contrato. O texto precisa mandar a pessoa conferir a
  cláusula de reajuste do contrato dela.

### Pronto quando

Calculadora funcionando com INCC-DI, INCC-M e IPCA, painel de índices com data
e fonte, bloco desenhado para print de story com URL e CRECI embutidos, schema
`WebApplication` + `BreadcrumbList`, FAQ visível e casada com o JSON-LD,
redirecionamentos criados, entrada no sitemap e link a partir da home, do
`/cabe-na-minha-renda` e dos artigos de financiamento.

---

## P1 · Página do BIT, no Martins

Primeiro produto fora do espectro econômico, na região central norte. Depende
da tabela vigente, que o Marco fornece. Ângulo proposto: investidor e locação,
não primeiro imóvel, porque o perfil de busca do Martins é diferente do resto
da carteira.

Pendente de decisão: publicar como página de empreendimento ou como comparativo
com o Matíz, já que os dois disputam o mesmo comprador na região norte.

---

## P1 · Casa ou apartamento, o comparativo

Cluster que ainda não existe e que aproveita conteúdo já publicado sobre casas
da Pacaembu, casa no terreno próprio e os condomínios de casa da zona oeste.
A busca por "casa ou apartamento" é constante e hoje o site não responde.

---

## P1 · Propriedade do simulador no Search Console

O simulador vive em `simulador.marcotulio.pro` e hoje não tem propriedade
própria no Search Console, então o tráfego dele é invisível. Recomendação:
criar como propriedade de prefixo de URL, `https://simulador.marcotulio.pro/`,
e não como domínio, para separar limpo do site principal.

---

## P1 · Sitemap segmentado

Um sitemap único com mais de 80 URLs mistura páginas, artigos, empreendimentos
e guias de região, e isso dificulta ler a cobertura por tipo no Search Console.
Segmentar em `sitemap-paginas.xml`, `sitemap-artigos.xml`,
`sitemap-empreendimentos.xml` e `sitemap-regioes.xml`, com um índice.

---

## P2 · Radar imobiliário de Uberlândia

Página de mercado atualizada periodicamente, com FipeZap, lançamentos do
trimestre e leitura própria. Só faz sentido depois que a calculadora de obras
estabelecer a rotina de atualização, porque é o mesmo tipo de compromisso
recorrente.

---

## P2 · Banco de imóveis estruturado

Estrutura de dados com `verifiedAt` por empreendimento, para que preço,
disponibilidade e prazo tenham data de verificação rastreável, e a partir dela
o cruzamento automático entre simulação e imóvel compatível.

Depende de inventário verificado que o Marco precisa fornecer. Não começa antes
disso, porque a alternativa seria inventar dado.

---

## Fora do escopo, por decisão

- **Simulador no marcotulio.pro.** O simulador é o `simulador.marcotulio.pro`.
  As URLs `/simulador`, `/simular` e `/simulador-financiamento` continuam
  retornando 404 de propósito, para não competir com ele. Toda página que
  precisa de número manda para lá.
- **Hubs `/construtoras/` e `/bairros/`.** Os guias de região já cumprem o papel
  de hub de bairro, e o comportamento de busca mostra que o clique vem pelo nome
  do empreendimento, não pelo nome da construtora. Criar os dois hubs geraria
  páginas rasas competindo com as que já rankeiam.
- **Páginas por valor de renda.** Uma página para cada valor ("apartamento com
  renda de 2 mil", "com renda de 3 mil") seria doorway page. O tratamento certo
  é o que está em `/cabe-na-minha-renda`: uma página, com uma seção ancorada
  para cada faixa.
