// Задачки
let arr = []
// 1. Создать массив из четных чисел менбше 20
// for(let i=0; i<20; i+=2) {
//     arr.push(i)
// }

// // 2. Создать массив от 30 до 0 по убыванию, числа массива должны делиться на 3 без остатка
// Решение 1:
// for(let i=30; i>0; i-=3) {
//     arr.push(i)
// }
// Решение 2:
// for(let i=30; i>0; i-=1) {
//     if(i%3 == 0) {
//         arr.push(i)
//     }
// }

// // 3. Создать массив, элемент которого будет равен квадрату его индекса
// for(let i=0; i<10; i++) {
//     arr.push(Math.pow(i,2))
// }
// console.log(arr)

// // 4. Найти все четные элементы массива
// let arr1 = [7, 5, 9, 4, 2, 0, 3, 23, 25, 6]
// let count = 0
// for(let i=0; i<arr1.length; i++) {
//     if(arr1[i]%2==0) {
//         count++;
//     }
// }
// console.log("Всего четных элементов: " + count)


        // Функции //

// // 5. Сформировать список цисел Фибоначчи
// function fibonachi(count) {
//     let fib = []
//     for(let i=0; i<count; i++) {
//         if(i==0) fib[i] = 1;
//         else if(i==1) fib[i] = 2;
//         else fib[i] = fib[i-2] + fib[i-1];
//     }
//     return fib
// }
// let f = fibonachi(15)
// console.log(f)

// // 6. Вычислить факториал числа
// function factorial(n) {
//     let fact = 1;
//     if(n==0) return fact;
//     for(let i=1; i<=n; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// let a = factorial(0)
// console.log(a)
// let b = factorial(5)
// console.log(b)
// let c = factorial(8)
// console.log(c)

// // 7. Вывод произведения и суммы цифр числа
// let addAndMul = function(num) {
//     num += "";
//     let add = 0, mul = 1;
//     for(let i = 0; i<num.length; i++) {
//         add += +num[i];
//         mul *= num[i];
//     }
//     return {
//         "Сумма": add,
//         "Произведение": mul
//     }
// }
// console.log(addAndMul("795"))

// // 8. Перевернуть число
// function reverse(number) {
//     number += "";
//     let reverseNumber = ""
//     for(let i=number.length-1; i>=0; i--) {
//         reverseNumber += number[i]
//     }
//     return +reverseNumber
// }
// console.log(reverse(26478))

// // 9. Подсчет четных и нечетных цифр в числе
// function number(number) {
//     number += "";
//     let chet = 0, nechet = 0;
//     for(let i=0; i<number.length; i++) {
//         if(number[i] % 2 == 0) chet++;
//         else nechet++;
//     }
//     return {
//         "Четные цифры": chet,
//         "Нечетные цифры": nechet,
//     }
// }
// console.log(number(26478))

// // 10. Угадать загаданное число в рандомном диапазоне
// function randomNumber() {
//     let number = Math.floor(Math.random()*100);
//     for(let count=1; count<=10; count++) {
//         let result = +prompt(`Попытка №${count}, Введите число:`)
//         if(result == number) {
//             return alert(`Вы угадали число! Попыток: ${count}, Число: ${number}`)
//         } else if(result < number) {
//             alert(`Ваше число ${result}, меньше загаданного!`)
//         } else if(result > number) {
//             alert(`Ваше число ${result}, больше загаданного!`)
//         }
//     }
//     return alert(`Вы не угадали число! Число: ${number}`)
// }
// randomNumber()