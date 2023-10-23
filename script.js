//your code here
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("src", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var src = document.getElementById(ev.dataTransfer.getData("src"));
    var dragId = src.id;
    var tgt = ev.currentTarget.id
    ev.currentTarget.id=dragId;
    src.id=tgt;
}