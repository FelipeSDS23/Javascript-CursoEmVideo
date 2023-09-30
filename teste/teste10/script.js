function gerar(){
    var numero = document.getElementById('inumero')
    var display = document.getElementById('idisplay')


    if(numero.value.length == 0){
        alert('Digite um número para continuar')
    }
    else{
        display.innerHTML = ''
        var num = Number(numero.value)
        var i = 0

        for(i = 1; i <= 10; i++){
            var line = document.createElement('option')
            line.setAttribute('value', `v${i}`)
            line.innerHTML = `${num} x ${i} = ${num*i}`
            display.appendChild(line)
        }
    }
}