export default class Building {
    constructor(sqft){
        if (this.constructor !== Bulding && 
        typeof this.evacuationWarningMessage !== "function"){}
        throw newError('Building must override evacuationWarningMessage');

        this._sqft = sqft;
    }

    get sqft(){
        return this._sqft;
    }

}