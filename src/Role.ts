type ChaiOrder = {
  type: string,
  sugar: number,
  strong:boolean
}

function makeChai(order:ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}


type TeaRecipe = {
  water: number,
  milk:number
}

class masalaChai implements TeaRecipe{
  water = 100;
  milk = 300;
}


type Response = { ok: true } | { ok: false }

// class myRes implements Response{
//   ok: boolean=true;
// }


type TeaType = 'masala' | 'Ginger Chai' | 'lemon Tea'

function orderChai(t: TeaType) {
  console.log(t);
}
