const numberA = document.querySelector('#a');
const numberB = document.querySelector('#b');
const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', async event =>{
    event.preventDefault();

    const a = Number(numberA.value);
    const b = Number(numberB.value);

    const res = await fetch('/calc/check', {
        method: 'POST',
        body: JSON.stringify({
            a,
            b,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })


    const data = await res.json();

    if (data.divider){
        resultDiv.innerText = ('B is divider of A');
    } else {
        resultDiv.innerText = ('B is not divider of A');
    }
})



