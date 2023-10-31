'use strict';

//=============Varriable=============//

let currentUser = getFromStorage('currentUser') ?? '';

//=============Function=============//

function validateLogin(){
    if(currentUser === ''){
        window.location.href = "../pages/login.html";
    }
}
