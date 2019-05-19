class Form {
    constructor(element) {
        this.form = element;
        this.name = element.querySelector('#userName');
        this.email = element.querySelector('#userEmail');
        this.pw = element.querySelector('#userPw');
        this.profile = element.querySelector('#userProfile');
        this.joinButton = element.querySelector('.join-now');
        this.loginButton = element.querySelector('.log-in');
        // this.joinButton.addEventListener('click', () => this.store());
        this.loginButton.addEventListener('click', () => this.check());
    }

    // storing input from register-form
    store() {
        localStorage.setItem('name', this.name.value);
        localStorage.setItem('email', this.email.value);
        localStorage.setItem('pw', this.pw.value);
        localStorage.setItem('profile', this.profile.value);
    }

    // check if stored data from register-form is equal to entered data in the   login-form
    check() {

        // stored data from the register-form
        const storedName = localStorage.getItem('name');
        const storedPw = localStorage.getItem('pw');

        // entered data from the login-form
        this.name = document.querySelector('#userName');
        this.pw = document.querySelector('#userPw');

        // check if stored data from register-form is equal to data from login form
        if (this.name.value !== storedName || this.userPw.value !== storedPw) {
            alert('ERROR');
        } else {
            alert('You are loged in.');
        }
    }
}



let forms = document.querySelectorAll('.form-content').forEach(form => new Form(form));