var contador = 0; 
var totalValores = 0;

function calcular() {
    var res = document.getElementById("result");

    var mminicio = parseInt(document.getElementById("minicio").value);
    var hinicio = parseInt(document.getElementById("hinicioid").value);
    var cinicio = mminicio / 60;
    var tempo1 = hinicio + cinicio;

    var mmfim = parseInt(document.getElementById("mfim").value);
    var hfim = parseInt(document.getElementById("hfim").value);
    var cfim = mmfim / 60;
    var tempo2 = hfim + cfim;

    var tempo = tempo2 - tempo1;
    var vm = 70 / tempo;
    var total = 0;

    if (vm <= 60) {
        total = 20 - (0.15 * 20);
    } else if (vm > 60 && vm <= 100) {
        total = 20 - (0.10 * 20);
    } else if (vm > 100) {
        total = 20;
    }

    res.innerHTML = (`Placa do veículo: ${document.getElementById("placaid").value} | Hora de entrada: ${hinicio}:${mminicio} | Hora de saída: ${hfim}:${mmfim} | Tempo gasto no percurso: ${tempo.toFixed(2)} horas | Velocidade média: ${vm.toFixed(2)} km/h | Valor a ser cobrado: ${total.toFixed(2)}`);

    contador++;
    totalValores += total;
}

var maior = 0;
var menor = Infinity; 
var mediaVM = 0;
var SomaVM = 0;
var menorhi = ""; 
var menormi = ""; 
var menorhf = ""; 
var menormf = ""; 

function finalizar() {
    var res = document.getElementById("result");

    var mminicio = parseInt(document.getElementById("minicio").value);
    var hinicio = parseInt(document.getElementById("hinicioid").value);
    var mmfim = parseInt(document.getElementById("mfim").value);
    var hfim = parseInt(document.getElementById("hfim").value);
    
    var cinicio = mminicio / 60;
    var tempo1 = hinicio + cinicio;
    var cfim = mmfim / 60;
    var tempo2 = hfim + cfim;

    var tempo = tempo2 - tempo1;
    var vm = 70 / tempo;

    if (vm > maior) {
        maior = vm;
    }

    if (vm < menor) {
        menor = vm;
    }

    if (contador > 0) {
        SomaVM += vm;
        mediaVM = SomaVM / contador;
    }

    if (menorhi === "" || `${hinicio}:${mminicio}` < menorhi) {
        menorhi = `${hinicio}:${mminicio}`;
    }
    if (menorhf === "" || `${hfim}:${mmfim}` > menorhf) {
        menorhf = `${hfim}:${mmfim}`;
    }

    res.innerHTML = (`Maior velocidade: ${maior.toFixed(2)} km/h | Menor velocidade: ${menor.toFixed(2)} km/h | Média das velocidades: ${mediaVM.toFixed(2)} km/h | Total dos valores cobrados: ${totalValores.toFixed(2)} | Hora de início do processamento: ${menorhi} | Hora final do processamento: ${menorhf}`);
}
