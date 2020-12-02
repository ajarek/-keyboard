const alfabet = document.querySelectorAll('div[data]');
const ekran = document.querySelector('#tekst');
const parent = document.querySelector('.parent')
const shift = document.getElementById('div48')
let napis = []
alfabet.forEach(element => {
   element.addEventListener('click', (e) => {
      litera = e.target.textContent;

      if (litera === 'SP') {
         litera = " ";
         napis.push(litera);
      }
      if (litera === 'BS') {
         napis.pop(litera);
      } else {
         napis.push(litera);
      }
      ekran.innerHTML = napis.join("");

   })
})
shift.addEventListener('click', () => {
   if (ekran.style.textTransform === 'uppercase') {
      ekran.style.textTransform = 'lowercase'
   } else {
      ekran.style.textTransform = 'uppercase'
   }
})