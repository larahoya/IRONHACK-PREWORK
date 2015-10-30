
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);

  

  function addToDoItem() {
    var toDoInput = document.getElementById('todo-input').value;
    var toDoItem = document.createElement('li');
    toDoItem.innerText = toDoInput;
    var toDoList = document.getElementById('todo');
    toDoList.appendChild(toDoItem);
  }

  function markAsDone() {
    var toDoList = document.getElementById('todo');
    var FirstItem = toDoList.firstElementChild.nextElementSibling;
    
    toDoList.removeChild(FirstItem);

    var DoneItem = document.createElement('li');
    var DoneList = document.getElementById('done');
    DoneList.appendChild(DoneItem);
    DoneItem.setAttribute('class', 'done');
    DoneItem.innerText = FirstItem.innerText;

    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";
  }
  
}

