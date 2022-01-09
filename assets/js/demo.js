const MENU_BUTTON = document.querySelector('.menu-button');
const MENU = document.querySelector('.menu');
const MENU_BUTTON_IMAGES = document.querySelectorAll('.menu-btn-image');
const EXPAND_ICON_PATH = 'assets/images/icons/expand-icon.svg';
const HIDE_ICON_PATH = 'assets/images/icons/hide-icon.svg';

import * as dropDown from './drop-down.js';

dropDown.addListeners(MENU_BUTTON, MENU, 'hidden', MENU_BUTTON_IMAGES);