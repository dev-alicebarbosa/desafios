btn= document.getElementById('btn');

let dolar= prompt("Antes de mais nada, informe a cotação do dólar no momento");
dolar=parseFloat(dolar)

btn.addEventListener('click', function(){
    let numero= prompt("Digite o valor que você possui em R$");
    
    numero= parseFloat(numero)

    let valor= (numero/dolar).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})


    alert(`A quantidade de dólar que conseguirá comprar é de ${valor} `)
    
})