let a = {
  value: 1
}

// function getValue(name, age) {
//   console.log(name)
//   console.log(age)
//   console.log(this.value)
// }
// getValue('zzh', '23')
// getValue.call(a, 'zzh', '23')
// getValue.apply(a, ['zzh', '23'])

// Function.prototype.myCall = function (context) {
//   var content = context || window
//   content.fn = this
//   var args = [...arguments].slice(1)
//   var result = content.fn(...args)
//   delete content.fn
//   return result
// }

function fn1() {
  console.log(1)
}

function fn2() {
  console.log(2)
}

// fn1.call(fn2)

function fn3() {
  console.log(2)
  fn1()
}

fn3()