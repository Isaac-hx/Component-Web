const close = document.getElementsByClassName('close');
const container = document.getElementsByClassName('card-container')
close[0].addEventListener('click',function(){container[0].classList.toggle('closed')})