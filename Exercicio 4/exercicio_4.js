var numero_sorteado = parseInt(Math.random() * 99) + 1 
var chances = document.getElementById('chances')
var dica = document.getElementById('dica')
var numero_tentato = document.getElementById('numero_tentado')

chances.value = 5
console.log(numero_sorteado)

function verificaTentativa()
{
    var numero_digitado = document.getElementById('num').value
    event.preventDefault()
    chances.value--
    if(chances.value == 0)
    {
        alert("Não foi dessa vez. O numero era" + numero_sorteado)
        numero_sorteado = parseInt(Math.random() * 99) + 1 
        chances.value = 5
        numero_tentato.innerText = ''
        dica.innerHTML = ''

    }else
    {
        if(numero_sorteado == numero_digitado)
        {
            alert("Parabens Você acertou")
            numero_sorteado = parseInt(Math.random() * 99) + 1 
            chances.value = 5
            numero_tentato.innerText = ''
            dica.innerHTML = ''

        }
        else
        {
            if(numero_sorteado > numero_digitado)
                dica.innerHTML = 'Sua tentativa está ABAIXO. Tente AUMENTAR o numero' 
            else
               dica.innerHTML = 'Sua tentativa está ACIMA. Tente DIMINUIR o numero' 


            numero_tentato.innerText += " | " + numero_digitado
                    
        }
            

    }
       

}



function verificaNumero(num)
{
        var numero = parseFloat(document.getElementById(num).value)
        if(isNaN(numero))
            {
                alert("Digite apenas numero.")
                document.getElementById(num).value = 0
            }
        
}