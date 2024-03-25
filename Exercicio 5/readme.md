# 5. Validador de Senha:
Escreva um programa que peça ao usuário uma senha.
A senha deve ter no mínimo 8 caracteres e conter pelo menos uma letra maiúscula, uma letra minúscula e um número.
Valide a senha e informe ao usuário se ela é válida ou não.
_________

var caracter = document.getElementById('8caracter')
var numero = document.getElementById('numero')
var maisuculo = document.getElementById('maiuscula')
var minusculo = document.getElementById('minuscula')
var senha = document.getElementById('senha')
var valida = 'A senha é invalida. Todos os requisitos precisão ficar verdes.'
//caracter.classList.add('verde')
//caracter.classList.remove('verde')

function verifica(senha)
{   event.preventDefault()
    var senha = document.getElementById('senha').value
     var aux = 0
     var flagNumero = 0
     var flagLetraMaiusculo = 0
     var flagLetraMinusculo = 0
    //console.log(senha.length)

    //caracter.classList.add('verde')
   if(senha.length >= 8) // logica referente a minimo 8 caracteres
   {    caracter.classList.remove('vermelho')
        caracter.classList.add('verde') 
   }
    else    
        {
            caracter.classList.remove('verde')
            caracter.classList.add('vermelho') 
        }
       
       
       for(i=0;i < senha.length; i++)
            {
                aux = parseInt(senha[i])// tenho que ver caracter a caracter, transformar em numero e testar se é um numero
                if(!isNaN(aux))
                    flagNumero = 1

                if(senha.charCodeAt(i) >= 97 && senha.charCodeAt(i) <= 122)// estou utilizando a tabel ASCII para pegar os valores do alfabeto do A ou Z minusculo
                        flagLetraMinusculo = 1
                
                if(senha.charCodeAt(i) >= 65 && senha.charCodeAt(i) <= 90)
                        flagLetraMaiusculo = 1
            }

            if(flagNumero == 1)
            {
                numero.classList.remove('vermelho')
                numero.classList.add('verde') 
            }
            else
            {
                numero.classList.remove('verde')
                numero.classList.add('vermelho') 
            }

            if(flagLetraMaiusculo == 1)
            {
                maisuculo.classList.remove('vermelho')
                maisuculo.classList.add('verde') 
            }
            else
            {
                maisuculo.classList.remove('verde')
                maisuculo.classList.add('vermelho') 
            }

            if(flagLetraMinusculo == 1)
            {
                minusculo.classList.remove('vermelho')
                minusculo.classList.add('verde') 
            }
            else
            {
                minusculo.classList.remove('verde')
                minusculo.classList.add('vermelho') 
            }
                
            
            if(flagNumero == 1 && flagLetraMinusculo == 1 && flagLetraMaiusculo && flagNumero == 1 && senha.length >= 8) 
                        valida = 'A senha é valida'
            else
                        valida = 'A senha é invalida. Todos os requisitos precisão ficar verdes.'    
            

}


function mensagem()
{event.preventDefault()
        alert(valida)
}
