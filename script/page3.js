document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('phone-display').textContent = '+60173527250';
    document.getElementById('name-display').textContent = localStorage.getItem('name');
    document.getElementById('birthday-display').textContent = localStorage.getItem('birthday');
    document.getElementById('email-display').textContent = localStorage.getItem('email');
});