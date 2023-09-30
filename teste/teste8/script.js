function contar(){
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var display = document.getElementById('display')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('ERRO! Preencha todos os campos para continuar')
    }
    else{
        display.innerHTML = 'Contando... <br>'

        var begin = Number(inicio.value)
        var end = Number(fim.value)
        var step = Number(passo.value) 

        if (step == 0){
            alert('Passo inválido, considerando passo com o valor 1')
            step = 1
        }

        if(begin < end){
            for(var i = begin; i <= end; i += step){
                display.innerHTML += `${i} `
            }
        }
        else{
            for(var i = begin; i >= end; i -= step){
                display.innerHTML += `${i} `
            }
        }
    }
    
}