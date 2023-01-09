function verificar (){
    
    //pegar data atual
    var data_atual = new Date();
    var ano_atual = data_atual.getFullYear();
    var form_ano = document.getElementById('txt-ano');
    var resultado = document.getElementById('resultado');
    if (form_ano.value.length == 0 || Number(form_ano.value ) > ano_atual){
        alert('ano informado esta errado, verifique o campo ano e tente novamente');
    }else{
        var form_sex = document.getElementsByName('radsex');
        var idade = ano_atual - Number(form_ano.value)
        
        var genero = '';
        if(form_sex[0].checked){
            genero = 'Homem';
        }else if (form_sex[1].checked){
            genero = 'mulher'
        }
        resultado.innerHTML = `Calculamos que é um (a) ${genero} de ${idade} anos`

    }
    
    
}


