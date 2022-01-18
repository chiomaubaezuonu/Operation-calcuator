

document.getElementById("reset-input").addEventListener("click", function () {
  in1.value = "";
  in2.value = "";
  in3.value = "";
});

function showErrorMsg(errorMessage) {
  const result = document.getElementById("product");
  result.innerHTML = errorMessage;
  result.className = "errorMsg";
}
function showSuccessMsg(successMessage) {
  const result = document.getElementById("product");
  result.innerHTML = successMessage;
  result.className = "successInfo";
}


document.getElementById("calc-input").addEventListener("click", calculate)
function calculate() {
  let a = document.getElementById("in1").value;
  let b = document.getElementById("in2").value;
  let c = document.getElementById("in3").value;
  let numA = Number(a);
  let numB = Number(b);
  let numC = Number(c);
  let numProduct = numA + numB + numC;
  let numMultiply = numA * numB * numC;
  let numDivision = numA / numB / numC;
  let numMinus = numA - numB - numC;
  let numberArray = [numA, numB, numC];
  let numAverage = numProduct / numberArray.length;
  // const result = document.getElementById("product");
  // result.innerHTML = "The product is " + sumProduct;
  // document.getElementById("modeselect").value;
  // const result = document.getElementById("product");
  // result.classList.add("changeColor");

  if (modeselect.value === "0") {

    showErrorMsg("Please select a calculator mode");

  }
  else if (modeselect.value === "Multiplication") {

    showSuccessMsg("The product is " + numMultiply + "!");

  }
  else if (modeselect.value === "Sum") {
    showSuccessMsg("The product is " + numProduct);
  }
  else if (modeselect.value === "Subtraction") {
    showSuccessMsg("The product is " + numMinus);
  }
  else if (modeselect.value === "Division") {
    showSuccessMsg("The product is " + numDivision);
  }
  else if (modeselect.value === "Average") {
    showSuccessMsg("The product is " + Math.round(numAverage));
  }

};

document.getElementById("img1").addEventListener("click", removeInputOne);
function removeInputOne() {
  const removeInput1 = document.getElementById("in1");
  const removeLabel1 = document.getElementById("label1");
  removeLabel1.remove();
  removeInput1.remove();
}
document.getElementById("img2").addEventListener("click", removeInputTwo);
function removeInputTwo() {
  const removeInput2 = document.getElementById("in2");
  const removeLabel2 = document.getElementById("label2");
  removeLabel2.remove();
  removeInput2.remove();
}
document.getElementById("img3").addEventListener("click", removeInputThreeAndLabel);
function removeInputThreeAndLabel() {
  const removeInput3 = document.getElementById("in3");
  const removeLabel = document.getElementById("label3");
  removeLabel.remove();
  removeInput3.remove();
}
document.getElementById("addinput").addEventListener("click", addInput);
function addInput() {

  const newInputGroupDiv = document.createElement("div");
  newInputGroupDiv.setAttribute("class", "input-group")
  const newLabel = document.createElement("label");
  newLabel.setAttribute("id", "label4");
  newLabel.textContent = "Input 4";
  newInputGroupDiv.appendChild(newLabel);

  const inputImageDiv = document.createElement("div");
  inputImageDiv.setAttribute("class", "input-and-image");
  newInputGroupDiv.appendChild(inputImageDiv);
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("value", "11");
  input.setAttribute("id", "in4");
  input.setAttribute("class", "allinput");
  inputImageDiv.appendChild(input);

  const inputVector = document.createElement("img");
  inputVector.setAttribute("src", "Vector.png");
  inputVector.setAttribute("class", "vector-img");
  inputVector.setAttribute("id", "img4");
  inputVector.setAttribute("alt", "Vector");
  inputImageDiv.appendChild(inputVector);
  document.getElementById("everyinput");

  everyinput.appendChild(newInputGroupDiv);
  document.getElementById(everyinput);
}