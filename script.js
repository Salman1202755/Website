function moveBox() {
    var box = document.getElementById("box");
    var position = 0;
    var interval = setInterval(frame, 5);

    function frame() {
        if (position == 300) {
            clearInterval(interval);
        } else {
            position++;
            box.style.left = position + "px";
        }
    }
}