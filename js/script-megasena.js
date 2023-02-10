// criação de estado para início da aplicação
let state = { board: [], currentGame: [], savedGames: [] };

// criando função para iniciar aplicação
function start() {
  readLocalStorage();
  createBoard();
  newGame();
}

function readLocalStorage() {
  if (!window.localStorage) {
    return;
  }

  let savedGAmesFromLocalStorage = window.localStorage.getItem("saved-games");

  if (savedGAmesFromLocalStorage) {
    state.savedGames = JSON.parse(savedGAmesFromLocalStorage);
  }
}

function writeLocalStorage() {
  window.localStorage.setItem("saved-games", JSON.stringify(state.savedGames));
}

function createBoard() {
  state.board = [];

  for (let i = 0; i <= 60; i++) {
    state.board.push(i);
  }
}

function newGame() {
  resetGame();
  render();
}

function render() {
  renderBoard();
  renderButtons();
  renderSaveGames();
}

function renderBoard() {
  let divBoard = document.querySelector("#megasena-board");
  divBoard.innerHTML = "";

  let ulNumbers = document.createElement("ul");
  ulNumbers.classList.add("numbers");

  for (let i = 1; i < state.board.length; i++) {
    let currentNumber = state.board[i];
    let liNUmber = document.createElement("li");
    liNUmber.textContent = currentNumber;
    liNUmber.classList.add("number");

    liNUmber.addEventListener("click", handleNumberClick);

    if (isNumberInGame(Number(currentNumber))) {
      liNUmber.classList.add("selected-number");
    }

    ulNumbers.appendChild(liNUmber);
  }
  divBoard.appendChild(ulNumbers);
}

function handleNumberClick(event) {
  let value = Number(event.currentTarget.textContent);
  if (isNumberInGame(value)) {
    removeNumberFromGame(value);
  } else {
    addNumberToGame(value);
  }

  render();
}

function renderButtons() {
  let divButtons = document.querySelector("#megasena-buttons");
  divButtons.innerHTML = "";

  let buttonNewGame = createNewGameButton();
  let buttonRandomGame = createRandomGameButton();
  let buttonSaveGame = createSaveGameButton();

  divButtons.appendChild(buttonNewGame);
  divButtons.appendChild(buttonRandomGame);
  divButtons.appendChild(buttonSaveGame);
}

function createSaveGameButton() {
  let button = document.createElement("button");
  button.textContent = "Salvar Jogo";
  button.disabled = !isGameComplete();

  button.addEventListener("click", saveGame);

  return button;
}

function createRandomGameButton() {
  let button = document.createElement("button");
  button.textContent = "Jogo Aleatório";

  button.addEventListener("click", randomGame);

  return button;
}

function createNewGameButton() {
  let button = document.createElement("button");
  button.textContent = "Novo jogo";

  button.addEventListener("click", newGame);

  return button;
}

function renderSaveGames() {
  let divSavedGames = document.querySelector("#megasena-saved-games");
  divSavedGames.innerHTML = "";

  if (state.savedGames.length === 0) {
    divSavedGames.innerHTML = "<p> Nenhum Jogo Salvo</p>";
  } else {
    let ulSavedGames = document.createElement("ul");

    for (let i = 0; i < state.savedGames.length; i++) {
      let currentGame = state.savedGames[i];

      let liGame = document.createElement("li");
      liGame.textContent = currentGame;

      ulSavedGames.appendChild(liGame);
    }
    divSavedGames.appendChild(ulSavedGames);
  }
}

function addNumberToGame(numberToAdd) {
  if (numberToAdd < 1 || numberToAdd > 60) {
    console.error("Número inválido", numberToAdd);
    return;
  }

  if (state.currentGame.length >= 6) {
    console.error("O jogo já está completo.");
    return;
  }
  if (isNumberInGame(numberToAdd)) {
    console.error("Este número já está no jogo.", numberToAdd);
    return;
  }

  state.currentGame.push(numberToAdd);
}

function removeNumberFromGame(numberToRemove) {
  let newGame = [];

  for (let i = 0; i < state.currentGame.length; i++) {
    let currentNumber = state.currentGame[i];
    if (currentNumber === numberToRemove) {
      continue;
    }

    newGame.push(currentNumber);
  }
  state.currentGame = newGame;
}

function isNumberInGame(numberToCheck) {
  // if (state.currentGame.includes(numberToCheck)){
  //     return true;
  // }
  // return false;
  return state.currentGame.includes(numberToCheck);
}

function saveGame() {
  if (!isGameComplete()) {
    console.error("O jogo não está completo !");
    return;
  }
  state.savedGames.push(state.currentGame);
  writeLocalStorage();
  newGame();
}

function isGameComplete() {
  return state.currentGame.length === 6;
}

function resetGame() {
  state.currentGame = [];
}

function randomGame() {
  resetGame();

  while (!isGameComplete()) {
    let randomNumber = Math.ceil(Math.random() * 60);
    addNumberToGame(randomNumber);
  }

  render();
}
start();
