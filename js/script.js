//.header: City Alert display
function cityAlert(){
    alert("Cargando informe meteorológico...")
}
//.message: Accept - dismiss button
function acceptBtn(element){
    element = document.querySelector(".message");
    console.log(element);
    element.remove();
}

//.location: Temperature conversion
//var temperatura = document.querySelectorAll(".tempatures");
//console.log(temperatura);
function convertF (temp){
    return Math.round(9 / 5 * temp + 32);
}
function convertC (temp){
    return Math.round(5 / 9 * (temp - 32));
}
function tempChange(evento){
    for (let i = 1; i<9; i++){
        let temp = document.querySelector("#temp" + i);
        let t = parseInt(temp.innerText);
        if(evento.value == 1){
            console.log(convertF(t));
            temp.innerText = convertF(t);
        } else {
            console.log(convertC(t));
            temp.innerText = convertC(t);
        }
        
    }
}

