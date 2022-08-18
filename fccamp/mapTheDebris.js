/*
Kepler's Third Law:
T=2π √a3/μ
 
a  is the orbit's semi-major axis
μ=GM  is the standard gravitational parameter
G  is the gravitational constant,
M  is the mass of the more massive body.
*/

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const pi = Math.PI;
    let result = [];
    for(const obj of arr){
      const calculation = 2 * pi * (Math.sqrt((obj.avgAlt + earthRadius)**3 / GM));
      result.push({name: obj.name, orbitalPeriod: Math.round(calculation)})
    }
    console.log(result)
    return result;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);