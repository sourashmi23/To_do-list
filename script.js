const inputBox=document.getElementById("input-box");
const lists=document.getElementById("list-conatiner");
function saveData(){
    localStorage.setItem("data",lists.innerHTML);
}
function addTask(){
    if(inputBox.value===''){
        alert("you must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        lists.append(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value='';
}
lists.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})
// function saveData(){
//     localStorage.setItem("data",lists.innerHTML);
// }
function showTask(){
    lists.innerHTML=localStorage.getItem("data");
}
showTask();