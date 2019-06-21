let digitTime = document.getElementById('digit-time'),
    life = document.getElementById('life'),
    btnReset = document.querySelector('.time a'),
    flipLife = document.querySelector('.flip-life-contain'),
    flipNoda = document.querySelector('.flip-life-noda'),
    timeReset = document.getElementById('timeReset'),
    countP;

let cekNoda = localStorage.getItem('noda');
  if(cekNoda === 'yes') {
    countP = setInterval(timeCount, 1000);
    btnReset.classList.add('disable');
    btnReset.classList.remove('btn-blue');
    flipNoda.style.backfaceVisibility = 'visible';
    flipNoda.style.transform = 'rotateY(0deg)';
    timeReset.style.cursor = 'not-allowed';
  }
// console.log(cekNoda);

// Time Section
let jam = 0,
    min = 0,
    det = 0;

    function timeCount() {
      det++;
      
      if(det > 59) {
        min++;
        det = 0;
      }
      if(det < 10 && det >= 0) {
        det = parseInt(det);
        det = '0' + det;
      }
      if(min > 59) {
        jam++;
        min = 0;
      }
      if(min < 10 && det >= 0) {
        min = parseInt(min);
        min = '0' + min;
      }
      if(jam < 10 && det >= 0) {
        jam = parseInt(jam);
        jam = '0' + jam;
      }     

      digitTime.textContent = jam + ':' + min + ':' + det;
    }

// klik Event - flipLife and resetTime
  life.addEventListener('click', noda);
    function noda() {
      // console.log(!countP);
      if(localStorage.getItem('noda') === null) {
        if(!countP) {
          countP = setInterval(timeCount, 1000);
          // console.log(!countP);
        }
        btnReset.classList.add('disable');
        btnReset.classList.remove('btn-blue');
        flipLife.style.transform = 'rotateY(180deg)';
        localStorage.setItem('noda', 'yes');
        timeReset.style.cursor = 'not-allowed';
        // timeCount();
      }
    }
  
  timeReset.addEventListener('click', resetTime);
    function resetTime() {
      if(btnReset.classList.item(1) == 'btn-blue') {
        jam = 0;
        min = 0;
        det = 0;
        alert('Time reset to 0');
      }
    }