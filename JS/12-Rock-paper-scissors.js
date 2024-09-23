const score = JSON.parse(localStorage.getItem('Score')) || { wins: 0, losses: 0, ties: 0 };
updateScore();

document.querySelector('.JR_button').addEventListener('click', () => {
  playGame('Rock')
})

document.querySelector('.JP_button').addEventListener('click', () => {
  playGame('Paper')
})

document.querySelector('.JS_button').addEventListener('click', () => {
  playGame('Scissors')
})

document.body.addEventListener('keydown', (event) => {
  const key=event.key.toLowerCase()
  if (key === 'r'){
    playGame('Rock')
  }else if(key==='p'){
    playGame('Paper')
  }else if(key==='s'){
    playGame('Scissors')
  }else if(key==='a'){
    Autoplay()  
  }else if(event.key==='Backspace'){
    resetScore()
  }
})

 document.querySelector('.reset').addEventListener('click', () => {
   document.querySelector('.message').classList.remove('not_showing')
   document.querySelector('.yes').addEventListener('click', () => {
     resetScore()
     document.querySelector('.message').classList.add('not_showing')
   })
   document.querySelector('.no').addEventListener('click', () => {
    document.querySelector('.message').classList.add('not_showing')
   })
 })


 function resetScore(){
     score.wins=0;
     score.losses=0;
     score.ties=0;
     localStorage.removeItem('Score');
     updateScore();
 }

function playGame(playerMove) {
  const ComputerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'Scissors') {
    if (ComputerMove === 'Rock') {
      result = 'You Lose.';
    } else if (ComputerMove === 'Paper') {
      result = 'You Win.';
    } else if (ComputerMove === 'Scissors') {
      result = 'Tie.';
    }
  } else if (playerMove === 'Paper') {
    if (ComputerMove === 'Rock') {
      result = 'You Win.';
    } else if (ComputerMove === 'Paper') {
      result = 'Tie.';
    } else if (ComputerMove === 'Scissors') {
      result = 'You Lose.';
    }
  } else if (playerMove === 'Rock') {
    if (ComputerMove === 'Rock') {
      result = 'Tie.';
    } else if (ComputerMove === 'Paper') {
      result = 'You Lose.';
    } else if (ComputerMove === 'Scissors') {
      result = 'You Win.';
    }
  }

  if (result === 'You Win.') {
    score.wins += 1;
  } else if (result === 'You Lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('Score', JSON.stringify(score));
  updateScore();

  document.querySelector('.result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `
    You
    <img class="Cmoves" src="images/${playerMove}-emoji.png" alt="${playerMove}">
    <img class="Cmoves" src="images/${ComputerMove}-emoji.png" alt="${ComputerMove}">
    Computer
  `;
}

function updateScore() {
  document.querySelector('.jScore').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function pickComputerMove() {
  const RandomNumber = Math.floor(Math.random() * 3);
  if (RandomNumber === 0) {
    return 'Rock';
  } else if (RandomNumber === 1) {
    return 'Paper';
  } else if (RandomNumber === 2) {
    return 'Scissors';
  }
}


let isAutoplaying = false
document.querySelector('.JA_button').addEventListener('click', ()=>{
  Autoplay()
})
function Autoplay(){
  if(!isAutoplaying){
    isAutoplaying = setInterval( ()=> {
      const ComputerMove = pickComputerMove();
      playGame(ComputerMove)
    }, 1500)
    isAutoplaying = true
    document.querySelector('.AutoPlay').innerHTML='Stop Play'
    } else{
      clearInterval(isAutoplaying)
      isAutoplaying = false
      document.querySelector('.AutoPlay').innerHTML='Auto Play'
    }
}


