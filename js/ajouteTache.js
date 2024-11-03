// make sure to add the Description but make it look shorter & hide it 
// in expand function show the Description in Modal Box

function ajouterUneTache(e) {
    let modal = document.getElementById('popup');
    //let todoContainer =  document.getElementById('Todo');
    e.preventDefault();
    let tacheDetails = {
        titre: titre.value,
        description: document.getElementById('description').value,
        status: document.getElementById('status').value,
        priorite: document.getElementById('priorite').value,
        date: document.getElementById('date').value,
    }

    if (tacheDetails.titre == "" || tacheDetails.titre.length > 100) {
        let titireError = document.getElementById('titreError');
        titireError.textContent = "Titre Error !";
        return;
    }

    if(tacheDetails.status == 0 || !['1', '2', '3'].includes(tacheDetails.status)){
        let statusError = document.getElementById('statusError');
        statusError.textContent = "Choisir Une Status";
        return;
    }

    if (tacheDetails.description == "" || tacheDetails.description > 3000) {
        let discriptionError = document.getElementById('descriptionError');
        discriptionError.textContent = "Description Error !";
        return;
    }

    if(!['1', '2', '3'].includes(tacheDetails.priorite)) {
        let prioriteError = document.getElementById('prioritéError');
        prioriteError.textContent = "definir une priorité";
        return;
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if(tacheDetails.date == "" || !dateRegex.test(tacheDetails.date)) {
        let dateError = document.getElementById('dateError');
        dateError.textContent = "Date Format Incorrect";
        return;
    }


    let newdiv = document.createElement('div');
    let heading = document.createElement('h1');
    let date = document.createElement('p');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');


    heading.textContent = tacheDetails.titre;
    heading.setAttribute('onclick', "expandTache(this)");

    date.textContent = tacheDetails.date;

    deleteBtn.setAttribute('onclick', "removeTache(this)");
    deleteBtn.id = "remove";
    deleteBtn.textContent = "Remove";

    editBtn.textContent = "Edit";
    editBtn.id = "edit";
    editBtn.setAttribute('onclick', "editTache(this)");

    if (tacheDetails.priorite == '1') {
        newdiv.classList.add("tacheBox","p-3", "mt-3", "P1");
    }

    if (tacheDetails.priorite == '2') {
        newdiv.classList.add("tacheBox", "p-3", "mt-3", "P2");
    }

    if (tacheDetails.priorite == '3') {
        newdiv.classList.add("tacheBox", "p-3", "mt-3", "P3");
    }
    newdiv.setAttribute('data-titre', tacheDetails.titre);
    newdiv.setAttribute('data-description', tacheDetails.description);
    newdiv.setAttribute('data-status', tacheDetails.status);

    switch(tacheDetails.priorite) {
        case '1':
            newdiv.setAttribute('data-priorite', 'P0');
            break;
        case '2':
            newdiv.setAttribute('data-priorite', 'P1');
            break;
        case '3':
            newdiv.setAttribute('data-priorite', 'P2');
            break;
    }
    newdiv.setAttribute('data-date', tacheDetails.date);
    
    heading.classList.add("h4");
    deleteBtn.classList.add("btn", "btn-danger");
    editBtn.classList.add("btn", "btn-warning", "mx-4");


    newdiv.appendChild(heading);
    newdiv.appendChild(date);
    newdiv.appendChild(deleteBtn);
    newdiv.appendChild(editBtn);

    
    tacheStatus(tacheDetails, newdiv);
    updateCounters();

    let span = document.getElementById('alert-ajoute');
    modal.style.display = "none";
    span.style.display = "block";
    ajouteAnimation();
    clear();
}


function tacheStatus(tacheDetails, newdiv) {
    let todoContainer =  document.getElementById('Todo');
    let doingContainer = document.getElementById('Doing');
    let doneContainer = document.getElementById('Done');

    if(tacheDetails.status == '1') {
        todoContainer.appendChild(newdiv);
    }

    if (tacheDetails.status == '2') {
        doingContainer.appendChild(newdiv)
    }

    if(tacheDetails.status == '3') {
        doneContainer.appendChild(newdiv);
    }
}

function ajouteAnimation() {
    let opacity = 1;
    let span = document.getElementById('alert-ajoute');

    function decrease() {
        opacity -= 0.01;
        if(opacity <= 0) {
            span.style.opacity = 0;
            span.style.display = "none";
        } else {
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

function clear() {
        let modal = document.getElementById('popup');
        modal.style.display = "none";

        const inputs = modal.querySelectorAll('input');
        inputs.forEach(input => input.value = '');

        const textarea = modal.querySelector('textarea');
        textarea.value = '';
        
        const selects = modal.querySelectorAll('select');
        selects.forEach(select => select.selectedIndex = 0);

        const spans = modal.querySelectorAll('.error-msg');
        spans.forEach(span => span.textContent = '');
}


document.getElementById('valid').addEventListener('click', ajouterUneTache);