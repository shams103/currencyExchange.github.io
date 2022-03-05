const curr_1 = document.getElementById('currency-one');
const curr_2 = document.getElementById('currency-two');
const amt_1 = document.getElementById('amount-one');
const amt_2 = document.getElementById('amount-two');

const rate1 = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
    const curr_one = curr_1.value;
    const curr_two = curr_2.value;

    fetch(`https://v6.exchangerate-api.com/v6/bbcb631d14f6129c23b5dd32/latest/${curr_one}`)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        const rate = data.conversion_rates[curr_two];
        rate1.innerText = `1 ${curr_one} = ${rate} ${curr_two}`

        amt_2.value = (amt_1.value * rate).toFixed(2);
    });
}


swap.addEventListener('click', () => {
    const tempA = curr_1.value;
    curr_1.value = curr_2.value;
    curr_2.value = tempA;

    const tempB = amt_1.value;
    amt_1.value = amt_2.value;
    amt_2.value = tempB;
})


curr_1.addEventListener('change', calculate);
curr_2.addEventListener('change', calculate);
amt_1.addEventListener('input', calculate);
amt_2.addEventListener('input', calculate);

calculate();