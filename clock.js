let digitalclock=()=>{
const now=new Date()
const hours=String(now.getHours()).padStart(2,"0");
const minutes=String(now.getMinutes()).padStart(2,"0");
const seconds=String(now.getSeconds()).padStart(2,"0");
const clock=document.getElementById("digitalclock");
clock.textContent=`${hours}: ${minutes}: ${seconds}`;
}

setInterval(digitalclock,1000)

const audio=document.getElementById("beach-audio");
const button=document.getElementById("play-sound");

let isPlaying = false;

    button.addEventListener('click', () => {
      if (isPlaying) {
        audio.pause();
        button.textContent = '🔇';
      } else {
        audio.play();
        button.textContent = '🔊';
      }
      isPlaying = !isPlaying;
    });