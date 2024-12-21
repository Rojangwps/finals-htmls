//Start log in Page -----------------------------------------------------------------------------------------------
function showLogin() {
    document.getElementById('registerContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
}

function showRegister() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'block';
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        localStorage.setItem(username, password);
        document.getElementById('registerMessage').textContent = 'Registration successful! Redirecting to login...';
        document.getElementById('registerMessage').style.color = 'green';

        setTimeout(() => {
            showLogin();
            document.getElementById('registerMessage').textContent = '';
            document.getElementById('registerUsername').value = '';
            document.getElementById('registerPassword').value = '';
        }, 1500);
    } else {
        document.getElementById('registerMessage').textContent = 'Please fill in all fields.';
        document.getElementById('registerMessage').style.color = 'red';
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        document.getElementById('loginMessage').textContent = 'Login successful!';
        document.getElementById('loginMessage').style.color = 'green';
        alert('Welcome ' + username + '!');
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid username or password.';
        document.getElementById('loginMessage').style.color = 'red';
    }
}
// End Log in Page =======================================================================================================================
