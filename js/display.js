function toggleCodeDisplay() {
    var button = document.getElementById("toggleCodeButton");
    if (button.value == 'Show Code') {
        button.value = 'Hide Code';
    }
    else {
        button.value = 'Show Code';
    }

    var codeObjects = document.getElementsByClassName("language-python");
    var i;
    for (i = 0; i < codeObjects.length; i++) {
        if (codeObjects[i].style.display === "none") {
            codeObjects[i].style.display = "block";
        } else {
            codeObjects[i].style.display = "none";
        }
    }
}
