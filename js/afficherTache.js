function expandTache(task) {
    let parent = task.parentElement;

    document.getElementById('expandModal');

    expandModal.style.visibility = "visible";

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
    // queryall the element inside 3 colums 
    // on any Action or mouvement re-calculation should be performed
}