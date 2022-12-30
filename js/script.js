const text = document.getElementById('text');
const icr = document.getElementById('icrBtn');
const dcr = document.getElementById('dcrBtn');
let i = text.innerText;
const increment = () => {
    i++;
    // text.value = i;
    text.innerText = i
}
const decrement = () => {
    i--;
    text.innerText= i; 
}
const loopInc = () => {
    while(true){
        increment();
    }
}
icr.addEventListener('click',increment);
dcr.addEventListener('click',decrement);
