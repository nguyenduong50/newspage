'use strict'
class User{
    constructor(firstName, lastName, userName, passWord){
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.passWord = passWord;

        this.pageSize = 5;
        this.category = 'business';
    };
}

let ListUser = getFromStorage('ListUser') ?? [];