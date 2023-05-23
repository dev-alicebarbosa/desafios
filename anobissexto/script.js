btn= document.getElementById('btn');
res= document.getElementById('resultado');

btn.addEventListener('click', function(){
    let ano= prompt("Digite o ano no espaço abaixo:");
    let p4= ano%4;
    let p100= ano%100;
    let p400= ano%400;


    if (ano !=0 ){
        if ((p4==0) && (p100 !=0) || (p400 ==0)){
            res.innerHTML = `o ano de ${ano}   <strong class='sim'>É BISSEXTO</strong>`
        }else {
            res.innerHTML = `o ano de ${ano}   <strong class='nao'>NÃO É BISSEXTO</strong>`
        }
    }else{
        res.innerHTML= "Digite um ano válido"
    }
    
})