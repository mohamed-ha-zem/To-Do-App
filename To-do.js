// let input = document.querySelector(".input")
// let add = document.querySelector(".add")
// let tasks = document.querySelector(".tasks")

// window.onload = function(){
//     let results = JSON.parse(localStorage.getItem("results")) || []
//     if(results !== null && results.length > 0){
//         input.value = ""
//         El()
//     }
// }

// add.onclick = function(){
//     if(input.value !== ""){
//         let results = JSON.parse(localStorage.getItem("results")) || []
//         results.push({"value": input.value})
//         localStorage.setItem("results" , JSON.stringify(results))
//         input.value = ""
//         El()
//     }
// }

// function El(){
//     tasks.innerHTML = ""
//     let results = JSON.parse(localStorage.getItem("results")) || []
//     results.forEach((result , index) => {
//         tasks.innerHTML += `
//         <div class="task">
//             <p>${result.value}</p>
//             <button class="but" data-index="${index}">delete</button>
//         </div>
//         `
//     });

//     document.querySelectorAll(".but").forEach((button) => {
//         button.onclick = function(){
//             let index = button.getAttribute("data-index")
//             deletetask(index)
//         }
//     })

// }
// function deletetask(index){
//     let results = JSON.parse(localStorage.getItem("results")) || []
//     results.splice(index , 1)
//     localStorage.setItem("results" , JSON.stringify(results))
//     El()
// }

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


