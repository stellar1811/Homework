const form = document.querySelector('form');
const loader = document.querySelector('.loader');

const loginButton = document.querySelector('.loginButton');
const email = document.querySelector('#emailField');
const password = document.querySelector('#passwordField');

loginButton.addEventListener('click', showLoader);
email.addEventListener('input', checkFields);
password.addEventListener('input', checkFields);

function checkFields(){
    const emailField = email.value.trim();
    const passwordField = password.value.trim();
    if(emailField !== '' && passwordField !== ''){
        loginButton.removeAttribute('disabled');
        loginButton.style.backgroundColor = 'orange';

        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    }
    console.log(email, password)
}

function showLoader(event){
    event.preventDefault()
    form.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(function() {
        loader.style.display = 'none';
        form.style.display = 'none'; 
        window.location.href = "profile.html";
    }, 2000);

}








