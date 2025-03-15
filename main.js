
const form = document.getElementById('agenda')
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e){

    e.preventDefault();
    adicionaLinha();
    atualizaTabela();

})

function adicionaLinha() {

    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (nome.includes(inputNomeContato.value)){
        alert(`O nome: ${inputNomeContato.value} já existe na agenda.`);
    } else {
        nome.push(inputNomeContato.value);
        telefone.push(parseFloat(inputTelefoneContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>'

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';

}

function atualizaTabela() {

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}