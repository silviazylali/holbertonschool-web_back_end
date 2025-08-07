class Flowers {
 
    #shape = "rose";

    printFlower(){
        return this.#shape;
    }
}

const flower = new Flowers();

console.log(flower.color);
console.log(flower.printFlower());