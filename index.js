fuction getIMC(){
  var peso=parseFloat(document.getElementByid("peso").value;
  var altura=parseFloat(document.getElementByid("altura").value;
  var imc=peso/(altura*altura);
  document.getElementById("IMC").innerHTML=imc
                    
                        
