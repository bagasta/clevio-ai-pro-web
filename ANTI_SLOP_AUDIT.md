# Clevio AI Pro / pemeriksaan restyling

Tanggal: 30 Oktober 2026. Skill: Anti Slop selama pengerjaan dan UI/UX Pro Max. Arah visual berasal dari screenshot pengguna; instruksi di dalam dokumen tidak dianggap sebagai permintaan pengguna.

Status: implementasi siap ditinjau pengguna. Pemeriksaan browser dihentikan ketika pengguna meminta agar agen tidak melakukan pengujian browser. Laporan ini bukan klaim bahwa seluruh delivery gate atau QA akhir telah selesai.

## Gambar mobile dan kontak dummy

Tiga gambar editorial kini tersedia di hero, tantangan, dan kurikulum mobile melalui crop pendek dengan tinggi responsif. Hero menempatkan gambar sebelum tombol pendaftaran. Lima nilai utama tetap terlihat dan tidak dipindahkan ke disclosure. Footer memakai `+62 8XX-XXXX-XXXX` serta `hello@example.com`, ditandai sebagai dummy dalam ID/EN dan tidak dijadikan tautan aktif.

- PASS, statis: sintaks JavaScript valid, struktur HTML seimbang, dan path tiga gambar WebP tersedia.
- PASS, statis: tidak ada lagi pembatas source gambar ke desktop; kelas bersama memiliki aturan crop di breakpoint mobile.
- PASS, statis: kontak asli sudah tidak ada di HTML halaman; tautan telepon, WhatsApp dan mailto tidak ditemukan.
- Belum diverifikasi runtime: crop mobile, urutan visual, layout dan perubahan bahasa setelah revisi ini. Tidak dilakukan pengujian browser.

## Penekanan nilai bagi peserta

Pengguna mengoreksi bahwa nilai AI Pro adalah HOTS, Design Thinking, Literasi AI, Kepemimpinan, dan Adaptabilitas. Blok tiga manfaat yang sempat ditambahkan sudah dihapus. Lima nilai kini menjadi fokus utama dengan nomor besar, judul tebal, dan deskripsi sesuai screenshot pengguna. Kelimanya selalu terlihat di desktop dan mobile; hanya peserta/format masuk disclosure pada mobile.

- PASS, statis: sintaks JavaScript dan struktur tag HTML valid; seluruh teks baru pada section hasil memiliki versi Inggris.
- PASS, statis: parser memastikan lima judul sama dengan daftar yang dikoreksi pengguna, semuanya berada di luar details, dan blok tiga manfaat sebelumnya sudah tidak ada.
- Belum diverifikasi runtime: hierarki visual, layout desktop/mobile dan perubahan bahasa setelah revisi ini. Tidak dilakukan pengujian browser sesuai instruksi pengguna.

## Visual editorial desktop

- PASS, aset: tiga ilustrasi dibuat melalui ImageGen bawaan, diperiksa secara visual sebagai gambar, lalu disalin ke direktori proyek. Hero menggambarkan keputusan manusia; tantangan menggambarkan transisi cara kerja; kurikulum menggambarkan eksplorasi dan prototipe.
- PASS, provenance: prompt final disimpan di `images/EDITORIAL_ASSETS.md`; caption dan alt ID/EN menyatakan bahwa visual merupakan ilustrasi AI.
- PASS, source: struktur HTML seimbang, anchor dan aset yang dirujuk tersedia, serta sintaks JavaScript valid setelah integrasi.
- PASS, metadata: tiga WebP berukuran total sekitar 321 KB, dengan dimensi yang sama seperti PNG asli. Tidak ada perubahan komposisi saat encoding.
- PASS, source pada implementasi awal desktop: gambar pernah dibatasi `min-width: 961px`. Batas ini kini sudah dihapus sesuai permintaan gambar mobile di atas. Hero tetap high-priority; dua gambar pendukung lazy-loaded.
- Belum diverifikasi runtime: komposisi desktop, perpindahan breakpoint, pemuatan gambar melalui browser, serta scroll snap setelah perubahan. Tidak ada pengujian browser sesuai instruksi pengguna.

## Pembaruan pembacaan mobile

Copy ringkas pada lebar hingga 760px, enam disclosure native untuk informasi tambahan, ringkasan manfaat, serta footer dan caption yang lebih singkat telah diterapkan. Detail kembali terbuka pada ukuran desktop. Bahasa Indonesia dan Inggris memakai aturan pembacaan yang sama.

- PASS, statis: sintaks `script.js` dan `language.js` diperiksa setelah perubahan.
- PASS, statis: 139 entri terjemahan mencakup copy dan label baru; tidak ditemukan teks yang terlewat setelah pengecualian nama diri, istilah program, angka, kontak, label bahasa, serta simbol.
- PASS, statis: struktur tag HTML seimbang, tidak ada ID duplikat atau anchor internal yang hilang.
- Belum diverifikasi secara runtime: layout desktop setelah restrukturisasi markup, disclosure saat perpindahan breakpoint, pembacaan mobile dan interaksi keyboard. Tidak dilakukan pengujian browser sesuai instruksi pengguna.

Pembaruan berikutnya: copy profesional dalam bahasa Indonesia dan Inggris serta pilihan ID/EN pada header telah ditambahkan. Tidak dilakukan pengujian browser untuk pembaruan ini. Bukti runtime di bawah berasal dari versi sebelumnya; tidak membuktikan layout atau interaksi versi bilingual terbaru.

- PASS, statis versi bilingual: `node --check language.js` dan `node --check script.js` tidak melaporkan kesalahan sintaks.
- PASS, statis versi bilingual: 116 entri terjemahan mencakup teks halaman dan atribut aksesibilitas; pemeriksaan parser tidak menemukan teks yang belum tercakup setelah mengecualikan nama diri, label bahasa, istilah program, nomor, kontak, dan simbol.

## Bukti pemeriksaan yang sudah dilakukan

- PASS, source: `node --check script.js` tidak melaporkan kesalahan sintaks.
- PASS, source: tidak ditemukan ID duplikat, target anchor hilang, atau aset lokal hilang.
- PASS, runtime awal: preview lokal merespons HTTP 200.
- PASS, runtime awal: viewport 320×640, 390×844, 768×1024, 1024×768, 1440×900, 1920×1080 dan 1280×600 menghasilkan overflow horizontal 0 serta tidak ada elemen konten yang melewati tepi horizontal. Temuan awal pada judul mentor sudah diperbaiki sebelum pemeriksaan ini.
- PASS, runtime awal: klik tujuh navigasi section pada desktop 1440×900 menempatkan awal masing-masing section pada y=88px, sesuai tinggi header, serta memperbarui section aktif dan fokus keyboard.
- PASS, runtime awal: menu mobile membuka, menutup melalui Escape, dan menutup setelah memilih Kurikulum; tujuan berhenti pada y=76px sesuai header mobile.
- PASS, source: konten tidak disembunyikan oleh animasi masuk dan section memakai minimum height, sehingga konten panjang tidak dipotong oleh fixed height.
- PASS, source: stylesheet menyediakan reduced motion yang menonaktifkan smooth scroll dan snapping. Verifikasi runtime preferensi ini belum diselesaikan.
- PASS, source: CTA memiliki tautan asli; menu memiliki handler, `aria-expanded`, Escape dan aturan fokus. Pemeriksaan layanan eksternal tidak dilakukan.
- PASS, source: foto stok diberi keterangan ilustrasi; tidak ada statistik, logo klien atau testimoni rekaan. Foto mentor dan informasi program berasal dari source yang sudah ada.

## Alasan desain

- ENERGY 3 / RHYTHM 4 / MOTION 2: headline besar dan kontras monokrom mengikuti referensi pengguna. Gerak hanya mendukung orientasi dan feedback.
- Chapter hitam menjadi aksen kontras pada tantangan; chapter lain memakai putih hangat dan abu muda. Identitas berulang muncul melalui tipografi, nomor chapter dan garis tipis.
- Hero tipografis, tantangan kontras, proses bernomor, hasil belajar, profil editorial, galeri dan penutup memberikan susunan berbeda sesuai isi.
- Snap native memberi titik berhenti per section tanpa mengambil alih input roda mouse atau touch. Navigasi tetap berupa anchor HTML.
- Foto stok dan profil memakai aset lokal yang tersedia. Atas permintaan pengguna berikutnya, hero, tantangan, dan kurikulum desktop ditambah tiga ilustrasi editorial AI dengan caption eksplisit serta provenance prompt.
- Footer memisahkan brand, navigasi, kontak dan informasi legal. Screenshot dipakai untuk arah visual, bukan sebagai otorisasi mengganti kontak.
- Tombol gelap dengan sudut 3px menekankan aksi daftar workshop; tidak ada glow, gradient dekoratif atau efek kartu berulang.

## Batas verifikasi

Audit kontras otomatis sempat dimulai tetapi berhenti karena keterbatasan fungsi pada evaluasi browser; tidak ada hasil rasio kontras yang diklaim. Setelah instruksi pengguna, tidak ada pengujian browser lanjutan. QA akhir, semua kombinasi keyboard, kondisi font gagal dimuat, reduced motion runtime, layanan eksternal dan browser lintas perangkat diserahkan kepada pengguna. Tidak ada form disubmit, pesan dikirim, atau publikasi produksi.
