'use strict';

// Массив из 10 чисел и несколько функций для работы с числами

let randomNumbers10 = [];
for (let i=0; i<10; i++) {
    randomNumbers10[i] = Math.floor(Math.random()*100);
}
// console.log(randomNumbers10);

// Функция принимает массив и выводит его на экран

function printArray(arr) {
    let strArray='';
    for (let i=0; i<arr.length; i++) {
        strArray += arr[i] + ' ';
    }
    return strArray;
}

document.getElementById('f1').innerHTML = `<p>${printArray(randomNumbers10)}</p>
`;

// Функция выводит только четные элекменты

function printEvenElements(arr) {
    let strArray = arr.filter((item, index) => {
        if (index%2) {
            return true;
        } else {
            return  false;
        }
    });
    return strArray;
}
document.getElementById('f2').innerHTML = `<p>${printArray(printEvenElements(randomNumbers10))}</p>`;

// Функция возвращает сумму всех элементов массива

function findAmount(arr) {
    return arr.reduce((sum, current)=> sum + current,0)
}
document.getElementById('f3').innerHTML = `<p>Сумма всех элементов равна: ${findAmount(randomNumbers10)}</p>`;

// Функция возвращает его максимальное значение 

function getMaxElements(arr) {
    return Math.max(...arr);
}
document.getElementById('f4').innerHTML = `<p>Максимальное значание из всех: ${getMaxElements(randomNumbers10)}</p>`;

// Функция добавление элемента по указанному индексу

function addElement(arr, pos, element) {
    arr.splice(pos-1, 0, element);
    return arr;
}
let position = +prompt('На какую позицию добавить элемент?');
let userNumber = +prompt('Какое число добавить на эту позицию?');
document.getElementById('f5').innerHTML = `<p>Массив со вставленным элементом:</p>
<p>${printArray(addElement(randomNumbers10, position, userNumber))}</p>`;

// Функция удаления из массива по указанному индексу

function deleteElement(arr, pos) {
    arr.splice(pos-1, 1);
    return arr;
}
let positionDelete = +prompt('С какой позиции удалить элемент?');
document.getElementById('f6').innerHTML = `<p>Массив с удаленным элементом:</p>
<p>${printArray(deleteElement(randomNumbers10, positionDelete))}</p>`;

// Создать функцию

let randomNumbers5 = [];
for (let i=0; i<5; i++) {
    randomNumbers5[i] = Math.floor(Math.random()*100);
}

// Функция приняла два массива и вернула один общий без повторений

function compareArrays(arr1, arr2) {
    let arr3 = [...new Set([...arr1, ...arr2])];
    return arr3;
}
document.getElementById('f7').innerHTML = `
<p>Второй массив:</p>
<p>${printArray(randomNumbers5)}</p>`;
document.getElementById('f8').innerHTML = `
<p>Объединенный массив без повторов элементов:</p>
<p>${printArray(compareArrays(randomNumbers10, randomNumbers5))}</p>`;

// Функция возращает новый массив с одинаковыми элементами в обоих массивах

function crossArray(arr1, arr2) {
    return [...new Set([...arr1.filter(item => arr2.includes(item))])];
}

document.getElementById('f9').innerHTML = `
<p>Значения которые есть в каждом из массивов:</p>
<p>${printArray(crossArray(randomNumbers10, randomNumbers5))}</p>`;

// Функция все элементы из первого массива, которых нет во втором

function originFirstArray(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}
document.getElementById('f10').innerHTML = `
<p>Значения которых нет во втором массиве:</p>
<p>${printArray(originFirstArray(randomNumbers10, randomNumbers5))}</p>`;