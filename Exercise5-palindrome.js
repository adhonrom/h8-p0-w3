// Exercise-2 week-3
//Mengakses Nilai Dalam Array

function palindrome(kata){
	var result = '';
	for (var i = kata.length-1; i >= 0; i--){
		result = result + kata[i];

    if (result===kata){
      return true;
     }
	}
  return false;
}

//Test Case
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
