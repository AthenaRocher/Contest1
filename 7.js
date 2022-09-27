let arrayOfStrings = ["Hola", "Bonjour", "Como estas", "Como sava", "si"];

arrayOfStrings.sort((element1, element2) => 
{ return element1.length - element2.length;});

console.log("Sorted: " + arrayOfStrings);