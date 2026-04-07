array1=[2,3,4,7,10]
array2=[3,5,7,9]


narray=[]
ind=0

for(i=0;i<array1.length;i++){

    for(j=0;j<narray.length;j++){

        if(array1[i]==narray[j])
            {

            continue;
           }

        }

        for(k=0;j<narray.length;k++){

        if(array2[i]==narray[k])
            {

            continue;
           }

        }
            narray[ind]=array1[i]
            ind++
            narray[ind]=array2[i]
            ind++


    }


console.log(narray)


/////////////////////////////////////////////////

//  let arr=[3,5,7,9,10]
// arrn=[]

// arrn[0]=arr[arr.length-1]

// for(i=0;i<(arr.length-1);i++){
//     temp=arr[i+1]
 
//     arrn[i+1]=arr[i]

// }
// console.log(arrn)


/////////////////////////////////////////////////////

// array1=[2,3,4,7,10]
// array2=[3,5,7,9,10]
// narray=[]
// ind=0

// for(i=0;i<array1.length;i++){

//     for(j=0;j<array2.length;j++){

//         if(array1[i]==array2[j]){
//             narray[ind]=array1[i]
//             ind++
//         }
//     }
     

// }

// console.log(narray)

///////////////////////////////////////////////