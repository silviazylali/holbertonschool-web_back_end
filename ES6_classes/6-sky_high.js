import Building from './5-building.js'

export default class SkyHighBuilding extends Building{

constructor(sqft, floors){
    super(sqft);
    this._floors = floors;
}

get sqft() {
    return super.sqft;
}

get floor(){
    this._floor;
}

return `evacuationWarningMessage ${this._floors} floors;`

}

