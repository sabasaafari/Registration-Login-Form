document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

        const users = JSON.parse(localStorage.getItem('users')) || [];

     
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Login successful!');
            window.location.href = "../main.html";
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});
