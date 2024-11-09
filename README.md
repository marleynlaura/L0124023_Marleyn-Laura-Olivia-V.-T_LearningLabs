# Makanan Favorit di Berbagai Kota - L0124023 - Marleyn Laura Olivia Veronica Tanamal

**Makanan Favorit di Berbagai Kota** adalah sebuah website yang berfungsi untuk memperkenalkan makanan-makanan khas dari beberapa kota besar di Indonesia. Pengunjung dapat memilih kota dan melihat daftar makanan favorit beserta deskripsi singkatnya. Selain itu, tersedia halaman untuk memberikan feedback.

## Struktur dan Fitur Website

1. **Halaman Beranda (`index.html`)**
   - Halaman utama atau landing page yang berisi sambutan singkat.
   - Terdapat pengenalan singkat mengenai makanan favorit di setiap kota yang tersedia.
   
2. **Halaman Daftar Makanan (`content.html`)**
   - Pengunjung dapat memilih kota (Jakarta, Bandung, Yogyakarta, Surabaya, Medan, dan Surakarta).
   - Setelah memilih kota, daftar makanan favorit di kota tersebut beserta deskripsi singkatnya akan ditampilkan.

3. **Halaman Feedback (`feedback.html`)**
   - Terdapat formulir untuk mengirimkan feedback atau komentar mengenai website.
   - Formulir berisi nama, email, dan pesan dari pengunjung.

4. **File CSS (`styles.css`)**
   - File styles.css digunakan untuk memberikan gaya pada halaman agar tampilan website menjadi lebih menarik dan responsif.
   - Background Header dan Footer: Memberikan gambar latar dengan lapisan hitam transparan agar teks terlihat jelas.
   - Tombol Pilihan Kota: Mengubah warna latar belakang tombol menjadi hitam dengan teks putih.
   - Gaya Umum dan Layout: Pengaturan layout dan spasi menggunakan padding dan margin untuk memastikan elemen-elemen tertata rapi di setiap halaman.
   - Bootstrap juga digunakan di beberapa elemen untuk menambah responsivitas, seperti kelas grid (row, col-md) untuk tata letak halaman yang responsif.

5. **File JS (`script.js`)**
   - File script.js digunakan untuk menambah interaktivitas pada halaman, terutama di halaman daftar makanan (content.html):
   - Fungsi tampilkanMakanan: Fungsi ini menerima nama kota sebagai parameter. Berdasarkan kota yang dipilih, fungsi akan menampilkan daftar makanan khas dari kota tersebut beserta deskripsi singkatnya.
   - Event Handling: Fungsi tampilkanMakanan dipanggil ketika tombol kota ditekan. Fungsi ini kemudian menampilkan daftar makanan di halaman secara dinamis.
   - Struktur Data: Menggunakan objek makananKota yang berisi daftar makanan untuk setiap kota, termasuk nama dan deskripsi untuk masing-masing makanan.

## Struktur Folder

Proyek ini memiliki struktur folder sebagai berikut:

```plaintext
makanan-favorit/
│
├── index.html            // Halaman utama atau beranda
├── content.html          // Halaman daftar makanan
├── feedback.html         // Halaman feedback
│
├── css/                  // Folder untuk file CSS
│   └── styles.css        // File CSS utama
│
├── js/                   // Folder untuk file JavaScript
│   └── script.js         // File JavaScript utama
│
├── images/               // Folder untuk gambar
    └── background.jpg    // File JavaScript utama

