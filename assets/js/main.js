const btnEl = document.getElementById('mobileNavBtn');
const listEl = document.getElementById('mobileNav');

btnEl.addEventListener('click',()=>{
    listEl.classList.toggle('toggle')
})