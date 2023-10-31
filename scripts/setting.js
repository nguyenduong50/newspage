'use strict';

//=============Varriable=============//

const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");

const btnSubmit = document.getElementById("btn-submit");

//=============Function=============//


//=============Event=============//

btnSubmit.addEventListener('click', function(){
    //validate
    if(inputPageSize.value === ''){
        alert("input page size missing");
        return;
    }

    if(inputPageSize.value <= 0){
        alert("please input page size more than 0");
        return;
    }

    if(inputPageSize.value == 'e'){
        alert("please input page size is number");
        return;
    }

    //Update Setting
    currentUser.category = inputCategory.value;
    currentUser.pageSize = inputPageSize.value;

    for(let i = 0; i <= ListUser.length - 1; i++){
        if(currentUser.userName === ListUser[i].userName){
            ListUser[i].category = currentUser.category;
            ListUser[i].pageSize = currentUser.pageSize;
        }
    }

    //Save to storage
    saveToStorage('currentUser', currentUser);
    saveToStorage('ListUser', ListUser);

    //Message update setting
    alert('Update Setting success');
})

//=============Default program=============//

validateLogin();

inputPageSize.value = currentUser.pageSize;
inputCategory.value = currentUser.category;

