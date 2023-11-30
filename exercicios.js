

var trabalhar = true
    var chuva = false
    var res = document.getElementById('resp')
    if (chuva == true){
    
    res.innerHTML = ('Não vou trabalhar') 
    } 
    else {
        res.innerHTML = ('Vou trabalhar')
        
    }

    var numeroDeAtraso = 3
    if(numeroDeAtraso > 3){
        document.getElementById('atraso').innerHTML = 'Introduz um número igual ou inferior à três.'
    }
    
    else if(numeroDeAtraso == 3) {
        document.getElementById('atraso').innerHTML = 'Não, não. Está suspenso!'
    }
    else if(numeroDeAtraso == 2){
        document.getElementById('atraso').innerHTML = 'Pode entrar, mas se tomas mais uma falta, será suspenso.'
    }
    else if(numeroDeAtraso == 1){
        document.getElementById('atraso').innerHTML = 'Pode entrar, mas tenha cuidado para não tomar a segunda falta.'
    }
    else{
        document.getElementById('atraso').innerHTML = 'Parábens! Tu não tens nenhuma falta. Podes entrar.'
    }

    function calcular(){
    var primeiroNumero = document.getElementById('num1')
    var segundoNumero = document.getElementById('num2')
    var resNum = document.getElementById('n1')
    var n01 = Number(primeiroNumero.value)
    var n02 = Number(segundoNumero.value)
    if (n01 == '' || n02 == ''){
        resNum.innerHTML = 'introduz um número!'
    } 
    else if (n01 > n02){
        resNum.innerHTML = 'O primeiro numero é maior.'
    }
    else {
        resNum.innerHTML = 'O segundo numero é maior.'
    }

    }

    function calcular (){
        let numero = document.getElementById('tn1').value

        let resp1 = document.getElementById('fatorial')
        //para valores negativos
        if(numero == ''){
            resp1.innerHTML = 'Introduz um número'
        }
        else if(numero < 0){
            resp1.innerHTML = 'Introduz um número positivo'
        }
        else if ( (numero == 0) || (numero == 1)){
            resp1.innerHTML = '1'
        }
        let fatorial = 1
        for (x = numero;  x > 1; x--){
        fatorial = fatorial*x
        }
       resp1.innerHTML = fatorial
     }

    
