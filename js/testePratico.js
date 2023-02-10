function start() {
  let buttonCalcuateCalc = document.querySelector("#button-calculate-calc");

  buttonCalcuateCalc.addEventListener("click", handleButtonClick);
}

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

function percentAB(numA, numB) {
  let percentA = (numB / numA) * 100;
  return percentA;
}

function percentBA(numA, numB) {
    let percentB = (numA / numB) * 100;
    return percentB;
  }

function handleButtonClick() {
  let numberA = document.querySelector("#numero-a");
  let numberB = document.querySelector("#numero-b");

  let somaAB = document.querySelector("#somaAB");
  let subAB = document.querySelector("#subAB");
  let subBA = document.querySelector("#subBA");
  let multAB = document.querySelector("#multAB");
  let divAB = document.querySelector("#divAB");
  let divBA = document.querySelector("#divBA");
  let potAB = document.querySelector("#potAB");
  let potBA = document.querySelector("#potBA");
  let raizA = document.querySelector("#raizA");
  let raizB = document.querySelector("#raizB");
  let fatA = document.querySelector("#fatA");
  let fatB = document.querySelector("#fatB");
  let pctAB = document.querySelector("#pctAB");
  let pctBA = document.querySelector("#pctBA");
  let medAB = document.querySelector("#medAB");

  let numA = Number(numberA.value);
  let numB = Number(numberB.value);

  somaAB.textContent = numA + numB;
  subAB.textContent = numA - numB;
  subBA.textContent = numB - numA;
  multAB.textContent = numA * numB;
  divAB.textContent = (numA / numB).toFixed(2);
  divBA.textContent = (numB / numA).toFixed(2);
  potAB.textContent = numA ** numB;
  potBA.textContent = numB ** numA;
  raizA.textContent = Math.sqrt(numA).toFixed(2);
  raizB.textContent = Math.sqrt(numB).toFixed(2);
  fatA.textContent = factorialize(numA);
  fatB.textContent = factorialize(numB);
  medAB.textContent = (numA + numB) / 2;
  pctAB.textContent = Math.ceil(percentAB(numA, numB)) + "%";
  pctBA.textContent = Math.ceil(percentBA(numA, numB)) + "%";
}

start();
