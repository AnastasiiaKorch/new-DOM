import Board from './Board';

let index = 0;
const goblin = new Board();
goblin.rendering();

document.querySelector('.btn').addEventListener('click', () => {
  if (index === 0) {
    setInterval(goblin.random.bind(goblin), 2000);
  } else {
    alert('Обновите страницу для начала новой игры');
  }
  index++;
});

document.querySelector('.board').addEventListener('click', (event) => {
  const checkGoblin = document.querySelector('.goblin');
  if (event.target.contains(checkGoblin)) {
    const score = document.querySelector('.score');
    score.textContent++;
  }
});