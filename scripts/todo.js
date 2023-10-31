'use strict';

//=============Varriable=============//

const todoList = document.getElementById("todo-list");
const btnAdd = document.getElementById("btn-add");
const inputTask = document.getElementById("input-task");

//=============Function=============//

function isDoneTask(index){
    ListTask[index].isDone = !ListTask[index].isDone;

    saveToStorage('ListTask', ListTask);
    renderTodoList();
}

function deleteTask(index){
    if(confirm('Are you delete?')){
        ListTask.splice(index, 1);
        saveToStorage('ListTask', ListTask);
        renderTodoList();
    }
}

function renderTodoList(){
    todoList.innerHTML = ``;
    for(let i = 0; i <= ListTask.length - 1; i++){
        let isDone = ListTask[i].isDone;
        let aClass = "";

        if(isDone === true){
            aClass = "checked";
        }
        else{
            aClass = "";
        }

        if(ListTask[i].owner === currentUser.userName){
            todoList.innerHTML += 
            `<li class="${aClass}"><a class="${aClass}" onclick="isDoneTask(${i})">${ListTask[i].task}</a><span class="close" onclick="deleteTask(${i})">x</span></li>`
        }
        
    }
}

//=============Event=============//

btnAdd.addEventListener('click', function(){
    //validate
    if(inputTask.value === ''){
        alert("Input Task missing");
        return;
    }

    //Add new Task
    const newTask = new Task(inputTask.value, currentUser.userName, false);
    ListTask.push(newTask);

    //Save list todo to Local storage
    saveToStorage('ListTask', ListTask);

    //Render List todo
    renderTodoList();

    //Clear input
    inputTask.value = '';
})

//=============Default program=============//

validateLogin();

renderTodoList();