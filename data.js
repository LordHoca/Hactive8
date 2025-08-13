const body = document.body;
let h2 = document.createElement('h2')
h2.innerHTML = '<marquee>Welcome To Calculate Me!</marquee>' //Membuat tulisan 'Welcome To Calculate Me!' yang bergerak
body.appendChild(h2)

const tampilan = document.getElementById('tampilan'); // Mengambil elemen input dari html dengan id 'tampilan'

function masukanKetampilan(input) {
    tampilan.value += input; // fungsi untuk menambahkan input ke dalam tampilan kalkulator
}

function hapusAll() {
    tampilan.value = ''; // fungsi untuk menghapus semua input pada tampilan kalkulator
}

function hitung() { // fungsi untuk menghitung hasil dari input yang ada pada tampilan kalkulator
    try {
        tampilan.value = eval(tampilan.value); // eval disini digunakan untuk mengoperasikan operasi matematika
    }
    catch (error) {
        tampilan.value = 'Error'; // jika terjadi error pada operasi matematika, maka akan menampilkan 'Error' pada tampilan kalkulator
    }
}

function hapus () {
    tampilan.value = tampilan.value.slice(0, -1); // fungsi untuk menghapus karakter terakhir pada tampilan kalkulator

}
