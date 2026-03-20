window.botpress.on('webchat:initialized', () => {
  window.botpress.updateUser({
    data: {
      currentPage: document.title,
      pageUrl: window.location.href,
      pagePath: window.location.pathname
    }
  })
})
