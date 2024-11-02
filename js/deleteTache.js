function removeTache(task) {
    let element = task.parentElement;
    if (element) {
        document.getElementById('alert-remove').style.display = "block";
        deleteAnimation(element);
    } else {
        alert("notask!");
    }
}

function deleteAnimation(task) {
    let opacity = 1;
    let span = document.getElementById('alert-remove');
    function decrease() {
        opacity -= 0.01;
        if(opacity <= 0) {
            task.style.opacity = 0;
            span.style.display = "none";
            task.remove();
            updateCounters();
        } else {
            task.style.opacity = opacity;
            span.style.opacity = opacity;
            requestAnimationFrame(decrease);
        }
    }
    decrease();
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