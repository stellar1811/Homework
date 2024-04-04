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
        if (key === 'fullName' && value.trim() === '') {
            if (value === '') {
                errorMessages[0].textContent = 'Вам потрібно ввести ПІБ!';
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
        if (key === 'quontity') {
            if (value === '') {
                errorMessages[2].textContent = 'Вам потрібно ввести кількість!';
                isTrue = false;
            } else if (value <= 0) {
                errorMessages[2].textContent = 'Кількість повиннна бути більше 0!';
                isTrue = false;
            }
        }
    });

    if(isTrue) {

        errorMessages.forEach(errorMessage => {
            errorMessage.textContent = '';
        });
        resultMessage.style.display = 'block'
        const fullName = formData.get('fullName');
        const selectedCity = document.querySelector('[name="selectCity"]').selectedOptions[0].textContent;
        const numberPost = formData.get('numberPost');
        const quontity = formData.get('quontity');
        const payment = formData.get('payment');


        resultMessage.textContent = `Замовлення успішно оформлено! Інформація про замовлення: замовник: ${fullName}. Місто: ${selectedCity}, номер відділення ${numberPost}. Кількість: ${quontity}. Спосіб оплати ${payment}`;
        form.style.display = 'none';
    }

})
