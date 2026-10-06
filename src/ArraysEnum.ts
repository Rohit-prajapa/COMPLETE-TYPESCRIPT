const chai: string[] = ['masala chai', 'Lemon Tea', 'Rose Tea']
const chaiPrice: number[] = [10, 20, 30, 40, 50, 60]

const rating: Array<number> = [4.5, 5.6, 8.9]


type chai = {
  name: string,
  price: number,
}

const menu: chai[] = [
  {
  name: "masala Tea",
  price:30
  },
   {
  name: "Ginger Tea",
  price:20
   },
    {
  name: "Jalebi Tea",
  price:40
    },
     {
  name: "samosa Tea",
  price:70
  }
]


const newchai: readonly number[] = [1, 2, 3, 4, 5, 6, 7]


const table: number[][] = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]


let Chaitype: [string, number]
Chaitype = ["masala Tea", 30]

let userInfo: [string, number, boolean?]
userInfo = ['ROhit', 20]

const location: readonly [number, number] = [20, 30
]


const chaiItem: [name: string, price: number] = ["Rohit", 50]



enum CupSize {
  SMALL,
  MEDIUM,
  LARGE
}

const size=CupSize.LARGE
