function verify(){
  var birthYear = document.getElementById("nas")
  var res = document.getElementById("res")
  var sex = document.getElementsByName("radsex")
  var submit = document.getElementById("submit")

  var currentYear = new Date().getFullYear()

  age = (currentYear - Number(birthYear.value))

  var gender = ''

  sex[0].checked ? gender = 'Man' : gender = 'Woman'

  res.innerHTML = `You are a ${gender} and have ${age} years`
  
}