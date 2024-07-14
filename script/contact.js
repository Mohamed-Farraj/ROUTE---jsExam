const uname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const age = document.getElementById('age');
const pass = document.getElementById('pass');
const repass = document.getElementById('repass');

const nameerr = document.getElementById('nameerr');
const emailerr = document.getElementById('emailerr');
const phoneerr = document.getElementById('phoneerr');
const ageerr = document.getElementById('ageerr');
const passerr = document.getElementById('passerr');
const repasserr = document.getElementById('repasserr');

let nameerrflag = true;
let emailerrflag = true;
let phoneerrflag = true;
let ageerrflag = true;
let passerrflag = true;
let repasserrflag = true;

const regexname = /^[A-Za-z]+$/;
const regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexpassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const button = document.getElementById('btn');

uname.addEventListener('input', function(e) {
    if(regexname.test(e.target.value)) {
        nameerr.classList.add('d-none');
        nameerrflag = false;
    } else {
        nameerr.classList.remove('d-none');
        nameerrflag = true;
    }
    checkbutton();
});

email.addEventListener('input', function(e) {
    if(regexemail.test(e.target.value)) {
        emailerr.classList.add('d-none');
        emailerrflag = false;
    } else {
        emailerr.classList.remove('d-none');
        emailerrflag = true;
    }
    checkbutton();
});

phone.addEventListener('input', function(e) {
    if (e.target.value.length > 9 && e.target.value.length < 15) {
        phoneerr.classList.add('d-none');
        phoneerrflag = false;
    } else {
        phoneerr.classList.remove('d-none');
        phoneerrflag = true;
    }
    checkbutton();
});

age.addEventListener('input', function(e) {
    if (e.target.value > 0 && e.target.value < 100) {
        ageerr.classList.add('d-none');
        ageerrflag = false;
    } else {
        ageerr.classList.remove('d-none');
        ageerrflag = true;
    }
    checkbutton();
});

pass.addEventListener('input', function(e) {
    if (regexpassword.test(e.target.value)) {
        passerr.classList.add('d-none');
        passerrflag = false;
    } else {
        passerr.classList.remove('d-none');
        passerrflag = true;
    }
    checkbutton();
});

repass.addEventListener('input', function(e) {
    if (pass.value === repass.value) {
        repasserr.classList.add('d-none');
        repasserrflag = false;
    } else {
        repasserr.classList.remove('d-none');
        repasserrflag = true;
    }
    checkbutton();
});

function checkbutton() {
    if(!nameerrflag && !emailerrflag && !phoneerrflag && !ageerrflag && !passerrflag && !repasserrflag) {
        button.classList.remove('disabled', 'btn-outline-danger');
    } else {
        button.classList.add('disabled', 'btn-outline-danger');
    }
}