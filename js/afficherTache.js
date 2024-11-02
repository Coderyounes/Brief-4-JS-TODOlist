function expandTache(task) {
    let parent = task.parentElement;

    expandModal.style.visibility = "visible";
    expandModal.style.display = "flex";

    spanTitre.textContent = parent.dataset.titre;
    desc.textContent = parent.dataset.description;
    prior.textContent = parent.dataset.priorite;
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

function tracking() {
    // const myDiv = document.querySelector('#Todo');
    // myDiv.querySelectorAll('div').length;
    // queryall the element inside 3 colums 
    // on any Action or mouvement re-calculation should be performed
}

// function trigger, when the user add , edit or remove a task