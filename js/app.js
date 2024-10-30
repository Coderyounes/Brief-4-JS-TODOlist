function ValidateForm(tacheDetails) {

    let isValid = true;

    const Erros = {
        titreError: "",
        descriptionError: "",
        statusError: "",
        prioritéError: "",
        date: "",
    }

    if (tacheDetails.titre == "" || tacheDetails.titre.length > 5) {
        Erros.titreError = "Error in titre";
        document.getElementById('titreError').textContent = Erros.titreError;
        isValid = false;
    }

    if (tacheDetails.description == "" || tacheDetails.description.length > 1000) {
        Erros.descriptionError = "Please Write a Description or make it shorter";
        document.getElementById('descriptionError').textContent = Erros.descriptionError;
        isValid = false;
    }


    // need to validate if it select one of options
    /*if(tacheDetails.status == "") {
        Erros.statusError = "Wrong Selection";
        document.getElementById('statusError').textContent = Erros.statusError;
        isValid = false;
    }

    // add validation to check if select one of the options
    if (tacheDetails.priorité = "") {
        Erros.prioritéError = "Wrong Selection";
        document.getElementById('prioritéError').textContent = Erros.prioritéError;
        isValid = false;
    }

    if (tacheDetails.date = "") {
        Erros.date = "Wrong date Format";
        document.getElementById('dateError').textContent = Erros.date;
        isValid = false;
    }*/
    
    return isValid;
}


document.addEventListener('DOMContentLoaded', () => {

    let modal = document.getElementById('popup');

    document.getElementById('create').onclick = function () {
        modal.style.display = "flex";
    }

    document.getElementById('cancel').onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    }


    // take the data
    // validate Data
    // Display Data

    document.getElementById('valid').onclick = function () {

        let tacheDetails = {
            titre: document.getElementById('titre').value,
            description: document.getElementById('description').value,
            priorité: document.getElementById('priorite').value,
            date: document.getElementById('date').value
        };

        let isValid = ValidateForm(tacheDetails);

        if (isValid) {
            // trigger to add function
        }

        //clearinputs
        //modal.style.display = "none";

        console.log(tacheDetails);
    }


});
