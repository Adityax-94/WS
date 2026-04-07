var rotate = function(matrix=[[1,2,3],[4,5,6],[7,8,9]]) {

        trip=[]
        op=[]

        for (i=0;i<=matrix[0].length-1;i++)
        {
            for (j=matrix.length-1;j>=0;j--)
            {
                trip.push(matrix[j][i])
                
            }
            op.push(trip)
            trip=[]
        }

        matrix=op

    console.log(matrix)
  
};

rotate()