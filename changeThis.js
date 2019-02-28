let a = {
  value: 1
}

function getValue(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value)
}
getValue('zzh', '23')
getValue.call(a, 'zzh', '23')
getValue.apply(a, ['zzh', '23'])