

function calcularFinanciamento() {
    event.preventDefault();
     
    var valorFinanciamento = document.getElementById('valorFinanciamento').value
    var numeroParcela = document.getElementById('numeroParcela').value
    var taxaAnual = document.getElementById('taxaAnual').value


    let taxaJurosMensal = Math.pow(1 + taxaAnual, 1 / 12) - 1;
    let taxaJurosEfetiva = taxaJurosMensal;

    
    let valorParcelas = valorFinanciamento * (taxaJurosEfetiva / (1 - Math.pow(1 + taxaJurosEfetiva, - numeroParcela)));

    
    let custoEfetivoTotal = valorParcelas * numeroParcela - valorFinanciamento;
    let valorTotal = valorParcelas * numeroParcela


     console.log(valorParcelas)
                



document.getElementById('conteudo').innerHTML =  `<tr>\
                    <td>${valorParcelas.toFixed(2)}</td>\
                    <td>${valorTotal.toFixed(2)}</td>\
                    <td>${custoEfetivoTotal.toFixed(2)}</td>\
                    <td>${taxaJurosEfetiva.toFixed(2)}</td>\
                    
                </tr> `     


    
}