document.addEventListener('DOMContentLoaded', function() {

    const forgotForm = document.getElementById('forgot-form');

    forgotForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;

        console.log(`Permintaan reset password untuk email: ${email}`);

        // Simulasi pengiriman email
        // Pesan ini penting untuk keamanan, agar orang tidak bisa menebak email mana yang terdaftar.
        alert('Proses selesai. Jika email Anda terdaftar di sistem kami, sebuah link untuk mereset password telah dikirimkan.');

        // Di masa depan, di sini kita akan mengirim 'email' ke backend.
    });

});