arr=["Audi","mercedes","farari","honda"]


function search(){
    flag=0

    ele = document.getElementById("task").value

    for (i=0;i<arr.length;i++){

        if(ele==arr[i]){

            document.getElementById("tasksUL").innerHTML =  ele
            flag=1
        }
        
    }
    if(flag==0){
        document.getElementById("tasksUL").innerHTML = "No Match Found"

    }
}