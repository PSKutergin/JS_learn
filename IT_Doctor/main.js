// let age = prompt("Введите свой возвраст")
// if (age != null) {
//     alert("Мой возраст " + age)
// } else {
//     alert("Вы нажали отмену")
// }

// if (confirm("Удалить Ваш акаунт?")) {
//     alert("Удалено")
// } else {
//     alert("Отменено")
// }

// // Тернарный оператор
// confirm("Удалить Ваш акаунт?") ? alert("Удалено") : alert("Отменено")

// let age = prompt("Введите свой возвраст")
// switch(true) {
//     case age > 18:
//         alert("Мне больше 18 лет")
//         break;
//     case age < 18 && age > 0:
//         alert("Мне меньше 18 лет")
//         break;
//     case age = 18:
//         alert("Мне 18 лет")
//         break;
//     default:
//         alert("Неправильный возраст")
// }

// let count = 0
// while (count < 10) {
//     console.log(count);
//     count++;
// }

// let count = 5
// do {
//     console.log(count);
//     count--;
// } while(count>1)

// for(let i=0; i<10; i++) {
//     console.log(i)
// }

// let arr = [4, 8, 9, 2, 5]
// for(let i=0; i<arr.length; i++) {
//     console.log(arr[i]*2)
// }

// for(let item of arr) {
//     console.log(item)
// }

// let obj = {
//     "name": "Petr",
//     "age": 25,
//     "number": 890746389033
// }

// for(let key in obj) {
//     console.log(`Ключ ${key}, Значение ${obj[key]}`)
// }

// arr.forEach(function(item, i, array) {
//     console.log(
//         `Элемент: ${item}
//         Индекс: ${i}
//         Массив: ${array}
//         Удвоенный элемент: ${item*2}`
//     )
// })

// let people = [
//     {id: 1, name: "Ivan"},
//     {id: 2, name: "Masha"},
//     {id: 3, name: "Alex"},
//     {id: 4, name: "Kate"},
// ]
// let a = people.find(function(item) {
//     if(item.id==3) return item
// })
// console.log(a)

// let b = people.findIndex(function(item) {
//     if(item.id==3) return item
// })
// console.log(b)

// let c = people.filter(function(item) {
//     if(item.id<3) return item
// })
// console.log(c)

// let arr = [4, 8, 9, 2, 5]
// let newArr = arr.map(function(item) {
//     return item*3
// })
// console.log(newArr)


/**
 * Функция преобразует строку с временам в минуты
 * @param {string} time время в виде строки, например "02:08". Может быть в диапазоне от "00:00" до "23:59".
 * @return {number} целое число в минутах. Например time="02:08" вернет 128.
 */
function timeToMinute(time) {
    try {
        let hour = +time.split(":")[0]
        let minute = +time.split(":")[1]
        if( !(hour>=0 && hour<=23) || !(minute>=0 && minute<=59)) {
            throw new RangeError("Аргумент должен быть в формате 'hh:mm' - 'hh' должен быть от 0 до 23, а 'mm' должен быть от 0 до 59. 'hh' и 'mm' должны быть числами и разделяться знаком ':'")
        }
        return hour*60+minute
    } catch(error) {
        console.log(error)
    }
}
console.log(timeToMinute("23:06"))


class People {
    /**
     * Класс человек
     * @param {String} fio по формату "Фамилия Имя Отчество"
     * @param {String} birthday день рождения по формату "24.11.1994"
     * @param {String} numbers "номер", если больше 2 номеров, то по формату "номер1, номер2"
     * @param {Number} room комната
     */
    constructor(fio, birthday, numbers, room) {
        let name = fio.toLowerCase().split(" ");
        this.name = {};
        this.name.f = name[0][0].toUpperCase() + name[0].slice(1)
        this.name.i = name[1][0].toUpperCase() + name[1].slice(1)
        this.name.o = name[2][0].toUpperCase() + name[2].slice(1)

        let date = birthday.split(".")
        this.date = {}
        this.date.d = +date[0]
        this.date.m = +date[1]
        this.date.y = +date[2]

        this.numbers = numbers.split(", ")

        this.room = room
    }
    static month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    /**
    * Вывести ФИО
    * @return {String} Строка формата "Фамилия Имя Отчество"
    */
    getFio() {
        return `${this.name.f} ${this.name.i} ${this.name.o}`
    }
    /**
     * Вывести день рождения
     * @return {String} Строка формата "24 июля 1997"
     */
    getBirthday() {
        return `${this.date.d} ${People.month[this.date.m-1]} ${this.date.y}`
    }
    /**
     * Вывести Фамилия_Имя_Отчество.расширение
     * @param {String} extention расшериение, например "jpg" или "png"
     * @return {String} для названия изображения
     */
    getImgSrc(extention) {
        return `${this.name.f}_${this.name.i}_${this.name.o}.${extention}`
    }
    /**
     * Вывести все номера телефонов или только первый
     * @param {String} allNumbers если true, то все номераю. Если false, только первый номер
     * @return {String} строка формата: "89738473838, 89748347498"
     */
    getNumberList(allNumbers) {
        if(this.numbers.length == 0 || this.numbers[0].length == 0) {
            return undefined
        }
        if(allNumbers) {
            return this.numbers.join(", ")
        } else {
            return this.numbers[0];
        }
    }
}
let people1 = new People("Кутергин Павел Сергеевич", "22.11.1988", "8768, 7989, 2365", 570)