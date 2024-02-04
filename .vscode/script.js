function toggleMode() {
  const html = document.documentElement

  if(html.classList.contains('light')) {
    html.classList.remove('ligth')
  } else{
    html.classList.add('ligth')
  }
