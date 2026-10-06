let response: any = "42";

let numericLength: number = (response as number)


type Book = {
  name: string,
  price:number
}

const inputElement=document.getElementById('username') as HTMLInputElement




let value: any
value: 'Rohit'
value: [1, 2, 3]
value: true
value.toUpperCase()



let newValue : unknown
newValue : 'Rohit'
newValue : [1, 2, 3]
newValue : true
if (typeof newValue === 'string') {
  newValue.toUpperCase()
}



try {

} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log(error);


}


type Role = "admin" | "User"

