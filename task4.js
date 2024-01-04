// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress
// 


let name = document.querySelector('input[name=fio]').value;
let phoneNumber = document.querySelector('input[name=phone]').value;
let dataOfBirth = document.querySelector('input[name=birthday]').value;
let emailAddress = document.querySelector('input[name=email]').value;

module.exports = {
    name,
    phoneNumber,
    dataOfBirth,
    emailAddress
};
