function removeTache(task) {
    let element = task.parentElement;
    if (element) {
        element.remove();
    } else {
        alert("notask!");
    }
}