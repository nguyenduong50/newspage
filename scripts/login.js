'use strict';

//=============Varriable=============//

//Form input
const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");

//Button
const btnSubmit = document.getElementById("btn-submit");

//=============Function=============//

function clearInputLogin(){
    inputUserName.value = '';
    inputPassword.value = '';
}

//=============Event=============//

btnSubmit.addEventListener('click', function () {
    //Validate input
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

    //Validate Login
    let validate = false;

    for(let i = 0; i <= ListUser.length - 1; i++){
        if(inputUserName.value === ListUser[i].userName && inputPassword.value === ListUser[i].passWord){
            validate = true;
            currentUser = ListUser[i];
            saveToStorage('currentUser', currentUser);
        }
    }
 
    //Redirect Login
    if(validate === true){
        window.location.href = '../index.html';
    }
    else{
        alert("username or password wrong");
        clearInputLogin();
        return;
    }
})

//=============Default program=============//

if(currentUser !== ''){
    inputUserName.disabled = true;
    inputPassword.disabled = true;
    btnSubmit.disabled = true;
}
else{
    inputUserName.disabled = false;
    inputPassword.disabled = false;
    btnSubmit.disabled = false;
}
