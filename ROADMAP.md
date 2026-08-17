# Roadmap do marcotulio.pro

O que ainda não existe no site e está na fila para ser construído, em ordem de
prioridade. Cada item tem o problema que resolve, o que precisa ser decidido
antes de começar e o que conta como pronto.

Diferente do `CHANGELOG.md`, que registra o que já entrou no ar, aqui fica só o
que está por vir. Quando um item é entregue, ele sai deste arquivo e vira uma
entrada no changelog.

Última revisão: 17 de agosto de 2026.

---

## Bloqueado esperando dado do Marco

Nada aqui começa sem a informação da esquerda. É a fila mais curta de resolver
e a que mais destrava trabalho.

| Preciso de | Destrava | Urgência |
|---|---|---|
| Preço correto do Matíz, R$ 235 mil ou R$ 252 mil | Corrigir a divergência entre 3 páginas | Alta |
| Horário de encerramento do Feirão Canaã | Fechar o `endDate` do schema de evento | Alta |
| Data de publicação dos 3 vídeos no site | Schema `VideoObject` nas 3 páginas | Média |
| URLs dos posts de Instagram e LinkedIn | Blocos de embed com fachada | Média |
| Preços de Prime Clube, Reserva Costa do Sol, Park Jardim do Sol e Jardim Mansour | Resolver divergências antigas de tabela | Média |
| Tabela vigente do BIT, no Martins | Página do BIT | Média |
| Origem dos índices INCC e IPCA, e qual série o contrato usa | Calculadora de evolução de obras | Alta |

### A divergência do Matíz, em detalhe

Três páginas do site dizem coisas diferentes sobre o mesmo produto:

- `/blog/matiz-residence-uberlandia` diz **a partir de R$ 235 mil**, em título,
  descrição, H1, FAQ e schema.
- `/blog/apartamentos-zona-norte-uberlandia` e `/cabe-na-minha-renda` dizem
  **a partir de cerca de R$ 252 mil** para as unidades de 42 e 43 m² de dois
  quartos.

A hipótese é que os dois estejam certos para unidades diferentes, o R$ 235 mil
para uma tipologia de um dormitório ou de outra torre. Enquanto não confirmar,
nenhum dos dois muda, porque a regra é perguntar antes de mexer em preço
publicado.

Ficou mais urgente porque a página do Matíz agora tem um vídeo cujo título diz
"R$ 235 MIL". Se o número certo for outro, a contradição está visível em dois
lugares na mesma tela.

---

## P0 · Calculadora de evolução de obras

O item de maior prioridade e o único que cria uma rotina semanal de conteúdo.

### O problema

Quem compra na planta assina um contrato em que o saldo devedor é corrigido
mensalmente durante a obra. Na prática, a parcela que a pessoa combinou não é a
parcela que ela vai pagar daqui a um ano, e quase ninguém explica isso antes da
assinatura. O comprador descobre no boleto.

Hoje não existe, no site, nenhuma página que responda "quanto a minha parcela
vai subir até a entrega". A dúvida chega no WhatsApp toda semana.

### O que a página faz

Duas coisas, na mesma tela:

1. **Uma calculadora.** A pessoa informa o valor do contrato, o mês de
   assinatura, o mês previsto de entrega e o que já pagou. A calculadora projeta
   a correção do saldo devedor e das parcelas até a entrega.
2. **Um painel de índices atualizados.** INCC-DI e INCC-M da Fundação Getulio
   Vargas, que é o índice da fase de obra na maioria dos contratos, e IPCA do
   IBGE, usado em parte dos contratos e na fase pós-chaves. Variação do mês,
   acumulado em 12 meses e acumulado no ano, com a data da última divulgação
   visível.

### A rotina semanal, que é o ponto

Esta página nasce para ser fotografada. Toda segunda-feira o print do painel
vira story, com o link da página e o endereço do site na arte. É conteúdo que
se renova sozinho, não depende de lançamento novo e dá ao seguidor um motivo
real para sair do aplicativo e entrar no site.

Requisitos que isso impõe ao layout:

- O painel precisa caber inteiro em um enquadramento vertical de story, sem
  rolagem e sem corte. Um bloco desenhado para 1080x1350, com números grandes o
  suficiente para serem lidos no celular.
- O endereço `marcotulio.pro/obras` e o CRECI precisam estar dentro do próprio
  bloco, não só no rodapé da página, para sobreviverem ao recorte do print.
- A data da última atualização precisa estar visível no bloco. Story sem data
  vira story reciclado, e o seguidor percebe.

### O que precisa ser decidido antes de começar

- **De onde vêm os índices.** O IBGE tem API pública e estável para o IPCA. A
  FGV não tem API aberta equivalente para o INCC, então ele provavelmente entra
  por atualização manual mensal, com data e fonte declaradas na página. Isso
  muda a arquitetura: API significa página dinâmica, manual significa um JSON
  versionado no repositório.
- **Qual índice cada contrato usa.** INCC-DI e INCC-M não são a mesma série e
  os contratos das construtoras não usam todos o mesmo. A calculadora deve
  deixar o usuário escolher, com um texto explicando onde encontrar isso no
  contrato dele.
- **Onde a página fica.** Recomendação: `marcotulio.pro/obras`, no raiz, com
  redirecionamentos de `/incc`, `/evolucao-de-obras` e `/correcao-parcela`.

### Guardrails

- A projeção é estimativa, e isso precisa estar dito na tela, não escondido em
  rodapé. O índice futuro não é conhecido: a página deve declarar exatamente
  qual premissa está usando.
- Nenhum número de índice entra sem fonte e sem data de divulgação visíveis.
- Nada de dado de contrato de cliente. A calculadora roda no navegador e não
  guarda nem envia o que foi digitado.
- O texto precisa mandar a pessoa conferir a cláusula de reajuste do contrato
  dela. A página não substitui o contrato.

### Pronto quando

Calculadora funcionando com INCC-DI, INCC-M e IPCA, painel com data e fonte,
bloco desenhado para print de story com URL e CRECI embutidos, schema
`WebApplication` e `BreadcrumbList`, FAQ visível casada com o JSON-LD,
redirecionamentos, entrada no sitemap e link a partir da home, do
`/cabe-na-minha-renda` e dos artigos de financiamento.

---

## P0 · Fonte única da agenda semanal

Descoberto na marra em 16 de agosto: o card do plantão na home ficou uma semana
anunciando a ação anterior, no endereço errado, porque `/plantao` e `index.html`
são dois arquivos independentes e só um foi atualizado.

O `/plantao` é a página de maior prioridade do sitemap e a agenda muda toda
semana. Errar ali manda gente para o lugar errado num sábado.

Duas saídas possíveis:

1. **Checklist de publicação da agenda**, um arquivo curto listando os pontos
   que precisam mudar juntos: `plantao.html`, o card `#hub` da home, os dois
   schemas de `Event`, o hero, o og e a data no rodapé. Barato e imediato.
2. **Fonte única**, um JSON da semana lido pelas duas páginas na hora de gerar.
   Mais robusto, exige script de build.

Recomendação: começar pelo checklist esta semana, porque ele resolve o risco
hoje. A fonte única entra depois, junto com o próximo item que precisar de
build.

---

## P1 · Página do BIT, no Martins

Primeiro produto fora do espectro econômico, na região central norte. Depende
da tabela vigente.

Ângulo proposto: investidor e locação, não primeiro imóvel, porque o perfil de
busca do Martins é diferente do resto da carteira.

Pendente de decisão: publicar como página de empreendimento ou como comparativo
com o Matíz, já que os dois disputam o mesmo comprador na região norte.

---

## P1 · Casa ou apartamento, o comparativo

Cluster que ainda não existe e que aproveita conteúdo já publicado sobre casas
da Pacaembu, casa no terreno próprio e os condomínios de casa da zona oeste.
A busca por "casa ou apartamento" é constante e hoje o site não responde.

---

## P1 · Propriedade do simulador no Search Console

O simulador vive em `simulador.marcotulio.pro` e não tem propriedade própria no
Search Console, então o tráfego dele é invisível. Todo CTA de número do site
aponta para lá, ou seja, o destino final da jornada é justamente o que ninguém
mede.

Recomendação: criar como propriedade de prefixo de URL,
`https://simulador.marcotulio.pro/`, e não como domínio, para separar limpo do
site principal.

---

## P1 · Sitemap segmentado

Um sitemap único com 82 URLs mistura páginas, artigos, empreendimentos e guias
de região, e isso dificulta ler a cobertura por tipo no Search Console.
Segmentar em `sitemap-paginas.xml`, `sitemap-artigos.xml`,
`sitemap-empreendimentos.xml` e `sitemap-regioes.xml`, com um índice.

---

## P1 · Embeds de Instagram e LinkedIn

O componente de fachada já existe e está rodando nas três páginas com vídeo.
Falta só apontar para os posts.

O padrão é o mesmo: capa local em WebP, botão de play em CSS, e o iframe do
terceiro só entra depois do clique. Embed cru de Instagram pesa de 800 KB a
1 MB por post e derrubaria o desempenho móvel que hoje está em 100.

Critério de escolha do post: só entra o que **prova** alguma coisa, como
entrega de chave, plantão cheio, antes e depois de obra. Carrossel de feed
genérico é enfeite e não vale o peso.

O X fica de fora por enquanto. O widget é o mais frágil dos três e o perfil
ainda tem pouca atividade.

---

## P2 · Radar imobiliário de Uberlândia

Página de mercado atualizada periodicamente, com FipeZap, lançamentos do
trimestre e leitura própria. Só faz sentido depois que a calculadora de obras
estabelecer a rotina de atualização, porque é o mesmo tipo de compromisso
recorrente.

---

## P2 · Banco de imóveis estruturado

Estrutura de dados com `verifiedAt` por empreendimento, para que preço,
disponibilidade e prazo tenham data de verificação rastreável, e a partir dela o
cruzamento automático entre simulação e imóvel compatível.

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
- **Embed cru de rede social.** Sempre com fachada de clique. Nunca o script do
  terceiro carregando junto com a página.
- **Link visível para o X.** Fica só no `sameAs` enquanto o perfil tiver pouca
  atividade. Mandar visitante para um perfil vazio enfraquece mais do que
  ajuda.

---

## Entregue recentemente

Sai daqui quando virar entrada no changelog.

- `/cabe-na-minha-renda`, com as seis faixas e os 29 empreendimentos
- Guias das quatro zonas da cidade
- Comparação Gran Toro e Bella Vita
- Redes sociais visíveis com ícone nas 84 páginas
- `/links`, página de bio, `noindex` e `follow`
- CNPJ no rodapé e como `taxID` no schema
- Vídeos do canal com fachada de clique em 3 páginas
- Correção do card do plantão na home
