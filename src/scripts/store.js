'use strict';

// const store = (function () {
  //const foo = 'bar';
  const items = [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ]

  let hideCheckedItems = false;
  let searchTerm = '';

  const findId = function findById(id) {
    return store.items.find(item => item.id === id);
    // store.items.forEach(function(item) {
    //   console.log(item.id);
    // })
  };

  const addItem = function addItem(name) {
    try {
      Item.validateName(name);
      const item = Item.create(name);
      store.items.push(item);
    } catch(e) {
      console.log(e.message);
    }
  };

  const findAndToggleChecked = function findAndToggleChecked(id) {
    try {
      let getItem = this.findId(id);
      getItem.checked = !getItem.checked;
    } catch(e) {
      console.log(e.message);
    }
  };

  const findAndUpdateName = function findAndUpdateName (id, newName) {
    try {
      const getId = this.findById(id);
      this.items.getId.name = newName;
    } catch(e) {
      console.log('Cannot update name: ' + e.message);
    }
  };

  const findAndDelete = function findAndDelete (id) {
    try {
      const index = this.items.findIndex(item => item.id === id);
      this.items.splice(index, 1);
    } catch(e) {
      console.log('Cannot delete item: ' + e.message);
    }
  };

  const setSearchTerm = function setSearchTerm (val) {
    this.searchTerm = val;
  };


export default {
    items,
    hideCheckedItems,
    searchTerm,
    findId,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    setSearchTerm,
  };

// }() );
