const form = document.getElementById('form-contato');
const Nomes = [];
const Numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionarLinha();
    atualizaTabela();
});

function adicionarLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

    if(Nomes.includes(inputNome.value)){
        alert(`Este contato: ${inputNome.value} já foi inserido`);
    } else {

    Nomes.push(inputNome.value);
    Numeros.push(parseFloat(inputNumero.value));
    
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}