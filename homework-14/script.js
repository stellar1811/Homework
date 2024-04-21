const buyButton = document.querySelector('#showFormBtn');
const form = document.querySelector('#form');

const sendButton = document.querySelector('#sendButton');
const errorMessages = document.querySelectorAll('.error-message');
const resultMessage = document.querySelector('.result-message');

buyButton.addEventListener('click', () => {
    form.style.display = 'block'
}) 

const fullNamePattern = /^[А-ЯІЇЄҐ][а-яіїєґ' ]+[А-ЯІЇЄҐ][а-яіїєґ' ]+[А-ЯІЇЄҐ][а-яіїєґ' ]+$/;
const emailPattern = /^[A-Za-z0-9._%+-]+@[a-z]+\.[a-z]+$/;
const phoneNumberPattern = /^(\+?38)?(\-\s)?0\d{9,}$/;

const errorMessagesEmptyList = [
    'Вам потрібно ввести ПІБ!',
    'Вам потрібно ввести номер поштового відділення!',
    'Вам потрібно ввести кількість!',
    'Вам потрібно ввести електронну пошту!',
    'Вам потрібно ввести номер телефону!'
]

const errorMessagesInvalidList = [
    'Невірно введене ПІБ!',
    'Номер поштового відділення повинен бути більше 0!', 
    'Кількість повинна бути більше 0!',
    'Невірно введена електронна пошта',
    'Невірно введений номер!'
]

function checkField(value, pattern, emptyMessage, invalidMessage, messageIndex){
    let isFieldValid = true; 
    if (value === '') {
        errorMessages[messageIndex].textContent = emptyMessage[messageIndex];
        isFieldValid = false;
    }
    else{
        const validField = pattern.test(value);
        if(validField){
            errorMessages[messageIndex].textContent = ''
        } else{
            errorMessages[messageIndex].textContent = invalidMessage[messageIndex];
            isFieldValid = false;
        }
    }
    return isFieldValid;
}
    
sendButton.addEventListener('click', (event) => {
    
    event.preventDefault();
    const formData = new FormData(form);
    let isValid = true;

    formData.forEach((value, key) => {
        if(key === 'fullName') {
                isValid = checkField(value, fullNamePattern, errorMessagesEmptyList, errorMessagesInvalidList, 0)
           };
        if(key === 'numberPost') {
            if(value !== '' && value <= 0){
                errorMessages[1].textContent = 'Номер пошти повинен бути більше 0!';
            } else {
                errorMessages[1].textContent = ''
                isValid = checkField(value,'', errorMessagesEmptyList, errorMessagesInvalidList, 1);
            }
        };
        if(key === 'quantity') {
            if(value !== '' && value <= 0){
                    errorMessages[2].textContent = 'Кількість повинна бути більше 0!';
                } else {
                    errorMessages[2].textContent = ''
                    isValid = checkField(value,'', errorMessagesEmptyList, errorMessagesInvalidList, 2);
                }
            }
        if(key === 'email') {
            isValid = checkField(value, emailPattern, errorMessagesEmptyList, errorMessagesInvalidList, 3)
        };
        if(key === 'phoneNumber') {
            isValid = checkField(value, phoneNumberPattern, errorMessagesEmptyList, errorMessagesInvalidList, 4)
        } 
    
    })
        if(isValid) {
            form.style.display = 'none';
    
            errorMessages.forEach(errorMessage => {
                errorMessage.textContent = '';
            });
    
            resultMessage.style.display = 'block'
            const fullName = formData.get('fullName');
            const selectedCity = document.querySelector('[name="selectCity"]').selectedOptions[0].textContent;
            const numberPost = formData.get('numberPost');
            const quantity = formData.get('quantity');
            const payment = formData.get('payment');
            const email = formData.get('email');
            const phoneNumber = formData.get('phoneNumber');
    
            resultMessage.textContent = `Замовлення успішно оформлено! Інформація про замовлення: замовник: ${fullName}. Місто: ${selectedCity}, номер відділення ${numberPost}. Кількість: ${quantity}. Спосіб оплати: ${payment}. Електронна пошта: ${email}. Мобільний номер: ${phoneNumber}.`
        }
})



        

        

