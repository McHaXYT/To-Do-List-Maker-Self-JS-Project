const inputText = document.getElementById('input-text');
const saveBtn = document.getElementById('saveBtn');
var todoUl = document.getElementById('todoul');

function saveToDoList() {
    saveBtn.addEventListener('click', () => {
        var userInput = inputText.value;
        var todoliContainer = document.createElement('div');
        var todoLi = document.createElement('li');
        var todoliClearBtn = document.createElement('i');
        todoliClearBtn.className = 'fa-regular fa-trash-can'
        todoliClearBtn.setAttribute('id', 'cleartext');
        todoliContainer.setAttribute('id', 'todolicontainer');
        todoliContainer.classList.add('todo-li-container');
        todoUl.appendChild(todoliContainer);
        todoliContainer.appendChild(todoLi);
        todoliContainer.appendChild(todoliClearBtn);
        todoLi.classList.add('todo-li');
        todoLi.innerHTML = userInput;
        document.getElementById('input-text').value = ''
        todoliClearBtn.addEventListener('click', () => {
            todoliContainer.remove();
        });
    });
    inputText.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("saveBtn").click();
        }
      })
};

saveToDoList()


