const p1 = document.querySelector('#player1');
const p2 = document.querySelector('#player2');

const p1Point = document.querySelector('#green');

let selection = document.querySelectorAll('option');

let selection2 = document.querySelector('select');


let selected = selection2.addEventListener('change', function() {
    for (let i = 0; i < selection.length; i++) {
        if(selection[i].selected === true) {
            console.log(selection[i].value); //THIS IS TO TEST IF SELCETION IS LOCATED
            return num = parseInt(selection[i].value);
        }
    }
})

let p1Clicks = 0;


p1Point.addEventListener('click', function() {
    if (p1Clicks !== num){
        p1Clicks += 1;
        p1.innerHTML = p1Clicks;
    }
})

while (p1Clicks !== 0) {
        console.log('this works');
}

// if (p1Clicks !== 0 && p1Clicks === num) {
//         p1.style.color = 'green';
//         console.log("green");
//     }

const p2Point = document.querySelector('#blue');

let p2Clicks = 0;

p2Point.addEventListener('click', function() {
    if (p2Clicks !== num) {
        p2Clicks += 1;
        p2.innerHTML = p2Clicks
    }
})

const reset = document.querySelector('#red');

reset.addEventListener('click', function () {
    p1Clicks = 0;
    p2Clicks = 0;
    p1.innerHTML = p1Clicks;
    p2.innerHTML = p2Clicks;
})
