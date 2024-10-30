function ajouterUneTache() {

    let tacheDetails = {
        titre: document.getElementById('titre').value,
        description: document.getElementById('description').value,
        status: document.getElementById('status').value,
        priorite: document.getElementById('priorite').value,
        date: document.getElementById('date').value,
    }

 

    let todoContainer =  document.getElementById('Todo');
    let newdiv = document.createElement('div');
    let heading = document.createElement('p');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');


    heading.textContent = tacheDetails.titre;
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Remove";

    if (tacheDetails.priorite == '1') {
        newdiv.classList.add("p-3", "mt-3", "P1");
    }

    if (tacheDetails.priorite == '2') {
        newdiv.classList.add("p-3", "mt-3", "P2");
    }

    if (tacheDetails.priorite == '3') {
        newdiv.classList.add("p-3", "mt-3", "P3");
    }


    heading.classList.add("h4");
    editBtn.classList.add("btn", "btn-primary");
    deleteBtn.classList.add("btn", "btn-primary");

    newdiv.appendChild(heading);
    newdiv.appendChild(editBtn);
    newdiv.appendChild(deleteBtn);

    todoContainer.appendChild(newdiv);
}


document.getElementById('valid').addEventListener('click', ajouterUneTache);