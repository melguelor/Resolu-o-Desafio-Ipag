


function estatistica()
{
let i =0
let pais = {}
fetch('sales.csv')
.then(response => response.text())
.then(text => {
  const conteudo = text.split("\n");
 
 /*let data = {
    region: '',
    country: '',
    itemtype: '',
    saleschannel: '',
    orderpriority: '',
    orderdate: '',
    orderid: '',
    shipdate: '',
    unitsold: 0,
    unitcost: 0,
    totalrevenue: 0,
    totalcost: 0,
    totalprofit: 0
};*/ 


     const data = conteudo.map( (item) =>{
        const  [region, country, itemtype,saleschannel,orderpriority,orderdate,orderid,shipdate,unitsold,unitcost,totalrevenue,totalcost,totalprofit] = item.split(",")
        return {region, country, itemtype,saleschannel,orderpriority,orderdate,orderid,shipdate,unitsold,unitcost,totalrevenue,totalcost,totalprofit}
      })
 
let tipoProduto = [{itemtype:'', unitsold: '', totalrevenue: 0, totalcost: 0,totalprofit:0}]
        tipoProduto.pop()
    
let tipoProdutoRegiao = [{itemtype:'',region:'', unitsold: '', totalrevenue: 0, totalcost: 0,totalprofit:0}]
      tipoProdutoRegiao.pop()

let tipoProdutoMaiorReceitaPais = [{itemtype:'',country:'', totalrevenue: 0}]
      tipoProdutoMaiorReceitaPais.pop()      



     for (let i = 1; i < data.length-1; i++) {
      const itemtype = data[i].itemtype;
      const region = data[i].region
      const country = data[i].country

      if (!tipoProduto.find(item => item.itemtype === itemtype)) {
          tipoProduto.push({ itemtype: itemtype, unitsold: parseFloat(0), totalrevenue: parseFloat(0), totalcost: parseFloat(0), totalprofit: parseFloat(0) });
      }

      if (!tipoProdutoRegiao.find(item => item.itemtype === itemtype && item.region === region)) {
        tipoProdutoRegiao.push({itemtype:itemtype,region:region, unitsold: '', totalrevenue: parseFloat(0), totalcost: parseFloat(0),totalprofit:parseFloat(0)});
    }

    if (!tipoProdutoMaiorReceitaPais.find(item => item.itemtype === itemtype && item.country === country)) {
      tipoProdutoMaiorReceitaPais.push({itemtype:itemtype,country:country, totalrevenue: parseFloat(0)});
  }




  }
    
    //console.log(tipoProduto.find(item => item.itemtype === 'Baby Food'))
    data.map((item)=>{
                  let capturar = tipoProduto.findIndex(produto => produto.itemtype === item.itemtype)
                  if(capturar == -1) {                 }          
                  else
                  {
                    tipoProduto[capturar] = { 
                                              itemtype: tipoProduto[capturar].itemtype , 
                                              unitsold: tipoProduto[capturar].unitsold += parseFloat(item.unitsold), 
                                              totalrevenue: tipoProduto[capturar].totalrevenue += parseFloat(item.totalrevenue), 
                                              totalcost: tipoProduto[capturar].totalcost += parseFloat(item.totalcost), 
                                              totalprofit: tipoProduto[capturar].totalprofit += parseFloat(item.totalprofit) }
                  }
      
    })



    data.map((item)=>{
      let capturar = tipoProdutoRegiao.findIndex(produto => produto.itemtype === item.itemtype && produto.region === item.region)
      if(capturar == -1) {                 }          
      else
      {
        tipoProdutoRegiao[capturar] = { 
                                  itemtype: tipoProdutoRegiao[capturar].itemtype , 
                                  region: tipoProdutoRegiao[capturar].region,
                                  unitsold: tipoProdutoRegiao[capturar].unitsold += parseFloat(item.unitsold), 
                                  totalrevenue: tipoProdutoRegiao[capturar].totalrevenue += parseFloat(item.totalrevenue), 
                                  totalcost: tipoProdutoRegiao[capturar].totalcost += parseFloat(item.totalcost), 
                                  totalprofit: tipoProdutoRegiao[capturar].totalprofit += parseFloat(item.totalprofit) }
      }

})

      
    data.map((item)=>{
      let capturar = tipoProdutoMaiorReceitaPais.findIndex(produto => produto.itemtype === item.itemtype && produto.country === item.country)
      if(capturar == -1) {                 }          
      else
      {
        tipoProdutoMaiorReceitaPais[capturar] = { 
                                  itemtype: tipoProdutoMaiorReceitaPais[capturar].itemtype , 
                                  country: tipoProdutoMaiorReceitaPais[capturar].country,
                                  totalrevenue: tipoProdutoMaiorReceitaPais[capturar].totalrevenue += parseFloat(item.totalrevenue), 
                                   }
      }

})


       







      // apresentar a resposta da a com tipo de produto num map mostrando a tabela<<<


      
document.getElementById('conteudo1').innerHTML =    tipoProduto.map( (item)=>{
        return `<tr>\
                    <td>${item.itemtype}</td>\
                    <td>${item.unitsold}</td>\
                    <td>${item.totalrevenue.toFixed(2)}</td>\
                    <td>${item.totalcost.toFixed(2)}</td>\
                    <td>${item.totalprofit.toFixed(2)}</td>\
                </tr> `               
}).join('')  




document.getElementById('conteudo2').innerHTML =    tipoProdutoRegiao.map( (item)=>{
  return `<tr>\
              <td>${item.itemtype}</td>\
              <td>${item.region}</td>\
              <td>${item.unitsold}</td>\
              <td>${item.totalrevenue.toFixed(2)}</td>\
              <td>${item.totalcost.toFixed(2)}</td>\
              <td>${item.totalprofit.toFixed(2)}</td>\
          </tr> `               
}).join('')
 
     

document.getElementById('conteudo3').innerHTML =    tipoProdutoMaiorReceitaPais.map( (item)=>{
  return `<tr>\
              <td>${item.itemtype}</td>\
              <td>${item.country}</td>\
              <td>${item.totalrevenue.toFixed(2)}</td>\
              
          </tr> `               
}).join('')
   

    


  
})



}
estatistica()
