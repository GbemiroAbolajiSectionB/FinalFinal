function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Implement your validation or login logic here
    console.log('Username:', username, 'Password:', password);
    
    // Placeholder logic for login success/failure
    if (username === 'user' && password === 'pass') {
        // Redirect to the home page or dashboard page after successful login
        window.location = 'finalhome.html'; // Replace 'home.html' with the URL or path to your target page
    } else {
        alert('Login failed!'); // Notify the user of a failed login attempt
    }
}
