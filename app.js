var todoItems = document.querySelectorAll('li');
var addBtn = document.querySelector('.add-btn');
var newTodoInput = document.querySelector('.new-todo-input');
var todoList = document.querySelector('.todo-list');
var form = document.querySelector('form');
var completedCountSpan = document.querySelector('.completed-count-span');
var footer = document.querySelector('footer');
var resetBtn = document.querySelector('.reset-btn');

var checkAllDone = function() {
  if (document.querySelectorAll('.completed').length === document.querySelectorAll('li').length) {
    footer.classList.remove('hidden');
  } else {
    footer.classList.add('hidden');
  } 
}

var resetAllItems = function() {
  var allItems = document.querySelectorAll('.completed');

  // for (var i = 0; i < allItems.length; i++) {
  //   allItems[i].classList.remove('completed');
  // }

  allItems.forEach(function(item) {
    item.classList.remove('completed');
  });

  completedCountSpan.textContent = document.querySelectorAll('.completed').length;
}

var markComplete = function(event) {
  event.target.classList.toggle('completed');
  completedCountSpan.textContent = document.querySelectorAll('.completed').length;
  checkAllDone();
}

var addTodoItem = function(event) {
  event.preventDefault();
  
  var newListItem = document.createElement('li');
  newListItem.classList.add('todo-item');
  newListItem.textContent = newTodoInput.value
  newListItem.addEventListener('click', markComplete);
  
  todoList.appendChild( newListItem );
  
  newTodoInput.value = ''; // clear input box
  checkAllDone(); 
}

// for (var i = 0; i < todoItems.length; i++) {
//   todoItems[i].addEventListener('click', markComplete)
// }

todoItems.forEach(function(todoItem) {
  todoItem.addEventListener('click', markComplete)
})

// addBtn.addEventListener('click', addTodoItem);
resetBtn.addEventListener('click', resetAllItems);
form.addEventListener('submit', addTodoItem);

