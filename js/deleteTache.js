function removeTache(task) {

    if (task) {
        task.parentElement.remove();
    } else {
        alert("notask!");
    }
    
}