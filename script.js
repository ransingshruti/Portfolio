const menuLinks = document.querySelectorAll('nav ul li a');
const checkBox = document.getElementById('check');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        checkBox.checked = false;
    });
});


let form=document.querySelector('form');
console.log(form);