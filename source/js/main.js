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

  menuOpenButton.addEventListener('click', onMenuOpenButtonClick);
})();
