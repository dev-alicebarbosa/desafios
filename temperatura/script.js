btn= document.getElementById('btn');
res= document.getElementById('resultado');

btn.addEventListener('click', function(){
    let temperatura= prompt("Qual a temperatura em °C?");
    let F= temperatura*1.8+32
    let K= parseFloat(temperatura)+273.15
        res.innerHTML = `<h3>A temperatura de  ${temperatura}°C, corresponde a...</h3>`
        res.innerHTML += `<p>Em Kelvin ${K}K</p>`
        res.innerHTML += `<p>Em Fahrenheit ${F}°F</p>`
})