const unhide = function(element, hideClass) {
  element.classList.remove(hideClass);
}

const hide = function(element, hideClass) {
  element.classList.add(hideClass);
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

const addListeners = function(btn, list, hideClass, btnImages) {
  btn.addEventListener('click', 
    function() {
      const listClasses = getClasses(list);
      const hidden = listClasses.includes(hideClass);
      if (hidden) {
        unhide(list, hideClass);
      } else {
        hide(list, hideClass);
      }
    }
  );
  btn.addEventListener('click',
    function() {
      let imgClasses;
      let hidden;
      [...btnImages].forEach(function(img) {
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

export {
  unhide,
  hide,
  getClasses,
  classify,
  declassify,
  addListeners,
}