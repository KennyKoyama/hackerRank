/*
 * Complete the 'jimOrders' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY orders as parameter.
 */

let orders1 = [[1, 3],
               [2, 3],
               [3, 3]];

let orders2 = [[8, 1],
               [4, 2],
               [5, 6],
               [3, 1],
               [4, 3]];

function jimOrders(orders) {
    // Write your code here
    let serveTime = orders.map((customer,i) => [i+1, customer[0] + customer[1]])
    console.log(serveTime)
    let sorted = serveTime.sort((a,b) => a[1] - b[1])
    let result = sorted.map((customers) => customers[0]).join(' ');
    console.log(result)
    return result
}

// console.log(jimOrders(orders1))
console.log(jimOrders(orders2))