// Register form validation
const registerForm = document.getElementById('registerForm');
const passwordError = document.getElementById('password-error');

registerForm.addEventListener('submit', function(e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        passwordError.style.display = 'block';
        e.preventDefault();
    } else {
        passwordError.style.display = 'none';
    }
});

// Login form validation (just a placeholder, adapt as needed)
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('login-error');

loginForm.addEventListener('submit', function(e) {
    // Placeholder validation, adapt with real logic
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        loginError.style.display = 'block';
        e.preventDefault();
    } else {
        loginError.style.display = 'none';
    }
});
