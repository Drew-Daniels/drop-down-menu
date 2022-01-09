const MENU_BUTTON = document.querySelector('.menu-button');
const MENU = document.querySelector('.menu');
const MENU_BUTTON_IMAGES = document.querySelectorAll('.menu-btn-image');
const EXPAND_ICON_PATH = 'assets/images/icons/expand-icon.svg';
const HIDE_ICON_PATH = 'assets/images/icons/hide-icon.svg';

const expandMenu = function(menu, hideClass) {
  menu.classList.remove(hideClass);
}

const hideMenu = function(menu, hideClass) {
  menu.classList.add(hideClass);
}

const getClasses = function(element) {
  const classList = element.className.split(' ');
  return classList;
}

const classify = function(element, ...classesToAdd) {
  element = element.classList.add(...classesToAdd);
  return element;
}

const declassify = function(element, ...classesToRemove) {
  const currClasses = [...element.classList];
  classesToRemove.forEach(function(classToRemove) {
    if (currClasses.includes(classToRemove)) {
      element.classList.remove(classToRemove);
    }
  })
}

const main = function(menuButton, menu, hideClass, menuBtnImages) {
  menuButton.addEventListener('click', 
    function() {
      const menuClasses = getClasses(menu);
      const hidden = menuClasses.includes(hideClass);
      if (hidden) {
        expandMenu(menu, hideClass);
      } else {
        hideMenu(menu, hideClass);
      }
    }
  );
  menuButton.addEventListener('click',
    function() {
      let imgClasses;
      let hidden;
      [...menuBtnImages].forEach(function(img) {
        imgClasses = getClasses(img);
        hidden = imgClasses.includes(hideClass);
        if (hidden) {
          declassify(img, hideClass);
        } else {
          classify(img, hideClass);
        }
      })
    }
  );
}

main(MENU_BUTTON, MENU, 'hidden', MENU_BUTTON_IMAGES);