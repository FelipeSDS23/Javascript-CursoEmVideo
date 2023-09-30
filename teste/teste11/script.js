var lista = [] 

function adicionar(){
    var num = document.getElementById('inum')
    var n = Number(num.value)  
    var display = document.getElementById('idisplay')
    var msg = document.getElementById('imensagem')
    msg.innerHTML = ''

    if(num.value.length == 0 || n < 1 || n > 100  ){
        alert('Digite um valor entre 1 e 100')        
    }
    else if(lista.indexOf(n) != -1){
        alert('Valor já se encontra na lista')
    }
    else{
        lista.push(n)

        var opt = document.createElement('option')
        opt.innerHTML = `Valor ${n} adicionado`
        display.appendChild(opt)
    }

}

function finalizar(){
    var msg = document.getElementById('imensagem')

    if(lista.length == 0){
        alert('Adicione valores antes de finalizar')
    }
    else{
        lista.sort()

        var total = lista.length
        var maior = Math.max.apply(null, lista)
        var menor = Math.min.apply(null, lista)
        var soma = 0 
        for(var i = 0; i < lista.length; i++){
            soma += lista[i]
        }
        var media = soma / total
    
        msg.innerHTML = `<p>Ao todo, temos ${total} números cadastrados.</p> 
                        <p>O maior valor informado foi ${maior}</p>
                        <p>O menor valor informado foi ${menor}</p>
                        <p>Somando todos os valores, temos ${soma}</p>
                        <p>A média dos valores digitados é ${media.toFixed(2)}</p>`
    }
}
