
var left = 0;
var MOVE = 5;

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 39) {
    left = left + MOVE;
    document.querySelector('#dude').style.left = left + 'px';
  } else if (evt.keyCode === 37) {
    left = left - MOVE;
    document.querySelector('#dude').style.left = left + 'px';
  }
});
