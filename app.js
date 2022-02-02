
let selection = document.querySelectorAll('option');

let selection2 = document.querySelector('select');


let selected = selection2.addEventListener('change', function () {
    for (let i = 0; i < selection.length; i++) {
        if(selection[i].selected === true) {
            console.log(selection[i].value); //THIS IS TO TEST IF SELCETION IS LOCATED
            return num = parseInt(selection[i].value);
        }
    }
})


// if (p1Clicks == num) {
//         p1.style.color = 'green';
//         console.log("green");
// }


const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');

let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');

let p1Clicks = 0;
let p2Clicks = 0;

let gameOver = false;

p1Button.addEventListener('click', function () {
    if (isNaN(num) === false) {
        if(!gameOver) {
            p1Clicks += 1;
            if (p1Clicks === num) {
                gameOver = true;
            }
            p1Display.textContent = p1Clicks;
            }
            if (p1Clicks === num) {
                p1Display.classList.add('won');
                p2Display.classList.add('lost');
            }
    } else {
        alert('Please select the number you are playing to')
    }  
})

p2Button.addEventListener('click', function () {
    if (isNaN(num) === false) {
        if(!gameOver) {
            p2Clicks += 1;
            if (p2Clicks === num) {
                gameOver = true;
            }
            p2Display.textContent = p2Clicks;
            }
            if (p2Clicks === num) {
                p2Display.classList.add('won');
                p1Display.classList.add('lost');
            }
    } else {
        alert('Please select the number you are playing to')
    }  
})

reset.addEventListener('click', function () {
    p1Clicks = 0;
    p2Clicks = 0;
    gameOver = false;
    p1Display.textContent = p1Clicks;
    p2Display.textContent = p2Clicks;
    p1Display.classList.remove('won', 'lost')
    p2Display.classList.remove('won', 'lost')
})

if (isNaN(num) === false) {
    console.log(1);
}
