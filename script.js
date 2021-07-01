// atualizando peso e altura no texto

function slider(){
    var slider = document.getElementById("peso");
    var output = document.getElementById("textPeso");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }

}


function slider2(){
    var slider = document.getElementById("altura");
    var output = document.getElementById("textAltura");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }

}

//funcao de calculo
function calcular() {
    let resultado;
    let v1 = document.getElementById("peso").value;
    let v2 = document.getElementById("altura").value;
    
    let peso = parseFloat(v1);
    let altura = parseFloat(v2);
    // alert("peso é " + peso);
    // alert("altura é " + altura);
        
    let calculo = (peso / (altura * altura));
    
    // alert(calculo);
    if (calculo >= 25)
        resultado = "Você está acima do peso. Entre em contato com nossas redes sociais e agende sua consulta!";
    else if (calculo < 25 && calculo >= 20)
        resultado = "Você está com o peso correto, mas pode ser uma boa ideia fazer uma consulta para uma avaliação mais completa. Agende uma consulta com a gente através de nossas redes sociais!";
    else if (calculo < 20)
        resultado = "Você está com baixo peso. Entre em contato com nossas redes sociais e agende sua consulta!";
    else
        resultado = "Algum erro aconteceu, digite os números novamente.";

    document.getElementById("result").innerHTML = resultado;
 
}

