alert("Selamat Datang di permainan Jankenpon!");
let namaPlayer = prompt("Masukan nama anda: ");
console.log(`Halo ${namaPlayer}, selamat bermain!`);

alert("Silahkan pilih salah satu: gunting, batu, kertas");
let player = prompt("Masukkan pilihanmu: ");
let computer = Math.random();
if (computer < 0.34) {
  computer = "gunting";
} else if (computer >= 0.34 && computer < 0.67) {
  computer = "batu";
} else {
  computer = "kertas";
}

let hasil = "";
let score = 0;
if (player == computer) {
  hasil = "SERI!";
  score;
} else if (player == "gunting") {
  hasil = computer == "batu" ? "KALAH!" : "MENANG!";
  score--;
} else if (player == "batu") {
  hasil = computer == "gunting" ? "MENANG!" : "KALAH!";
  score++;
} else if (player == "kertas") {
  hasil = computer == "gunting" ? "KALAH!" : "MENANG!";
  score--;
} else {
  hasil = "Pilihan salah!";
}

console.log(
  `${namaPlayer} memilih: ${player} dan komputer memilih: ${computer} `
);

console.log(`Hasil: ${hasil}, dan scorenya adalah ${score}`);

// Path: assets\js\jankenpon.js
