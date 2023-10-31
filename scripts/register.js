'use strict';

//=============Varriable=============//

//Form input
const inputFirstName = document.getElementById("input-firstname");
const inputLastName = document.getElementById("input-lastname");
const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password-confirm");

//Button
const btnSubmit = document.getElementById("btn-submit");

//=============Function=============//

function clearInput() {
    inputFirstName.value = '';
    inputLastName.value = '';
    inputUserName.value = '';
    inputPassword.value = '';
    inputPasswordConfirm.value = '';
}

//=============Event=============//

btnSubmit.addEventListener('click', function () {
    //Validate input
    if (inputFirstName.value === '') {
        alert('Input first name missing');
        return;
    }
    if (inputLastName.value === '') {
        alert('Input last name missing');
        return;
    }
    if (inputUserName.value === '') {
        alert('Input user name missing');
        return;
    }
    if (inputPassword.value === '') {
        alert('Input password missing');
        return;
    }

    if(inputPassword.value.length <= 8){
        alert('Password length must more than 8');
        return;
    }

    if (inputPasswordConfirm.value === '') {
        alert('Input confirm password missing');
        return;
    }
    if (inputPasswordConfirm.value !== inputPassword.value) {
        alert('Password and Confirm Password do not match');
        return;
    }

    //Validate User unique
    for(let i = 0; i <= ListUser.length - 1; i++){
        if(inputUserName.value === ListUser[i].userName){
            alert('User Name unique');
            return;
        }
    }

    //Add new User
    let newUser = new User(inputFirstName.value, inputLastName.value, inputUserName.value, inputPassword.value);
    ListUser.push(newUser);

    //Clear Input
    clearInput();

    //Save new User to Local Storage
    saveToStorage('ListUser', ListUser);

    //Redirect to Login page
    window.location.href = '../pages/login.html';
})

//=============Default program=============//


