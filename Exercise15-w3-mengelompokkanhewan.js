
function groupAnimals(animals) {
  animals.sort()

  var i = 0;
  var j = animals.length-1

  var output = [];

  while (animals.length>0) {
    var tampung = []
    var hurufAwal = animals[0][0];
    tampung.push(animals[0])
    animals.splice(0, 1)

    while (animals.length > 0 && hurufAwal === animals[0][0]) {
      tampung.push(animals[0]);
      animals.splice(0, 1);
    }

    output.push(tampung);
  }
  return output
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'anjing', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
