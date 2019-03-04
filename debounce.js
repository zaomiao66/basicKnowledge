const debounce = (func, wait = 50) => {
  let timer = 0
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

const debounce = (func, wait) => {
  let timeout = null;
  return function() {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(func, wait)
  }
}

const debounce3 = (func, wait, immediate) => {
  let timeout = null
  let _debounce = function() {
    if (immediate) {
      if (!timeout) {
        func.apply(this, arguments)
      }
      timeout = setTimeout(() => { timeout = null }, wait)
    } else {
      clearTimeout(timeout)
      timeout = setTimeout(
        () => {func.apply(this, arguments)}
      )
    }
  }

  return _debounce
}