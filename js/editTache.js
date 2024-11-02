function editTache(task) {
    let todoContainer =  task.parentElement;
    if(todoContainer.querySelector('select')) {
        return;
    }
    let choice = document.querySelectorAll('#status option');

    let newSelect = document.createElement('select');
    newSelect.setAttribute('onchange', "changeColumn(this)");
    newSelect.classList.add("form-control" ,"form-select", "mt-2");
    choice.forEach((choix, i) => {
        let newOption = document.createElement('option');
        newOption.value = i;
        newOption.textContent = choix.textContent;
        newSelect.appendChild(newOption);
    });

    todoContainer.appendChild(newSelect);
}

function changeColumn(task) {
    let todoContainer = document.getElementById('Todo');
    let doingContainer = document.getElementById('Doing');
    let doneCotainer = document.getElementById('Done');

    let clone = task.parentElement.cloneNode(true);

    let selectBar = clone.querySelector('select');
    if (selectBar) {
        selectBar.remove();
    }

    switch(task.value) {
        case '1':
            clone.dataset.status = '1';
            todoContainer.appendChild(clone);
            break;
        case '2':
            clone.dataset.status = '2';
            doingContainer.appendChild(clone);
            break;
        case '3':
            clone.dataset.status = '3';
            doneCotainer.appendChild(clone);
            break;
    }

    tempRemove(task.parentElement);
    updateCounters();
    
}

function tempRemove(task) {

    if (task) {
        task.remove();
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