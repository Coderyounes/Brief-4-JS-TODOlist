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

// function trigger, when the user add , edit or remove a task