document.addEventListener('DOMContentLoaded', function() {
    
    // --- KONEKSI KE SUPABASE (MENGGUNAKAN DATA ANDA) ---
    const SUPABASE_URL = 'https://mxnrrzloonoayubrepza.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14bnJyemxvb25vYXl1YnJlcHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxNDMyNzIsImV4cCI6MjA2NTcxOTI3Mn0.68aY3KNiAg3A2EsOgWBcpNXlo-CT22ARiJYG7Ef2xxk';
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    console.log('Supabase client initialized successfully!');

    // Fungsi untuk toggle password
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

    // Menerapkan toggle ke kedua input password
    createPasswordToggle(document.getElementById('password'), document.getElementById('toggle-password'), document.getElementById('eye-open-1'), document.getElementById('eye-slashed-1'));
    createPasswordToggle(document.getElementById('confirm-password'), document.getElementById('toggle-confirm-password'), document.getElementById('eye-open-2'), document.getElementById('eye-slashed-2'));

    // Logika untuk submit form registrasi
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validasi password
        if (password !== confirmPassword) {
            alert('Password dan Konfirmasi Password tidak cocok!');
            return;
        }

        // Mengirim data ke tabel 'users' di Supabase
        try {
            const { data, error } = await supabase
                .from('users')
                .insert([
                    { fullname: fullname, email: email, password: password },
                ])
                .select()

            if (error) {
                console.error('Error saat mendaftar:', error.message);
                alert('Gagal membuat akun: ' + error.message);
            } else {
                console.log('Akun berhasil dibuat:', data);
                alert(`Akun untuk ${fullname} berhasil dibuat! Silakan login.`);
                window.location.href = 'login.html'; // Arahkan ke halaman login
            }
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
            alert('Terjadi kesalahan yang tidak terduga.');
        }
    });
});