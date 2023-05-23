btn= document.getElementById('btn');

btn.addEventListener('click', function(){
    let numero= prompt("Digite um número no espaço abaixo");
    
    numero= parseInt(numero)

    alert(`O número antecessor de ${numero} é ${numero-1}. 
O número sucessor de ${numero} é ${numero+1} `)
    
})