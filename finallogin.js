function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    console.log('Username:', username, 'Password:', password);


    if (username === 'user' && password === 'pass') {

        window.location = 'finalhome.html';
    } else {
        alert('Login failed!');
    }
}
