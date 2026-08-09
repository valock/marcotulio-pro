# marcotulio.pro

Site de um corretor de imóveis de Uberlândia, construído e mantido por ele
mesmo, com ajuda de IA.

**No ar:** [marcotulio.pro](https://marcotulio.pro)

Sou o **Marco Túlio Andrade Freitas**, corretor parceiro da Torrano Negócios
Imobiliários, CRECI/MG nº 7469. Antes de vender apartamento me formei em
**Administração pela FAGEN/UFU** e em **Gestão da Informação, também na UFU**.

Este repositório é o site inteiro. Não tem parte escondida.

---

## A ideia

O mercado imobiliário de Uberlândia é cheio de anúncio e pobre de informação.
A maioria dos sites de corretor fala em "realizar o sonho da casa própria" e
não diz o endereço da obra, o preço real nem quanto de renda a Caixa exige.

Aqui é o contrário. Cada empreendimento tem rua, número, metragem, planta,
preço e o que pesa contra comprar. Quando a informação é ruim para a venda,
ela entra do mesmo jeito.

Hoje são cerca de **105 mil palavras em 74 páginas**.

## O que tem aqui

| | |
|---|---|
| **Guias de empreendimento** | Um por prédio, com endereço, planta, preço e condições |
| **Guias de bairro** | Morumbi, Granja Marileusa, Jardim Holanda, zona sul e outros |
| **Conteúdo sobre financiamento** | MCMV, FGTS, Cheque Moradia, documentação, score |
| **[/uberlandia-tech](https://marcotulio.pro/uberlandia-tech)** | Seção separada sobre IA, infraestrutura e o efeito da tecnologia no território |
| **[/plantao](https://marcotulio.pro/plantao)** | Página reeditável dos plantões de cadastro do MCMV na rua |
| **[/indique](https://marcotulio.pro/indique)** | Programa de indicação com bonificação por venda |
| **[/ficha-tambore](https://marcotulio.pro/ficha-tambore)** | Gera ficha cadastral preenchida em PDF, direto no navegador |

## Como é feito

HTML e CSS escritos à mão, sem framework e sem etapa de build. O deploy é a
própria pasta.

- **Hospedagem:** Netlify, com deploy automático a cada merge na `main`
- **Fontes:** Bricolage Grotesque e Hanken Grotesk, hospedadas no próprio
  domínio em `/fonts/`, com `@font-face` embutido e `preload`
- **Dados estruturados:** JSON-LD em todas as páginas (Article, FAQPage,
  BreadcrumbList, Event, RealEstateAgent)
- **Sem dependências:** nenhum `package.json`. As duas únicas bibliotecas de
  terceiros estão em `vendor/` e servem só ao gerador de ficha em PDF

### Desempenho

O site foi de **74 para 100** no PageSpeed do celular em agosto de 2026,
depois que as fontes saíram do Google e passaram a ser servidas do próprio
domínio.

| | antes | depois |
|---|---|---|
| Desempenho (celular) | 74 | **100** |
| LCP | 5,4s | **1,0s** |
| TBT | 140ms | **10ms** |
| CLS | 0 | 0 |

## Estrutura

```
.
├── index.html              home
├── blog/                   guias de empreendimento, bairro e financiamento
│   └── article.css         folha de estilo compartilhada
├── tech/                   seção Uberlândia Tech
├── fonts/                  woff2 próprios (3 arquivos, 160 KB)
├── img/  ·  blog/images/   imagens
├── vendor/                 html2canvas 1.4.1 e jsPDF 2.5.1
├── _redirects              atalhos curtos (/matiz, /trez, /plantao...)
├── netlify.toml            cabeçalhos e cache
├── sitemap.xml
└── CHANGELOG.md            histórico datado das versões
```

## Versões

Cada mudança relevante vira uma tag. O [CHANGELOG.md](CHANGELOG.md) tem o
histórico com data.

Isso existe por um motivo prático: quando o Search Console mostra uma subida
ou uma queda, dá para voltar e ver o que foi publicado naquela semana.

## Rodando localmente

Não precisa instalar nada.

```bash
git clone https://github.com/valock/marcotulio-pro.git
cd marcotulio-pro
python3 -m http.server 8000
```

Abre `http://localhost:8000`.

Um aviso: as páginas usam caminhos absolutos (`/blog/article.css`), então
abrir o arquivo direto com `file://` quebra o estilo. Precisa do servidor.

## Direitos

O **código** (HTML, CSS e JavaScript) pode ser lido, estudado e reaproveitado
à vontade. Se algo aqui te ajudar a construir o seu, ótimo.

O **conteúdo editorial** é outra coisa. Os textos, guias, análises, fotos e
dados de empreendimento são de autoria de Marco Túlio Andrade Freitas e estão
protegidos pela Lei 9.610/98. Foram meses de visita a obra, conversa com
construtora e conferência de tabela. Não copie, não reescreva com IA e não
republique sem autorização.

Quer usar alguma parte? Chama no WhatsApp e a gente conversa. Costumo dizer sim.

## Contato

Marco Túlio Andrade Freitas · CRECI/MG nº 7469
[WhatsApp](https://wa.me/5534996778075) · [marcotulio.pro](https://marcotulio.pro)
Uberlândia, Minas Gerais
