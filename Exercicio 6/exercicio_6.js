
const listaTarefa = [{

            descricao:'',
            prioridade:'',
            status: ''
}]


listaTarefa.pop()
listaTarefa.push({descricao:'escovar os dentes', prioridade:'3 ',status: 'pendente'})

listaTarefa.push({descricao:'tomar banho', prioridade:'2',status: 'pendente'})
listaTarefa.push({descricao:'almoçar', prioridade:'1 ',status: 'concluida'})






function mostrar()
{
    const mostrar =  listaTarefa.map( (item,index)=>{ 
    return `<tr>\
                <td>${item.descricao}</td>\
                <td>${item.prioridade}</td>\
                <td>${item.status}</td>\
                <td ><button  onClick='concluir(${index})'>Concluir</button></td>\
                <td ><button  onClick='excluir(${index})'>Excluir</button></td>\
                
               
            </tr> `               
}).join('')
document.getElementById('listaTarefa').innerHTML = mostrar
}mostrar()


function adicionar()
{     event.preventDefault();
    var des = document.getElementById('des').value
    var prio = document.getElementById('prio').value
    var sta = document.getElementById('sta').value

    listaTarefa.push({descricao:des,   prioridade:prio,   status: sta})
    mostrar()
}


function excluir(index)
{
    listaTarefa.splice(index,1)
    mostrar()
}

function concluir(index)
{
    if (listaTarefa[index].status === 'pendente')
         listaTarefa[index].status = 'concluída';
    else
      listaTarefa[index].status = 'pendente';

      mostrar()  
}

function ordenar() {
    event.preventDefault();
    listaTarefa.sort((prio1, prio2) => {
        return prio1.prioridade - prio2.prioridade;
    });
    mostrar();
}


console.log(listaTarefa)

