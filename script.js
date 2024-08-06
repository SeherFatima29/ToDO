// let container = document.getElementById("container")
// container.innerHTML= "<li>"" +todos[i]+"</li>"


function addtodo() {
    let Todo=[]
    let inputValue=document.getElementById("ToDo").value
Todo.push(inputValue)
   console.log(Todo);
   for(var i=0; i<Todo.length; i++){
let container=document.getElementById("container")
container.innerHTML+="<li>"+Todo[i]+"</li>"
}
}
