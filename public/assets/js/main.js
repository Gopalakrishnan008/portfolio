const nav = document.querySelector('.nav-toggle');
const lines = document.querySelector('.main-items')
nav.addEventListener('click',()=>{
   lines.classList.toggle('display-block'); 
});
