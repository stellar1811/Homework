const inputArea = document.getElementById('inputArea');
const div = document.getElementById('divEl');

inputArea.addEventListener('focus', function() {
    div.style.display = 'block';
    div.style.color = 'violet';
    div.textContent = '<div>'
});

inputArea.addEventListener('blur', function() {
    div.style.display = 'none';
});