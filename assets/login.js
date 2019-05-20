class Form {
    constructor(element) {
        this.form = element;
        this.name = element.querySelector('#userName');
        this.pw = element.querySelector('#userPw');
        this.loginButton = element.querySelector('.log-in');
        this.loginButton.addEventListener('click', () => this.check());
    }

    // check if stored data from register-form is equal to entered data in the   login-form
    check() {

        // stored data from the register-form
        const storedName = localStorage.getItem('name');
        const storedPw = localStorage.getItem('pw');

        // entered data from the login-form
        const name = document.querySelector('#userName').value;
        const pw = document.querySelector('#userPw').value;

        // check if stored data from register-form is equal to data from login form
        if (name !== storedName || pw !== storedPw) {
            alert('ERROR');
        } else {
            alert('You are loged in.');
        }
    }
}



let forms = document.querySelectorAll('.form-content').forEach(form => new Form(form));