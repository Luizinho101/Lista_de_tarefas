const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-tasks');
let minhaListaDeItens = [];

button.addEventListener('click', adicionarNovasTarefas);

function adicionarNovasTarefas() {
    minhaListaDeItens.push(input.value);
    mostrarTarefas();
}

function mostrarTarefas() {
    let novaLi = '';
    minhaListaDeItens.forEach(tarefa => {
        novaLi = novaLi + `
            <li class="task">${tarefa}</li>
        `;
    });
    listaCompleta.innerHTML = novaLi; // Movido para dentro da função mostrarTarefas
}
