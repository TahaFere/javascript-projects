const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
console.log("hazırız Taha!");
var tasks =new Array();
function addTasks(){
console.log(input.value) 
if (input=="") return;
else{
    tasks.push(input)
    input.value="";
}
console.log(tasks)
}