let TodoLists=[]
let Tasks = document.querySelector('.tasks')

const storage=localStorage.getItem('todos')

if(storage){
  TodoLists=JSON.parse(storage)
}
renderHTML() // add on the list and display it on the page          

function renderHTML(){

  let todolisthtml=''

  TodoLists.forEach( (TODO,index) => {
    // const TODO=TodoLists[i]
    const html = 
    `
    <div>${TODO.name}</div>
    <div>${TODO.date}</div>
    <button onkeydown="if(event.key==='backspace') {
      TodoLists.splice(${index},1)
      }" class='delete' onclick='
    TodoLists.splice(${index},1)
    renderHTML()
    '>Delete</button>
    `
    todolisthtml+=html
  })
  Tasks.innerHTML=todolisthtml

}

function addTodo(){      // to add on the list
  let date=document.querySelector('.Todo_date')
  let todo = document.querySelector(".todo");
  let date_value=date.value
  let input_value= todo.value

if(date.value=="" & todo.value==""){
  alert("Please fill in the form")
}else{
  TodoLists.push({name:input_value, 
  date:date_value})

  localStorage.setItem('todos', JSON.stringify(TodoLists))
}

  console.log(TodoLists)
  todo.value=""
  date.value=""
  renderHTML()
}

