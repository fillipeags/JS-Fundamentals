function verifica(){
  var nasc = document.getElementById("nas")

  var res = document.getElementById("res")
  var sex = document.getElementsByName("radsex")

  var submit = document.getElementById("submit")

  anoNasc = Number(nas.value)
  birthYear = (2020 - anoNasc)


  
  if(sex[0].checked){
    res.innerHTML = `Voce eh homem e tem ${birthYear} anos`
  }else if(sex[1].checked){
    res.innerHTML = `Voce eh mulher e tem ${birthYear} anos`
  }


}