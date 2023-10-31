'use strict';

//=============Varriable=============//

const loginModal = document.getElementById("login-modal");
const welcomeMessage = document.getElementById("welcome-message");

const btnLogout = document.getElementById("btn-logout");

//=============Function=============//


//=============Event=============//

btnLogout.addEventListener('click', function(){
    // currentUser = '';
    // saveToStorage('currentUser', currentUser);
    // location.reload();

    localStorage.removeItem("currentUser");
    window.location.reload();
    // window.location.href = "../pages/login.html";
})

//=============Default program=============//

if(currentUser !== ''){
    loginModal.style.display = 'none';
    btnLogout.style.display = 'block';
    welcomeMessage.insertAdjacentHTML('afterbegin', `Welcome ${currentUser.firstName} ${currentUser.lastName}`);
}
else{
    loginModal.style.display = 'block';
    btnLogout.style.display = 'none';
}


