
// You should implement your task here.


module.exports = function towelSort (matrix) {
let newArr = [];


for(let i=0; i<matrix.lenght; i++){
if(i%2==0){
for(let j=0; j<matrix[i].lenght; j++){ 
    newArr.push(matrix[i][j]);
}
}else{

  for(let j=matrix[i].lenght-1; j>=0; j--){ 
  newArr.push(matrix[i][j]);
     }
}
}
return newArr;
}

