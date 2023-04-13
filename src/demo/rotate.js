const arr=[1,2,3,4,5,6,7]
 console.time("a")
  function rotate(n){
   const arrLength=arr.length
   const roateStep=n%arrLength
   let step=0
   if (roateStep>0) {
    step=roateStep
   }else if (n<arrLength) {
    step=n
   }else{
    return arr
   }
  const sliceArr= arr.slice(0,arrLength-step)
  const rotateArr=arr.slice(-step)
   return rotateArr.concat(sliceArr)
  }
  console.timeEnd("a")
  console.log(rotate(9));

