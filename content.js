console.log('this is the thing')
setTimeout(function(){
    console.log(document.getElementsByClassName('table'))
    const copyableTH = document.querySelectorAll('table.table thead tr th')[0].outerHTML
    document.querySelectorAll('table.table thead')[0].innerHTML = `${document.querySelectorAll('table.table thead')[0].innerHTML.slice(0, document.querySelectorAll('table.table thead')[0].innerHTML.length - 5)}${copyableTH}</tr>`
    document.querySelectorAll('table.table thead tr th')[document.querySelectorAll('table.table thead tr th').length -1].textContent = "Percentage"
}, 5000);

