function start() {
  alert("Selamat Datang di permainan Jankenpon!");
  let namaPlayer = prompt("Masukan nama anda: ");
  console.log(`Halo ${namaPlayer}, selamat bermain!`);
  console.log("====================== START ==========================");

  //Inisiasi pilihan player dan komputer
  alert("Silahkan pilih salah satu: gunting, batu, kertas");
  let player = prompt("Masukkan pilihanmu: (gunting, batu, kertas)");

  //mengubah inputan player menjadi huruf kecil
  player = player.toLowerCase();

  let computer = Math.random();
  if (computer < 0.34) {
    computer = "gunting";
  } else if (computer >= 0.34 && computer < 0.67) {
    computer = "batu";
  } else {
    computer = "kertas";
  }

  //Membuat logika permainan
  let hasil = "";
  let score = 0;
  if (player == computer) {
    hasil = "SERI!";
    score;
  } else if (player == "gunting") {
    hasil = computer == "batu" ? `${namaPlayer} KALAH!` : "KOMPUTER MENANG!";
    score--;
  } else if (player == "batu") {
    hasil = computer == "gunting" ? `${namaPlayer} MENANG!` : "KOMPUTER KALAH!";
    score++;
  } else if (player == "kertas") {
    hasil = computer == "gunting" ? `${namaPlayer} KALAH!` : "KOMPUTER MENANG!";
    score--;
  } else {
    hasil = "Pilihan salah!";
  }

  //Menampilkan hasil permainan
  console.log(
    `${namaPlayer} memilih: ${player} dan komputer memilih: ${computer} `
  );
  console.log("================================================");

  //Menampilkan score
  console.log(`Hasil: ${hasil}, dan scorenya adalah ${score}`);
  console.log("====================== END ==========================");

  //Membuat perulangan permainan
  confirm("Apakah anda ingin bermain lagi? (Score akan di-reset)")
    ? start()
    : alert("Terima kasih sudah bermain!");
}

start(); //memanggil fungsi start

// Path: assets\js\jankenpon.js
