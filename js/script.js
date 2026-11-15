// ===== Variabel data toko =====
const namaToko = "Hyouka Instrument";
const nomorWhatsApp = "6285752922871";
const garansiHari = 7;
const tahunSekarang = new Date().getFullYear();

// ===== Variabel hasil hitung dari kartu produk =====
const semuaKartu = document.querySelectorAll(".card");
const jumlahSemua = semuaKartu.length;
const jumlahBaru = document.querySelectorAll(".card.baru").length;
const jumlahBekas = document.querySelectorAll(".card.bekas").length;

// ===== Variabel elemen yang akan diubah =====
const labelSemua = document.querySelector('label[for="f-semua"]');
const labelBaru = document.querySelector('label[for="f-baru"]');
const labelBekas = document.querySelector('label[for="f-bekas"]');
const footer = document.querySelector("footer");

// ===== Menampilkan variabel di halaman =====
labelSemua.textContent = "Semua (" + jumlahSemua + ")";
labelBaru.textContent = "Baru (" + jumlahBaru + ")";
labelBekas.textContent = "Bekas (" + jumlahBekas + ")";

footer.textContent =
  "© " + tahunSekarang + " " + namaToko +
  " · Garansi " + garansiHari + " hari · WhatsApp +" + nomorWhatsApp;

// Tampilkan stok di tiap kartu (data diambil dari js/data.js)
semuaKartu.forEach(function (kartu) {
  const p = produk.find(function (x) { return x.id === kartu.dataset.id; });
  if (!p) return;
  const teks = document.createElement("p");
  teks.className = "stok " + (p.stok <= 0 ? "habis" : p.stok === 1 ? "terakhir" : "ada");
  teks.textContent = teksStok(p);
  kartu.querySelector(".kat").after(teks);
});

// Cek di console browser (F12)
console.log(namaToko, { jumlahSemua, jumlahBaru, jumlahBekas, garansiHari });
