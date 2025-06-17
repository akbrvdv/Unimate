document.addEventListener('DOMContentLoaded', function() {
    
    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password');
    const togglePasswordContainer = document.getElementById('toggle-password');
    const eyeOpenIcon = document.getElementById('eye-open');
    const eyeSlashedIcon = document.getElementById('eye-slashed');

    // --- LOGIKA UNTUK TOGGLE IKON MATA ---
    togglePasswordContainer.addEventListener('click', function() {
        const isPassword = passwordInput.getAttribute('type') === 'password';
        if (isPassword) {
            passwordInput.setAttribute('type', 'text');
            eyeOpenIcon.style.display = 'none';
            eyeSlashedIcon.style.display = 'block';
        } else {
            passwordInput.setAttribute('type', 'password');
            eyeOpenIcon.style.display = 'block';
            eyeSlashedIcon.style.display = 'none';
        }
    });

    // --- LOGIKA UNTUK SUBMIT FORM ---
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = passwordInput.value;
        console.log('Percobaan login dengan:', { Email: email, Password: password });
        alert('Login attempt captured! Check the console for details.');
    });
});