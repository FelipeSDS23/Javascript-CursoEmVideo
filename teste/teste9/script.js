function gerar(){
    var numero = document.getElementById('inum')
    var lista = document.getElementById('lista')
    lista.innerHTML = ''
    if(numero.value.length == 0){
        alert('Digite um número')
    }
    else{
        var num = Number(numero.value) 

        var i = Number(0)
        for(i = 1; i <= 10; i++){
            lista.innerHTML += `<li>${num} x ${i} = ${num * i}</li>`
        }
    }
}