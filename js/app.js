
    // create a function dislay all the Tasks exist in our localStorage
    // function calculate tasks based on their status
    // encapsulate the data inside Object
    // use Data Object

    // load the target task
    // take the modifications
    // validate the modification
    // update the modifications
    // display the modification

document.addEventListener('DOMContentLoaded', () => {

    // take the data
    // validate Data
    // Display Data
    let modal = document.getElementById('popup');
    let createTache = document.getElementById('create');
    let cancel = document.getElementById('cancel');

    createTache.onclick = function () {
        modal.style.display = "flex";
    }

    cancel.addEventListener('click', function () {
        modal.style.display = "none";
    });

    window.onclick = function (e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    }



    let validBtn = document.getElementById('valid');
    validBtn.onclick = function () {
        let tacheDetails = {
            titre: document.getElementById('titre').value,
            description: document.getElementById('description').value,
            priorité: document.getElementById('priorite').value,
            date: document.getElementById('date').value
        }
        modal.style.display = "none";
        
        console.log(tacheDetails);
    }


});
