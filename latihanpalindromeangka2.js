function angkaPalindrome(num){
 if (num < 9){
   return num+1
 }
    else {
    for(var j = num; j < 2000; j++){
      var tampung = j.toString()
      tampung = tampung.split("")
      tampung = tampung.reverse()
      tampung = tampung.join("")

     if (j == tampung){
      return j
    }

   }

 }

}console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
