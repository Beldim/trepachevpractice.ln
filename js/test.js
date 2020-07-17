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
 /* 18 */
/*  let elem = document.getElementsByTagName('p');
 for (i = 0; i < elem.length; i++){
     elem[i].addEventListener('click', start);
    }
    function start(){
        this.innerHTML = Math.pow(this.innerHTML, 2);
 } */
 /* 19 */
/*  let elem = document.getElementsByTagName('img');
 for (i = 0; i < elem.length; i++){
     elem[i].addEventListener('click', start);
    }
    function start(){
        this.height = this.height*2;        
 } */
 /* 20 */
/*  let elem = document.getElementsByTagName('img');
 for (i = 0; i < elem.length; i++){
     elem[i].addEventListener('click', start);
    }
    function start(){
        this.height = this.height*2;
        this.removeEventListener('click', start);
        this.addEventListener('click', end);
 }
    function end(){
        this.height = this.height/2;
        this.removeEventListener('click', end);
        this.addEventListener('click', start);
    } */
/* 21 */
/* let elem = document.getElementsByTagName('img');
 for (i = 0; i < elem.length; i++){
     elem[i].addEventListener('click', start);
    }
    function start(){
        let bigImg = document.getElementById('task');
        bigImg.src = this.src;
    } */
/* 22 */
/* let elem = document.getElementById('enter');
let sub = document.getElementsByClassName('cls');
for (i = 0; i < sub.length; i++){
    sub[i].addEventListener('click', start)
}
function start(){
    let number = +elem.value + +this.value;
    if (number>=0){
        elem.value = number;
    } else {
        elem.value = 0;
    }
} */
/* 23 */
/* let elem = document.getElementById('enter');
elem.addEventListener('blur', go);
function go(){
    if (elem.value > 0 && elem.value <= 100){
        elem.style.backgroundColor = "#00ff00";
    } else {
        elem.style.backgroundColor = "#ff0000";
    }
} */
/* 24 */
/* let elem = document.getElementById('enter');
document.documentElement.addEventListener('mouseup', go);
function go(){
    let content = window.getSelection().toString();
    elem.value = content;
} */
/* 25 */
/* let elems = document.getElementsByTagName('p');
let arr = [];
for (i = 0; i < elems.length; i++){
    arr.push(elems[i].innerHTML);    
}
document.documentElement.addEventListener('click', start);
function go(arr){  
    let max = Math.max.apply(null, arr);  
    return max;
};
function start(){
    for (j = 0; j < elems.length; j++){
        if (go(arr) == elems[j].innerHTML){
            elems[j].style.backgroundColor = "#00ff00";
        }
    }
} */
/* 26 */
/* let elems = document.getElementsByTagName('p');
let num = 1;
for (i = 0; i < elems.length; i++){
    elems[i].addEventListener('click', func);
}
function func(){
    let inp = document.getElementById('enter');
    inp.value = num;
    num += 1;
} */
/* 27 */
/* let elem = document.getElementById('enter');
function start(){
    window.setInterval(timer, 1000);
}
function timer(){
    elem.value *= parseInt(elem.value);
} */
/* 28 */
/* let btn = document.getElementById('btn');
let elem = document.getElementById('enter');
btn.addEventListener('click', generate);
function generate(){
    let str = '';
    let symbols = '0123456789qwertyuiopasdfghjklzxcvbnm';
    for (i = 0; i < 8; i++){
        str += symbols.charAt(Math.floor(Math.random()*symbols.length));
        elem.value = str;
    }
} */
/* 29 */
/* let btn = document.getElementById('btn');
let elem = document.getElementById('enter');
let leng = document.getElementById('leng');
btn.addEventListener('click', generate);
function generate(){
    let str = '';
    let symbols = '0123456789qwertyuiopasdfghjklzxcvbnm';
    for (i = 0; i < leng.value; i++){
        str += symbols.charAt(Math.floor(Math.random()*symbols.length));
        elem.value = str;
    }
} */
/* 30 */
/* let btn = document.getElementById('btn');
let elem = document.getElementById('enter');
let leng = document.getElementById('leng');
let symb = document.getElementById('symb');
btn.addEventListener('click', generate);
function generate(){
    let str = '';
    let symbols = symb.value;
    for (i = 0; i < leng.value; i++){
        str += symbols.charAt(Math.floor(Math.random()*symbols.length));
        elem.value = str;
    }
} */
/* 31 */
/* let result = document.getElementById('info');
function start(){
    let elem = document.getElementById('inp');
    result.innerHTML = elem.value;
    window.timerId = window.setInterval(timer, 1000);	            
    }
function timer(){    
    if (result.innerHTML > 0){
        result.innerHTML = result.innerHTML-1;
    } if (result.innerHTML == 0){
        stop();
    }
}
function stop(){
    window.clearInterval(window.timerId);
} */
/* 32 */
/* let result = document.getElementById('info');
window.setInterval(timer, 1000);
function timer(){    
    if (result.style.color == 'red'){
        result.style.color = 'lime';
    } else {
        result.style.color = 'red';
    }
} */
/* 33 */
/* let elem = document.getElementById('info');
let arr = ['red', 'green', 'blue'];
window.setInterval(timer, 1000);
let i = 0;
function timer(){    
    elem.style.backgroundColor = arr[i];
    i++;
    if (i > arr.length){
        i = 0;
    }
} */
/* 34 */
/* let elem = document.getElementsByTagName('input');
let i = 0;
let num = 1;
window.setInterval(timer, 1000);
function timer(){    
    elem[i].value = num;
    i++;
    num++;
    if (i > elem.length - 1){
        i = 0;
    };
} */