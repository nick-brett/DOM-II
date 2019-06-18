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

const doc = document;
doc.addEventListener("mousewheel", event => {
    document.style.zoom = 25%
});

//drag / drop

//load

//focus

//resize

//scroll

//select

//dblclick