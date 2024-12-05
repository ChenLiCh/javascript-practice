// 拜託!! 請勿調整或刪除，謝謝^_^=====================================================
window.addEventListener('load', () => {
    let tableTag = document.createElement('table');
    tableTag.className = 'table table-bordered'

    let theadTag = document.createElement('thead');
    let headerRow = document.createElement('tr');

    let header1 = document.createElement('th');
    header1.textContent = '問題';

    let header2 = document.createElement('th');
    header2.textContent = '答案';

    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    theadTag.appendChild(headerRow);
    let tbodyTag = document.createElement('tbody');
    const allAns = [ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10];

    allAns.forEach((value, index) => {
        let row = document.createElement('tr');

        let questionCell = document.createElement('td');
        questionCell.textContent = `Q${index + 1}`;

        let answerCell = document.createElement('td');
        answerCell.textContent = value;

        row.appendChild(questionCell);
        row.appendChild(answerCell);
        tbodyTag.appendChild(row);
    });

    tableTag.appendChild(theadTag);
    tableTag.appendChild(tbodyTag);

    document.body.insertAdjacentElement("afterbegin", tableTag);


})
// 拜託!! 請勿調整或刪除，謝謝^_^======================================================