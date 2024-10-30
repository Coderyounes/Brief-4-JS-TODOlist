document.addEventListener('DOMContentLoaded', () => {

    let titre = document.getElementById('titre');
    let description = document.getElementById('description');

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
            const inputs = modal.querySelectorAll('input');
            const textarea = modal.querySelector('textarea');
            textarea.value = '';
            inputs.forEach(input => input.value = '');
        }
    }
});
