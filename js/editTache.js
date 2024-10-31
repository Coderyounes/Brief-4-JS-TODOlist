function editTache(task) {
    let todoContainer =  task.parentElement;
    if(todoContainer.querySelector('select')) {
        return;
    }
    let choice = document.querySelectorAll('#status option');

    let newSelect = document.createElement('select');
    newSelect.setAttribute('onchange', "changeColumn(this)")
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
            todoContainer.appendChild(clone);
            break;
        case '2':
            doingContainer.appendChild(clone);
            break;
        case '3':
            doneCotainer.appendChild(clone);
            break;
    }

    tempRemove(task.parentElement);
    
}

function tempRemove(task) {

    if (task) {
        task.remove();
    } else {
        alert("notask!");
    }
}