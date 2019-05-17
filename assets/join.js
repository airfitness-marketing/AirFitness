// Name and Password from the register-form
const name = document.getElementById('userName');
const email = document.getElementById('userEmail');
const pw = document.getElementById('userPw');
const profile = document.getElementById('userProfile');

// storing input from register-form
function store() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('pw', pw.value);
    localStorage.setItem('profile', profile.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    const storedName = localStorage.getItem('name');
    const storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;

    // check if stored data from register-form is equal to data from login form
    if (userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    } else {
        alert('You are loged in.');
    }
}