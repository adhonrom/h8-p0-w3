function dataHandling2(input){

input.splice(1, 1, 'Roman Alamsyah Elsharawy')
input.splice(2, 1, 'Provinsi bandar lampung')
input.splice(4, 1, 'Pria')
input.splice(5, 0, 'SMA internasional Metro')

console.log(input)

var bulan = ''
switch(bulan){
  case 1: {console.log('Januari'); break; }
  case 2: {console.log('februari'); break; }
  case 3: {console.log('maret'); break; }
  case 4: {console.log('april'); break; }
  case 5: {console.log('Mei'); break; }
  case 6: {console.log('Juni'); break; }
  default: {console.log('dan seterusnya'); }
}


var tanggal = input[3]
var tanggalsplit = tanggal.split('/')

var tanggalNumber = Number(tanggalsplit[0])
var bulanNumber = Number(tanggalsplit[1])
var tahunNumber = Number(tanggalsplit[2])
var gabunganNumber = tanggalNumber + ' ' + bulanNumber +' ' +  tahunNumber
var gabunganNumbersplit = gabunganNumber.split(' ')
//console.log(gabunganNumbersplit)

gabunganNumbersplit.sort(function(value1, value2) { return value1 > value2 });

console.log(gabunganNumbersplit)

var tanggalStrip = tanggal.split('/')

console.log(tanggalStrip.join('-'))

var namaSlice = input[1]

var irisanNamaslice = namaSlice.slice(0, 15)
console.log(irisanNamaslice)



}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input);
