document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('remember');

    // Check for saved email if remember me was checked
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberCheckbox.checked = true;
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const remember = rememberCheckbox.checked;

        // Basic validation
        if (!email || !password) {
            showError('Please fill in all fields');
            return;
        }

        if (!isValidEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }

        // Remember email if checkbox is checked
        if (remember) {
            localStorage.setItem('rememberedEmail', email);
        } else {
            localStorage.removeItem('rememberedEmail');
        }

        // Simulate login - Replace this with your actual login logic
        simulateLogin(email, password);
    });

    // Social login buttons
    document.querySelector('.google').addEventListener('click', () => {
        // Implement Google login
        console.log('Google login clicked');
    });

    document.querySelector('.facebook').addEventListener('click', () => {
        // Implement Facebook login
        console.log('Facebook login clicked');
    });
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(message) {
    // Create error element if it doesn't exist
    let errorElement = document.querySelector('.login-error');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'login-error';
        const loginForm = document.getElementById('loginForm');
        loginForm.insertBefore(errorElement, loginForm.firstChild);
    }

    // Show error message
    errorElement.textContent = message;
    errorElement.style.display = 'block';

    // Hide error after 3 seconds
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 3000);
}

function simulateLogin(email, password) {
    // Show loading state
    const submitButton = document.querySelector('.login-submit');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Signing in...';
    submitButton.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // For demo purposes, any login succeeds
        // In a real app, you would validate credentials with your backend
        
        // Store login state
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userEmail', email);

        // Redirect to home page
        window.location.href = '../index.html';
    }, 1500);
}

// Add styles for error message
const style = document.createElement('style');
style.textContent = `
    .login-error {
        background-color: #ff4444;
        color: white;
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 15px;
        text-align: center;
        display: none;
    }
`;
document.head.appendChild(style); 