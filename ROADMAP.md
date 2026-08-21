# Roadmap do marcotulio.pro

O que ainda não existe no site e está na fila para ser construído, em ordem de
prioridade. Cada item tem o problema que resolve, o que precisa ser decidido
antes de começar e o que conta como pronto.

Diferente do `CHANGELOG.md`, que registra o que já entrou no ar, aqui fica só o
que está por vir. Quando um item é entregue, ele sai deste arquivo e vira uma
entrada no changelog.

Última revisão: 20 de agosto de 2026.

---

## Bloqueado esperando dado do Marco

Nada aqui começa sem a informação da esquerda. É a fila mais curta de resolver
e a que mais destrava trabalho.

| Preciso de | Destrava | Urgência |
|---|---|---|
| Preços de Prime Clube, Reserva Costa do Sol, Park Jardim do Sol e Jardim Mansour | Resolver divergências antigas de tabela | Média |
| Qual índice cada construtora usa no contrato, INCC-DI ou INCC-M | Calculadora de evolução de obras | Alta |
| Tabela de preço vigente do Sabará e lista de itens de lazer do condomínio, direto com a Pacaembu | Post grande do Moradas do Horizonte | Média |
| Tabela oficial, data de lançamento e plantas do Gran Vic Essenza, quando a VIC divulgar | Trocar as condições preliminares da página pelos dados oficiais | Alta |

Resolvido desde a última revisão: preço do Matíz, horário do Feirão Canaã,
datas de publicação dos 3 vídeos, tabela do Bit 580, e a origem dos índices
para a calculadora de obras (INCC, IPCA, TR e Selic, todos pelo Banco Central).
Instagram e LinkedIn saíram da lista a pedido do Marco, em 19 de agosto:
seguram por enquanto.

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
2. **Um painel de índices atualizados.** INCC-DI, IPCA, TR e a Selic meta,
   todos pelo SGS do Banco Central, que serve as quatro séries pela mesma API
   pública, sem chave: INCC-DI é a série 192, IPCA é a 433, TR é a 226 e a
   Selic meta é a 432. Variação do mês, acumulado em 12 meses e acumulado no
   ano, com a data da última divulgação visível.

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

### O que ainda falta decidir

- **INCC-DI ou INCC-M por contrato.** As duas séries existem e não são iguais;
  os contratos das construtoras não usam todas a mesma. Confirmado que o
  contrato do Bit 580 usa INCC-DI. Falta confirmar os demais. A calculadora
  deve deixar o usuário escolher, com um texto explicando onde encontrar isso
  no contrato dele.
- **Arquitetura de atualização.** Com os quatro índices vindo do SGS do Banco
  Central por API pública, a atualização pode ser feita no build, buscando as
  quatro séries e gravando um JSON versionado no repositório, sem depender de
  digitação manual mensal.
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

Calculadora funcionando com INCC-DI, IPCA, TR e Selic, painel com data e fonte,
bloco desenhado para print de story com URL e CRECI embutidos, schema
`WebApplication` e `BreadcrumbList`, FAQ visível casada com o JSON-LD,
redirecionamentos, entrada no sitemap e link a partir da home, do
`/cabe-na-minha-renda` e dos artigos de financiamento.

---

## P0 · Fonte única da agenda semanal

Descoberto na marra em 16 de agosto: o card do plantão na home ficou uma semana
anunciando a ação anterior, no endereço errado, porque `/plantao` e `index.html`
são dois arquivos independentes e só um foi atualizado. Já corrigido daquela
vez, mas o risco estrutural continua: nada impede o mesmo erro na próxima
agenda.

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

## P1 · Post grande sobre o Moradas do Horizonte, os dois condomínios

Já existe `/blog/moradas-do-horizonte-sabara-uberlandia`, publicada em 18 de
julho, cobrindo a segunda fase, o Sabará, e citando o Ouro Preto (primeira
fase, 100% vendida) como prova de demanda. O que falta é o post grande que o
Marco pediu em 19 de agosto: uma peça central que trata o Moradas do Horizonte
como o que ele é, um empreendimento de duas fases lançadas pela Pacaembu
Construtora, não dois lançamentos avulsos.

Fatos confirmados pelo Marco para este post, que ainda não estão explícitos na
página atual:

- São **2 condomínios já lançados**, Ouro Preto e Sabará, ambos da Pacaembu.
- Ficam **no fim do EcoPark**, zona sul. A página atual já fala da região do
  EcoPark de forma geral; falta a localização mais específica dentro dela.
- Casas **isoladas no próprio lote**, não geminadas. Isso já está dito no
  Sabará ("casa térrea... não geminada"), mas precisa aparecer com o mesmo peso
  no post grande, porque é um diferencial real frente aos condomínios de casa
  geminada que dominam a zona oeste.
- **Lazer completo** dentro do condomínio. A página do Sabará ainda não detalha
  a lista de itens de lazer, célula que precisa ser preenchida com o material
  da construtora antes de publicar.

O que o post grande faz que a página atual não faz:

- Trata os dois condomínios lado a lado, com o que cada um tem de disponível
  hoje (o Ouro Preto esgotado vira prova social, não é o produto à venda).
- Detalha o lazer completo do condomínio, com lista conferida no material da
  Pacaembu, não em termos genéricos.
- Fecha a localização exata dentro do EcoPark, com mapa.
- Linka com o cluster de casas Pacaembu já publicado e com o Gran Vic Essenza,
  que é o outro lançamento grande da mesma região.

Falta receber da Pacaembu, antes de escrever: tabela de preço vigente do
Sabará (a página atual não publica preço), lista de itens de lazer do
condomínio, e confirmação se o Ouro Preto tem alguma unidade em revenda que
valha mencionar.

---

## P1 · Casa ou apartamento, o comparativo

Cluster que ainda não existe e que aproveita conteúdo já publicado sobre casas
da Pacaembu, casa no terreno próprio, os condomínios de casa da zona oeste e,
depois de escrito, o post grande do Moradas do Horizonte. A busca por "casa ou
apartamento" é constante e hoje o site não responde.

---

## P1 · Propriedade do simulador no Search Console

O simulador vive em `simulador.marcotulio.pro` e não tem propriedade própria no
Search Console, então o tráfego dele é invisível. Todo CTA de número do site
aponta para lá, ou seja, o destino final da jornada é justamente o que ninguém
mede. Ficou mais urgente com a campanha paga rodando: o site principal está
ligado ao Analytics, mas o subdomínio de destino final não tem propriedade
própria.

Recomendação: criar como propriedade de prefixo de URL,
`https://simulador.marcotulio.pro/`, e não como domínio, para separar limpo do
site principal.

---

## P1 · Sitemap segmentado

Um sitemap único com 84 URLs mistura páginas, artigos, empreendimentos e guias
de região, e isso dificulta ler a cobertura por tipo no Search Console.
Segmentar em `sitemap-paginas.xml`, `sitemap-artigos.xml`,
`sitemap-empreendimentos.xml` e `sitemap-regioes.xml`, com um índice.

---

## P2 · Embeds de Instagram e LinkedIn

Em espera a pedido do Marco desde 19 de agosto. O componente de fachada já
existe e está rodando nas três páginas com vídeo do YouTube; quando retomar,
basta apontar para os posts certos.

O padrão é o mesmo usado nos vídeos: capa local em WebP, botão de play em CSS,
e o iframe do terceiro só entra depois do clique. Embed cru de Instagram pesa
de 800 KB a 1 MB por post e derrubaria o desempenho móvel que hoje está em 100.

Critério de escolha do post, para quando voltar: só entra o que **prova**
alguma coisa, como entrega de chave, plantão cheio, antes e depois de obra.
Carrossel de feed genérico é enfeite e não vale o peso.

O X fica de fora do embed por enquanto. O widget é o mais frágil dos três e o
perfil ainda tem pouca atividade.

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

- `/blog/gran-vic-essenza-uberlandia`, com o nome oficial do lançamento da VIC,
  a ficha preliminar completa e as condições de pré-lançamento marcadas como
  preliminares. A URL antiga `/blog/gran-vic-uberlandia` virou 301 para ela,
  em vez de virar uma segunda página competindo pelo mesmo termo
- `/cabe-na-minha-renda`, com as seis faixas e os 29 empreendimentos
- Guias das quatro zonas da cidade
- Comparação Gran Toro e Bella Vita, incluindo a correção das construtoras
  (Marca Registrada e Urbani, não Vitta e Pacaembu)
- Página do Bit 580, no Martins, primeiro produto fora do econômico
- Divergência de preço do Matíz resolvida (R$ 235 mil confere, com a tipologia
  certa em cada página)
- Horário do Feirão Canaã fechado no schema de evento
- `VideoObject` nos 3 vídeos embutidos no blog
- `/privacidade`, com os prazos reais de retenção do Analytics
- Link do simulador nos 11 artigos do cluster de financiamento que não tinham
- FAQPage sincronizado com o texto visível em 11 páginas
- Redes sociais visíveis com ícone nas 85 páginas
- `/links`, página de bio, `noindex` e `follow`
- CNPJ no rodapé e como `taxID` no schema
- Correção do card do plantão na home
