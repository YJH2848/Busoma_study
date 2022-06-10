function convert(){
    let u = document.getElementById("input").value;
    let y = document.getElementById("input-box").value;
    switch (u){
        case "cm":
            y /= 100;
            break;
        case "yard":
            y /= 1.094;
            break;
        case "km":
            y *= 1000;
            break;
        case "inch":
            y /= 39.37;
            break;
        default:
            
    }
    let w = document.getElementById("output").value;
    switch(w){
        case "cm":
            y *= 100;
            break;
        case "yard":
            y *= 1.094;
            break;
        case "km":
            y /= 1000;
            break;
        case "inch":
            y *= 39.37;
            break;
        default:
    }
    document.getElementById("output-box").value = y;


}



