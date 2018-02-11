function angkaPalindrome(num) {

  var angka = num.toString()

  console.log(angka);

  var angka = angka.split('')

  console.log(angka);

  var angka = angka.reverse()

  console.log(angka);

  var angka = angka.join('')

  console.log(angka);

  for (var i = num; 175 < 2000 ; i++) {

    // console.log(i);

    if (i === i.toString().split('').reverse().join('')) {

      return i;

    }

  }

}



// TEST CASES

// console.log(angkaPalindrome(8)); // 9

// console.log(angkaPalindrome(10)); // 11

console.log(angkaPalindrome(117)); // 121

console.log(angkaPalindrome(175)); // 181

// console.log(angkaPalindrome(1000)); // 1001
