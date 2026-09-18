const pieces = document.querySelectorAll(".piece");
const checkButton = document.getElementById("check-puzzle");
const gameMessage = document.getElementById("game-message");
const resultSection = document.getElementById("pottery-result");

let selectedPiece = null;

// 현재 퍼즐 상태
let puzzleState = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// 조각 클릭
pieces.forEach((piece, index) => {

    piece.addEventListener("click", () => {

        if (selectedPiece === null) {

            selectedPiece = index;

            piece.style.outline = "4px solid #d2a85a";

        } else {

            const firstIndex = selectedPiece;
            const secondIndex = index;

            // 배열에서 두 값 교환
            [
                puzzleState[firstIndex],
                puzzleState[secondIndex]
            ] = [
                puzzleState[secondIndex],
                puzzleState[firstIndex]
            ];

            // 화면 갱신
            updatePuzzle();

            // 선택 해제
            pieces[firstIndex].style.outline = "none";

            selectedPiece = null;
        }

    });

});


// 퍼즐 화면 업데이트
function updatePuzzle() {

    pieces.forEach((piece, index) => {

        piece.textContent = puzzleState[index];

    });

}


// 정답 확인
checkButton.addEventListener("click", () => {

    const answer = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const isCorrect =
        puzzleState.every(
            (value, index) => value === answer[index]
        );


    if (isCorrect) {

        gameMessage.textContent =
            "🎉 복원 성공! 빗살무늬 토기가 해금되었습니다.";

        gameMessage.style.color = "#8a6425";

        // 유물 정보 공개
        resultSection.classList.remove("hidden");

        // 페이지 이동
        resultSection.scrollIntoView({
            behavior: "smooth"
        });

    } else {

        gameMessage.textContent =
            "아직 조각이 맞지 않았습니다. 다시 맞춰보세요.";

        gameMessage.style.color = "#a94442";

    }

});