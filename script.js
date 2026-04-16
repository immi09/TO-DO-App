// document.querySelector('button').addEventListener('click',newTask())
function newTask (){
 const task = document.createElement('li')
 const taskList = document.getElementById('taskList')
    taskList.appendChild(task)
    task.textContent = document.getElementById('toDo').value
    document.getElementById('toDo').value = ""
    deleteTask(task)
}

function deleteTask(task) {
   const deleteBtn =document.createElement('button')
    deleteBtn.textContent = "Delete"
    task.appendChild(deleteBtn)
    deleteBtn.onclick = function(){
        task.remove()
    }
}