class Form {
    constructor(element) {
        this.form = element;
        this.name = element.querySelector('#userName');
        this.email = element.querySelector('#userEmail');
        this.pw = element.querySelector('#userPw');
        this.profile = element.querySelector('#userProfile');
        this.joinButton = element.querySelector('.join-now');
        this.loginButton = element.querySelector('.log-in');
        this.joinButton.addEventListener('click', () => this.store());
    }

    // storing input from register-form
    store() {
        localStorage.setItem('name', this.name.value);
        localStorage.setItem('email', this.email.value);
        localStorage.setItem('pw', this.pw.value);
        localStorage.setItem('profile', this.profile.value);
    }
}



let forms = document.querySelectorAll('.form-content').forEach(form => new Form(form));