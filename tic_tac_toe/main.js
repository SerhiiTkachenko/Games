window.onload = function () {
    for (var i = 0; i < 9; i++) {
        document.getElementById('game').innerHTML +='<div class = "block"></div>';
    }

    var count = 0;

    document.getElementById('game').onclick = function(event) {
        console.log(event);
        if (event.target.className == 'block') {
            if (count % 2 == 0) {
                event.target.innerHTML = 'X';
            }
            else {
                event.target.innerHTML = '0';                
            }
            count++;
            checkWin();
        }
    }

    function checkWin() {
        var allBlock = document.getElementsByClassName('block');
        
    }
}
