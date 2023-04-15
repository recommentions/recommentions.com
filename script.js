const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target)
      window.twttr.widgets.createTweet(
        entry.target.getAttribute('data-twitter-id'),
        entry.target,
        { theme: 'dark' }
      )
    }
  })
})
const elements = document.querySelectorAll('details blockquote[data-twitter-id]')

elements.forEach((element) => {
  observer.observe(element)
})
