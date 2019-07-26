const lb = document.getElementById('lbinput');
const kg = document.getElementById('kgoutput');
const oz = document.getElementById('ozoutput');
const g = document.getElementById('goutput');
const cards = document.getElementById('cards');


cards.style.visibility = 'hidden';


lb.addEventListener('input', (e) => {
    cards.style.visibility = "visible";
    let pounds = e.target.value;
    kg.innerHTML = Math.round((pounds / 0.022046));
    oz.innerHTML = pounds * 16;
    g.innerHTML = Math.round((pounds * 453.592));
})