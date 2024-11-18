function calcularIMC() {
        var peso = parseFloat(document.getElementById("pesoid").value);
        var altura = parseFloat(document.getElementById("alturaid").value);
        var nome = document.getElementById("nomeid").value;
        var sexo = document.getElementById("sexoid").value;
        var imc = peso / (altura * altura);
        var res = document.getElementById("reesul");
        var res2 = document.getElementById("resul");
        var res3 = document.getElementById("resull");
        var pesoIdeal = 0;
        var pesoPerder = 0;
    
        if (sexo === "M") {
            pesoIdeal = 26.4 * (altura * altura);
    
            if (imc < 20.7) {
                res2.innerHTML = ("\nAbaixo do peso");
            } else if (imc >= 20.7 && imc <= 26.4) {
                res2.innerHTML = ("\n" + nome + " está no peso normal");
            } else if (imc > 26.4 && imc <= 27.8) {
                pesoPerder = peso - pesoIdeal;
                res2.innerHTML = ("\n" + nome + " está marginalmente acima do peso. Precisa perder: " + pesoPerder.toFixed(2) + " kg para chegar ao peso ideal");
            } else if (imc > 27.8 && imc <= 31.1) {
                pesoPerder = peso - pesoIdeal;
                res2.innerHTML = ("\n" + nome + " está acima do peso ideal. Precisa perder: " + pesoPerder.toFixed(2) + " kg para alcançar o peso ideal");
            } else if (imc > 31.1) {
                pesoPerder = peso - pesoIdeal;
                res2.innerHTML = (`\n${nome} está obeso. Precisa perder: ${pesoPerder.toFixed(2)} kg para alcançar o peso ideal`);
            }
        }
    
        if (sexo === "F") {
            pesoIdeal = 25.8 * (altura * altura);
    
            if (imc < 19.1) {
                res3.innerHTML = ("\nAbaixo do peso");
            } else if (imc >= 19.1 && imc <= 25.8) {
                res3.innerHTML = ("\nPeso normal");
            } else if (imc > 25.8 && imc <= 27.3) {
                pesoPerder = peso - pesoIdeal;
                res3.innerHTML = ("\n" + nome + " está marginalmente acima do peso. Precisa perder: " + pesoPerder.toFixed(2) + " kg para alcançar o peso ideal");
            } else if (imc > 27.3 && imc <= 32.3) {
                pesoPerder = peso - pesoIdeal;
                res3.innerHTML = ("\n" + nome + " está acima do peso ideal. Precisa perder: " + pesoPerder.toFixed(2) + " kg para alcançar o peso ideal");
            } else if (imc > 32.3) {
                pesoPerder = peso - pesoIdeal;
                res3.innerHTML = (`\n${nome} está obesa. Precisa perder: ${pesoPerder.toFixed(2)} kg para alcançar o peso ideal`);
            }
        }
    
        res.innerHTML = (`\nNome: ${nome} | Sexo: ${sexo} | Peso: ${peso.toFixed(2)}kg | Altura: ${altura.toFixed(2)}m | IMC: ${imc.toFixed(2)}`);
    }

function clearIMC(){
    document.getElementById('limpar').reset = '';

}