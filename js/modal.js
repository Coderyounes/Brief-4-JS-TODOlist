document.addEventListener('DOMContentLoaded', () => {

    let modal = document.getElementById('popup');

    document.getElementById('create').onclick = function () {
        modal.style.display = "flex";
    }

    document.getElementById('cancel').onclick = function () {
        modal.style.display = "none";

        const inputs = modal.querySelectorAll('input');
        inputs.forEach(input => input.value = '');

        const textarea = modal.querySelector('textarea');
        textarea.value = '';
        
        const selects = modal.querySelectorAll('select');
        selects.forEach(select => select.selectedIndex = 0);

        const spans = modal.querySelectorAll('.error-msg');
        spans.forEach(span => span.textContent = '');
    };

    window.onclick = function (e) {
        if (e.target == modal) {
            modal.style.display = "none";

            const inputs = modal.querySelectorAll('input');
            inputs.forEach(input => input.value = '');

            const textarea = modal.querySelector('textarea');
            textarea.value = '';

            const selects = modal.querySelectorAll('select');
            selects.forEach(select => select.selectedIndex = 0);

            const spans = modal.querySelectorAll('.error-msg');
            spans.forEach(span => span.textContent = '');

        }
    }
});
