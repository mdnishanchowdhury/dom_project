// value access function
function inputValueById(id) {
    const inputText = document.getElementById(id).value;
    const inputInt = parseFloat(inputText);
    return inputInt;
}
// innerText access
function inputInnerTextById(id) {
    const inner_Text = document.getElementById(id).innerText;
    const inputInt_inner = parseFloat(inner_Text);
    return inputInt_inner;
}
// change display
function changeDisplayById(id) {
    document.getElementById('display-1').classList.add('hidden');
    document.getElementById('History-transaction').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}