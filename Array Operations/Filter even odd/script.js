
arr=[]


function addTask() {

    newtask = Number(document.getElementById("task").value)
    arr.push(newtask)
    document.getElementById("task").value = ""


}

function even(){

    evennum=[]
    for (i=0;i<arr.length;i++){

        if(arr[i]%2==0)
        {
        evennum.push(arr[i])

        }
    }

    document.getElementById("tasksUL").innerHTML = "Even :"+evennum
}

function odd(){

    oddnum=[]
        for (i=0;i<arr.length;i++){

        if(arr[i]%2!=0)
        {
        oddnum.push(arr[i])

        }
    }

    document.getElementById("tasksUL").innerHTML = "Odd : "+oddnum
}

function clearr(){
     document.getElementById("task").value = ""
     document.getElementById("tasksUL").innerHTML =""
     arr[0]

}