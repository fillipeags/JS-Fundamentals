function count(){
  let inicio = document.getElementById('inicio')
  let fim = document.getElementById('fim')
  let passo = document.getElementById('passo')
  let res = document.getElementById('result')

  if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert('Dados faltando')
  }else{
    res.innerHTML = 'Contando: '
    let init = Number(inicio.value)
    let end = Number(fim.value)
    let pas = Number(passo.value)

    if(init < end){
      for(let c = init; c <= end; c += pas){
        res.innerHTML += ` ➡️ ${c}  `
      }
    }else{
      for(let c = init; c >= end; c -= pas){
        res.innerHTML += ` ⬅️ ${c}  `
      }

    }
    res.innerHTML += `🛑`
  }
}