document.querySelector("#btn-organizar")
.addEventListener('click', (e) => {
    e.preventDefault();
    start();
});

document.querySelector("#btn-limpar")
.addEventListener('click', (e) => {
    e.preventDefault();
    limpar();
});

function start(){
    const text_ingles = document.querySelector('#texto_ingles');
    const texto_traduct = document.querySelector('#texto_traduct');

    const text_ingles_separado = text_ingles.value.split("\n");
    const text_traduct_separado = texto_traduct.value.split("\n");
    const res = [];
    
    for(let i = 0; i < text_ingles_separado.length; i++) {
        res.push([text_ingles_separado[i], text_traduct_separado[i]]);
    }

    const result_front = document.querySelector('#result');
    
    for(let y = 0; y < res.length; y++){
        result_front.innerHTML += `<li>${res[y][0]} = ${res[y][1]}</li>`;
    }
}

function limpar(){
    document.querySelector('#texto_ingles').value = '';
    document.querySelector('#texto_traduct').value = '';
    document.querySelector('#result').innerHTML = '';
}