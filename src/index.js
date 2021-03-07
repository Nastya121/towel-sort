module.exports = function towelSort (matrix) {
let newArr = [];
     if (matrix==null) {return [];} 
for(let i=0; i<matrix.length; i++){
if(i%2==0){
for(let j=0; j<matrix[i].length; j++){ 
    newArr.push(matrix[i][j]);
}
}else{
  for(let j=matrix[i].length-1; 0 <=j; j--){ 
  newArr.push(matrix[i][j]);
     }
}
}
return newArr;
}
/*------------
module.exports = function towelSort (matrix) {
  let newArr = [];
  if (matrix==null) {return [];} 
  for (let i = 0; i < matrix.length; i++) {
     if (i%2 == 0) {      
      for (let j = 0; j < matrix[i].length; j++) {
        newArr.push(matrix[i][j]); 
        }}
    else {
      for (let j =  matrix[i].length-1; 0 <=j ; j--) {
        newArr.push(matrix[i][j]);
   } }}
  return newArr;
}*/



