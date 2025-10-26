# Kalkulator EOQ

Kalkulator EOQ (Economic Order Quantity/Kuantitas Pesanan Ekonomis) adalah aplikasi web untuk bisnis menentukan kuantitas pesanan optimal untuk meminimalkan biaya inventaris agar meminimalkan biaya inventaris total.

## Fitur

- Perhitungan EOQ secara real-time dengan pembaruan input dinamis
- Perhitungan kuantitas pesanan optimal untuk meminimalkan biaya inventaris
- Tampilan biaya pemesanan dan biaya penyimpanan tahunan
- Rincian visual biaya tahunan total
- Dukungan format mata uang Rupiah Indonesia (IDR)
- Desain responsif untuk pengalaman pengguna yang optimal

## Rumus yang Digunakan

Perhitungan EOQ berdasarkan pada rumus Kuantitas Pesanan Ekonomis:

**EOQ = √[(2 × D × Co) / Ch]**

Dimana:
- D = Permintaan Tahunan (unit/tahun)
- Co = Biaya Pemesanan (Rp per pesanan)
- Ch = Biaya Penyimpanan (Rp per unit/tahun)

## Apa itu Economic Order Quantity?

Economic Order Quantity (EOQ) adalah model manajemen inventaris fundamental yang menentukan kuantitas pesanan optimal yang meminimalkan total biaya inventaris. EOQ mewakili titik ideal di mana biaya pemesanan dan biaya penyimpanan seimbang untuk mencapai biaya inventaris minimum.

- **Biaya Pemesanan**: Biaya yang terkait dengan pemesanan dan menerima pesanan
- **Biaya Penyimpanan**: Biaya yang terkait dengan menyimpan dan memelihara inventaris
- **Keseimbangan Optimal**: EOQ mengidentifikasi kuantitas pesanan yang meminimalkan total dari kedua jenis biaya ini

## Instalasi

1. Clone repositori:
   ```bash
   git clone https://github.com/yusrmuttaqien/eoq-site.git
   ```

2. Pindah ke direktori proyek:
   ```bash
   cd eoq-site
   ```

3. Instal dependensi:
   ```bash
   bun install
   ```
   atau jika menggunakan npm:
   ```bash
   npm install
   ```

## Pengembangan

Untuk menjalankan server pengembangan:

```bash
bun dev
```
atau jika menggunakan npm:
```bash
npm run dev
```

Kunjungi `http://localhost:5173` di browser Anda untuk melihat aplikasi.


