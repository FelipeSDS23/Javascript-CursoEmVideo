function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius = '50%'

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'kidmen.jpg')
            }
            else if (idade < 21){
                //jovem
                img.setAttribute('src', 'youngmen.jpg')
            }
            else if (idade < 50){
                //adulto
                img.setAttribute('src', 'men.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'oldmen.jpg')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','kidwoman.jpg')
            }
            else if (idade < 21){
                //jovem
                img.setAttribute('src','youngwoman.jpg')
            }
            else if (idade < 50){
                //adulto
                img.setAttribute('src','woman.jpg')
            }
            else{
                //idoso
                img.setAttribute('src','oldwoman.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}