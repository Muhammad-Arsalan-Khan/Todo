var input = document.getElementById("input");
var UL = document.getElementById("list-item");

function addtask() {
  if (input.value !== "") {
    var li = document.createElement("li");
    // console.log(li);
    UL.append(li);
    li.innerHTML = input.value;
    input.value = "";
    var span = document.createElement("span");
    var i = document.createElement("i");
    li.append(i);
    li.appendChild(span);
    span.innerHTML = "🗑️";
    i.innerHTML = "📝";
  } else {
    alert("enter the task");
  }
  saveData();
}

input.addEventListener("keypress", (event)=>{
  if(event.key === 'Enter') {
    addtask();
  }
})

UL.addEventListener("click", (e) => {
  // console.log(e.target.tagName);
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("lineThrough");
    saveData()
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
  } else if (e.target.tagName === "I") {
    // console.log(e.target.parentElement.firstChild.textContent)
    var currentTask = e.target.parentElement;
    var newTaskText = prompt("Edit your task", currentTask.firstChild.textContent.trim());
    if(newTaskText){
      currentTask.firstChild.textContent = newTaskText;
      saveData();
    }
  }
});
function saveData(){
    localStorage.setItem("task", UL.innerHTML)
}
function showData(){
    UL.innerHTML=localStorage.getItem("task");
}
showData();