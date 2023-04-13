console.time('a')
function go(n) {
      var item = 0;
      for (var i = 1; i <= n; i++) {
        item += i;
      }
      return item;
}
console.timeEnd('a')

console.time('b')
function go2(n) {
  var item = n*(n+1)/2
  return item;
}
console.timeEnd('b')
go(1000)
go2(1000)