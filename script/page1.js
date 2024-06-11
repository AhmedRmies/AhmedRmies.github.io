function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const checkmark = document.getElementById('checkmark');
    const validNumber = '+60173527250';

    if (phoneInput.value === validNumber) {
        checkmark.classList.add('valid');
    } else {
        checkmark.classList.remove('valid');
    }
}

function checkLoyaltyPoints() {
    const phone = document.getElementById('phone').value;
    if (phone === '+60173527250') {
        window.location.href = 'page2.html';
    } else {
        alert('Invalid mobile number. Please enter +60173527250 to check loyalty points.');
    }
}