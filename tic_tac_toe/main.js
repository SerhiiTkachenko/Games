// window.onload = function () {
//     for (var i = 0; i < 9; i++) {
//         document.getElementById('game').innerHTML +='<div class = "block"></div>';
//     }

//     var count = 0;

//     document.getElementById('game').onclick = function(event) {
//         console.log(event);
//         if (event.target.className == 'block') {
//             if (count % 2 == 0) {
//                 event.target.innerHTML = 'x';
//             }
//             else {
//                 event.target.innerHTML = '0';                
//             }
//             count++;
//             checkWin();
//         }
//     }

//     function checkWin() {
//         var allBlock = document.getElementsByClassName('block');
//         if (allBlock[0].innerHTML == 'x' && allBlock[1].innerHTML == 'x' && allBlock[2].innerHTML == 'x') alert('winner X');
//         if (allBlock[3].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && allBlock[5].innerHTML == 'x') alert('winner X');
//         if (allBlock[6].innerHTML == 'x' && allBlock[7].innerHTML == 'x' && allBlock[8].innerHTML == 'x') alert('winner X');
//         if (allBlock[0].innerHTML == 'x' && allBlock[3].innerHTML == 'x' && allBlock[6].innerHTML == 'x') alert('winner X');
//         if (allBlock[1].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && allBlock[7].innerHTML == 'x') alert('winner X');
//         if (allBlock[2].innerHTML == 'x' && allBlock[5].innerHTML == 'x' && allBlock[8].innerHTML == 'x') alert('winner X');
//         if (allBlock[0].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && allBlock[8].innerHTML == 'x') alert('winner X');
//         if (allBlock[2].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && allBlock[6].innerHTML == 'x') alert('winner X');
//         //zero
//         if (allBlock[0].innerHTML == '0' && allBlock[1].innerHTML == '0' && allBlock[2].innerHTML == '0') alert('winner 0');
//         if (allBlock[3].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[5].innerHTML == '0') alert('winner 0');
//         if (allBlock[6].innerHTML == '0' && allBlock[7].innerHTML == '0' && allBlock[8].innerHTML == '0') alert('winner 0');
//         if (allBlock[0].innerHTML == '0' && allBlock[3].innerHTML == '0' && allBlock[6].innerHTML == '0') alert('winner 0');
//         if (allBlock[1].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[7].innerHTML == '0') alert('winner 0');
//         if (allBlock[2].innerHTML == '0' && allBlock[5].innerHTML == '0' && allBlock[8].innerHTML == '0') alert('winner 0');
//         if (allBlock[0].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[8].innerHTML == '0') alert('winner 0');
//         if (allBlock[2].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[6].innerHTML == '0') alert('winner 0');

//     }
// }
//0 1 2
//3 4 5
//6 7 8
window.onload = function () {
    var t = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var game = document.getElementById('game');
    for (var i = 0; i < 9; i++) {
        game.innerHTML += '<div class = "block"></div>';
    }
    var allblock = document.getElementsByClassName('block');
    for (i = 0; i < allblock.length; i++) {
        allblock[i].index = i;
        allblock[i].addEventListener('click', function (event) {
            allblock[event.target.index].innerHTML = 'X';
            delete t[(t.indexOf(event.target.index))];

            function compareRandom(a, b) {
                return Math.random() - 0.5;
            }
            t.sort(compareRandom);
            allblock[t[0]].innerHTML = 'O';
            checkWin();
            t.shift();
        });
    }

    function checkWin() {
        var winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (var j = 0; j < winningCombinations.length; j++) {
            var wc = winningCombinations[j];
            if (allblock[wc[0]].innerHTML == allblock[wc[1]].innerHTML && allblock[wc[1]].innerHTML == allblock[wc[2]].innerHTML && allblock[wc[0]].innerHTML != '') {
                alert('WON!');
            }
        }
    }
}