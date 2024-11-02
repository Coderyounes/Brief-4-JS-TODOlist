function removeTache(task) {
    let element = task.parentElement;
    if (element) {
        element.remove();
        updateCounters();
    } else {
        alert("notask!");
    }
}


function updateCounters() {
    let todoBlock = document.getElementById('Todo');
    let doingBlock = document.getElementById('Doing');
    let doneBlock = document.getElementById('Done');

    let counterTodo = todoBlock.querySelectorAll('div');
    let counterDoing = doingBlock.querySelectorAll('div');
    let counterDone = doneBlock.querySelectorAll('div');

    let todoCount = document.getElementById('todoCount');
    let doingCount = document.getElementById('doingCount');
    let doneCount = document.getElementById('doneCount');

    todoCount.textContent = counterTodo.length;
    doingCount.textContent = counterDoing.length;
    doneCount.textContent = counterDone.length;
}