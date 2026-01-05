// Type your code below this line!

function Mail(subj, msg) {
  this.subject = subj
  this.message = msg

  // Agregar el método printMail al constructor
  this.printMail = function() {
    console.log(this.subject + ": " + this.message)
  }
}

// Crear la instancia con los parámetros de ejecución
const newMail = new Mail(process.argv[2], process.argv[3])

// Type your code above this line!

newMail.printMail()  