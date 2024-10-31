function editTache(task) {

    let todoContainer =  task.parentElement;
    let choice = document.querySelectorAll('#status option');

    let newSelect = document.createElement('select');
    choice.forEach((choix, i) => {
        let newOption = document.createElement('option');
        newOption.value = i + 1;
        newOption.textContent = choix.textContent;
        newSelect.appendChild(newOption);
    });

    todoContainer.appendChild(newSelect);


}