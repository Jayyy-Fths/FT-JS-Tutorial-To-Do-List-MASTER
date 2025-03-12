// CODE EXPLAINED channel
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

let LIST, id;

let data = localStorage.getItem("TODO");

if(data){
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
}else{
    LIST = [];
    id = 0;
}

function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
        if (item.done) {
            document.getElementById(item.id)?.classList.add(CHECK);
            document.getElementById(item.id)?.classList.remove(UNCHECK);
        }
    });
}


clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})

const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();


dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }
