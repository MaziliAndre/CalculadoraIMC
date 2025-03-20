const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    console.log(inputPeso, inputAltura);
})

function createsP(){
    const p = document.createElement('p');
    return p; 
}

function setResult(msg){
    const result = document.querySelector('#resultado');
    result.innerHTML = '';
    const p = createsP();
}

