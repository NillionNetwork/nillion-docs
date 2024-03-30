if (window.location.hostname !== 'localhost') {
  var _paq = _paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function () {
    console.log('temporary log - piwik running');
    var u = 'https://nillion.piwik.pro/';
    _paq.push(['setTrackerUrl', u + 'ppms.php']);
    _paq.push(['setSiteId', '423a0a7c-c574-4a4a-9753-7cfbcac1b45d']);
    var d = document,
      g = d.createElement('script'),
      s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript';
    g.async = true;
    g.defer = true;
    g.src = u + 'ppms.js';
    s.parentNode.insertBefore(g, s);
  })();
}
