const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    // funcao para criar um elemento de lista (li)
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode ===13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
    //console.log(e); // mostra no console o evento 
});

function criaBtnApagar(li) {
    li.innerText += ' '; // o parametro recebe um espaco apenas para afastar o botao do elemento li
    const btnApagar = document.createElement('button'); // cria um botao
    btnApagar.innerText = 'Apagar'; // insere um texto ao botao
    //btnApagar.classList.add('apagar'); // podemos adicionar uma classe ao botatao criado de duas formas
    btnApagar.setAttribute('class', 'apagar'); // com setAttribute podemos inserir qualquer atributo a um elemento no HTML como por exemplo title ou href
    li.appendChild(btnApagar); // adiciona o filho ao parametro passado
}

function limpaInput() {
    inputTarefa.value = ''; // coloca um string vazia no input
    inputTarefa.focus(); // e faz com que o foco volte pos precionar Enter ou clicar no botao de adicionar tarefa
}

function criaTarefa(textoInput) {
    //adicionamos o texto que foi inserido no input a uma li no HTML
    const li = criaLi();
    li.innerHTML = textoInput; // o texto do input é adicionado a tag li
    tarefas.appendChild(li); // agora adicionamos um filho (li+textoInput) a ul com classe tarefas
    limpaInput();
    criaBtnApagar(li);
    salvarTarefas();
}
// capturamos o evento de click e quando clicamos no botao ele chama a funcao
btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return; // caso tenta enviar algo vazio no input nada acontece
    criaTarefa(inputTarefa.value);// aqui a funcao criaTarefa pega o texto que foi inserido no input
});

document.addEventListener('click', function(e) {
    const el = e.target;
    //console.log(el); // este log mostra o elemento que foi clicado
    if (el.classList.contains('apagar')) {
        //console.log(el.parentElement);// mostra o pai do elemento que foi clicado no caso o bortao de apagar (o batao de apagar é filho da tag li)
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); // pegamos todos os li de dentro da ul tarefas
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // convertemos o array em Strigs formato JSON
    // setItem recebe um nome e depois da , o conteudo
    localStorage.setItem('tarefas', tarefasJSON); // usando JSON ele salva o conteudo em uma pequena base de dados dentro do navegador porem com ele so consegue salvar strings por isso a conversao acima
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // conver de volta a String formato JSON para uma array

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();



