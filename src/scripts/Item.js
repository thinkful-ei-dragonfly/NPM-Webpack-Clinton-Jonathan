'use strict';

// const Item = (function () {
  //const foo = 'bar';
  function validateName(name){
    if (name.length > 0){
      return true;
    }else{
    throw new TypeError('Name does not exist');
    }
  }

  function create(name){
    return {
          id: cuid(),
          name: name,
          checked: false 
      }
  } 
export default { validateName, create };
// }() );

