(function () {
  // 動態插入 Botpress inject.js
  const injectScript = document.createElement('script');
  injectScript.src = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js';
  document.head.appendChild(injectScript);

  // 動態插入 bot 設定腳本
  const configScript = document.createElement('script');
  configScript.src = 'https://files.bpcontent.cloud/2026/03/20/01/20260320014645-ZVI72BHA.js';
  configScript.defer = true;
  document.head.appendChild(configScript);

  // 根據 pathname 決定頁面名稱
  const pathname = window.location.pathname;
  let currentPage;

  if (pathname.includes('/botpress-a.html')) {
    currentPage = 'Botpress A';
  } else if (pathname.includes('/botpress-b.html')) {
    currentPage = 'Botpress B';
  } else {
    currentPage = 'Botpress Home';
  }

  // 等 inject.js 載入後，監聽 ready 事件並傳送頁面資訊
  injectScript.addEventListener('load', function () {
    window.botpress.on('ready', function () {
      window.botpress.sendEvent({
        type: 'trigger',
        payload: { currentPage: currentPage }
      });
    });
  });
})();
