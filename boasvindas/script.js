btn= document.getElementById('btn');

btn.addEventListener('click', function(){
    let nome= prompt("Qual é o seu nome?");
    
    let idade= prompt(`Olá, ${nome}! Qual é a sua idade?`)

    alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
    
})