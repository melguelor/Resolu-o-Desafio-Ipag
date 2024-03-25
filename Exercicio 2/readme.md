2. Maior e Menor entre Três Números:
Escreva um programa que peça ao usuário três números.
Determine o maior e o menor número entre os três e exiba-os na tela.
____________



function verificaNumero(num)//fiz a reutilização da verificação do exerc 1 e o css tambem
{
        var numero = parseFloat(document.getElementById(num).value)
        if(isNaN(numero))
            {
                alert("Digite apenas numero.")
                document.getElementById(num).value = 0
            }
        
}

function maiorEMenor()
{ 
    event.preventDefault()//serve para que o formulario nao envie nada, pois sempre que clicar no botão ele de forma nativa envia algo e atualiza a tela e nao deixaria ver o resultado colocado nas div fora do formulario
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var num3 = parseFloat(document.getElementById('num3').value)
    var menor = Math.min(num1,num2,num3)
    var maior = Math.max(num1,num2,num3)

    document.getElementById('mostraMaior').innerText = "O Maior dos 3 é: " + maior
    document.getElementById('mostraMenor').innerText = "O Menor dos 3 é: " + menor


   /*
   Esse alert serviram para verificar de forma bem rapida se os valores estavam corretos
   alert(menor)
    alert(maior)
    */
}
