'use strict';

const store = (function () {
  //const foo = 'bar';
  const storeItems = {
    items: [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ],
    hideCheckedItems: false,
    searchTerm: ''
  };
  const findId = function findById(id) {
    store.items.find(function(element){
      
    });
  }

  return {storeItems, findId};

}() );