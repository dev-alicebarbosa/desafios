btn= document.getElementById('btn');

btn.addEventListener('click', function(){
    let produto= prompt("Olá! Digite o nome do produto que deseja comprar");
    
    let valor= prompt(`Quanto custa ${produto} que você está comprando?`);
  

    let troco= prompt(`Qual foi o valor que deu para pagar ${produto} `)
 
    alert(`Você comprou ${produto} que custou R$${valor}.
    Deu R$${troco} em dinheiro e vai receber R$${troco-valor} de troco.
    Volte Sempre! `)
    
})