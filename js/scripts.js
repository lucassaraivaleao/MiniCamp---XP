function start() {
  // Obtendo o id do botão para usá-lo no programa
  let buttonCalculateImc = document.querySelector("#button-calculate-imc");
  // Definindo o tipo de ação e a função que executará esta ação
  buttonCalculateImc.addEventListener("click", handleButtonClick);
  // Teste da função
  console.log("start!");

  // Executar o carregamento automático das variáveis e fazer o cĺaculo
//   let inputWeight = document.querySelector("#input-weight");
//   let inputheight = document.querySelector("#input-height");

//   inputWeight.addEventListener('input', handleButtonClick);
//   inputheight.addEventListener('input', handleButtonClick);

//   handleButtonClick();

  //   console.log(calculateImc(88, 1.79));
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  // criar variáveis para armazenar qual elemento do html será atacado
  let inputWeight = document.querySelector("#input-weight");
  let inputheight = document.querySelector("#input-height");
  let imcResult = document.querySelector("#imc-result");

  // criando variáveis e colocando os valores que foram inseridos nos inputs
  let weight = Number(inputWeight.value);
  let height = Number(inputheight.value);

  // variável que receberá o cálculo do IMC
  let imc = calculateImc(weight, height);

  imcResult.textContent = imc.toFixed(2);
}

start();
