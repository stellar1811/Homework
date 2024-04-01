const buyButton = document.querySelector('#showFormBtn');
const form = document.querySelector('#form');
const formLabels = document.querySelectorAll('#form > .form-label');
const sendButton = document.querySelector('#sendButton');


buyButton.addEventListener('click', () => {
    form.style.display = 'block'
}) 

sendButton.addEventListener('click', (event) => {
    event.preventDefault();
    const formData = {};
    let allInputsFilled = true;
    
    formLabels.forEach(label => {
            const inputs = label.querySelectorAll('input');

            inputs.forEach(input => {
                const message = document.createElement('span');
                message.classList.add('error-message'); 
                
                if(input.type === 'radio'){
                    const checkedRadio = label.querySelector('input[type="radio"]:checked');
                    if (!checkedRadio) {
                        message.textContent = "Це поле обов'язкове!";
                        label.appendChild(message);
                        allInputsFilled = false; 
                    } else {
                        formData[input.name] = checkedRadio.value;
                    }
                }
                else if(input.type === 'text'){
                    if (input.value.trim() === ''){
                        message.textContent = 'Вам потрібно ввести ПІБ!';
                        label.appendChild(message);
                        allInputsFilled = false; 
                    }
                
                }
                else if(input.type === 'number'){
                    if (input.value.trim() === ''){
                        message.textContent = "Це поле обов'язкове!";
                        label.appendChild(message);
                        allInputsFilled = false; 
                    }
                }    
                
                else {
                    formData[input.name] = input.value;
                }
            })
  
        })

    if(allInputsFilled) {
        
        const resultMessage = document.createElement('span');
        resultMessage.classList.add('result-message'); 
        resultMessage.textContent = `Замовлення успішно оформлено! Інформація про замовлення: замовник: ${formData.fullName}. Місто: ${formData.selectCity}, номер відділення ${formData['numberPost']}. Кількість: ${formData.quontity}. Спосіб оплати ${formData.payment}`;
        form.insertAdjacentElement('afterend', resultMessage); 
        form.style.display = 'none'; 
    }
        
                    
})
