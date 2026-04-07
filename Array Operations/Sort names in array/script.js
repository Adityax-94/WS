arr=[]



function clearr(){
     document.getElementById("task").value = ""
     document.getElementById("tasksUL").innerHTML =""
     arr=[]

}

function sort(){

    nar=arr.sort()
    document.getElementById("tasksUL").innerHTML =nar

}

function addTask() {

    newtask = document.getElementById("task").value
    arr.push(newtask)
    document.getElementById("task").value = ""


}