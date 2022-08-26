// Getting input element
let filterInput = document.getElementById('input');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    // Getting value of input
    let filterValue = document.getElementById('input').value.toUpperCase();
    // Getting names ul
    let ul = document.getElementById('names');
