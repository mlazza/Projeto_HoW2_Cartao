function calcular() {
    let resultado;
    let v1 = document.getElementById("peso").value;
    let v2 = document.getElementById("altura").value;
    let peso = parseInt(v1);
    let altura = parseInt(v2);
        
    let calculo = Math.round(peso / (altura * altura) * 10000);
      
    if (calculo >= 25)
        resultado = "Você está acima do peso. Procure uma nutricionista para regularizar o seu peso.";
    else if (calculo < 25 && calculo >= 20)
        resultado = "Você está bem, mas pode ser uma boa consultar a nutricionista para ver alguns outros exames.";
    else if (calculo < 20)
        resultado = "Você está com baixo peso. É recomendado que faça uma reeducação alimentar";
    else
        resultado = "Algum erro aconteceu, digite os números novamente.";



    // switch(true) {
    //     case calculo >= 25:
    //         resultado = "Você está acima do peso. Procure uma nutricionista para regularizar o seu peso.";
    //         break;
    //     case calculo < 25:
    //         resultado = "Você está bem, mas pode ser uma boa consultar a nutricionista para ver alguns outros exames.";
    //         break;
    //     case calculo < 20:
    //         resultado = "Você está com baixo peso. É recomendado que faça uma reeducação alimentar";
    //         break;
    //     default: 
    //         resultado = "Algum erro aconteceu, digite os números novamente.";
    //         break;
            
    // };

    document.getElementById("result").innerHTML = resultado;
 
}

// atualizando peso e altura no texto

function updatePesoInput(val) {
    document.getElementById('pesoInput').value=val; 
  }


function slider2(){
    var slider = document.getElementById("altura");
    var output = document.getElementById("textAltura");
    output.innerHTML = slider.value;

    slider.oninput = function() {
    output.innerHTML = this.value;
    }

}