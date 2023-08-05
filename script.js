
function calcular() {
    const altura = document.querySelector(".height").value
    const peso = document.querySelector(".peso").value

    const result = document.querySelector(".result")
    const imc = peso / (altura * altura);

    if(imc < 18.5) {
       return result.innerHTML = `Cuidado! Você está abaixo do peso!`
    } else if(imc >= 18.5 && imc <= 25) {
       return result.innerHTML = `Você está no peso ideal!`
    } else if(imc >= 25 && imc <= 30) {
       return result.innerHTML = `Cuidado! Você está sobrepeso!`
    } else if (imc >= 30 && imc <=35) {
      return  result.innerHTML = `Cuidado! Você está com obesidade moderada!`
    } else if(imc >= 35 && imc <= 40) {
       return result.innerHTML = `Cuidado! Você está com obesidade severa!`
    }else {
        return result.innerHTML = `Cuiddao! Você está com obesidade morbial!`
    }
}
