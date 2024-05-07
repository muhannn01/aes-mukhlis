// Fungsi untuk melakukan enkripsi menggunakan AES
function encryptAES() {
    const plaintext = document.getElementById('plaintext').value;
    const key = document.getElementById('key').value;
    const ciphertext = CryptoJS.AES.encrypt(plaintext, key).toString();
    document.getElementById('ciphertext').value = ciphertext;
}

// Fungsi untuk melakukan dekripsi menggunakan AES
function decryptAES() {
    const ciphertext = document.getElementById('ciphertext').value;
    const key = document.getElementById('key').value;
    const decrypted = CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);
    document.getElementById('ciphertext').value = decrypted; // Mengganti nilai ciphertext dengan hasil dekripsi
}

// Contoh penggunaan
const crypto = require('crypto'); // Memanggil modul crypto
const plaintext = 'Hello, world!';
const key = 'supersecretkey123';

const encryptedText = encryptAES(plaintext, key);
console.log('Encrypted:', encryptedText);

const decryptedText = decryptAES(encryptedText, key);
console.log('Decrypted:', decryptedText);
