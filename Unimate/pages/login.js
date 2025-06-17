// Pesan ini akan muncul jika file JS berhasil dimuat
console.log('File login.js berhasil dimuat.');

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Event DOMContentLoaded terdeteksi. Script mulai berjalan.');

    // --- KONEKSI KE SUPABASE ---
    const SUPABASE_URL = 'https://mxnrrzloonoayubrepza.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14bnJyemxvb25vYXl1YnJlcHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxNDMyNzIsImV4cCI6MjA2NTcxOTI3Mn0.68aY3KNiAg3A2EsOgWBcpNXlo-CT22ARiJYG7Ef2xxk';
    
    // Pengecekan apakah library Supabase ada
    if (window.supabase) {
        console.log('Library Supabase ditemukan.');
        const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        console.log('Supabase client berhasil diinisialisasi.');
    } else {
        console.error('ERROR: Library Supabase tidak ditemukan! Pastikan script Supabase dimuat sebelum login.js');
        return; // Hentikan script jika Supabase tidak ada
    }

    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password');
    const togglePasswordContainer = document.getElementById('toggle-password');

    // Pengecekan apakah elemen-elemen penting ditemukan
    console.log('Mencari elemen form:', loginForm);
    console.log('Mencari elemen input password:', passwordInput);
    console.log('Mencari elemen tombol toggle:', togglePasswordContainer);


    // --- LOGIKA PERBAIKAN UNTUK TOGGLE PASSWORD ---
    if (togglePasswordContainer) {
        console.log('Tombol toggle ditemukan, menambahkan event listener...');
        togglePasswordContainer.addEventListener('click', function() {
            console.log('Tombol toggle DIKLIK!'); // Pesan ini akan muncul jika klik berhasil
            
            const icons = this.querySelectorAll('svg');
            if (icons.length < 2) {
                console.error('ERROR: Ikon SVG tidak ditemukan di dalam tombol toggle.');
                return;
            }
            const eyeOpenIcon = icons[0];
            const eyeSlashedIcon = icons[1];

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
    } else {
        console.error('ERROR: Tombol toggle dengan ID "toggle-password" tidak ditemukan di HTML.');
    }

    // --- LOGIKA UNTUK SUBMIT FORM LOGIN ---
    if (loginForm) {
        console.log('Form login ditemukan, menambahkan event listener...');
        loginForm.addEventListener('submit', async function(event) {
            // ... (logika submit tetap sama)
        });
    } else {
        console.error('ERROR: Form dengan ID "login-form" tidak ditemukan di HTML.');
    }
});