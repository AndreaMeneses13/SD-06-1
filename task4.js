// Type your code below this line!

// 1. Crear el constructor Journey
function Journey(start, end) {
  this.start = start
  this.end = end
}

// 2. Crear constantes from y to con parámetros de ejecución
const from = process.argv[2]  //desde
const to = process.argv[3]    //hacia

// Type your code above this line!

// 3. Crear instancia con los valores
const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")