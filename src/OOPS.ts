// class chai{
//   falvour: string;
//   price: number;

//   constructor(falvour: string, price: number) {
//     this.falvour = falvour
//     this.price=price
//   }
// }

// const masalachai = new chai("Ginger Tea", 30);


class chai {
  public falvour: string = "masala"
  private ingredient: string = "cardmom"

  revel(){
    return this.ingredient
  }
}

const c = new chai()


class wallet{
  #balance = 100

  getbalance() {
    return this.#balance
  }
}

const w = new wallet();
w.getbalance(

)



class mordenChai{
  private _suger = 2

  get suger() {
    return this._suger
  }

  set(value: number) {
    this._suger=value
  }
}
