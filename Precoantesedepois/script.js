btn= document.getElementById('btn');
res= document.getElementById('resultado');

btn.addEventListener('click', function(){
    let antes= prompt("Qual era o preço anterior do produto?");
    let depois= prompt("Qual é o preço atual do produto?");
        antes=parseFloat(antes);
        depois=parseFloat(depois);
    let variacao=0
    res.innerHTML = `<h3>O produto custava R$${antes} e agora custa R${depois} </h3>`

        if (antes>depois ){
            res.innerHTML += `<p>Hoje o produto está mais barato</p>`
            variacao= antes-depois
            res.innerHTML += `<p>O preço caiu em R$${variacao} em relação ao preço anterior</p>`
        }else if(antes==depois){
            res.innerHTML+=`<p>Hoje o produto está no mesmo valor</p>`
            res.innerHTML += `<p>O preço se manteve em relação ao preço anterior</p>`
        }else{ 
            res.innerHTML+=`<p>Hoje o produto está mais caro</p>`
            variacao= depois-antes
            res.innerHTML += `<p>O preço subiu em R$${variacao} em relação ao preço anterior</p>`
        }
        
})