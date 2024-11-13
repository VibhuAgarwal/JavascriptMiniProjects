const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submit = document.getElementById('btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);        
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {        
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {        
        setErrorFor(password, 'Password cannot be blank');
    } else {        
        setSuccessFor(password);
    }

    if(confirmPasswordValue === '') {        
        setErrorFor(confirmPassword, 'Password cannot be blank');
    } else if (confirmPasswordValue !== passwordValue) {        
        setErrorFor(confirmPassword, 'Passwords do not match');
    } else {        
        setSuccessFor(confirmPassword);
    }
}

const setErrorFor = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccessFor = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isEmail = (email) => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email);
}