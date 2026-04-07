
arr = []
sum=0
high=0
low=1000000000000000

function addTask() {

    newtask = Number(document.getElementById("task").value)
    arr.push(newtask)
    document.getElementById("task").value = ""


}

function calc(){

    for (i=0;i<arr.length;i++){

        sum+=arr[i]
    }
    for (i=0;i<arr.length;i++){

        if(arr[i]>high)
        {
        high=arr[i]

        }
        if(arr[i]<low)
        {
        low=arr[i]
        
        }
    }

document.getElementById("tasksUL").innerHTML =  "Total marks = "+sum+"\n"+

 "Average marks = "+(sum/arr.length)+"\n"+
 "Highest = "+high+"\n"+
 "Lowest = "+low  

}

function clearr(){
     document.getElementById("task").value = ""
     document.getElementById("tasksUL").innerHTML =""
     arr=[]

}