
/*
1 - Nome - https://api.github.com/users/melguelor
2 - Descrição -
3 - Linguagem - https://api.github.com/repos/melguelor/consultoria/languages
4 - Quantidade estrela - https://api.github.com/users/melguelor/starred{/owner}{/repo}"
cada repositorio
*/

var nome 
var nomeUsuario 
var numeroRepositorios
var data = {}
var respo = {}
async function pesquisar()//usar  a função .map
{
        
 /*
 Selecioando as informações trazidas do fetch para mostrar apenas as informações pedidas no exercicio
 data.name - nome do dono

 para cada repositorio essas informações

 data.public_repos - o numero de repositorios do dono

repos[].name - pega o nome do repostorio
repos[].description - descrição de cada repositorio
repos[].languages_url  - gera um novo fetch para pegar as lingaguens usadas no repositorio
repos[2].stargazers_count - numero de estrelas do repositorio
 
 */  


event.preventDefault()
 nome = document.getElementById('nome').value
console.log(nome)
        await fetch(`https://api.github.com/users/${nome}`, {
                method: "GET",
                headers: {"Content-type": "application/json; charset=UTF-8"}
              })
              .then(response => response.json()) 
              .then(json =>  {data = json
       })
              .catch(err => console.log(err.message));
        
       document.getElementById('inserirNome').innerText = data.name


        await fetch(data.repos_url, {
                method: "GET",
                headers: {"Content-type": "application/json; charset=UTF-8"}
              })
              .then(response => response.json()) 
              .then(json =>  {repos = json
       })
              .catch(err => console.log(err.message));

        await fetch(data.repos_url, {
                method: "GET",
                headers: {"Content-type": "application/json; charset=UTF-8"}
              })
              .then(response => response.json()) 
              .then(json =>  {linguagem = json
                                console.log(linguagem)
       })
              .catch(err => console.log(err.message));       

                


       const conteudo =  repos.map( (item)=>{
                return `<tr>\
                            <td>${item.name}</td>\
                            <td>${item.description}</td>\
                            <td>${item.language}</td>\
                            <td>${item.stargazers_count}</td>\
                        </tr> `               
        }).join('')
        

        document.getElementById('conteudo').innerHTML = conteudo 




}       



  