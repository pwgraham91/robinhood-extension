setTimeout(function(){
    setHeader();
    setData();
}, 5000);

function getHeaders() {
    return document.querySelectorAll('table.table thead tr th');
}

function setHeader() {
    let headers = getHeaders();
    document.querySelectorAll('table.table thead')[0].innerHTML = `${document.querySelectorAll('table.table thead')[0].innerHTML.slice(0, document.querySelectorAll('table.table thead')[0].innerHTML.length - 5)}${headers[0].outerHTML}</tr>`;

    headers = getHeaders();
    headers[headers.length -1].textContent = "Percent Return";
}

function setData() {
    const tableRows = document.querySelectorAll('div.col-13 table.table tbody tr');
    let row;
    for (let i = 0; i < tableRows.length; i++) {
        row = document.querySelectorAll(`table.table tbody tr:nth-child(${i + 1})`)[0];
        row.innerHTML = `${row.innerHTML.slice(0, row.innerHTML.length- 5)}${row.children[row.children.length -1].outerHTML}</tr>`;

        document.querySelectorAll(`table.table tbody tr:nth-child(${i + 1}) td:last-child`)[0].textContent = `${getPercentReturn(i)}%`
    }
}

function getPercentReturn(i) {
    const shares = document.querySelectorAll(`table.table tbody tr:nth-child(${i + 1}) td:nth-child(3)`)[0].textContent;
    const averageCost = document.querySelectorAll(`table.table tbody tr:nth-child(${i + 1}) td:nth-child(5)`)[0].textContent.slice(1);
    const totalCost = shares * averageCost;
    const totalReturn = document.querySelectorAll(`table.table tbody tr:nth-child(${i + 1}) td:nth-child(6)`)[0].textContent.slice(1);
    return ((totalReturn / totalCost) * 100).toFixed(2)
}

