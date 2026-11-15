// ===== Data produk (dipakai halaman detail produk.html dan dashboard) =====
// Urutan produk sama dengan urutan kartu di index.html.
// Untuk mengubah stok / harga / spesifikasi, cukup edit di file ini.

const nomorToko = "6285752922871";

const produk = [
  {
    id: "yamaha-f310",
    nama: "Yamaha F310 Gitar Akustik",
    kategori: "Gitar",
    kondisi: "baru",
    label: "Baru",
    harga: 1850000,
    stok: 8,
    foto: "gambar/Yamaha F310.jpg",
    deskripsi:
      "Gitar akustik dreadnought yang jadi pilihan pertama banyak pemula. Suaranya hangat dan jernih, leher nyaman " +
      "di tangan, dan konstruksinya kuat untuk dipakai latihan harian maupun tampil kecil-kecilan.",
    spesifikasi: [
      ["Tipe bodi", "Dreadnought"],
      ["Top (papan atas)", "Spruce"],
      ["Back & sides", "Meranti"],
      ["Neck", "Nato"],
      ["Fingerboard & bridge", "Rosewood"],
      ["Jumlah fret", "20"],
      ["Panjang skala", "634 mm"],
      ["Finishing", "Natural gloss"]
    ],
    paket: ["Gitar Yamaha F310", "Kartu garansi toko"],
    catatan: ""
  },
  {
    id: "fender-player-ii-strat",
    nama: "Fender Player II Stratocaster Electric Guitar, Gitar Listrik",
    kategori: "Gitar",
    kondisi: "bekas",
    label: "Bekas · 10/10",
    skor: 10,
    harga: 38400000,
    stok: 1,
    foto: "gambar/Strat.jpg",
    deskripsi:
      "Stratocaster seri Player II dengan suara single-coil khas Fender yang cerah dan berkarakter. Unit bekas dengan " +
      "skor 10/10: bodi, hardware, dan elektronik dalam kondisi nyaris seperti baru, siap pakai untuk rekaman maupun panggung.",
    spesifikasi: [
      ["Bodi", "Alder"],
      ["Neck", "Maple, profil Modern C"],
      ["Radius fingerboard", "9,5 inci"],
      ["Jumlah fret", "22"],
      ["Panjang skala", "25,5 inci (648 mm)"],
      ["Pickup", "3 × Player Series Alnico 5 single-coil"],
      ["Bridge", "Tremolo 2-titik tersinkronisasi"],
      ["Kontrol", "1 volume, 2 tone, selector 5 posisi"]
    ],
    paket: ["Gitar Stratocaster", "Kunci tremolo & inbusnya", "Kartu garansi toko 7 hari"],
    catatan: ""
  },
  {
    id: "fender-player-ii-jazzmaster",
    nama: "Fender Player II Jazzmaster Electric Guitar - British Racing Green",
    kategori: "Gitar",
    kondisi: "bekas",
    label: "Bekas · 9/10",
    skor: 9,
    harga: 34500000,
    stok: 1,
    foto: "gambar/JazzMaster.jpg",
    deskripsi:
      "Jazzmaster seri Player II berwarna British Racing Green. Karakter suaranya lebar dan lembut, populer di " +
      "indie, surf, dan alternative. Unit bekas skor 9/10 dengan bekas pemakaian sangat halus.",
    spesifikasi: [
      ["Bodi", "Alder"],
      ["Neck", "Maple"],
      ["Fingerboard", "Rosewood, radius 9,5 inci"],
      ["Jumlah fret", "22"],
      ["Panjang skala", "25,5 inci (648 mm)"],
      ["Pickup", "2 × Player Series Alnico 5 Jazzmaster single-coil"],
      ["Bridge", "Floating tremolo"],
      ["Warna", "British Racing Green"]
    ],
    paket: ["Gitar Jazzmaster", "Kunci tremolo & inbusnya", "Kartu garansi toko 7 hari"],
    catatan: ""
  },
  {
    id: "yamaha-clavinova-clp-865gp",
    nama: "Yamaha Clavinova CLP-865GP Digital Grand Piano With Bench Polished Ebony",
    kategori: "Piano",
    kondisi: "baru",
    label: "Baru, Impor",
    harga: 121876221,
    stok: 2,
    foto: "gambar/Yamaha Grand Piano.jpg",
    deskripsi:
      "Digital grand piano flagship seri Clavinova berbentuk grand piano, finishing polished ebony. Sentuhan tuts " +
      "dan suaranya dirancang meniru piano akustik konser, cocok untuk pianis serius, studio, atau ruang pertunjukan.",
    spesifikasi: [
      ["Tuts", "88 tuts, GrandTouch-S (kayu, dengan escapement)"],
      ["Sumber suara", "Sampling Yamaha CFX & Bösendorfer Imperial"],
      ["Polifoni", "256 not"],
      ["Bentuk", "Digital grand piano"],
      ["Finishing", "Polished ebony"],
      ["Pedal", "3 pedal"],
      ["Kursi", "Bench termasuk"],
      ["Status", "Barang baru, impor"]
    ],
    paket: ["Clavinova CLP-865GP", "Bench", "Kabel daya", "Buku manual"],
    catatan: "Spesifikasi di atas ringkasan. Untuk detail lengkap (dimensi, berat, konektivitas), tanyakan ke toko atau lihat brosur resmi Yamaha."
  },
  {
    id: "casio-ct-s300",
    nama: "Casio CT-S300 Keyboard",
    kategori: "Keyboard",
    kondisi: "baru",
    label: "Baru",
    harga: 3584420,
    stok: 6,
    foto: "gambar/Casio.jpg",
    deskripsi:
      "Keyboard portabel 61 tuts yang ringan dan mudah dipakai. Punya banyak pilihan suara dan ritme, serta fitur " +
      "Dance Music Mode, cocok untuk belajar, hobi, dan dibawa ke mana-mana.",
    spesifikasi: [
      ["Tuts", "61 tuts ukuran standar"],
      ["Polifoni", "48 not"],
      ["Suara (tones)", "400"],
      ["Ritme", "77"],
      ["Speaker", "2 × 2,5 W"],
      ["Konektivitas", "USB (MIDI), jack headphone"],
      ["Daya", "Adaptor atau baterai"],
      ["Fitur", "Dance Music Mode, metronom, split"]
    ],
    paket: ["Keyboard Casio CT-S300", "Adaptor daya", "Rak partitur", "Buku manual"],
    catatan: ""
  },
  {
    id: "yamaha-p-45",
    nama: "Yamaha P-45 Piano Digital",
    kategori: "Keyboard",
    kondisi: "bekas",
    label: "Bekas · 9/10",
    skor: 9,
    harga: 8065170,
    stok: 1,
    foto: "gambar/Yamaha P-45 Piano Digital.jpg",
    deskripsi:
      "Piano digital ringkas dengan tuts weighted yang terasa seperti piano sungguhan. Pilihan tepat untuk belajar piano " +
      "di rumah. Unit bekas skor 9/10 dengan fungsi tuts, suara, dan pedal berjalan normal.",
    spesifikasi: [
      ["Tuts", "88 tuts GHS (Graded Hammer Standard)"],
      ["Polifoni", "64 not"],
      ["Sumber suara", "AWM Stereo Sampling"],
      ["Suara", "10 voice"],
      ["Speaker", "2 × 6 W"],
      ["Konektivitas", "USB to Host, jack headphone, input pedal"],
      ["Berat", "± 11,5 kg"],
      ["Fitur", "Layer (dual), reverb, metronom"]
    ],
    paket: ["Piano Yamaha P-45", "Adaptor daya", "Pedal sustain", "Rak partitur"],
    catatan: ""
  },
  {
    id: "roland-td-1k",
    nama: "Roland TD-1K Drum Elektrik",
    kategori: "Drum",
    kondisi: "bekas",
    label: "Bekas · 8/10",
    skor: 8,
    harga: 10922820,
    stok: 1,
    foto: "gambar/Roland TD-1K Drum Elektrik.jpg",
    deskripsi:
      "Drum elektrik Roland seri V-Drums untuk latihan di rumah tanpa mengganggu tetangga. Dilengkapi modul suara dengan " +
      "banyak kit dan fungsi latihan. Unit bekas skor 8/10, ada bekas pemakaian ringan pada pad dan rangka.",
    spesifikasi: [
      ["Seri", "Roland V-Drums"],
      ["Modul suara", "TD-1"],
      ["Kit preset", "15"],
      ["Pad", "Snare, tom, kick, hi-hat, cymbal"],
      ["Fitur latihan", "Lagu pengiring, fungsi Coach, metronom"],
      ["Output", "Headphone / Mix In"],
      ["Konektivitas", "USB"]
    ],
    paket: ["Satu set drum elektrik TD-1K", "Modul TD-1", "Adaptor daya", "Kabel pad"],
    catatan: "Throne (kursi), pedal, dan stik tidak termasuk kecuali disebutkan saat pemesanan."
  },
  {
    id: "cajon-birch-pro",
    nama: "Cajon Kayu Birch Pro",
    kategori: "Drum",
    kondisi: "baru",
    label: "Baru",
    harga: 780000,
    stok: 10,
    foto: "gambar/Cajon.jpg",
    deskripsi:
      "Cajon dari kayu birch dengan snare wire di dalam bodi. Menghasilkan bass yang berisi dan slap yang tajam. " +
      "Praktis untuk akustikan, busking, dan latihan ritme.",
    spesifikasi: [
      ["Bahan bodi", "Kayu birch"],
      ["Papan pukul (tapa)", "Birch lapis"],
      ["Snare", "Snare wire, bisa disetel"],
      ["Ukuran", "± 30 × 30 × 48 cm"],
      ["Finishing", "Natural"],
      ["Lubang suara", "Di bagian belakang"]
    ],
    paket: ["Cajon", "Kunci setel snare"],
    catatan: ""
  },
  {
    id: "cremona-sv-500",
    nama: "Cremona SV-500 Series Violin Outfit 4/4",
    kategori: "Gesek",
    kondisi: "baru",
    label: "Baru",
    harga: 8200000,
    stok: 3,
    foto: "gambar/Violin.jpg",
    deskripsi:
      "Violin ukuran penuh 4/4 satu paket lengkap, siap dimainkan. Cocok untuk pelajar tingkat menengah " +
      "yang ingin naik dari violin pemula dengan suara yang lebih hangat dan stabil.",
    spesifikasi: [
      ["Ukuran", "4/4 (ukuran penuh)"],
      ["Top", "Spruce"],
      ["Back & sides", "Maple"],
      ["Fine tuner", "4 buah"],
      ["Senar", "Terpasang, siap main"]
    ],
    paket: ["Violin", "Busur (bow)", "Case", "Rosin"],
    catatan: ""
  },
  {
    id: "hohner-special-20",
    nama: "Harmonika Hohner Special 20",
    kategori: "Tiup",
    kondisi: "bekas",
    label: "Bekas · 9/10",
    skor: 9,
    harga: 850000,
    stok: 1,
    foto: "gambar/Harmonika.jpg",
    deskripsi:
      "Harmonika diatonis populer untuk blues, folk, dan country. Nada jernih dan mudah dimainkan, cocok bagi pemula. " +
      "Unit bekas skor 9/10, semua lubang sudah dites dan berbunyi bersih.",
    spesifikasi: [
      ["Tipe", "Diatonis, tuning Richter"],
      ["Nada dasar", "C (C mayor)"],
      ["Jumlah lubang", "10"],
      ["Jumlah reed", "20"],
      ["Comb", "Plastik"],
      ["Reed plate", "Kuningan"]
    ],
    paket: ["Harmonika", "Case"],
    catatan: ""
  },
  {
    id: "shure-pga48-xlr",
    nama: "Shure PGA48-XLR Vocal Microphone With XLR Cable",
    kategori: "Audio",
    kondisi: "bekas",
    label: "Bekas · 8/10",
    skor: 8,
    harga: 1250000,
    stok: 1,
    foto: "gambar/Mic.jpg",
    deskripsi:
      "Mikrofon vokal dinamis untuk panggung, latihan band, dan karaoke. Pola cardioid menahan suara dari samping dan belakang. " +
      "Unit bekas skor 8/10, kondisi suara normal, ada bekas pemakaian ringan pada grill dan bodi.",
    spesifikasi: [
      ["Tipe", "Dinamis"],
      ["Pola pickup", "Cardioid"],
      ["Respons frekuensi", "70 Hz – 15 kHz"],
      ["Konektor", "XLR"],
      ["Kabel", "XLR–XLR"]
    ],
    paket: ["Mikrofon PGA48", "Kabel XLR", "Holder (klip) mikrofon"],
    catatan: ""
  },
  {
    id: "behringer-xenyx-x2222usb",
    nama: "Behringer XENYX X2222USB USB Mixer With Effects",
    kategori: "Audio",
    kondisi: "baru",
    label: "Baru",
    harga: 1350000,
    stok: 4,
    foto: "gambar/Mixer.jpg",
    deskripsi:
      "Mixer analog 22 input dengan antarmuka audio USB dan efek digital bawaan. Cocok untuk band kecil, " +
      "podcast, streaming, dan rekaman langsung ke komputer.",
    spesifikasi: [
      ["Jumlah input", "22"],
      ["Preamp mic", "XENYX, dengan phantom power 48 V"],
      ["EQ", "3 band"],
      ["Efek", "Prosesor efek digital bawaan"],
      ["Antarmuka USB", "Audio I/O ke komputer"],
      ["Konektivitas", "XLR, TRS, RCA, USB"]
    ],
    paket: ["Mixer", "Adaptor daya", "Kabel USB", "Buku manual"],
    catatan: ""
  }
];

// Ubah angka jadi format rupiah: 1850000 -> "Rp 1.850.000"
function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

// Teks status stok
function teksStok(p) {
  if (p.stok <= 0) return "Stok habis";
  if (p.stok === 1) return "Stok: 1 unit (terakhir)";
  return "Stok: " + p.stok + " unit";
}

// Link WhatsApp untuk memesan
function linkWA(p) {
  return "https://wa.me/" + nomorToko + "?text=" +
    encodeURIComponent("Halo, saya mau pesan " + p.nama);
}
