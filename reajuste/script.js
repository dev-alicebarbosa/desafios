btn= document.getElementById('btn');
res= document.getElementById('resultado');

btn.addEventListener('click', function(){
    let nome= prompt("Qual é o nome do funcionário?");
    let  sal= prompt(`Qual é o salário de ${nome}`)
    let  por= prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem ?`)


    sal=parseFloat(sal)
    
    
    let aumento= parseFloat((sal*por)/100);
    let ganho= (sal+aumento).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    sal= sal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        res.innerHTML = `<h3>${nome} recebeu um aumento salarial !</h3>`
        res.innerHTML += `<p>O salário atual era ${sal}</p>`
        res.innerHTML += `<p>Com um aumento de ${por} , o salário vai aumentar em ${aumento} no próximo mês</p>`
        res.innerHTML += `E a partir daí ${nome } vai passar a ganhar ${ganho}</p>`

})