btn= document.getElementById('btn');
res= document.getElementById('resultado');

btn.addEventListener('click', function(){
    let nome= prompt("Qual é o nome do aluno ?");
    let n1= prompt(`Primeira nota de ${nome}?`)
    let n2=prompt (`Segunda nota de ${nome}?`)

     n1= parseFloat(n1)
     n2= parseFloat(n2)

    let media= (n1+n2)/2;
    

        res.innerHTML = `<h3>Analisando a Situação de ${nome}</h3>`
        res.innerHTML += `<p>Com as notas ${n1} e ${n2}, a média é ${media}</p>`
        
        if(media>6){
            res.innerHTML += `<p>com a média acima de 6,0 , o aluno está <b class="sim">APROVADO </b></p>`    
        } else if (media >=3 && media<=6){
            res.innerHTML += `<p>com a média entre 3,0 e 6,0 , o aluno está de <b class="recu">RECUPERAÇÃO </b></p>`
        } else{
            res.innerHTML += `<p>com a média abaixo de 3,0 , o aluno está <b class="nao">REPROVADO </b></p>`
        }
        
        
        
        
})