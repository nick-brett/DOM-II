// Your code goes here

/*create 10 unique event listeners to make Fun Bus 
more interactive */

//mouseover
const funBus = document.querySelector('.logo-heading');
funBus.addEventListener('mouseover', event => {
    alert('All aboard the fun bus!');
});
//keydown
const homeBtn = document.querySelectorAll('.nav-link');
homeBtn.addEventListener('click', event => {
    homeBtn.style.color = "red";
});


//wheel

//drag / drop

//load

//focus

//resize

//scroll

//select

//dblclick