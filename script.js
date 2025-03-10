// script.js

document.addEventListener("DOMContentLoaded", function () {
    // 1. 각 테이블의 tbody를 가져옵니다.
    const tableBody1 = document.getElementById("audioTable1");
    const tableBody2 = document.getElementById("audioTable2");

    // 2. (예시) 모델 정보
    const models = [
        { name: "Model A", prefix: "modelA" },
        { name: "Model B", prefix: "modelB" },
        { name: "Model C", prefix: "modelC" }
    ];


    // 2. (예시) 모델 정보
    const models2 = [
        { name: "Model D", prefix: "modelA" },
        { name: "Model E", prefix: "modelB" },
        { name: "Model F", prefix: "modelC" }
    ];

    // 3. (예시) 각 테이블에 들어갈 mp3 파일 목록
    //    - 실제로는 서버에서 받아오거나, 다른 방식으로 정의할 수 있습니다.
    const group1Files = 1;
    const group2Files = 2;

    // 4. 테이블 행을 생성하는 함수
    //    - 어떤 테이블에 넣을지(tbody), 어떤 mp3 목록을 사용할지(files)를
    //      매개변수로 받아서 재사용할 수 있게끔 합니다.
    function createTableRow(model, files, tableBody) {
        const row = document.createElement("tr");

        // 첫 번째 열: 모델명
        row.innerHTML = `<td class="first-col">${model.name}</td>`;

        // 예시로 "샘플1_modelA.mp3" 형태의 파일명을 만든다고 가정
        const fileName = `샘플${files}_${model.prefix}.mp3`;
        row.innerHTML += `
            <td>
                <audio controls>
                    <source src="./mp3/${fileName}" type="audio/mpeg">
                    브라우저가 오디오를 지원하지 않습니다.
                </audio>
            </td>`;
        

        // 완성된 행을 지정된 table body에 추가
        tableBody.appendChild(row);
    }

    // 5. 첫 번째 테이블에 mp3 목록 생성
    models.forEach(model => {
        createTableRow(model, group1Files, tableBody1);
    });

    // 6. 두 번째 테이블에 mp3 목록 생성
    models2.forEach(model2 => {
        createTableRow(model2, group2Files, tableBody2);
    });
});
