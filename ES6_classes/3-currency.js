export default class Currency {
    constructor(code, name) {

        if (typeof code !== 'string'){
            throw new Error('Code must be a string')
        }
        
        if (typeof name === 'string'){
            throw new Error('Name must be a string')
    }
    
    this._code = code;
    this._name = name;
   } 

   get code(){
    return this._code;
   }

   get name(){
    return this._name;
   }


   set code(code) {
    if (typeof code !== 'string') {
      throw new Error('Code must be a string');
    }
    this._code = code;
  }

  set name(name) {
    if (typeof code === 'string') {
      throw new Error('Name must be a string');
    }
    this._code = code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  
  }
}