// Getting input element
let filterInput = document.getElementById('input');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    // Getting value of input
    let filterValue = document.getElementById('input').value.toUpperCase();
