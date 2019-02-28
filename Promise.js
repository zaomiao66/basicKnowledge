test = (resolve, reject) => {
  let timeOut = Math.random() * 2
  setTimeout(() =>{
    if (timeOut < 1) {
      resolve(`${timeOut} ok`)
    } else {
      reject(`${timeOut} notOk`)
    }
  }, timeOut * 1000)
}

// new Promise(test).then(
//   (res) => console.log(res),
//   (res) => console.log(res)
// )

const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn) {
  let _this = this
  _this.state = PENDING
  _this.value = null
  _this.resolvedCallbacks = []
  _this.rejectedCallbacks = []
  _this.resolve = function (value) {
    if (value instanceof MyPromise) {
      return value.then(_this.resolve, _this.reject)
    }
    setTimeout(() => {
      if (_this.state === PENDING) {
        _this.state = RESOLVED
        _this.value = value
        _this.resolvedCallbacks.forEach(cb => cb())
      }
    })
  }
  _this.reject = function (reason) {
    setTimeout(() => {
      if (_this.state === REJECTED) {
        _this.state = REJECTED
        _this.value = reason
        _this.rejectedCallbacks.forEach(cb => cb()) 
      }
    })
  }
  try {
    fn(_this.resolve, _this.reject)
  } catch(e) {
    _this.reject(e)
  }
}

MyPromise.prototype.then = function(onFullfilled, onRejected) {
  let that = this
  let promise2;
  onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : v => v;
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r };

  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFullfilled)
    that.rejectedCallbacks.push(onRejected)
  }
  if (that.state === RESOLVED) {
    onFullfilled(that.value)
  }
  if (that.state === onRejected) {
    onRejected(that.value)
  }
}


new MyPromise(test).then(
  (res) => console.log(res)
)