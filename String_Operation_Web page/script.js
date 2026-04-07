


function check_vowels()
{

let a=document.getElementById("ta")
let str=a.value
let count =0

for(let i=0;i<str.length;i++){

    if (str[i]=="a" || str[i]=="e"|| str[i]=="i"|| str[i]=="o"|| str[i]=="u"){
            count++
    }   
}

document.getElementById("res").textContent= count

}

function check_consonents(){

let a=document.getElementById("ta")
let str=a.value
let count =0

for(let i=0;i<str.length;i++){

    if (str[i]!="a" && str[i]!="e"&& str[i]!="i" && str[i]!="o" && str[i]!="u"){
            count++
    }   
}

document.getElementById("res").textContent= count
}

function count_space(){

let a=document.getElementById("ta")
let str=a.value
let count =0

for(let i=0;i<str.length;i++){

    if (str[i]==" "){
            count++
    }   
}
document.getElementById("res").textContent= count
}


function count_newlines(){
 
let a=document.getElementById("ta")
let str=a.value
let count =0

for(let i=0;i<str.length;i++){

    if (str[i]=="\n"){
            count++
    }   
}
document.getElementById("res").textContent= count+1
}

function longestWord(){

    let a=document.getElementById("ta")
    let str=a.value
    let lw=""
    let longestw=""
    let lwl=0
    let wordcount=0

    for(let i=0;i<str.length;i++){


        while(i < str.length && str[i] != " " && str[i] != "\n"){
            lw=lw+str[i]
            wordcount++
            i++
        }


        if (lwl<wordcount){
            lwl=wordcount
            longestw=lw
        }


        wordcount=0
        lw=""
    }

    document.getElementById("res").textContent= longestw

}

function lowerc(){

    
str =document.getElementById("ta").value

 lc=str.toLowerCase()
 document.getElementById("res").textContent= lc
    
}

function upperc(){

    
str =document.getElementById("ta").value

 lc=str.toUpperCase()
 document.getElementById("res").textContent= lc
    
}

function tc(){

    str =document.getElementById("ta").value
    let newstr = ""


for(let i=0;i<str.length;i++){

     if (str[i-1]==" " || i==0){
        
       newstr=newstr + str[i].toUpperCase()
        
     }else{
        newstr=newstr+str[i]
     }
       
    }
    document.getElementById("res").textContent= newstr
}

function check_pal(){

    str =document.getElementById("ta").value
    let r = ""

for(let i=(str.length-1);i>=0;i--){

   r=r+str[i]
}

if(str==r){

document.getElementById("res").textContent= "PALINDROME"
}else{
   document.getElementById("res").textContent="NOT PALINDROME"
}

}

function extractFword(){

    str =document.getElementById("ta").value
    let newstr = ""

    for(let i=0;i<str.length;i++){

    if (str[i]==" "){
            break;
    }   
    newstr=newstr+str[i]
}
document.getElementById("res").textContent=newstr
}

function replace_Space(){

    str =document.getElementById("ta").value
    newstr=str.replaceAll(" ","-")
    document.getElementById("res").textContent= newstr
}

function rev(){
str =document.getElementById("ta").value
    let r = ""

for(let i=(str.length-1);i>=0;i--){

   r=r+str[i]
}
document.getElementById("res").textContent= r
}

function sortt(){
    str =document.getElementById("ta").value
    arr=str.split(" ")
    arr.sort()
    newstr=arr.join(" ")
    document.getElementById("res").textContent= newstr
}
