function tabuada(){
  var number = document.getElementById('number')
  var result = document.getElementById('res')

  var val = Number(number.value)

  var count = 1
  while( count <= 10 ){
    var multi = (val * count)
    result.innerHTML += `${val} * ${count} = ${multi} ${'\n'}` 
    count++
  }
  

  
}