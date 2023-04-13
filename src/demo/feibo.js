//斐波那契数列  1 1 2 3 5 8 13 21

function feibo(n){
  if (n<=2) {
    return 1
  } 
let sum=feibo(n-1)+feibo(n-2)
return sum
}
const num= feibo(50)
console.log('====================================');
console.log(num);
console.log('====================================');
function go(n) { 
    var item = 0;      // 这里执行了一次
    for (var i = 0; i < n; i++) {   //这里执行了N次
      for (var j = 0; j < n; j++) {     //这里执行了n*n次
        item = item + i + j;     //这里执行了n*n次
      }
    }
    return item;  //这里执行了一次
  }
  // T(n)=O(fun(1+n+n2+n2+1))=O(fun(n+2n2))