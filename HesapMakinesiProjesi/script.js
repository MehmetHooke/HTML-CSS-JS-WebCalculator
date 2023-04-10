let result = "";


function append(value) {
/**This function adds the string of the clicked button to the "result" string 
 * and collects the mathematical operation as a string in the "result" variable. */

  result += value;
  document.querySelector(".result-screen").innerText = result;
}

function clearResult() {
   /**Clear innerHTML in sonuc-ekrani */
  result = "";
  document.querySelector(".result-screen").innerHTML= result;
}

function calculate() {
  let calcResult = eval(result);
  document.querySelector(".result-screen").innerText = calcResult;
  result = calcResult.toString();
}


function yüzdesiniAl() {
  result = eval(result + "/100");
}

