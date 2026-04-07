// conut number of vovels

let str = "erdwqexywtebvcuyrtbojrbel;vbtormbopwrdc,esc"
let count =0

for(let i=0;i<str.length;i++){

    if (str[i]=="a" || str[i]=="e"|| str[i]=="i"|| str[i]=="o"|| str[i]=="u"){
            count++
    }
}

console.log("The number of vovels = ",count)

// palindrome str 

let str = "cisdfdfc"
let r = ""

for(let i=(str.length-1);i>=0;i--){

   r=r+str[i]
}

if(str==r){

console.log("String is Plaindrome")
}else{
    console.log("String is not a Plaindrome")
}

// Extract first word

let str = "Wisdom Sprouts is best intitute"
let word =""


for(let i=0;i<str.length;i++){

     if (str[i]==" "){
        break
        
     }
        word=word+str[i]
    }

     console.log(word)

// replace character :

let str = "There lived a king"

console.log(str.replaceAll(" ","-"))

let str = "There lived a king"
let arr =[]
console.log(arr=str.split(" "))

//convert to upper case :

 let str = "wisdom sprouts is the best intitute"
 let newstr = ""


for(let i=0;i<str.length;i++){

     if (str[i-1]==" " || i==0){
        
       newstr=newstr + str[i].toUpperCase()
        
     }else{
        newstr=newstr+str[i]
     }
       
    }

     console.log(newstr)

// Manual string reverse :

let str = "Aditya"
let rstr = ""

for(let i=(str.length-1);i>=0;i--){

   rstr=rstr+str[i]
}
console.log("Reversed string =",rstr)

//occurence count :

let str = "Aditya"
let count=0

for(let i=0;i<str.length;i++){

    if (str[i]=="a" || str[i]=="A"){
        count ++
    }
}
console.log("Number of A = ",count)

// Alphanumerical string : 

let str = "43iuljcn438@#$^C #$Q %@#321 vr43 5 v15v 32r34RT32466456@!$@#$@#$% sadgf!$#@a"
let nstr =""

for(let i=0;i<str.length;i++){

    if(str[i]>="0" && str[i]<="9" || str[i]>="a" && str[i]<="z" || str[i]>="A" && str[i]<="Z"){

        nstr=nstr+str[i]
    }
}
console.log("Original string = ",str)
console.log("Cleaned string = ",nstr)

// Start and End Check :

let str = "Aditya"

if(str.charAt(0).toLowerCase() == str.charAt(str.length-1).toLowerCase())
{
    console.log("YES starts with same letter")
}else{
    console.log("No starts with different letters")
}