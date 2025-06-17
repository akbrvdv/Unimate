document.addEventListener('DOMContentLoaded', function() {
    
    // Helper function untuk membuat toggle password
    function createPasswordToggle(passwordInput, toggleContainer, eyeOpen, eyeSlashed) {
        toggleContainer.addEventListener('click', function() {
            const isPassword = passwordInput.getAttribute('type') === 'password';
            if (isPassword) {
                passwordInput.setAttribute('type', 'text');
                eyeOpen.style.display = 'none';
                eyeSlashed.style.display = 'block';
            } else {
                passwordInput.setAttribute('type', 'password');
                eyeOpen.style.display = 'block';
                eyeSlashed.style.display = 'none';
            }
        });
    }

    // Toggle untuk input password pertama
    createPasswordToggle(
        document.getElementById('password'),
        document.getElementById('toggle-password'),
        document.getElementById('eye-open-1'),
        document.getElementById('eye-slashed-1')
    );

    // Toggle untuk input konfirmasi password
    createPasswordToggle(
        document.getElementById('confirm-password'),
        document.getElementById('toggle-confirm-password'),
        document.getElementById('eye-open-2'),
        document.getElementById('eye-slashed-2')
    );

    // Logika untuk submit form registrasi
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validasi: Cek apakah password dan konfirmasi password cocok
        if (password !== confirmPassword) {
            alert('Password dan Konfirmasi Password tidak cocok!');
            return; // Hentikan proses jika tidak cocok
        }

        // Jika cocok, lanjutkan proses (untuk sekarang hanya console log)
        console.log('Akun baru berhasil dibuat:');
        console.log('Nama Lengkap:', fullname);
        console.log('Email:', email);
        console.log('Password:', password);

        alert(`Akun untuk ${fullname} berhasil dibuat! (Cek console untuk detail)`);
        // Di masa depan, data ini akan dikirim ke backend
        // dan pengguna akan diarahkan ke halaman verifikasi KTM
    });

});