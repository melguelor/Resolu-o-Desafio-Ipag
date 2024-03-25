# 1. Calculadora Básica:
Crie uma calculadora que realize as operações básicas: soma, subtração, multiplicação e divisão.
Permita a entrada de dois números e a escolha da operação.
Exiba o resultado da operação na tela.
---------------
function verificaNumero(num)
{
        var numero = parseFloat(document.getElementById(num).value)
        if(isNaN(numero))
            {
                alert("Digite apenas numero.")
                document.getElementById(num).value = 0
            }
        
}


function calcular()
{
    event.preventDefault()

    var sinal = document.getElementById('operacao').value
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    var resultado = 0
    var mostrarResultado
   

    
    switch(sinal)
    {
        case '+': resultado = parseFloat(num1) + parseFloat(num2); break;
        case '-': resultado = parseFloat(num1) - parseFloat(num2); break;
        case '*': resultado = parseFloat(num1) * parseFloat(num2); break;
        case '/': resultado = parseFloat(num1) / parseFloat(num2); break;

    }

    
    mostrarResultado = document.getElementById('mostrarResultado').innerText = resultado
}

