import Currency from '3-currency.js'
export default class Pricing{
    constructor(amount, currency){
        if (typeof amount !== 'number'){
            throw new Error ('Amount must be a number');
        }

    if (!(currency instanceof Currency)){
    throw new Error ('Currency must be a ')
    }
}

get amount(){
    this._amount = amount;
}

get currency(){
    this._currency = currency;
}

set amount(amount){
    if (typeof amount !== 'number'){
        throw new Error ('Amount must be a number');
    }
}

set currency(currency){
    if (!(currency instanceof Currency)){
        throw new Error ('Currency must be a ')
        }
}

displayFullPrice(){
    return `${this._amount} ${this._currency.name} ${this._currency.code}`
}


static ConvertPrice(amount, convertionRate){
    return amount * convertionRate;
}

}