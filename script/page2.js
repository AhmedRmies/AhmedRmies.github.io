document.getElementById('no-email-checkbox').addEventListener('change', function() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    if (this.checked) {
        emailInput.disabled = true;
        emailInput.value = '';
        emailError.style.display = 'none';
    } else {
        emailInput.disabled = false;
    }
});

function showError(elementId, messageId) {
    const element = document.getElementById(elementId);
    const message = document.getElementById(messageId);
    if (!element.value) {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
}

function register() {
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('birthday').value;
    const email = document.getElementById('email').value;
    const noEmail = document.getElementById('no-email-checkbox').checked;

    showError('name', 'name-error');
    showError('birthday', 'birthday-error');
    if (!noEmail) {
        showError('email', 'email-error');
    }

    if (name && birthday && (email || noEmail)) {
        localStorage.setItem('name', name);
        localStorage.setItem('birthday', birthday);
        localStorage.setItem('email', email || 'No email address');
        window.location.href = 'page3.html';
    }
}