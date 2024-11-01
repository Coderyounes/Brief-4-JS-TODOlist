function expandTache(task) {
    let Parent = task.parentElement;
    let expandModal = document.getElementById('expandModal');

    expandModal.style.display = "block";


    document.getElementById('retour').onclick = function () {
        expandModal.style.display = "none";
    }


    window.onclick = function(e) {
        if(e.target == expandModal) {
            expandModal.style.display = "none";
        }
    }

    
    


    // change new modal display
    // fill the new modal information
    // new modal shoud contain retour button & shoud have close on window


}


function tracking() {
    // queryall the element inside 3 colums 
    // on any Action or mouvement re-calculation should be performed
}