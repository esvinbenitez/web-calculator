function calculate() {
var Number1 = parseFloat(document.getElementById("Number1").value);
var Number2 = parseFloat(document.getElementById("Number2").value);

  
switch(document.getElementById("total").value){
    case "addition":
        document.getElementById("result").innerHTML = Number1 + Number2;
        break;
    case "subtraction":
        document.getElementById("result").innerHTML = Number1 - Number2;
       break;
    case "multiplication":
        document.getElementById("result").innerHTML = Number1 * Number2;
       break;
    case "division":
        document.getElementById("result").innerHTML = Number1 / Number2;
        break;

        default:
            document.getElementById("result").innerHTML = "";

}
}