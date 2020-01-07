(function () {
  'use strict';

  var menuOpenButton = document.querySelector('.site-header__menu-spoiler');
  var menuList = document.querySelector('.site-navigation');

  menuList.classList.remove('site-navigation--no-js');
  menuOpenButton.classList.remove('site-header__menu-spoiler--no-js');

  var onMenuOpenButtonClick = function () {
    if(menuList.style.display=== 'none'){
    menuList.style.display='block';
    menuOpenButton.style.backgroundImage = "url('../img/icon-close.svg')";
  } else {
    menuList.style.display='none';
    menuOpenButton.style.backgroundImage = "url('../img/icon-mobile-menu.svg')";
  };
};

menuOpenButton.addEventListener('mousedown', onMenuOpenButtonClick);
})();
