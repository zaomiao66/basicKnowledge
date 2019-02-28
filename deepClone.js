deepClone = (obj) => {
  isObj = (obj) => typeof obj === 'object' && typeof obj !== null

  if (!isObj(obj)) {
    throw new Error('不是')
  }

  isArray = (obj) => Array.isArray(obj)

  const newObj = isArray(obj) ? [...obj] : {...obj}
  Reflect.ownKeys(newObj).forEach(key => {
    newObj[key] = isObj(newObj[key]) ? deepClone(newObj[key]) : newObj[key]
  })
  return newObj
}

const b = {
  c: {
    d: 1,
    f: 2,
  }
}
const result2 = deepClone(b)
b.c.d = 2

console.log(result2)
