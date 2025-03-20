const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if(!peso){
        setResult('Peso Inválido', false);
        return;
    }
    if(!altura){
        setResult('Altura Inválida', false)
        return;
    }

    const imc = getImc(peso, altura);
    const levelImc = getLevel(imc);
    setResult(`Seu IMC é ${imc} (${levelImc})`, true);
})

function getLevel(imc){
    const level = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 
        'Obesidade grau 2', 'Obesidade grau 3'];
    if(imc >= 39.9){
        return level[5];
    }  
     if(imc >= 34.9){
        return level[4];
    }
     if(imc >= 29.9){
        return level[3];
    }
     if(imc >= 24.9){
        return level[2];
    }
     if(imc >= 18.5){
        return level[1];
    }
     if(imc < 18.5){
        return level[0];
    }
}

function createsP(){
    const p = document.createElement('p');
    return p; 
}

function setResult(msg, isValid){
    const result = document.querySelector('#resultado');
    result.innerHTML = '';
    const p = createsP();

    if(isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    result.appendChild(p);
}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

