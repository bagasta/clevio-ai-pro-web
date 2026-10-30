# clevio-ai-pro-web

Website Clevio AI Pro: [https://bagasta.github.io/clevio-ai-pro-web/](https://bagasta.github.io/clevio-ai-pro-web/).

## Publikasi

GitHub Pages menerbitkan branch `main`, folder root (`/`). Push berikutnya ke `main` akan memperbarui situs. File `.nojekyll` menjaga penerbitan sebagai situs statis. Semua path aset relatif agar berfungsi pada subpath `/clevio-ai-pro-web/` maupun preview lokal.

Landing page statis mengikuti referensi monokrom pengguna, dengan tujuh section utama, scroll snap native, layout responsif, dan footer berisi identitas, navigasi, kontak, serta copyright.

Preview lokal: [http://localhost:4173](http://localhost:4173).

## Menjalankan

Jika server belum berjalan, jalankan dari direktori proyek:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Tidak membutuhkan build atau dependensi JavaScript. Font Manrope dan Source Sans 3 dimuat dari Google Fonts dengan fallback sans-serif lokal.

## Berkas

- `index.html`: konten, navigasi, tujuh section dan footer.
- `styles.css`: desain monokrom, breakpoint 320px ke atas, scroll snapping dan reduced motion.
- `script.js`: menu mobile, Escape, pengelolaan fokus tautan internal, section aktif dan indikator progres.
- `language.js`: versi Inggris untuk seluruh teks halaman dan label aksesibilitas, perubahan bahasa dokumen dan metadata, serta penyimpanan pilihan ID/EN di perangkat.
- `DESIGN.md`: arah desain dan alasan keputusan visual.
- `ANTI_SLOP_AUDIT.md`: cakupan pemeriksaan dan batas verifikasi.

## Perilaku scroll

Section menggunakan minimum tinggi layar dikurangi header, sehingga bagian lain tidak mengintip pada section yang muat dalam satu layar. Section yang kontennya panjang tumbuh secara alami dan tetap dapat dibaca sampai selesai. Scroll berhenti pada awal section memakai CSS native; tidak ada timer, pemblokiran wheel/touch, atau perpindahan otomatis tanpa input pengguna. Preferensi reduced motion menonaktifkan snapping dan smooth scroll.

## Bahasa dan gaya penulisan

Copy memakai bahasa Indonesia profesional dengan versi Inggris yang disunting secara terpisah. Tombol ID/EN di header mengubah seluruh halaman tanpa memuat ulang, mempertahankan posisi baca dan tujuan tautan. Pilihan disimpan di localStorage jika tersedia; bahasa Indonesia menjadi default. Preferensi tetap dapat diubah bila penyimpanan perangkat dinonaktifkan.

Pada layar hingga 960px, header menampilkan logo, pilihan bahasa dan tombol menu. Tombol pendaftaran utama tetap tersedia pada hero dan penutup agar header tidak terlalu padat. Bahasa form eksternal mengikuti layanan tujuannya, bukan pengalih bahasa halaman.

## Pembacaan ringkas pada ponsel

Bagian hasil pembelajaran menonjolkan lima nilai AI Pro sesuai koreksi pengguna: HOTS, Design Thinking, Literasi AI, Kepemimpinan, dan Adaptabilitas. Kelimanya ditampilkan besar dengan deskripsi aslinya dan selalu terlihat di desktop maupun mobile dalam ID/EN. Hanya peserta dan format yang menjadi informasi tambahan. Blok tiga manfaat yang sebelumnya ditambahkan sudah dihapus.

Pada lebar hingga 760px, halaman menampilkan copy pendek dengan satu pesan utama per bagian. Konteks perubahan, informasi peserta/format, profil fasilitator, dan deskripsi tiga tahap pembelajaran tersedia melalui disclosure yang tertutup secara default. Lima nilai utama tidak disembunyikan di dalam disclosure. Disclosure memakai elemen HTML `details` dan `summary`, sehingga dapat dibuka lewat sentuhan atau keyboard. Caption galeri dan navigasi footer yang berulang disederhanakan; atribusi ilustrasi, kontak dan informasi pendaftaran tetap tersedia.

Saat berpindah ke layar lebih lebar, seluruh detail dibuka kembali. Copy desktop dan susunan utamanya dipertahankan. Versi ringkas juga tersedia dalam bahasa Inggris. Tanpa JavaScript, detail terbuka sebagai fallback agar informasi tetap tersedia.

## Aset dan tautan

Hero, tantangan, dan kurikulum memakai tiga ilustrasi editorial AI monokrom di desktop dan mobile. Narasinya berturut-turut: keputusan manusia dalam penggunaan AI; peralihan dari cara kerja lama menuju kolaborasi baru; serta proses mengubah gagasan menjadi prototipe. Desktop menggunakan komposisi teks dan gambar berdampingan; mobile memakai crop mendatar yang lebih pendek agar informasi tetap mudah dibaca.

Aset WebP yang sama ditampilkan pada seluruh ukuran layar, dengan crop CSS khusus untuk mobile. Hero ditempatkan sebelum tombol daftar; gambar kurikulum mendahului instruksi membuka tahap pembelajaran. Dua gambar pendukung tetap lazy-loaded. PNG asli disimpan sebagai master. Caption dan deskripsi aksesibilitas tersedia dalam ID/EN. Semua ditandai sebagai ilustrasi AI, bukan dokumentasi peserta. Prompt lengkap dan lokasi aset ada di `images/EDITORIAL_ASSETS.md`. Tidak dilakukan pengujian browser.

Logo asli, foto mentor dan dua foto ilustrasi lokal tetap digunakan. Foto galeri diberi keterangan ilustrasi sementara dan bukan dokumentasi acara Clevio. Video embed diganti galeri foto sesuai cakupan dummy gambar yang diminta. Tidak ada logo klien atau testimoni rekaan.

Tautan pendaftaran dan profil mentor memakai tujuan yang sudah ada di source. Sesuai instruksi pengguna, footer menggunakan kontak dummy `+62 8XX-XXXX-XXXX` dan `hello@example.com`, tanpa tautan telepon, WhatsApp atau email yang aktif. Keterangan dummy tersedia dalam ID/EN. Pra-registrasi tidak berarti kursi telah dikonfirmasi.

## Verifikasi

Pemeriksaan awal menemukan dan memperbaiki overflow nama mentor pada ponsel. Setelah perbaikan, tujuh ukuran viewport yang diperiksa tidak menunjukkan overflow horizontal. Navigasi tujuh section pada desktop berhenti di bawah header; menu mobile, Escape dan perpindahan fokus juga sempat diperiksa.

Pengujian browser dihentikan sesuai instruksi pengguna. Tidak ada QA browser lanjutan atau klaim verifikasi akhir untuk seluruh interaksi. Pengiriman formulir, pengiriman pesan, layanan eksternal, browser lintas perangkat dan deployment produksi tidak dilakukan.

Pembaruan copy dan fitur ID/EN setelah instruksi tersebut hanya diperiksa secara statis. Bukti viewport sebelumnya berlaku untuk versi sebelum perubahan bilingual; bukan bukti tampilan versi terbaru.

Salinan berkas sebelum perubahan tersedia sementara di `/tmp/clevio-restyle-before/`.
