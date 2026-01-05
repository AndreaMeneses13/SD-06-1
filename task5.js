

// Type your code below this line!
function FriendsList() {
  this.names = []  // Inicializar el array vacío
  
  // Creamos un método para agregar nombres.
  this.addName = function(name) {
    this.names.push(name)
  }
  
  // Creamos un método para mostrar la lista.
  this.showList = function() {
    console.log(this.names)
  }
}

// Creamos una Lista de amigos
const myFriends = new FriendsList()

// Obtenemos la cantidad de amigos
const cantidad = parseInt(process.argv[2])

// Bucle para agregar nombres según los parámetros anteriores
for (let i = 0; i < cantidad; i++) {
  const nombre = process.argv[3 + i]  // 3 = índice donde empiezan los nombres
  if (nombre) {
    myFriends.addName(nombre)
  }
}

myFriends.showList()

// Type your code above this line!

