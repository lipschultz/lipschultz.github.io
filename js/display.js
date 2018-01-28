function toggleCodeDisplay() {
    var button = document.getElementById("toggleCodeButton");
    var displayValue = '';
    if (button.value == 'Show Code') {
        button.value = 'Hide Code';
        displayValue = 'block';
    }
    else {
        button.value = 'Show Code';
        displayValue = 'none';
    }

    var codeObjects = document.getElementsByClassName("language-python");
    var i;
    for (i = 0; i < codeObjects.length; i++) {
        codeObjects[i].style.display = displayValue;
    }
}
