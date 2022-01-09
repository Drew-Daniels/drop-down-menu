const MENU_BUTTON = document.querySelector('.menu-button');
const MENU = document.querySelector('.menu');
const MENU_BUTTON_IMAGE = document.querySelector('.menu-btn-img');
const EXPAND_ICON_PATH = 'assets/images/icons/expand-icon.svg';
const HIDE_ICON_PATH = 'assets/images/icons/hide-icon.svg';

import * as dropDown from './drop-down.js';

dropDown.add(MENU_BUTTON, MENU, 'visible', MENU_BUTTON_IMAGE);