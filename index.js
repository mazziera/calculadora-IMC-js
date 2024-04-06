function calcularImc() {
    const nome = document.querySelector("#name").value;
    const altura = parseFloat(document.querySelector("#height").value);
    const peso = parseFloat(document.querySelector("#weight").value);
    const containerResultado = document.querySelector(".result-container");
    
    if(nome === "" || altura === "" || altura <= 0 || peso === "" || peso <= 0){
        alert("Valores incorretos")
        
    } else{
        let resultado = (peso / (altura * altura));

    containerResultado.innerHTML = `${nome}, seu IMC é: ${resultado.toFixed(2)}`
    }
}