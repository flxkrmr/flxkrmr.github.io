function scrollToElement(elementId) {
  u(document.getElementById(elementId)).scroll();
}

u('.scroll-to-news').on('click', function (e) {
  scrollToElement('news-container')
})

u('.scroll-to-info').on('click', function (e) {
  scrollToElement('info-container')
})

u('.scroll-to-live').on('click', function (e) {
  scrollToElement('live-container')
})

u('.scroll-to-merch').on('click', function (e) {
  scrollToElement('merch-container')
})
