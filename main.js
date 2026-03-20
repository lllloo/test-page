;(function () {
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
