document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('register-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstNameID').value.trim();
        const lastName = document.getElementById('lastNameID').value.trim();
        const email = document.getElementById('emailID').value.trim();
        const password = document.getElementById('passwordID').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked').value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

    
        let users = JSON.parse(localStorage.getItem('users')) || [];

       
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            gender: gender
        };

      
        users.push(newUser);

   
        localStorage.setItem('users', JSON.stringify(users));

        console.log('Success:', newUser);
        alert('Registration successful!');
    });


    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});
