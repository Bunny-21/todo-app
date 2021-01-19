const btn = document.querySelector('#addBtn');
const btn2 = document.querySelector('#deleteBtn');

const ul = document.querySelector('ul');
const input = document.querySelector('input');

btn.addEventListener('click', addTodo);
btn2.addEventListener('click', deleteTodos);

let todosArray = [];

function deleteTodos() {
    const todos = localStorage.getItem('todos');
    localStorage.setItem("todos","");
    todosArray = [];
    ul.innerHTML = "";
}

function addTodo() {
    if(todosArray.length >= 7){
        alert('Max. todo limit reached');
        input.value = '';
        return;
    }
    if(input.value === ''){
        alert('Emty todos are not accepted');
    } else {
        const liNew = document.createElement('li');
        liNew.innerText = input.value;
        ul.appendChild(liNew);
        todosArray.push(input.value);
        localStorage,setItem("todos",JSON.stringify(todosArray));
    }
}

function getOldTodos() {
    const oldTodos = localStorage.getItem("todos");
    const arrayOldTodos = JSON.parse(oldTodos);

    arrayOldTodos.forEach(todo => {
     const liNew = document.createElement('li');
     liNew.innerText = todo;
     ul.appendChild(liNew);
     todosArray.push(todo);   
    });
}

getOldTodos();