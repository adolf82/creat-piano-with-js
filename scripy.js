const note=document.querySelector('.nowplaying');
const keys=document.querySelectorAll('.key');
window.addEventListener('keydown' , function(e){
const key =document.querySelector(`.key[data-key="${e.keyCode}"]`)
const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`)

    if (!key) return;
const keynote=key.getAttribute('data-note');
note.innerHTML=keynote;
key.classList.add('playing');
audio.play();
audio.currentTime=0;
});
function removeTransition () {
  this.classList.remove('playing');
}
keys.forEach(key=>key.addEventListener('transitionend' ,removeTransition));