function carregar(){
  var msg = document.getElementById("msg")
  var img = document.getElementById("imagem")
  var data = new Date()
  var hour = data.getHours
  msg.innerHTML = `Agora são ${hour} horas`

  if (hour > 0 && hour <=12){
    img.src = './assets/morning.jpg'
    document.body.style.backgroundColor = 'blue'
  }else if (hour <= 18){
    img.src = './assets/afternoon.jpg'
    document.body.style.backgroundColor = 'orange'
  }else{
    img.src = './assets/night.jpg'
    document.body.style.backgroundColor = 'gray'
  }

}