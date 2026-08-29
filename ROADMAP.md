# Roadmap do marcotulio.pro

O que ainda não existe no site e está na fila para ser construído, em ordem de
prioridade. Cada item tem o problema que resolve, o que precisa ser decidido
antes de começar e o que conta como pronto.

Diferente do `CHANGELOG.md`, que registra o que já entrou no ar, aqui fica só o
que está por vir. Quando um item é entregue, ele sai deste arquivo e vira uma
entrada no changelog.

Última revisão: 29 de agosto de 2026, depois da leitura dos últimos 12 meses
de Search Console.

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
| Tabela do Liberty Residence e as condições de recursos próprios, que a Barbosa Amorim solta no início de setembro | Publicar preço na página do Liberty, que hoje sai sem preço de propósito | Alta |
| Confirmação na Caixa do teto de Uberlândia (R$ 260 mil) e das regras de imóvel usado em 2026 | Fechar os números do cluster MCMV com fonte primária, hoje conferidos em fonte secundária e no Ministério das Cidades | Alta |

Resolvido desde a última revisão: preço do Matíz, horário do Feirão Canaã,
datas de publicação dos 3 vídeos, tabela do Bit 580, e a origem dos índices
para a calculadora de obras (INCC, IPCA, TR e Selic, todos pelo Banco Central).
Instagram e LinkedIn saíram da lista a pedido do Marco, em 19 de agosto:
seguram por enquanto.

---

## O que o Search Console diz (12 meses até 27/08/2026)

Números do relatório: **147 cliques, 4.941 impressões, CTR de 2,98%,
posição média 7,3**. Celular responde por 100 dos 147 cliques.

A evolução por período conta a história inteira:

| Período | Impressões por dia | Cliques | CTR | Posição média |
|---|---|---|---|---|
| 14 a 30 de junho | 31,8 | 25 | 4,6% | 6,6 |
| Julho | 58,8 | 50 | 2,7% | 7,4 |
| 1 a 14 de agosto | 90,3 | 40 | 3,2% | 6,6 |
| 15 a 27 de agosto | 101,1 | 32 | 2,4% | 7,9 |

**As impressões triplicaram em dois meses e os cliques não acompanharam.** O
site passou a aparecer muito mais e a ser clicado proporcionalmente menos. Isso
inverte a prioridade do roadmap: o gargalo deixou de ser produzir página nova e
passou a ser **fazer a página que já aparece ser clicada**.

### O padrão que funciona

Página de empreendimento com nome próprio tem o melhor CTR do site:

| Página | Cliques | Impressões | CTR |
|---|---|---|---|
| Solis Residence | 25 | 234 | 10,7% |
| Lançamento Opção | 11 | 114 | 9,7% |
| Feirão Torrano de junho | 6 | 52 | 11,5% |
| Gran Vic Essenza | 4 | 26 | 15,4% |
| Opção Studios Campus | 4 | 23 | 17,4% |

### O padrão que não funciona

Muita impressão e quase nenhum clique. Estas sete páginas somam **2.283
impressões e 12 cliques**, um CTR de 0,5%:

| Página | Impressões | Cliques | CTR |
|---|---|---|---|
| Trez Residence | 867 | 11 | 1,3% |
| Matíz Residence | 483 | 3 | 0,6% |
| Home | 327 | 3 | 0,9% |
| FipeZAP de julho | 177 | 0 | 0% |
| Morumbi MCMV | 163 | 2 | 1,2% |
| Comprar apartamento MCMV | 162 | 3 | 1,9% |
| Carro ou casa primeiro | 143 | 1 | 0,7% |

---

## P0 · Reescrever title e description das sete páginas de maior desperdício

O item de maior retorno do roadmap, e o mais barato. Não exige página nova,
nem dado do Marco, nem imagem.

### O diagnóstico, caso a caso

**Trez Residence** é o maior volume do site e o maior desperdício. As consultas
mostram por quê: "rua silhao 419" traz 130 impressões e zero clique, "rua
silhão 419" traz 65 e zero, "rua silhão 419 morumbi" traz 63 e um clique. São
**258 impressões procurando o endereço** e o title não responde ao endereço.
Quem digita a rua quer saber o que existe naquele número.

**Matíz Residence** repete o caso: "matiz residence" (158), "matiz residence
uberlandia" (65), "matriz residence" (14, com o erro de digitação que as
pessoas cometem) e "condominio matiz" (1). São 238 impressões e 2 cliques.

**FipeZAP de julho** tem 177 impressões e zero clique, e é conteúdo datado que
envelheceu. Ou ganha atualização mensal com data no title, ou sai do ar.

### O que fazer

- Reescrever `<title>` e `<meta name="description">` das sete, começando pelo
  Trez e pelo Matíz, colocando no title **o que a pessoa digitou**: endereço,
  bairro, preço, "o que existe hoje".
- Levar para o title os números que a página já tem, porque número em resultado
  de busca é o que ganha o clique de quem compara.
- Medir de novo em 30 dias, com o mesmo relatório, e comparar só o CTR dessas
  sete.

### Pronto quando

As sete reescritas, publicadas, e uma nova leitura do Search Console 30 dias
depois registrada aqui.

---

## P0 · As páginas de zona não ranqueiam para o termo da zona

Descoberto no mesmo relatório e é um problema estrutural, não de texto.

As consultas "uberlandia zona sul", "zona sul uberlandia" e "zona sul de
uberlandia" aparecem nas posições **53,2, 48,0 e 52,7**. O guia da zona sul
está na posição média 15,8 com 68 impressões. As outras três zonas somam 15
impressões: oeste 12, norte 2, leste 1.

Ou seja: existem quatro guias de região publicados e eles praticamente não
existem para o Google. Precisa entender se é falta de links internos, se as
quatro páginas competem entre si, ou se o conteúdo não responde ao que a
pessoa procura quando digita "zona sul uberlandia".

Investigar antes de reescrever. Não adianta mexer no texto se o problema é de
arquitetura.

---

## P1 · Investigar as consultas de polpa de fruta

O relatório traz "polpas de frutas", "polpa de fruta congelada", "polpa de
frutas congeladas", "polpa de fruta direto da fábrica", "polpas" e "polpa",
somando 12 impressões, todas em posição de 5 a 27. Também aparecem "corretora
náutica em uberlândia" e "corretora de barcos em uberlândia".

Nenhuma dessas buscas tem a ver com o site. Vale descobrir qual página o Google
está associando a elas e por quê. Pode ser texto residual, pode ser confusão do
buscador com a palavra "corretor". É pouco tráfego, mas é sinal de que o Google
ainda não entendeu com clareza do que o site trata, e isso atrapalha tudo.

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

## P1 · Páginas mestras de bairros e de construtoras

A mestra de zonas já está no ar em `/apartamentos`, reunindo os 42
empreendimentos nas quatro regiões. Faltam as outras duas camadas.

**Bairros.** Os guias de zona oeste, leste e norte já têm a seção "os bairros
da zona, um por um", com 18 bairros descritos. O da zona sul é o único sem
essa seção, então o primeiro passo é escrevê-la. Depois disso a mestra de
bairros é praticamente montagem: reunir os bairros das quatro zonas num índice
único, com quantos empreendimentos cada um tem e a faixa de preço.

Bairros já descritos: Jardim Holanda, Chácaras Tubalina e Quartel, Pequis,
Planalto, Mansour, Luizote de Freitas, Jardim Patrícia, Monte Hebron, Fruta do
Conde, Morumbi, Novo Mundo, Granja Marileusa, Alvorada, Tibery, Grand Ville,
Presidente Roosevelt, Flamboyant e Martins.

Falta descrever, da zona sul: Shopping Park, Gávea Sul, Jardim Sul, Jardim
Espanha, Jardim Espanha e Eco Park.

**Construtoras.** Vem depois de bairros, por decisão do Marco. O site já cita
mais de 20 construtoras espalhadas pelas páginas de empreendimento e pela
tabela de endereços. A mestra reuniria cada uma com os empreendimentos dela na
cidade, o que também resolve a busca por nome de construtora, que hoje cai em
página de empreendimento solto.

Guardrail que vale para as duas: página de bairro ou de construtora só existe
se tiver conteúdo próprio de verdade. Página que troca só o nome do bairro é
doorway e derruba o site inteiro.

---

## Entregue · Primeira peça do indexador (29/08/2026)

A primeira peça do indexador do Marco foi ao ar em
`/blog/apartamento-perto-de-supermercado-uberlandia`: distância de cada
empreendimento até a unidade mais próxima de Super Maxi, D'Ville e ABC,
calculada sobre coordenadas do OpenStreetMap, com método aberto na página.

O que ficou pronto e serve de base para as próximas peças:

- Rotina de geocodificação dos empreendimentos com trava de conferência
  (casamento do nome da rua e distância até o centroide do bairro), que
  descarta o que não passa em vez de publicar número duvidoso.
- Base de coordenadas de 18 lojas e de 24 empreendimentos.
- Padrão de página de indicador: método visível, fontes datadas e uma
  seção dizendo o que ficou de fora e por quê.

O que falta decidir com o Marco:

- Se o indexador vira rotina automática (recalcular e republicar sozinho)
  ou continua manual a cada rodada.
- Quais outros equipamentos entram: escola, unidade de saúde, ponto de
  ônibus, farmácia, parque.
- Se a distância entra como linha na ficha de cada empreendimento, além
  da página do indicador.
- Se ele resolve o problema recorrente de preço divergente entre páginas,
  que hoje é conferido na mão.

---

## P0 · Indexador do Marco (próximo)

O Marco está construindo um indexador e vai mandar o conteúdo dele para
integrar ao site. Confirmado por ele em 28/08/2026 como a próxima frente de
trabalho, e a de maior impacto.

Quando chegar, decidir com ele:

- O que o indexador indexa e com que frequência atualiza
- Se o conteúdo entra como página nova, como dado dentro das páginas que já
  existem, ou como fonte para manter as tabelas atualizadas sozinhas
- Se ele resolve o problema recorrente de preço divergente entre páginas, que
  hoje é conferido na mão
- Onde ele mora: dentro do marcotulio.pro, no subdomínio do simulador, ou fora

Enquanto o conteúdo não chega, não dá para especificar mais que isso.

---

## P1 · Reexecutar a análise de termos de busca

A campanha de agosto gerou 118 termos com demanda provada e virou três artigos.
O documento pede para refazer isso a cada 30 dias de veiculação: termo de
pesquisa novo é pauta nova com demanda já comprovada, e sai mais barato que
qualquer ferramenta de keyword.

Leitura de 29 de agosto feita, e está resumida na seção "O que o Search
Console diz", no topo. O cluster MCMV publicado em agosto ainda não aparece no
relatório dos 12 meses, porque é recente demais: as páginas de faixas, subsídio
e lista foram ao ar depois do corte.

Próxima leitura: fim de setembro. O que olhar, nesta ordem:

- **O CTR das sete páginas do P0**, comparado com o de agora. É a única métrica
  que diz se a reescrita de title funcionou.
- Se `faixa minha casa minha vida`, `subsidio minha casa minha vida` e
  `apartamento perto de supermercado uberlandia` passaram a aparecer.
- Se as páginas de zona saíram das posições 48 a 53 para os termos de zona.
- Termos que apareceram e não têm artigo, que é como nasceram as páginas de
  faixas e de subsídio.
- Se os artigos novos reduziram a dependência de mídia paga nessas dúvidas.

Guardar o xlsx de cada leitura, para poder comparar período a período em vez de
olhar só o número do momento.

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

- Cluster de conteúdo do MCMV a partir de dados reais de busca do Google Ads
  (campanha de 18 a 24 de agosto, 118 termos coletados, R$ 72,31 investidos).
  Três artigos novos, todos no formato de resposta direta: `/faixas`, com a
  maior lacuna do site (35 impressões e zero cliques), `/subsidio`, que teve o
  maior CTR da conta com 33%, e `/lista-mcmv`, que reposiciona quem procura
  sorteio sem humilhar ninguém
- Correção do teto do MCMV em Uberlândia: 26 ocorrências de R$ 275 mil viraram
  R$ 260 mil em 6 páginas. O teto das Faixas 1 e 2 varia por porte de município
  e R$ 275 mil é o número de região metropolitana, não o de Uberlândia
- `/blog/liberty-residence-monte-hebron-uberlandia`, o lançamento da Barbosa
  Amorim no Monte Hebron, publicado antes do lançamento e de propósito sem
  preço, porque a tabela só sai em setembro. Grafia do bairro conferida nos
  Correios e na Prefeitura: Monte Hebron com N, e a variante Hebrom entra
  como palavra-chave e no `alternateName` do schema
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
