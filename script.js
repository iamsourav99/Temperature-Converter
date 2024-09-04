
function change(){

    let xyz=document.getElementById("sel").value;
    if(xyz=="C"){
        document.getElementById("source").textContent="Farenhite";
        document.getElementById("dest").textContent="Celsius";
    }
    else {
        document.getElementById("source").textContent="Celsius";
        document.getElementById("dest").textContent="Farenhite";
    }
}


function show(){
    let inputElement=document.getElementById("from");
    let inputValue=inputElement.value;
    let selector=document.getElementById("sel").value;
    if(selector=="F"){

        let fer= ((9/5)*(inputValue))+32;
        document.getElementById("to").value=fer.toFixed(2);
    }
    else{
        let cel=(5/9)*(inputValue-32);
        document.getElementById("to").value=cel.toFixed(2);
    }
}
