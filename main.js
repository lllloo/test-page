;(function () {
  if (!window.chatbase || window.chatbase('getState') !== 'initialized') {
    window.chatbase = (...arguments) => {
      if (!window.chatbase.q) {
        window.chatbase.q = []
      }
      window.chatbase.q.push(arguments)
    }
    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === 'q') {
          return target.q
        }
        return (...args) => target(prop, ...args)
      },
    })
  }
  const onLoad = function () {
    const script = document.createElement('script')
    script.src = 'https://www.chatbase.co/embed.min.js'
    script.id = 'j9Lh2F3IAy8j9DoOjdRZx'
    script.domain = 'www.chatbase.co'
    document.body.appendChild(script)
  }
  if (document.readyState === 'complete') {
    onLoad()
  } else {
    window.addEventListener('load', onLoad)
  }

  // Based on current page
  const currentPage = window.location.pathname;
  let messages = [];
  let pageName = '';

  if (currentPage.includes('/chatbase-a.html')) {
    messages = [
      "這是在A頁面上的訊息。",
    ];
    pageName = 'Chatbase A 頁面';
  } else if (currentPage.includes('/chatbase-b.html')) {
    messages = [
      "這是在B頁面上的訊息。",
    ];
    pageName = 'Chatbase B 頁面';
  } else {
    messages = [
      "這是在首頁上的訊息。",
    ];
    pageName = '首頁';
  }

  window.chatbase.setInitialMessages(messages);

  window.chatbase("identify", {
    user_id: "visitor",
    user_metadata: `用戶目前在：${pageName}。頁面網址：${window.location.href}。頁面標題：${document.title}`
  });

})()
