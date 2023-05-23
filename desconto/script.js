btn= document.getElementById('btn');
res= document.getElementById('resultado');

btn.addEventListener('click', function(){
    let nome= prompt("Qual é o produto que deseja comprar?");
    let preco= prompt(`O preço de ${nome}  ?`).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    
    let desconto= ((preco*10)/100)
    let val= (preco-desconto).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        res.innerHTML = `<h3>Calculando desconto de 10% para ${nome} !</h3>`
        res.innerHTML += `<p>O preço original era ${preco}</p>`
        res.innerHTML += `<p>Você acaba de ganhar ${desconto} de desconto (-10%)</p>`
        res.innerHTML += `No fim, você vai pagar ${val } no produto ${nome} </p>`

})