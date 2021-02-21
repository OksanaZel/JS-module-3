// 1.Присвой переменной apartment объект описывающий квартиру со 
//следующими характеристиками:
//imgUrl - фотография, значение 'https://via.placeholder.com/640x480';
//descr - описание, значение 'Просторная квартира в центре';
//rating - рейтинг, значение 4;
//price - цена, значение 2153;
//tags - метаинформация, массив ['premium', 'promoted', 'top'].

// const apartment = {
// imgUrl: 'https://via.placeholder.com/640x480',
// descr: 'Просторная квартира в центре',
// rating: 4,
// price: 2153,
// tags: ['premium', 'promoted', 'top'],
// }

//2. Дополни объект квартиры свойством owner, 
//значением которого будет объект с информацией о владельце.
//Добавь ему следующие свойства:
// name - имя владельца, значение 'Генри';
// phone - телефон, значение '982-126-1588';
// email - почта, значение 'henry.carter@aptmail.com'.

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Генри',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     }
// }
// console.log(apartment);

//3. Дополни код присвоив объявленным переменным выражения обращения к 
//соответствующим свойствам обьекта apartment.
//aptRating - рейтинг;
//aptDescr - описание;
//aptPrice - цена;
//aptTags - теги.

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
// const aptRating = apartment.rating;
// console.log(aptRating);
// const aptDescr = apartment.descr;
//   console.log(aptDescr);
// const aptPrice = apartment.price;
//   console.log(aptPrice);
// const aptTags = apartment.tags;
//   console.log(aptTags);
//   // Пиши код выше этой строки

// 4. Дополни код присвоив объявленным переменным выражения 
//обращения к соответствующим свойствам обьекта apartment.
//ownerName - имя владельца;
//ownerPhone - телефон владельца;
//ownerEmail - почта владельца;
//numberOfTags - количество элементов массива в свойстве tags;
//firstTag - первый элемент массива в свойстве tags;
//lastTag - последний элемент массива в свойстве tags.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// console.log(lastTag)

// // Пиши код выше этой строки

//5. Дополни код присвоив объявленным переменным выражения 
//обращения к соответствующим свойствам обьекта apartment используя 
//синтаксис «квадратных скобок».

//aptRating - рейтинг;
//aptDescr - описание;
//aptPrice - цена;
//aptTags - теги.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// Пиши код ниже этой строки
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Пиши код выше этой строки

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// 6. Дополни код обновив значения свойств объекта apartment:
//цену в свойстве price на 5000;
//рейтинг квартиры в свойстве rating на 4.7;
//имя владельца во вложенном свойстве name на 'Генри Сибола';
//массив тегов в свойстве tags добавив в конец строку 'trusted'.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');

// 7. Добавь объекту apartment несколько новых свойств:
//area - площадь в квадратных метрах, число 60;
//rooms - количество комнат, число 3;
//location - местоположение квартиры, обьект со следующими 
//вложенными свойствами;
//country - страна, строка 'Ямайка';
//city - город, строка 'Кингстон'.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: 'Ямайка',
//     city: 'Кингстон',
// }
// console.log(apartment);

// 8.Дополни код объявления объекта так, чтобы у него были 
//свойства name, price, image и tags со значениями из переменных 
//с аналогичными именами.Обязательно используй синтаксис коротких свойств.

// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };

//9. Дополни код объявления объекта credentials так, чтобы в 
//результате у него были два свойства: email и password, имена 
//которых хранятся в переменных emailInputName и passwordInputName.
//Значением свойства email должна быть строка 'henry.carter@aptmail.com', 
//а значением свойства password - строка 'jqueryismyjam'.

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//     [emailInputName]: 'henry.carter@aptmail.com',
//     [passwordInputName]: 'jqueryismyjam',
  
// };
// console.log(credentials);

// 10. Перебери объект apartment используя цикл for...in и запиши 
//в массив keys все его ключи, а в массив values все значения его свойств.

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for(const key in apartment){
// keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

//11. 