function calcular(){
    let nome = document.getElementById('txtNome').value;
    let idade = document.getElementById('txtIdade');
    let altura = document.getElementById('txtAltura');
    let peso = document.getElementById('txtPeso');


    if (nome == "" || idade.value.length === 0 || altura.value.length === 0 || peso.value.length === 0){
        window.alert('[ERRO] A um ou mais campos em branco, por favor preencha todos os dados');
        return;
    } else {
        let idade2 = Number(idade.value);
        let altura2 = Number(altura.value);
        let peso2 = Number(peso.value);
        let data = new Date;
        let anoAtual = data.getFullYear();

        let result = peso2 / Math.pow(altura2, 2);
        let anoDeNascimento = anoAtual - idade2

        container2.innerHTML = `${nome} tem ${idade2} anos e nasceu em ${anoDeNascimento}, pesa ${peso2}kg, tem ${altura2}m e seu IMC é de ${result}`
    }    
}