// make sure to add the Description but make it look shorter & hide it 
// in expand function show the Description in Modal Box

function ajouterUneTache() {
    let modal = document.getElementById('popup');
    //let todoContainer =  document.getElementById('Todo');

    let tacheDetails = {
        titre: document.getElementById('titre').value,
        description: document.getElementById('description').value,
        status: document.getElementById('status').value,
        priorite: document.getElementById('priorite').value,
        date: document.getElementById('date').value,
    }


    if (tacheDetails.titre == "" || tacheDetails.titre.length > 100) {
        const titireError = document.getElementById('titreError');
        titireError.textContent = "Titre Error !";
        return;
    }

    if (tacheDetails.description == "" || tacheDetails.description > 3000) {
        const discriptionError = document.getElementById('descriptionError');
        discriptionError.textContent = "Description Error !";
        return;
    }

    if(!['1', '2', '3'].includes(tacheDetails.priorite)) {
        const prioriteError = document.getElementById('prioritéError');
        prioriteError.textContent = "definir une priorité";
        return;
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if(tacheDetails.date == "" || !dateRegex.test(tacheDetails.date)) {
        const dateError = document.getElementById('dateError');
        dateError.textContent = "Date Format Incorrect";
        return;
    }


    let newdiv = document.createElement('div');
    let heading = document.createElement('h1');
    let date = document.createElement('p');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');
    let expandBtn = document.createElement('button');


    heading.textContent = tacheDetails.titre;
    heading.setAttribute('onclick', "expandTache(this)");

    date.textContent = tacheDetails.date;

    // add Style to deleteBTN
    deleteBtn.setAttribute('onclick', "removeTache(this)");
    deleteBtn.textContent = "Remove";
    // add Style to EditBTN
    editBtn.textContent = "Edit";
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

    newdiv.setAttribute('data-description', tacheDetails.description);
    newdiv.setAttribute('data-status', tacheDetails.status);
    newdiv.setAttribute('data-priorite', tacheDetails.priorite);

    heading.classList.add("h4");
    deleteBtn.classList.add("btn", "btn-danger");
    editBtn.classList.add("btn", "btn-warning", "mx-4");


    newdiv.appendChild(heading);
    newdiv.appendChild(date);
    newdiv.appendChild(deleteBtn);
    newdiv.appendChild(editBtn);

    
    //todoContainer.appendChild(newdiv);
    tacheStatus(tacheDetails, newdiv);

    modal.style.display = "none";
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


document.getElementById('valid').addEventListener('click', ajouterUneTache);