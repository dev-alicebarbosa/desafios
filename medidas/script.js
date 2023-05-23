btn= document.getElementById('btn');
res= document.getElementById('resultado');

btn.addEventListener('click', function(){
    let metros= prompt("Digite uma distância em metros (m)");

    let km= metros/1000;
    let hm= metros/100;
    let dam= metros/10;
    let dm= metros*10;
    let cm= metros*100;
    let mm= metros*1000;

        res.innerHTML = `<h3>A distância de ${metros} metros Corresponde a ...</h3>`
        res.innerHTML += `<p>${km} quilometros (Km)</p>`
        res.innerHTML += `<p>${hm} hectômetro (Hm)</p>`
        res.innerHTML += `<p>${dam} decâmetros (Dam)</p>`
        res.innerHTML += `<p>${dm } decímetros (dm)</p>`
        res.innerHTML += `<p>${cm} centímetros (cm)</p>`
        res.innerHTML += `<p>${mm} milímetros (mm)</p>`
})