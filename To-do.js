let input = document.querySelector(".input")
let add = document.querySelector(".add")
let tasks = document.querySelector(".tasks")
let arreyOfTasks = [];
if(localStorage.getItem("tasks")){
    arreyOfTasks = JSON.parse(localStorage.getItem("tasks"))
}
getElementtoLocalStorige()
add.onclick = function(){
    if(input.value !== ""){
        
        createTask()
        input.value = ""
    }
}
function createTask(){
    const task = {
        id: Date.now(),
        title: input.value,
    }
    arreyOfTasks.push(task)
    addtasksforPage(arreyOfTasks)
    addElementtoLocalStorige(arreyOfTasks)
}
function addtasksforPage(arreyOfTasks){
    tasks.innerHTML = "";
    if(arreyOfTasks.length === 0){
        tasks.style.display = "none"
    }else{
        tasks.style.display = "block"
    }
    arreyOfTasks.forEach(task => {
        let div = document.createElement("div")
        div.setAttribute("data-id" , task.id)
        div.className = 'task'
        let p = document.createElement("p")
        p.appendChild(document.createTextNode(task.title))
        div.appendChild(p)
        let span = document.createElement("span")
        span.className = "del"
        span.setAttribute("onclick" , `deleteTask(${task.id})`)
        span.appendChild(document.createTextNode("delete"))
        div.appendChild(span)
        tasks.appendChild(div)
    })
}
function addElementtoLocalStorige(arreyOfTasks){
    localStorage.setItem("tasks" , JSON.stringify(arreyOfTasks))
}
function getElementtoLocalStorige(){
    let localTask = localStorage.getItem("tasks")
    if(localTask){
        let arreyOfTasks = JSON.parse(localTask)
        addtasksforPage(arreyOfTasks)
    }
}
function deleteTask(id){
    arreyOfTasks = arreyOfTasks.filter(task => task.id !== id)
    addElementtoLocalStorige(arreyOfTasks)
    addtasksforPage(arreyOfTasks); 
}

// =====================================================================>


