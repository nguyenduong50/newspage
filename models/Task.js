'use strict'
class Task{
    constructor(task, owner, isDone){
        this.task = task;
        this.owner = owner;
        this.isDone = isDone;
    }
}

let ListTask = getFromStorage('ListTask') ?? [];