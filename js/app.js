// 발표자를 선정하는 함수
function getRandomPresenter(numbers, count) {
    let selectedNumbers = [];
    while (selectedNumbers.length < count) {
        let randomIndex = Math.floor(Math.random() * numbers.length);
        let number = numbers[randomIndex];
        if (!selectedNumbers.includes(number)) {
            selectedNumbers.push(number);
        }
    }
    return selectedNumbers;
}
// 버튼 클릭 이벤트에 연결
const btn = document.getElementById("buttonId");
const result1 = document.getElementById("result1");

btn.addEventListener("click", function () {
    // 반환된 배열을 저장
    const array = getRandomPresenter(numbers, 7);
    // 자바스크립트는 자바와는 다르게 절차대로 실행되는게 아니고 한번에 실행되는 비동기
    // 때문에 작업마다 동일한 시간을 부여하면 동시에 나오는 문제점이 있었습니다.
    // 순서대로 나오게 하기 위해서 작업마다 시간에 가중치를 주어 순서대로 나오게했습니다.
    array.forEach((e, idx) => {
        // 시작할 때 비워주기
        result1.innerHTML = "";
        // 시간이 되면 작동
        setTimeout(() => {
            // 요소에대 html코드를 넣는 작업
            result1.innerHTML += `<div class=ball>${e}<div>`;
        }, 500 * (idx+1)) // idx를 통해 작업마다 가중치를 부여
    })
});
