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
/* 6 */
/* let elem = document.getElementById('enter');
elem.addEventListener('focus', placeholder);
elem.addEventListener('blur', go);
function placeholder(){
    elem.placeholder = '';
}
let result = '';
function go(){
    let arr = elem.value.split(' ');
    for (i = 0; i < arr.length; i++){  
       let str = arr[i][0].toUpperCase()+arr[i].slice(1);  
        result += str + ' ';
    }
    elem.value = result;
    result = '';    
} */
/* 6 */
/* let elem = document.getElementById('enter');
elem.addEventListener('focus', placeholder);
elem.addEventListener('blur', bigLatter);
function placeholder(){
    elem.placeholder = '';
}
function bigLatter(){
    elem.value = go(elem.value);
}
function go(str){
    let arr = str.split(' ');
    for (i = 0; i < arr.length; i++){
        arr[i] = arr[i].split('');
        arr[i][0] = arr[i][0].toUpperCase();
        arr[i] = arr[i].join('');
    }
    str = arr.join(' ');
    return str;
} */
/* 7 */
/* let elem = document.getElementById('enter');
elem.addEventListener('focus', placeholder);
elem.addEventListener('blur', info);
function placeholder(){
    elem.placeholder = '';
}
function info(){
    elem.value = go(elem.value);
}
function go(str){
    let arr = str.split(' ');
    return 'Количество слов:' + arr.length;
} */
/* 8 */
/* let elem = document.getElementById('enter');
elem.addEventListener('focus', placeholder);
elem.addEventListener('blur', info);
function placeholder(){
    elem.placeholder = '';
}
function info(){
    let max = 0;
    let arr = elem.value.split(' ');
    let arr2 = [];
    for (i = 0; i < arr.length; i++){
        let num = 0;
        arr2 = arr[i].split('');
        for (j = 0; j < arr2.length; j++){
            num += 1;
        }
        if (num > max){
            max = num;
        }
        elem.value = 'Самое длинное слово содержит символов ' + max;
    }
} */
/* 9 */
/* let elem = document.getElementById('enter');
elem.addEventListener('focus', placeholder);
elem.addEventListener('blur', info);
function placeholder(){
    elem.placeholder = '';
}
function info(){
    let arr = elem.value.split('.');
    let arr2 = arr.reverse();
    elem.value = arr2.join('-');``
} */
/* 10 */
/* let elem = document.getElementById('enter');
elem.addEventListener('focus', placeholder);
elem.addEventListener('blur', info);
function placeholder(){
    elem.placeholder = '';
}
function info(){
    let date = new Date();
    elem.value = date.getFullYear()-elem.value;
} */
/* 11 */
/* let elem = document.getElementById('enter');
elem.addEventListener('blur', go);
function go(){
    let dayWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    let arr = elem.value.split('.');
    let arr2 = arr.reverse();
    let str = arr2.join(',');
    let date = new Date(str);
    let day = date.getDay();
    elem.value = dayWeek[day];
} */
/* 12 */
/* let elem = document.getElementById('enter');
elem.addEventListener('blur', go);
function go(){
    let arr = elem.value.split('');
    let arr2 = elem.value.split('').reverse();
    for (i = 0; i < arr.length; i++){
        if (arr[i] !== arr2[i]) {
            alert('Это слово не палендром');
            return;
        }        
    }
    alert('Это слово палендром');
        return;
} */
/* 13 */
/* let elem = document.getElementById('enter');
elem.addEventListener('blur', go);
function go(){
    let arr = elem.value.split('');    
    for (i = 0; i < arr.length; i++){
        if (arr[i] == 3) {
             alert('Данное число содержит цифру: 3');
            return;
        }   
    }
} */
/* 14 */
/* let elem = document.getElementsByTagName('p');
let button = document.getElementById('btn');
button.addEventListener('click', go);
function go(){
    for (i = 0; i < elem.length; i++){
        let num = i + 1;
        elem[i].innerHTML = elem[i].innerHTML + ' ' + num;
    }
} */
/* 15 */
/* let elem = document.getElementsByTagName('p');
let button = document.getElementById('btn');
button.addEventListener('click', go);
function go(){
    let arr = [];            
    for (i = 0; i < elem.length; i++){
        arr[i] = +elem[i].innerHTML;        
    }    
    let input = document.getElementById('enter');
    input.value = arr.sort(sortArr);
}
function sortArr(a, b) {
	if (a > b) {
		return 1;
	}
	if (a < b) {
		return -1;
 	}
	if (a == b) {
		return 0;
 	}
 } */
 /* 16 */
/*  let elem = document.getElementsByTagName('a');
window.onload = start();
function start() {
	for (var i = 0; i < elem.length; i++) {
		elem[i].innerHTML = elem[i].innerHTML + '(' +elem[i].href+')';
	}
 } */
 /* 17 */
/*  let elem = document.getElementsByTagName('a');
window.onload = start();
function start() {
	for (let i = 0; i < elem.length; i++) {
		if (elem[i].getAttribute('href').indexOf('http://') == 0){
            elem[i].innerHTML = elem[i].innerHTML + '&rarr;';
        }
	}
 } */