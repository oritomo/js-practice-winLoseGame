'use strict';
{
  const num = 5;
  const winner = Math.floor(Math.random() * num);
  const list = document.getElementById('list');
  const start = document.getElementById('start');
  const question = document.getElementById('question');
  const score = document.getElementById('score');
  let count = 0;
  question.textContent = 'クリックしたらゲームスタート！'

  start.addEventListener('click', () => {
    question.textContent = '当たりを探してね！'
    start.classList.add('none');
    gameStart();
  });


  function gameStart() {
    for (let i = 0; i < num; i++) {
      const div = document.createElement('div');
      div.classList.add('box');
      div.textContent = '？'
      score.textContent = `めくった枚数: 0`;
      div.addEventListener('click', () => {
        count++;
        score.textContent = `めくった枚数: ${count}`;
        if (winner === i) {
          div.textContent = 'WIN!'
          div.classList.add('win');
          question.textContent = 'おめでとう！'
          setTimeout(() => {
            window.alert(`当てるのにめっくた枚数は${count}枚です！`)
          }, 700);

        } else {
          div.textContent = "LOSE!"
          div.classList.add('lose')
        }
      });
      
      list.appendChild(div);
    }
  }
}  