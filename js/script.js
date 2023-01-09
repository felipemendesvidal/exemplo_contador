function contar_init() {
    
    // pegando elementos 
    let   numero_fim  = document.getElementById('numero-fim');
    let   numero_passo = document.getElementById('numero-passo');
    let   txt_numero_inicio  = document.getElementById('txt-numero-inicio');
    let   resultado = document.getElementById('resultado');


    // verificar se os dados estão faltando
    if (txt_numero_inicio.value.length == 0 || numero_fim.value.length == 0|| numero_passo.value.length == 0){
        alert('erro, falta dados');
    }else{

        // adicionando no html
        resultado.innerHTML = "contando";

        let numero_contado_inicio = Number(txt_numero_inicio.value);
        let numero_contado_passo = Number(numero_passo.value);
        let numero_contado_fim = Number(numero_fim.value);
        // se o passo for zero
        if ( numero_contado_passo <= 0 ){
            alert('passo invalido, considerando passo 1');
            numero_contado_passo = 1
        }
        // essa contagem só funciona se o numero inicial for maior que o de baixo
        if (numero_contado_inicio < numero_contado_fim){
            //contagem cresente
            for(
                let inicio_contador_for = numero_contado_inicio; inicio_contador_for <= numero_contado_fim; inicio_contador_for += numero_contado_passo){
                    resultado.innerHTML += `${inicio_contador_for}`;
                }
        }else {
            //contagem decrecente
            for(
                let inicio_contador_for = numero_contado_inicio; inicio_contador_for >= numero_contado_fim; inicio_contador_for -= numero_contado_passo){
                
                    resultado.innerHTML += ` ${inicio_contador_for} `; 
            }
        }
        
        // formatação unicode para javascript
        resultado.innerHTML+=`\u{1F3C1}`


    }
    
    
}


