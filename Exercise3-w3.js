// Melakukan Looping Data Array


function dataHandling(format) {

for(var baru = 0; baru < format.length; baru++) {

  console.log('Nomor ID: ' + input[baru][0]);

  console.log('Nama Lengkap: ' + input[baru][1]);

  console.log('TTL: ' + input[baru][2] + ' ' + input[baru][3]);

  console.log('Hobi: ' + input[baru][4]);

  console.log('');


  }

}


var input = [

                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],

                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],

                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],

                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]

            ]

dataHandling(input);
