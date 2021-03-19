/*1. Напиши скрипт, который, для объекта user, последовательно:
добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of */

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//     // console.log(key, ':', user[key]);
// };

/*2.Напиши функцию countProps(obj), считающую кол-во свойств в объекте. 
Функция возвращает число - количество свойств. */

const countProps = function(obj) {
    const values = Object.values(obj);
    let total = 0;
    total = values.length;
    return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

/*3. Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников 
и возвращает имя самого продуктивного (который выполнил больше всех задач). 
Сотрудники и кол-во выполненых задач содержатся как свойства объекта 
в формате "имя":"кол-во задач". */

const findBestEmployee = function(employees) {
  // твой код

  
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// )
 // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux