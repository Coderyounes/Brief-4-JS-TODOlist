function expandTache(task) {
    let parent = task.parentElement;
    let prior = document.getElementById('prior');

    expandModal.style.visibility = "visible";
    expandModal.style.display = "flex";

    spanTitre.textContent = parent.dataset.titre;
    desc.textContent = parent.dataset.description;

    switch(parent.dataset.priorite) {
        case 'P0':
            prior.classList.remove('badge-warning', 'badge-success');
            prior.classList.add('badge-danger');
            prior.textContent = parent.dataset.priorite;
            break;
        case 'P1':
            prior.classList.remove('badge-danger', 'badge-success');
            prior.classList.add('badge-warning');
            prior.textContent = parent.dataset.priorite;
            break;
        case 'P2':
            prior.classList.remove('badge-warning', 'badge-danger');
            prior.classList.add('badge-success');
            prior.textContent = parent.dataset.priorite;
            break;
    }

    
    deadline.textContent = parent.dataset.date;

    document.getElementById('retour').onclick = function () {
        expandModal.style.visibility = "hidden";
    }

    window.onclick = function (e) {
        if (e.target == expandModal) {
            expandModal.style.visibility = "hidden";
        }
    }
}

// function trigger, when the user add , edit or remove a task