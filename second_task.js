let users = [{ name: "Петя", age: 22 }, { name: "Вася", age: 31 }, { name: "Маша", age: 25 }, { name: "Ира", age: 15 }, { name: "Андрей", age: 31 }, { name: "Света", age: 25 }];
// Добавить в массив users 2х новых пользователей с не пустым именем и возрастом
let addUsers = [{ name: "Рома", age: 44 }, { name: "Лариса", age: 22 }];
users = users.concat(addUsers);
// Удалить из массива всех пользователей с возрастом 22. 
users = users.filter(item => item.age !== 22);
// Отсортировать массив по полю age в порядке возрастания, 
// если возраст у нескольких пользователей одинаковый отсортировать их в алфавитном порядке по name. 
users.sort((a, b) => {
  if (a.age > b.age) return 1;
  if (a.age < b.age) return -1;
  if (a.age === b.age) {
    return a.name > b.name ? 1 : -1;
  }
});
// Добавить каждому пользователю поле salary типа number (значения присвоить любые). 
for (const user of users) {
  user.salary = Math.random() * 10000;
}
// Написать функцию подсчета суммы зарплат всех пользователй.
const sumSalary = (users) => users.reduce((sum, item) => sum + item.salary, 0);
// Напишите функцию isObject, которая проверяет, является ли элемент именно объектом.
const isObject = (element) => element instanceof Object;
//  Напишите функцию, которая находит пересечение двух объектов и возвращает новый объект этого пересечения.
const newObject = (obj1, obj2) => {
  let result = {};
  if (isObject(obj1) && isObject(obj2)) {
    Object.keys(obj1).forEach((key) => {
      const value1 = obj1[key];
      const value2 = obj2[key];
      if (isObject(value1)) {
        result[key] = newObject(value1, value2);
      } else if (value1 === value2) {
        result[key] = value1;
      }
    })
  }
  return result;
}
//  Задачи на деструктуризацию:
// Записать последний элемент массива в переменную head, остальные элементы в переменную tail. 
const reversedUsers = users.reverse();
const [head, ...tail] = reversedUsers;
// Дан объект вида {name:”name”, age:“age”, gender: “gender”}, необходимо записать соответствующие поля в переменные name, age, gender.
const { name, age, gender } = object;
