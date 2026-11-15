// ===== Halaman detail produk =====
// Alamat: produk.html?id=yamaha-f310

// ===== Variabel data toko (sama dengan di script.js) =====
const namaToko = "Hyouka Instrument";
const garansiHari = 7;
const tahunSekarang = new Date().getFullYear();

// ===== Variabel hasil hitung dari data produk (js/data.js) =====
const totalProduk = produk.length;

const wadah = document.getElementById("detail");
const idDicari = new URLSearchParams(window.location.search).get("id");
const barang = produk.find(function (p) { return p.id === idDicari; });

// Helper kecil untuk membuat elemen
function buat(tag, kelas, teks) {
  const el = document.createElement(tag);
  if (kelas) el.className = kelas;
  if (teks !== undefined) el.textContent = teks;
  return el;
}

if (!barang) {
  // Produk tidak ditemukan
  document.title = "Produk tidak ditemukan — " + namaToko;
  const kosong = buat("div", "kosong");
  kosong.appendChild(buat("h1", "", "Produk tidak ditemukan"));
  kosong.appendChild(buat("p", "", "Barang yang kamu cari tidak ada atau sudah tidak dijual."));
  const kembali = buat("a", "btn", "Kembali ke katalog");
  kembali.href = "index.html#katalog";
  kosong.appendChild(kembali);
  wadah.appendChild(kosong);
} else {
  document.title = barang.nama + " — " + namaToko;

  // ----- Variabel khusus produk yang sedang dibuka -----
  const nomorUrut = produk.indexOf(barang) + 1;
  const jumlahSpesifikasi = barang.spesifikasi.length;
  const jumlahIsiPaket = barang.paket.length;

  // Perbandingan harga dengan produk lain di kategori yang sama
  const produkKategori = produk.filter(function (p) { return p.kategori === barang.kategori; });
  const jumlahKategori = produkKategori.length;
  const totalHargaKategori = produkKategori.reduce(function (jumlah, p) { return jumlah + p.harga; }, 0);
  const hargaRataKategori = Math.round(totalHargaKategori / jumlahKategori);
  const selisihRata = barang.harga - hargaRataKategori;
  const persenSelisih = Math.round(Math.abs(selisihRata) / hargaRataKategori * 100);

  // Breadcrumb
  const crumb = buat("nav", "crumb");
  const aKatalog = buat("a", "", "← Katalog");
  aKatalog.href = "index.html#katalog";
  crumb.appendChild(aKatalog);
  crumb.appendChild(buat("span", "", " / " + barang.kategori));
  wadah.appendChild(crumb);

  // ----- Bagian atas: foto + ringkasan -----
  const atas = buat("section", "atas " + barang.kondisi);

  const foto = buat("div", "foto-besar");
  const img = document.createElement("img");
  img.src = barang.foto;
  img.alt = barang.nama;
  foto.appendChild(img);
  foto.appendChild(buat("span", "badge", barang.label));
  atas.appendChild(foto);

  const ringkas = buat("div", "ringkas");
  ringkas.appendChild(buat("p", "kat", barang.kategori));
  ringkas.appendChild(buat("h1", "", barang.nama));
  ringkas.appendChild(buat("p", "harga-besar", formatRupiah(barang.harga)));

  const stok = buat("p", "stok " + (barang.stok <= 0 ? "habis" : barang.stok === 1 ? "terakhir" : "ada"), teksStok(barang));
  ringkas.appendChild(stok);

  // Info ringkas dari variabel di atas
  ringkas.appendChild(buat("p", "meta",
    "Produk ke-" + nomorUrut + " dari " + totalProduk + " · " +
    jumlahSpesifikasi + " spesifikasi · " + jumlahIsiPaket + " item dalam paket"));

  let teksBanding;
  if (jumlahKategori === 1) {
    teksBanding = "Satu-satunya produk di kategori " + barang.kategori + ".";
  } else if (selisihRata === 0) {
    teksBanding = "Sama dengan harga rata-rata kategori " + barang.kategori + ".";
  } else {
    teksBanding = persenSelisih + "% " + (selisihRata > 0 ? "di atas" : "di bawah") +
      " rata-rata kategori " + barang.kategori + " (" + formatRupiah(hargaRataKategori) + ").";
  }
  ringkas.appendChild(buat("p", "meta", teksBanding));

  ringkas.appendChild(buat("p", "deskripsi", barang.deskripsi));

  if (barang.stok > 0) {
    const pesan = buat("a", "pesan", "Pesan lewat WhatsApp");
    pesan.href = linkWA(barang);
    ringkas.appendChild(pesan);
  } else {
    ringkas.appendChild(buat("p", "habis-info", "Barang ini sedang habis."));
  }
  atas.appendChild(ringkas);
  wadah.appendChild(atas);

  // ----- Spesifikasi -----
  const secSpek = buat("section", "blok");
  secSpek.appendChild(buat("h2", "", "Spesifikasi (" + jumlahSpesifikasi + ")"));
  const tabel = buat("table", "spek");
  const tbody = document.createElement("tbody");
  barang.spesifikasi.forEach(function (baris) {
    const tr = document.createElement("tr");
    tr.appendChild(buat("th", "", baris[0]));
    tr.appendChild(buat("td", "", baris[1]));
    tbody.appendChild(tr);
  });
  tabel.appendChild(tbody);
  secSpek.appendChild(tabel);
  if (barang.catatan) secSpek.appendChild(buat("p", "catatan", barang.catatan));

  // ----- Isi paket + info garansi/kondisi -----
  const secLain = buat("section", "blok");
  secLain.appendChild(buat("h2", "", "Isi paket (" + jumlahIsiPaket + ")"));
  const daftar = buat("ul", "paket");
  barang.paket.forEach(function (item) { daftar.appendChild(buat("li", "", item)); });
  secLain.appendChild(daftar);

  if (barang.kondisi === "bekas") {
    secLain.appendChild(buat("h2", "", "Kondisi unit"));
    secLain.appendChild(buat("p", "", "Skor " + barang.skor + "/10. Skor 1–10 menilai bodi, elektronik, dan suara. " +
      "Garansi toko " + garansiHari + " hari jika tidak sesuai deskripsi."));
  } else {
    secLain.appendChild(buat("h2", "", "Garansi"));
    secLain.appendChild(buat("p", "", "Barang baru dengan garansi toko " + garansiHari + " hari."));
  }

  const dua = buat("div", "dua-kolom");
  dua.appendChild(secSpek);
  dua.appendChild(secLain);
  wadah.appendChild(dua);

  // ----- Produk lain di kategori yang sama -----
  const serupa = produk.filter(function (p) {
    return p.kategori === barang.kategori && p.id !== barang.id;
  });
  const jumlahSerupa = serupa.length;
  if (jumlahSerupa > 0) {
    const secSerupa = buat("section", "blok");
    secSerupa.appendChild(buat("h2", "", "Lainnya di kategori " + barang.kategori + " (" + jumlahSerupa + ")"));
    const grid = buat("div", "grid kecil");
    serupa.forEach(function (p) {
      const kartu = buat("article", "card " + p.kondisi);
      const a1 = buat("a", "foto");
      a1.href = "produk.html?id=" + p.id;
      const im = document.createElement("img");
      im.src = p.foto;
      im.alt = p.nama;
      a1.appendChild(im);
      a1.appendChild(buat("span", "badge", p.label));
      kartu.appendChild(a1);
      const info = buat("div", "info");
      const h3 = buat("h3");
      const a2 = buat("a", "judul", p.nama);
      a2.href = "produk.html?id=" + p.id;
      h3.appendChild(a2);
      info.appendChild(h3);
      info.appendChild(buat("p", "harga", formatRupiah(p.harga)));
      kartu.appendChild(info);
      grid.appendChild(kartu);
    });
    secSerupa.appendChild(grid);
    wadah.appendChild(secSerupa);
  }
}

// ===== Footer (pakai variabel toko) =====
document.querySelector("footer").textContent =
  "© " + tahunSekarang + " " + namaToko + " · Garansi " + garansiHari + " hari · " + totalProduk + " produk tersedia";

// Cek di console browser (F12)
console.log(namaToko, { idDicari, totalProduk, garansiHari });
