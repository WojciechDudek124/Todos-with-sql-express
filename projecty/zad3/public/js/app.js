const input = document.querySelector('#imie');
const submitBtn = document.querySelector('.submit_btn')
const showBtn = document.querySelector('.show_btn');
const checkBtn = document.querySelector('.check_btn');
const result = document.querySelector('#result');

submitBtn.addEventListener('click', async event =>{
    event.preventDefault();

    const name = input.value;

    const res = await fetch('/cookie/set',{
        method: 'POST',
        body: JSON.stringify({
            name,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const data = await res.json()

    result.innerText = data;
});

showBtn.addEventListener('click', async event =>{
    event.preventDefault();

    const res = await fetch ('/cookie/show', {

    })

    const data = await res.json()

    result.innerText = data;
});

checkBtn.addEventListener('click', async event =>{
    event.preventDefault();

    const name = input.value;

    const res = await fetch('/cookie/check',{
        method: 'POST',
        body: JSON.stringify({
            name,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const data = await res.json()

    result.innerText = data;
});