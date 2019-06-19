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
    // append to list?????
    // ?????????????????
});

//drag / drop
// const -- = document.querySelector('');
// --.addEventListener('click', event => {
//     alert('ALERT BOX')
// });

//load
// const -- = document.querySelector('');
// --.addEventListener('click', event => {
//     alert('ALERT BOX')
// });

//focus
const signUp = document.querySelector('.destination .btn');
signUp.addEventListener('click', event => {
    alert('Get ready!');
});
//resize
// const -- = document.querySelector('');
// --.addEventListener('click', event => {
//     alert('ALERT BOX')
// });

//zoom
const zoom = document.querySelector('.img-fluid');
zoom.addEventListener('wheel', event => {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    zoom.style.transform = `scale(${scale})`
});
//     alert('ALERT BOX')
// });
//select
// const -- = document.querySelector('');
// --.addEventListener('click', event => {
//     alert('ALERT BOX')
// });

//NOTES:
/* event.target.classList.add();
 animation end -- fire when element css animation ends */

//dblclick
const vacation = document.querySelector('.lastpic');
vacation.addEventListener('dblclick', event => {
    alert('You could be here');
});