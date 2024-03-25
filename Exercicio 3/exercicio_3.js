function verificaNumero(num)
{
        var numero = parseFloat(document.getElementById(num).value)
        if(isNaN(numero))
            {
                alert("Digite apenas numero.")
                document.getElementById(num).value = 0
            }
        
}

function escolhaGeometrica(figura)
{
    var todoConteudo = document.querySelectorAll('.info')// pegando o conteudo com a classe .info
    console.log(todoConteudo)// para verificar no console do devTools se pegou apenas o que eu quero

    todoConteudo.forEach((item)=>{// vai percorrer cada linha que peguei
       item.setAttribute('hidden','hidden')// vai apagar o item
        if(item.getAttribute('id') == figura)// verifica se o item seleciona vindo do figura que veio do onChange é igual ao item, se for deixa ele visivel
        {item.removeAttribute('hidden')// aqui é para remover o escondido
           
        }
    })
 

    //console.log('as') utilize essa linha junto ao console do devtools para fazer alguns testes se o conteudo esta aparecendo 

    // alert(figura) foi usado para verificar se ao mudar de selecionado nos inputs seria mandado a informação do html para a variavel figura para assim poder ter certeza que poderia seguir
}


function area_quadrado()
{       var lado = document.getElementById('lado_quadrado').value
        var area = parseFloat(lado) * parseFloat(lado)
        document.getElementById('resultado_area_quadrado').innerText = 'A área do QUADRADO é: ' + area 


}

function area_retangulo()
{   
    var comprimento = document.getElementById('comprimento_retangulo').value
    var largura = document.getElementById('largura_retangulo').value
    var area = parseFloat(comprimento) * parseFloat(largura)
    document.getElementById('resultado_area_retangulo').innerText = ' A área do RETANGULO é: ' + area

}

function area_triangulo()
{
    var base = document.getElementById('base_triangulo').value
    var altura = document.getElementById('altura_triangulo').value
    var area = (parseFloat(base) * parseFloat(altura)) / 2
    document.getElementById('resultado_area_triangulo').innerText = ' A área do TRIANGULO é: ' + area

}

function area_circulo()
{
    var raio = document.getElementById('raio_circulo').value
    var area = parseFloat(Math.PI) * parseFloat(Math.pow(raio,2))
    document.getElementById('resultado_area_circulo').innerText = ' A área do CIRCULO é: ' + area

}