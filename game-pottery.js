const pieces = document.querySelectorAll(".piece");
const checkButton = document.getElementById("check-puzzle");
const message = document.getElementById("game-message");
const success = document.getElementById("success");

let selected = null;

let puzzleState = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9
];


pieces.forEach((piece, index) => {

    piece.addEventListener("click", () => {

        if (selected === null) {

            selected = index;

            piece.style.outline = "4px solid white";

        } else {

            const first = selected;
            const second = index;


            // 두 조각의 위치 교환
            [
                puzzleState[first],
                puzzleState[second]
            ] = [
                puzzleState[second],
                puzzleState[first]
            ];


            updatePuzzle();


            pieces[first].style.outline = "none";

            selected = null;
        }

    });

});


function updatePuzzle() {

    pieces.forEach((piece, index) => {

        piece.textContent = puzzleState[index];

    });

}


checkButton.addEventListener("click", () => {

    const answer = [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9
    ];


    const correct = puzzleState.every(
        (value, index) => value === answer[index]
    );


    if (correct) {

        message.textContent =
            "🎉 복원에 성공했습니다!";

        success.classList.remove("hidden");

    } else {

        message.textContent =
            "아직 조각이 맞지 않았습니다.";

    }

});