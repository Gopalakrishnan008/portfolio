const btnEl = document.getElementById('mobileNavBtn');
    const listEl = document.getElementById('mobileNav');
    btnEl.addEventListener('click', () => {
      listEl.classList.toggle('toggle')
    });
    const sendmsgEl =document.getElementById("sendmsg");
    sendmsgEl.addEventListener('click',() => {
      alert("Message Send Succesfully");
    });