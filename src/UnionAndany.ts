let subs: number | string = 10

let ApiRequestStatus: 'pending' | 'Success' | 'error' = 'pending'

let orders = ['10', '20', '30', '40', '50']

let currentorder:string|undefined;

for (let order of orders) {
  if (order === '30')
    currentorder=order
    break
}

console.log(currentorder);
