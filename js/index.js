// Your code goes here

/*create 10 unique event listeners to make Fun Bus 
more interactive */

//mouseover
const funBus = document.querySelector('.logo-heading');
funBus.addEventListener('mouseover', event => {
    alert('All aboard the fun bus!');
});

//keydown
//changes home button to red
const homeBtn = document.querySelector('a');
homeBtn.addEventListener('click', event => {
    homeBtn.style.color = "red";
});

//wheel

const topbtns = document.querySelector('a');
topbtns.addEventListener("mousewheel", event => {
    topbtns.style.color = "grey";
    // append to list?
});

//drag / drop

//load

//focus
const signUp = document.querySelector('.destination .btn');
signUp.addEventListener('click', event => {
    alert('Get ready!');
});
//resize

//scroll

//select

//dblclick
const vacation = document.querySelector('.lastpic');
vacation.addEventListener('dblclick', event => {
    alert('You could be here');
});