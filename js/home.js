document.getElementById('Donate-btm-1').addEventListener('click', function () {
    const donateInput_1 = inputValueById('Donate-input-1');
    //    console.log(typeof(donateInput_1))
    const Donate_Balance_1 = inputInnerTextById('Donate-Balance-1');
    const Main_balance = inputInnerTextById('Main-balance');
    // Validate input
    if (isNaN(donateInput_1) || donateInput_1 <= 0) {
        alert('Please enter a valid donation amount');
        return;
    }
    // Check if donation is possible
    if (Main_balance >= donateInput_1) {
        // Update donation balance
        const newDonateBalance = Donate_Balance_1 + donateInput_1;
        document.getElementById('Donate-Balance-1').innerText = newDonateBalance;
        // Update main balance
        const newMainBalance = Main_balance - donateInput_1;
        document.getElementById('Main-balance').innerText = newMainBalance;

        // history transaction
        const p = document.createElement('p');
        p.innerText = ` cash-donation: ${donateInput_1}`;
        document.getElementById('History-transaction').appendChild(p);
        // history transaction
    } else {
        alert('Insufficient balance');
    }
})
// History
document.getElementById('History').addEventListener('click', function (event) {
    event.preventDefault();
    // window.location.href = '/history.html';
    changeDisplayById('History-transaction');
})
// Donation
document.getElementById('Donation').addEventListener('click', function (event) {
    event.preventDefault();
    changeDisplayById('display-1');
})