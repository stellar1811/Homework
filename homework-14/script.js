const buyButton = document.querySelector('#showFormBtn');
const form = document.querySelector('#form');

const sendButton = document.querySelector('#sendButton');
const errorMessages = document.querySelectorAll('.error-message');
const resultMessage = document.querySelector('.result-message');



buyButton.addEventListener('click', () => {
    form.style.display = 'block'
}) 

sendButton.addEventListener('click', (event) => {
    
    event.preventDefault();
    const formData = new FormData(form);
    let isTrue = true;

    formData.forEach((value, key) => {
        if (key === 'fullName') {
            if (value === '') {
                errorMessages[0].textContent = 'Вам потрібно ввести ПІБ!';
                isTrue = false;
            }

            const fullName = value;
            const pattern = /^[А-ЯІЇЄҐ][а-яіїєґ' ]+[А-ЯІЇЄҐ][а-яіїєґ' ]+[А-ЯІЇЄҐ][а-яіїєґ' ]+$/;
            const isFieldValid = pattern.test(fullName);

            if(isFieldValid){
                errorMessages[0].textContent = ''
            } else{
                errorMessages[0].textContent = 'Невірно введене ПІБ!'
                isTrue = false;
            }

            
        };

          
        if (key === 'numberPost') {
            if (value === '') {
                errorMessages[1].textContent = 'Вам потрібно ввести номер поштового відділення!';
                isTrue = false;
            } else if (value <= 0) {
                errorMessages[1].textContent = 'Номер поштового відділення повинен бути більше 0!';
                isTrue = false;
            }
        }
        if (key === 'quantity') {
            if (value === '') {
                errorMessages[2].textContent = 'Вам потрібно ввести кількість!';
                isTrue = false;
            } else if (value <= 0) {
                errorMessages[2].textContent = 'Кількість повиннна бути більше 0!';
                isTrue = false;
            }
        }
        if (key === 'email') {
            if (value === '') {
                errorMessages[3].textContent = 'Вам потрібно ввести електронну пошту!';
                isTrue = false;
            }

            const email = value;
            const pattern = /^[A-Za-z0-9._%+-]+@[a-z]+\.[a-z]+$/;
            const isFieldValid = pattern.test(email);

            if(isFieldValid){
                errorMessages[3].textContent = ''
            } else{
                errorMessages[3].textContent = 'Невірно введена електронна пошта';
                isTrue = false
            }
        }
        if (key === 'phone-number') {
            if (value === '') {
                errorMessages[4].textContent = 'Вам потрібно ввести номер телефону!';
                isTrue = false;
            }
            const phoneNumber = value;
            const pattern = /^(\+?38)?(\-\s)?0\d{9,}$/
            const isFieldValid = pattern.test(phoneNumber);
            if(isFieldValid){
                errorMessages[4].textContent = ''
            } else{
                errorMessages[4].textContent = 'Невірно введений номер!';
                isTrue = false
            }
            
        }
    });

    if(isTrue) {
        form.style.display = 'none';

        errorMessages.forEach(errorMessage => {
            errorMessage.textContent = '';
        });

        resultMessage.style.display = 'block'
        const fullName = formData.get('fullName');
        const selectedCity = document.querySelector('[name="selectCity"]').selectedOptions[0].textContent;
        const numberPost = formData.get('numberPost');
        const quontity = formData.get('quantity');
        const payment = formData.get('payment');
        const email = formData.get('email');
        const phoneNumber = formData.get('phone-number');


        resultMessage.textContent = `Замовлення успішно оформлено! Інформація про замовлення: замовник: ${fullName}. Місто: ${selectedCity}, номер відділення ${numberPost}. Кількість: ${quontity}. Спосіб оплати ${payment}. Електронна пошта ${email}. Мобільний номер ${phoneNumber}.`
    }

})
