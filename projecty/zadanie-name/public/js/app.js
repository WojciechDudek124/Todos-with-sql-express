const btnGood = document.querySelector('.btn-good');
const btnBad = document.querySelector('.btn-bad');
const p = document.querySelector('.p-click-info');

let counter = localStorage.getItem('counter');
if (counter === null) {
    counter = {
        moodGood: 0,
        moodBad: 0,
    };
} else {
    counter = JSON.parse(counter);
}

function showInfo() {
    const {moodGood, moodBad} = counter;
    p.innerText = `Do tej pory kliknąłeś ${moodGood} razy dobrze, a ${moodBad} razy źle.`;
}

function saveInfo() {
    localStorage.setItem('counter', JSON.stringify(counter));
}

showInfo();

btnGood.addEventListener('click', () => {
    counter.moodGood++;
    showInfo();
    saveInfo();
});

btnBad.addEventListener('click', () => {
    counter.moodBad++;
    showInfo();
    saveInfo();
});

