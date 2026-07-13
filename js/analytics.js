/* Google Analytics 4 + rastreamento de clique no WhatsApp — marcotulio.pro */
(function () {
  var ID = 'G-HHXMC3T24V';
  var g = document.createElement('script');
  g.async = true;
  g.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
  document.head.appendChild(g);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', ID);

  // Clique no WhatsApp = evento de conversão, com a posição do botão
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href*="wa.me"], a[href*="api.whatsapp"]') : null;
    if (!a) return;
    var pos = 'outro';
    if (a.closest('.art-cta')) pos = 'cta_final';
    else if (a.closest('.wa-float')) pos = 'botao_flutuante';
    else if (a.closest('.midcta')) pos = 'cta_meio';
    else if (a.closest('.leadbox') || a.classList.contains('wa-inline')) pos = 'lista_espera';
    else if (a.closest('header.nav') || a.closest('.nav')) pos = 'menu';
    else if (a.closest('footer')) pos = 'rodape';
    else if (a.closest('.prose')) pos = 'texto';
    gtag('event', 'contato_whatsapp', { posicao: pos, pagina: location.pathname });
  }, true);

  // Clique no simulador também é sinal de intenção
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href*="simulador.marcotulio.pro"]') : null;
    if (!a) return;
    gtag('event', 'abrir_simulador', { pagina: location.pathname });
  }, true);
})();
