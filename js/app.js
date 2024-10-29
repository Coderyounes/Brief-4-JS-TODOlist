document.addEventListener('DOMContentLoaded', () => {

    // create a function dislay all the Tasks exist in our localStorage
    // function calculate tasks based on their status
    // encapsulate the data inside Object
    // use Data Object

    // show the POPUP Box ( see how to display a div with text & downgrade page opacity)
    // take the data
    // validate Data
    // Display Data

    // load the target task
    // take the modifications
    // validate the modification
    // update the modifications
    // display the modification
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

});
