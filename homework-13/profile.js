console.log(`Screen width: ${window.screen.width}px. Screen height: ${window.screen.height}px.`)

const backButton = document.querySelector('.backButton');
const backText = document.createTextNode('<Back');
backButton.appendChild(backText);

backButton.addEventListener('click', goBack);

function goBack(){
    history.back()
}

const email = sessionStorage.getItem('email');
const password = sessionStorage.getItem('password');
console.log(email, password);