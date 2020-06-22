// Moves the bar graph
function move(percent) {
    let i = 0;
    if (i == 0) {
        i = 1;
        let elem = document.getElementsById("mybar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= percent) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}