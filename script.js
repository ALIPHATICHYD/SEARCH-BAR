// Getting input element
let filterInput = document.getElementById('input');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    // Getting value of input
    let filterValue = document.getElementById('input').value.toUpperCase();
    
    // Getting names ul
    let ul = document.getElementById('names');
    
   // Getting lis from ul
    let li = ul.querySelectorAll('li.collection-item');

      // Loop through collection-item list
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
