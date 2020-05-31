'use strict';
{
  const num = 10;
  const winner = Math.floor(Math.random() * num);
  const list = document.getElementById('list');
  const start = document.getElementById('start');
  const question = document.getElementById('question');
  const score = document.getElementById('score');
  let count = 0;
  question.textContent = 'クリックしたらゲームスタート！'
  let startTime; //タイマー用変数

  start.addEventListener('click', () => {
    question.textContent = '当たりを探してね！'
    start.classList.add('none');
    startTime = Date.now(); //タイマー起動
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
          div.textContent = '当たり!'
          div.classList.add('win');
          question.textContent = 'おめでとう！'
          
          let timer = ((new Date() - startTime) / 1000).toFixed(0); //タイマー
          
          setTimeout(() => {
            window.alert(`当てるのにめくった枚数は${count}枚です！
            ${timer}秒かかりました`)
          }, 700);
          return;
        } else {
          div.textContent = "はずれ!"
          div.classList.add('lose')
        }
      });
      
      list.appendChild(div);
    }
  }
}  