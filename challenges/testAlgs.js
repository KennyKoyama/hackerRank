// Complete the getMinimumCost function below.
function getMinimumCost(k, c) {
    
    let costs = [...c].sort((a,b)=> b - a);
    console.log([...costs].reduce((sum,curr)=>sum + curr, 0))
    let size = costs.length;
    let previous = 0;
    let current = 0;
    if(size == k) return c.reduce((sum, curr) => sum + curr,0);
    let result = costs.map((cost, index) => {
        
        if(index > k){
            
            let calc = cost * (previous + 1);
            // console.log(index)
            current++
            previous++
            return calc
        };
        return cost;
    }).reduce((sum, curr) => sum + curr);

    return result
}

// console.log(getMinimumCost(3,[1, 3, 5, 7, 9]))
// console.log(getMinimumCost(3,[2, 5, 6]))
let c1 = [390225, 426456, 688267, 800389, 990107, 439248, 240638, 15991, 874479, 568754, 729927,
980985, 132244, 488186, 5037, 721765, 251885, 28458, 23710, 281490, 30935, 897665, 768945,
337228, 533277, 959855, 927447, 941485, 24242, 684459, 312855, 716170, 512600, 608266,
779912, 950103, 211756, 665028, 642996, 262173, 789020, 932421, 390745, 433434, 350262,
463568, 668809, 305781, 815771, 550800];
console.log(getMinimumCost(3, c1))