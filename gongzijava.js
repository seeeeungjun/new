let rowsPerPage = 20; // 한 페이지당 보여줄 행의 수

// 테이블의 모든 행 가져오기
let rows = document.querySelectorAll('#my-table tbody tr');
let rowsCount = rows.length; // 전체 행 개수
let pageCount = Math.ceil(rowsCount / rowsPerPage); // 총 페이지 수 계산

// 페이지 번호를 추가할 ul 선택
let numbers = document.querySelector('#numbers');
for (let i = 1; i <= pageCount; i++) {
    numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}

// 모든 페이지 번호 링크 가져오기
let numbersBtn = numbers.querySelectorAll('a');

// 행을 실제로 화면에 표시하는 함수
function displayRow(idx) {
    let start = idx * rowsPerPage; // 시작 행 번호
    let end = start + rowsPerPage; // 끝 행 번호
    let rowsArray = Array.from(rows);

    // 모든 행 숨기기
    for (let ra of rowsArray) {
        ra.style.display = 'none';
    }

    // 현재 페이지에 해당하는 행만 보이기
    let newRows = rowsArray.slice(start, end);
    for (let nr of newRows) {
        nr.style.display = '';
    }

    // 모든 번호에서 active 클래스 제거
    for (let nb of numbersBtn) {
        nb.classList.remove('active');
    }

    // 현재 선택한 페이지 번호에 active 클래스 추가
    numbersBtn[idx].classList.add('active');
}

// 페이지 번호 클릭 이벤트 설정
numbersBtn.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        e.preventDefault(); // 링크 클릭 시 화면 이동 막기
        displayRow(index); // 해당 페이지의 행 표시
    });
});

// 처음 로딩 시 첫 페이지 표시
displayRow(0);