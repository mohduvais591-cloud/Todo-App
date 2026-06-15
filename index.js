let todoList = [
  {
    item:'Buy milk', 
    duedate:'4/10/2023'
  }, 
  {
    item:'go to college', 
    duedate:'4/10/2023'
  }
];
displayTodo();
function addTodo(){
  let inputElement = document.querySelector('#input1')
  let dateElement = document.querySelector('#todo-date')
  let todoitem = inputElement.value
  let dateitem = dateElement.value
  todoList.push({item:todoitem, duedate:dateitem})
  inputElement.value = '';
  dateElement.value = '';
  displayTodo();
}

function displayTodo(){
  let displayElement = document.querySelector('#para')
  displayElement.innerText = '';
  for(let i=0; i<todoList.length; i++){
    displayElement.innerText = displayElement.innerText + "\n" + todoList[i]
    }
}

function displayTodo(){
  let containerElement = document.querySelector('.todo-container')
  let newHtml = '';
  for(let i=0; i<todoList.length; i++){
    let item = todoList[i].item;
    let duedate = todoList[i].duedate;
    newHtml+=`
    <span>${item}</span>
    <span>${duedate}</span>
    <button class="del-button" onClick="todoList.splice(${i},1); displayTodo();">Delete</button>
    `;
    }
    containerElement.innerHTML = newHtml;
}
