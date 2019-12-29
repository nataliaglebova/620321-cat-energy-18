(function () {
  'use strict';

  var menuOpenButton = document.querySelector('.site-header__menu-spoiler');
  var menuList = document.querySelector('.site-navigation');
  var onMenuOpenButtonClick = function () {
    if(menuList.style.display=== 'none'){
    menuList.style.display='block';
} else {
    menuList.style.display='none';
};
};

  menuOpenButton.addEventListener('mousedown', onMenuOpenButtonClick);
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
      } else {
        if ((effectPin.offsetLeft - shift.x) > EFFECT_MAX_SCALE) {
          effectPin.style.left = EFFECT_MAX_SCALE + 'px';
        } else {
          effectPin.style.left = (effectPin.offsetLeft - shift.x) + 'px';
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
