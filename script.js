function calcular() {
    let v1 = document.getElementById("peso").value;
    let v2 = document.getElementById("altura").value;
    let peso = parseInt(v1);
    let altura = parseInt(v2);
    console.log(v1);
    
    let calculo = Math.round(peso / (altura * altura) * 10000);
    
    alert("Valor do calculo: " + calculo);

    console.log(calculo);
    
    switch(true) {
        case calculo >= 25:
            document.getElementById("result").innerHTML = "Você está acima do peso. Procure uma nutricionista para regularizar o seu peso.";
            alert("passou aqui");
            break;
        case calculo < 25:
            document.getElementById("result").innerHTML = "Você está bem, mas pode ser uma boa consultar a nutricionista para ver alguns outros exames.";
            break;
        case calculo < 20:
            document.getElementById("result").innerHTML = "Você está com baixo peso. É recomendado que faça uma reeducação alimentar";
            break;
        default: 
            document.getElementById("result").innerHTML = "Algum erro aconteceu, digite os números novamente.";
            break;
            
    };

    alert("fim");
    
    //document.getElementById("demo").innerHTML = "Hello JavaScript!"'
}