function tampilkanMakanan(kota) {
    const makananKota = {
        "Jakarta": [
            { nama: "Nasi Goreng", deskripsi: "Nasi yang digoreng dengan bumbu khas, dilengkapi dengan telur dan sayuran." },
            { nama: "Sate Ayam", deskripsi: "Potongan daging ayam yang ditusuk dan dibakar, disajikan dengan bumbu kacang." },
            { nama: "Ketoprak", deskripsi: "Makanan yang terdiri dari bihun, tahu, dan lontong, disiram dengan saus kacang." },
            { nama: "Soto Betawi", deskripsi: "Sup santan dengan daging sapi atau ayam, khas Jakarta." },
            { nama: "Kerak Telor", deskripsi: "Omelet yang terbuat dari beras ketan, telur, dan serundeng." },
            { nama: "Gado-Gado", deskripsi: "Salad sayuran yang disajikan dengan saus kacang." },
            { nama: "Laksa Betawi", deskripsi: "Mie dalam kuah santan dengan udang atau ayam, khas Betawi." },
            { nama: "Semur Jengkol", deskripsi: "Jengkol yang dimasak dengan bumbu kecap dan rempah khas." },
            { nama: "Kue Cubit", deskripsi: "Kue mini yang manis dan lembut, biasanya dihias dengan topping." },
            { nama: "Martabak", deskripsi: "Kue tebal dengan isian manis atau telur dan daging." }
        ],
        "Bandung": [
            { nama: "Batagor", deskripsi: "Bakso tahu goreng yang disajikan dengan saus kacang." },
            { nama: "Siomay", deskripsi: "Dumpling kukus yang disajikan dengan saus kacang." },
            { nama: "Mie Kocok", deskripsi: "Mie dengan kuah kaldu sapi, lengkap dengan kikil dan tauge." },
            { nama: "Sate Maranggi", deskripsi: "Sate daging sapi yang manis dan gurih, khas Sunda." },
            { nama: "Cilok", deskripsi: "Aci yang dibentuk bulat dan disajikan dengan saus sambal atau kacang." },
            { nama: "Seblak", deskripsi: "Makanan berkuah pedas yang terdiri dari kerupuk basah dan bahan lainnya." },
            { nama: "Nasi Timbel", deskripsi: "Nasi yang dibungkus daun pisang, disajikan dengan lauk-pauk." },
            { nama: "Surabi", deskripsi: "Pancake tradisional yang biasanya disajikan dengan saus kinca." },
            { nama: "Peuyeum", deskripsi: "Tape singkong yang difermentasi, khas Bandung." },
            { nama: "Lotek", deskripsi: "Salad sayuran dengan saus kacang yang pedas dan gurih." }
        ],
        "Yogyakarta": [
            { nama: "Gudeg", deskripsi: "Nangka muda yang dimasak dalam santan hingga empuk, khas Yogyakarta." },
            { nama: "Bakpia", deskripsi: "Kue yang diisi dengan kacang hijau atau cokelat, khas Yogyakarta." },
            { nama: "Sate Klathak", deskripsi: "Sate kambing yang dibakar dengan bumbu sederhana." },
            { nama: "Mangut Lele", deskripsi: "Ikan lele yang dimasak dengan kuah santan pedas." },
            { nama: "Nasi Kucing", deskripsi: "Nasi porsi kecil yang disajikan dengan lauk sederhana." },
            { nama: "Jadah Tempe", deskripsi: "Ketan dan tempe bacem yang disajikan bersama, makanan tradisional Yogyakarta." },
            { nama: "Geplak", deskripsi: "Manisan kelapa dengan warna-warni cerah, khas Bantul." },
            { nama: "Oseng Mercon", deskripsi: "Tumis daging sapi yang sangat pedas." },
            { nama: "Brongkos", deskripsi: "Sup kacang tolo dengan daging dan bumbu yang kaya rempah." },
            { nama: "Wedang Ronde", deskripsi: "Minuman hangat dengan bola ketan berisi kacang." }
        ],
        "Surabaya": [
            { nama: "Rawon", deskripsi: "Sup daging sapi dengan kuah hitam pekat dari kluwak." },
            { nama: "Rujak Cingur", deskripsi: "Salad sayuran dengan petis dan cingur (hidung sapi) khas Surabaya." },
            { nama: "Lontong Balap", deskripsi: "Lontong dengan tahu, lentho, dan kuah segar, disajikan dengan kecambah." },
            { nama: "Sate Klopo", deskripsi: "Sate daging yang dilapisi parutan kelapa sebelum dibakar." },
            { nama: "Tahu Tek", deskripsi: "Tahu goreng dengan lontong, kentang, dan saus petis." },
            { nama: "Soto Lamongan", deskripsi: "Soto ayam bening dengan koya yang khas." },
            { nama: "Semanggi Surabaya", deskripsi: "Salad tradisional dengan daun semanggi dan saus kacang." },
            { nama: "Pecel Semanggi", deskripsi: "Pecel yang menggunakan daun semanggi sebagai bahan utama." },
            { nama: "Nasi Krawu", deskripsi: "Nasi dengan daging suwir dan serundeng khas Gresik." },
            { nama: "Bebek Goreng", deskripsi: "Bebek yang digoreng renyah dengan sambal khas." }
        ],
        "Medan": [
            { nama: "Bika Ambon", deskripsi: "Kue berserat dengan tekstur lembut dan rasa manis." },
            { nama: "Soto Medan", deskripsi: "Soto berkuah santan dengan isian daging atau ayam." },
            { nama: "Mie Gomak", deskripsi: "Mie besar khas Batak yang mirip spaghetti." },
            { nama: "Lontong Medan", deskripsi: "Lontong dengan kuah kari dan berbagai lauk." },
            { nama: "Nasi Gurih", deskripsi: "Nasi dengan santan, mirip nasi uduk." },
            { nama: "Dali Ni Horbo", deskripsi: "Keju tradisional dari susu kerbau, khas Batak." },
            { nama: "Sayur Gurih Tauco", deskripsi: "Sayur dengan tauco dan rempah khas Medan." },
            { nama: "Ayam Napinadar", deskripsi: "Ayam bakar yang dibumbui dengan darah ayam, khas Batak." },
            { nama: "Naniura", deskripsi: "Ikan mas mentah yang dimasak dengan asam dan rempah." },
            { nama: "Kwetiau Ateng", deskripsi: "Kwetiau goreng yang populer di Medan." }
        ],
        "Surakarta": [
            { nama: "Selat Solo", deskripsi: "Hidangan daging dengan kuah manis dan sayuran." },
            { nama: "Nasi Liwet", deskripsi: "Nasi gurih yang disajikan dengan sayur labu siam dan ayam." },
            { nama: "Timlo Solo", deskripsi: "Sup berisi sosis Solo, telur, dan daging." },
            { nama: "Sate Buntel", deskripsi: "Sate daging kambing yang dibungkus lemak sebelum dibakar." },
            { nama: "Sate Kere", deskripsi: "Sate dari bahan jeroan dan tempe gembus." },
            { nama: "Serabi Notosuman", deskripsi: "Serabi khas Solo yang lembut dan manis." },
            { nama: "Cabuk Rambak", deskripsi: "Makanan ringan dari ketupat dan saus wijen." },
            { nama: "Lenjongan", deskripsi: "Jajanan tradisional dari singkong dan kelapa parut." },
            { nama: "Wedang Dongo", deskripsi: "Minuman jahe dengan bola ketan isi kacang." },
            { nama: "Tengkleng", deskripsi: "Sup tulang kambing dengan bumbu pedas dan gurih." }
        ]
    };

    const makananList = makananKota[kota] || [];
    let content = `<h3>Makanan Favorit di ${kota}</h3><ul class="list-group">`;
    makananList.forEach(makanan => {
        content += `<li class="list-group-item"><strong>${makanan.nama}</strong>: ${makanan.deskripsi}</li>`;
    });
    content += `</ul>`;
    document.getElementById("makanan-kota").innerHTML = content;
}

