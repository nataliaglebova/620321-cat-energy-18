(function () {
  'use strict';

  var sliderButton = document.querySelector(".example__progress-line");
  var beforePhoto = document.querySelector(".example__image--up");
  var afterPhoto = document.querySelector(".example__image--below");
  var wrapper = document.querySelector(".example__wrapper");
  var EFFECT_MAX_SCALE = 411; // px
  var effectPin= document.querySelector('.example__progress-line');

  // передвижение пина эффектов
  effectPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      var shift = {
        x: startCoords.x - moveEvt.clientX,
      };
      startCoords = {
        x: moveEvt.clientX
      };
      if ((effectPin.offsetLeft - shift.x) < 0) {
        effectPin.style.left = 0 + 'px';
        beforePhoto.style.clipPath="polygon(0 0,"+ 0 +"% 0,"+ 0 +"% 100%, 0 100%)";

      } else {
        if ((effectPin.offsetLeft - shift.x) > EFFECT_MAX_SCALE) {
          effectPin.style.left = EFFECT_MAX_SCALE + 'px';
          beforePhoto.style.clipPath="polygon(0 0,"+ 100 +"% 0,"+ 100 +"% 100%, 0 100%)";
        } else {
          effectPin.style.left = (effectPin.offsetLeft - shift.x) + 'px';
          beforePhoto.style.clipPath="polygon(0 0,"+ ((effectPin.offsetLeft - shift.x) + 155) +"px 0,"+ ((effectPin.offsetLeft - shift.x) + 155) +"px 100%, 0 100%)";
        }
      }
    };
    var onPinMouseUp = function (upevt) {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onPinMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onPinMouseUp);
  });

})();
