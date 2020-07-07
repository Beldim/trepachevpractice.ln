/* practice */
/* 1 */
/* let elem = document.getElementById('button');
elem.addEventListener('click', go);
let input = document.getElementsByClassName('input');
function go(){
    let sum = 0;
    for (i = 0; i < input.length; i++){
        sum += +input[i].value;
    }
    let result = document.getElementById('sum');
    result.value = sum;
} */
/* 2 */
/* let elem = document.getElementById('button');
elem.addEventListener('click', go);
let num = document.getElementsByClassName('num');
function go(){
    let sum = 0;
    for (i = 0; i < num.length; i ++){
        sum += +num[i].value;
    }
    let result = document.getElementById('result');
    result.innerHTML = sum;
} */
/* 3 */
/* let num = document.getElementById('num');
num.addEventListener('blur', go);
function go(){
    let arr = num.value.split('');
    let sum = 0;
    for (i=0; i<arr.length; i++){
        sum += +arr[i];
    }
    let result = document.getElementById('result');
    result.innerHTML = sum;
} */
/* 4 */
/* let num = document.getElementById('num');
num.addEventListener('blur', go);
function go(){
    let arr = num.value.split(',');
    let sum = 0;
    for (i=0; i<arr.length; i++){
        sum += +arr[i];
    }
    let result = document.getElementById('result');
    result.innerHTML = sum/arr.length;
} */
/* 5 */
/* let enter = document.getElementById('enter');
enter.addEventListener('focus', placeholder);
function placeholder(){
    enter.placeholder = '';
}
enter.addEventListener('blur', go);
function go(){
    let enter = document.getElementById('enter');
    let elems = document.getElementsByClassName('name');
        if (enter.value !== 0){
            let str = enter.value;
            let arr = str.split(' ');
            for (i = 0; i < arr.length; i++){
                elems[i].value = arr[i];
            }
        }    
        if (enter.value == 0){
        enter.placeholder = 'ФИО';
         for (i = 0; i < elems.length; i++){
            elems[i] = '';
        }
    }
} */