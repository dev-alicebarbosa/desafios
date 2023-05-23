btn= document.getElementById('btn');
res= document.getElementById('resultado');

btn.addEventListener('click', function(){
    let a= prompt("Qual o valor de a?");
    let b= prompt("Qual o valor de b?");
    let c= prompt("Qual o valor de c?");

    a= parseFloat(a)
    b= parseFloat(b)
    c= parseFloat(c)

    let delta= Math.pow(b, 2)-(4*(a)*(c));

        res.innerHTML = `<h3>Resolvendo Bhaskara</h3>`
        res.innerHTML += `<p>A equação atual é ${a}x^2+${b}X+${c}=O</p>`
        res.innerHTML += `<p>O calculo será  delta=${b}^2-4 *${ a}*${c}</p>`
        res.innerHTML += `<p>O valor calculado foi de delta=${delta}</p>`
})