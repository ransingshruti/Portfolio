<<<<<<< HEAD
const menuLinks = document.querySelectorAll('nav ul li a');
const checkBox = document.getElementById('check');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        checkBox.checked = false;
    });
});


let form=document.querySelector('form');
=======
const menuLinks = document.querySelectorAll('nav ul li a');
const checkBox = document.getElementById('check');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        checkBox.checked = false;
    });
});


let form=document.querySelector('form');
>>>>>>> f256ac5172d87e51101f23dcb0d2ce2a975c5fe2
console.log(form);