import $ from 'jquery';

import Item from './Item.js';

import shoppingList from './shopping-list.js';

import store from './store.js';

import '../styles/index.css';

// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

// console.log(Item.validateName('Jon'));
