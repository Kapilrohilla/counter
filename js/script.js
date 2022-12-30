const text = document.getElementById('text');
const icr = document.getElementById('icrBtn');
const dcr = document.getElementById('dcrBtn');
let i = text.value;
const increment = () => {
    i++;
    text.value = i;
}
const decrement = () => {
    i--;
    text.value= i; 
}
const loopInc = () => {
    while(true){
        increment();
    }
}
icr.addEventListener('click',increment);
dcr.addEventListener('click',decrement);

// icr.addEventListener('mousedown',increment);
//icr.removeEventListener('mouseup',loopInc);
