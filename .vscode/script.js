// function toggleMode() {
//   const html = document.documentElement

//   if(html.classList.contains('light'))
//    {
//     html.classList.remove('ligth')
//   }
//   else{
//     html.classList.add('ligth')}
//   }
// function toggleMode() {
//   const body = document.body
//   body.classList.toggle("tema")
// }

    // function toggleTheme() {
    //   const body = document.body;
    //   body.classList.toggle('dark-theme');

    //   const chk = document.getElementById('chk');
    //   chk.checked = !chk.checked; // Inverte o estado do checkbox
    // }

  const chk = document.getElementById('chk')

  chk.addEventListener('change', () => {
    document.body.classList.toggle('tema')
  })