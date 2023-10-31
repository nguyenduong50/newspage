'use strict';

//Save data to storage
function saveToStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

//Get data from Storage
function getFromStorage(key) {
    return JSON.parse(window.localStorage.getItem(key));
}
