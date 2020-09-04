-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 04 Sep 2020 pada 10.42
-- Versi server: 10.1.32-MariaDB
-- Versi PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thejourney`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `bookmarks`
--

CREATE TABLE `bookmarks` (
  `id` int(11) NOT NULL,
  `bmUserId` int(11) NOT NULL,
  `journeyId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `bookmarks`
--

INSERT INTO `bookmarks` (`id`, `bmUserId`, `journeyId`, `createdAt`, `updatedAt`) VALUES
(77, 6, 4, '2020-08-26 17:57:41', '2020-08-26 17:57:41'),
(85, 6, 3, '2020-08-26 18:03:46', '2020-08-26 18:03:46'),
(118, 13, 7, '2020-08-30 02:40:56', '2020-08-30 02:40:56'),
(123, 13, 5, '2020-08-30 02:41:08', '2020-08-30 02:41:08'),
(126, 13, 4, '2020-08-30 02:41:19', '2020-08-30 02:41:19');

-- --------------------------------------------------------

--
-- Struktur dari tabel `journeys`
--

CREATE TABLE `journeys` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `jnImg` varchar(255) DEFAULT NULL,
  `jnUserId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `journeys`
--

INSERT INTO `journeys` (`id`, `title`, `description`, `jnImg`, `jnUserId`, `createdAt`, `updatedAt`) VALUES
(3, 'Cerita Berlibur Bersama Keluarga ke Tegal, Sambangi Wisata Alam Guci nan Indah', '<p>Oke, saya akan menceritakan perjalanan saya bersama keluarga besar dari ayah saya untuk berwisata ke Guci saat kami pulang kampung ke brebes, jawa tengah.</p><p>Tepat 17 Agustus 2018 di hari Kemerdekaan Republik Indonesia jatuh di hari jumat sehingga dapat dinyatakan sebagai libur panjang. Kami dan keluarga besar merencanakan cuti bersama pada hari Kamisnya tanggal 16, agar libur semakin panjang.</p><p><strong>Hari Pertama di Brebes</strong></p><p>Pada tanggal 16 itulah hari pertama kami memulai perjalanan panjang dari stasiun Pasar Senen, Jakarta. Pukul 05.30 bada Subuh, Saya, Ayah, Ibu, Istri, Anak dan Adik dipaksa keluarga kami yang lain untuk segera berangkat agar sampai di pasar senen pukul 07.00 karena waktu itulah kami harus mengganti struk pembelian karcis. KTP kami masing-masing yang di butuhkan. Kami ber-28 orang.</p><p>Pukul 07.45 kereta kami datang, Ini yang kami tunggu-tunggu, karena ini adalah pertama kalinya saya, istri dan anak berpergian jauh dengan menggunakan kereta. Bahkan pertama kalinya saya membondong istri pulang kekampung ayah saya. Masya Allah, bahagianya hati ini.</p><p>Canda, tawa, suka, senda gurau kami lakukan sepanjang perjalanan untuk menempuh hampir 5 jam di kereta. Sesekali kami mendekati jendela dan melihat Indahnya kuasa Allah dengan hamparan Sawah di area pedesaan. <i>Masha Allah.</i></p><p>Tepat pukul 13.00 kami tiba di stasiun Brebes. Tempat ini panas tapi kami merasakan kesejukan dari angin yang melintasi bagian tubuh kami, seolah ini adalah ucapan selamat datang dari Alam. Untuk sampai dirumah sanak saudara, kami menggunakan dua angkutan umum carteran dari stasiun brebes.</p><p>Singkat cerita, di hari pertama, kami hanya bersilaturahmi keseluruh saudara kami yang berada disana. Setelah semua di sambangi, kemudian kami habiskan waktu untuk beristirahat di salah satu rumah sanak saudara.</p>', 'pic4.png', 13, '2020-08-26 14:10:33', '2020-08-26 14:10:33'),
(4, 'Serunya Camping di Kebun Kopi Cibulao Bersama Komunitas Wisata Panti dan Yayasan PYI', '<p>Menjaga dan menyantuni anak yatim ataupun dhuafa sudah menjadi perintah Allah SWT dan Rasulullah Muhammad SAW. Berbagai macam cara untuk membahagiakan mereka. Berwisata alam menjadi salah satu cara yang tepat untuk membuat mereka senyum sekaligus menjadi lahan ibadah kita untuk tetap taat kepada Allah SWT.</p><p>Bersama Komunitas Wisata Panti, <a href=\"https://www.gomuslim.co.id%20/\"><i><strong>gomuslim</strong></i></a>&nbsp;mengajak 20 anak panti dari Yayasan Panti Yatim Indonesia (PYI) cabang Ciomas, Bogor untuk berwisata camping selama 2 hari 1 malam di Kebun Kopi Cibulao, Cisarua Bogor.</p><p><strong>Hari Pertama, Sabtu (7/3/2020)</strong></p><p>Pagi sekali, pukul 04.00 WIB, Komunitas Wisata Panti menjemput 3 orang tim <a href=\"https://www.gomuslim.co.id%20/\"><i><strong>gomuslim</strong></i></a> untuk memulai aktivitas berwisata alam bersama 20 anak yayasan PYI. Lewat jalan Tol Jagorawi, kami menjemput anak-anak Panti PYI yang berada di Ciomas Bogor.</p><p>Sampai di Panti PYI pukul 05.00 WIB, kami bergegas melaksanakan salat Subuh. Sementara, 20 anak panti sudah siap memulai perjalanan. Mereka tampak antusias sampai-sampai salah satu anak panti mengaku sulit tidur karena menunggu wisata hari itu.</p><p>Dalam perjalanan kali ini, Danu Setyo Nugroho selaku Ketua Komunitas Wisata Panti mengatakan, banyaknya support sponsor dari para dermawan baik transportasi maupun konsumsi.</p><p>Tepat pukul 06.00 WIB, mobil Elf kami datang. Sebelum berangkat, kami berdoa bersama dipimpin oleh salah satu dari anak panti Yayasan PYI.</p><p>Dalam perjalanan, kami sempat mengalami kemacetan. Kami terjebak jalur buka tutup jalan arah Puncak Bogor. Buka tutup jalan itu memakan waktu berkisar 2,5 jam. Pukul 08.30 WIB, kami baru dapat memulai perjalanan.</p><p>Alhamdulillah pasca buka tutup jalan, Allah memberikan kelancaran pada perjalanan kami. Sekitar 1 jam kami sampai di di area perkebunan Kopi Cibulao, Cisarua, Bogor.</p>', 'pic6.png', 13, '2020-08-26 14:11:50', '2020-08-26 14:11:50'),
(5, 'Jalan Bareng ACT, Melihat Langsung Pendistribusian Bantuan untuk Korban Banjir Bandang di Lebak Banten', '<p>Pagi itu, Sabtu (18/01/2020) wilayah Jakarta dan sekitarnya masih diguyur hujan. Tapi hujan tak menghentikan langkahku menuju Menara 165, Jakarta Selatan. Hari ini saya bersama awak media lain akan berangkat bersama Aksi Cepat Tanggap (ACT) untuk mengirimkan bantuan kepada korban banjir bandang di Kampung Sajira, Lebak, Banten.</p><p>Sesuai jadwal, sedianya kami berangkat pukul 07.00 WIB. Namun karena hujan deras dan beberapa relawan serta wartawan datang terlambat, terpaksa keberangkatan diundur hingga pukul 07.30 WIB.</p><p>Setelah semua datang, kami pun berangkat. Perjalanan kali ini cukup panjang. Sekitar 5 jam kami tempuh. Pukul 11.30 WIB, kami sampai di Induk Posko ACT Wilayah Banten. Mobil Travel hanya bisa mengantarkan kami ke sini.</p><p>Induk Posko ACT ini merupakan pusat seluruh jenis bantuan berada dari para dermawan. Di sini, bantuan logistik akan disortir sesuai kebutuhan para korban. Selanjutnya didistribusikan ke posko-posko yang tersebar di beberapa wilayah terdampak banjir. Tujuannya agar satu pintu dan pendistribusian tepat sasaran.</p><p>Dari Induk Posko, kami istirahat sejenak untuk melaksanakan salat dan menikmati jamuan yang dihidangkan. Sambil menikmati hidangan, salah satu relawan bercerita tentang buruknya lokasi terdampak banjir. Saya sampai merinding mendengar ceritanya. Dan saat itu masih belum terbayang jelas bagaimana kondisi yang sebenarnya.</p><p>Setelah itu, Komandan Relawan ACT yang juga sudah lama berada di lokasi terdampak, mulai mengajak kami ke titik lokasi. Kami di ajak ke lokasi dengan menggunakan mobil Ranger bak terbuka milik ACT.</p><p>Tepat pukul 13.00 WIB, disitulah kami memulai perjalanan kami menuju titik terdampak bencana. Perjalanan kami berliku tapi mobil ini melaju cukup kencang. Toa Sirine kerap dinyalakan guna menginformasi kepada para pengguna jalan lain bahwa mobil ini harus berjalan cepat untuk memberikan bantuan kepada korban bencana alam.</p><p>Jalanan berkelok, tanjakan dan turunan kami lalui. Butuh waktu 2 jam dari Induk Posko ke lokasi bencana. Sekitar pukul 15.00 WIB, kami tiba di Desa Sajira Timur, Kecamatan Sajira, Lebak Banten.</p><p>Saat memasuki lokasi bencana, hal pertama yang kami lihat adalah lumpur, air sungai yang sangat luas, tanah kosong beserta puing-puing yang menumpuk.</p>', 'pic5.png', 13, '2020-08-26 14:19:44', '2020-08-26 14:19:44'),
(7, 'Traveling di Kota Pattaya: Berkunjung ke Nong Nooch Village dan Makan Siang di Amir Halal Restaurant', '<p>Kamis pagi, (26/09/2019), grup tur Cheria Holiday sarapan pagi di restoran halal dalam T Six 5 Hotel. Makanan halal di sini mengusung konsep buffet alias prasmanan. Saya dan teman-teman grup tur dihidangkan dengan beragam pilihan makanan sarapan pagi, mulai dari nasi goreng dengan beragam lauk pauk khas Thailand, bubur ayam, sereal, buah, dan juga salad. Tak begitu banyak berbeda dengan&nbsp; hidangan khas hotel lainnya. Tapi, yang paling penting adalah, ini adalah salah satu hotel dan resto halal di kota wisata Pattaya, Thailand.</p><p>Setelah sarapan pagi dan check out dari hotel, kami berangkat menuju Nong Nooch Village, sebuah destinasi wisata taman Bunga yang juga dilengkapi dengan Show Thai Dance dan Elephant show.</p><p>Mr. Mark, tour guide kami selama di Thailand mengatakan taman bunga ini menjadi taman Bunga tropis terbesar di ASEAN yang dimiliki oleh salah satu orang terkaya di negeri ini. Taman Bunga ini terdiri dari 800 jenis bunga dan pengunjung bisa menonton pertunjukan gajah dan tarian khas Thailand.</p><p>Sampai di Nong Nooch Village, kami diberi waktu untuk menikmati suasana taman bunga dengan berfoto di beberapa spot di sini. Taman bunga di kota wisata Pattaya ini juga memberi pengalaman pengunjung yang ingin berfoto bersama harimau atau naik gajah mengelilingi taman bunga.</p><p>Selanjutnya, pada pukul 10.30, kami diberi dua tiket show, yaitu Show Thai Dance dan Elephant show. Pertujukan pertama, para pengunjung dimanjakan dengan penampilan tarian tradisional khas Thailand dengan beragam cerita berbahas Thailand, meski diselingi dengan bahasa Inggris, tapi tidak begitu jelas terdengar oleh kami. Tapi pengunjung masih bisa menikmatinya. Apalagi, para penari tersebut menampilkan kebudayaan khas Thailand, mulai dari ornament kerajaan sampai baju-baju adat Thailand yang khas.</p><p>Setelah pertunjukan tari, kami berpindah studio, yaitu ke Elephant show. Meski tempatnya agak bau, karena menjadi tempat pertunjukan gajah, tapi pengunjung masih bisa menikmati pertunjukan dengan pilihan tempat dudk seperti sebuah stadion. Di tempat ini, kami disuguhkan pertunjukan gajah yang sudah dilatih dengan beragam keahliannya yang beberapa juga melibatkan penonton untuk ikut dalam pertujukan. Pengunjung juga bisa memberikan makanan (pisang) kepada gajah, dengan membelinya kepada petugas di area samping stadion.</p><p><strong>Makan Siang di Restoran Halal Pattaya</strong></p><p>Waktu makan siang tiba. Kami berangkat menuju Amir Restaurant (set menu halal).&nbsp; Ini adalah restoran bergaya Melayu khas Thailand yang berkonsep set menu halal. Masing-masing meja tamu dibuat melingkar dengan satu meja bisa untuk empat sampai tujuh orang. Meja tersebut diisi dengan beragam makanan khas Thailand, seperti tom yam isi sea food, telur dadar, ayam bumbu manis, dan sayu-sayuran.</p><p>Tak hanya makanan halal, Amir Restaurant juga menyediakan beberapa souvenir oleh-oleh yang bisa didapatkan di dalam resto. Bagi muslim traveler yang ingin melaksanakan salat, di sebrang resto ada Masjid yang sangat terkenal di Kota wisata ini, yaitu Toatillah Mosque. Karena itu, resto ini menjadi pilihan yang tepat bagi muslim traveler di Kota Pattaya untuk makan siang&nbsp; sekaligus salat di masjid.</p>', 'the-leela-kovalam-kerala-india-travel-destinations-beautiful-photography-infinity-pool-great-gatsby-luxury-lifestyle-blue-sea.jpg', 6, '2020-08-26 17:53:56', '2020-08-26 17:53:56');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200820150253-create-user-role.js'),
('20200820150304-create-user.js'),
('20200825010210-create-journey.js'),
('20200825010413-create-bookmark.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `userroles`
--

CREATE TABLE `userroles` (
  `id` int(11) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `userroles`
--

INSERT INTO `userroles` (`id`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '2020-08-20 00:00:00', '2020-08-20 00:00:00'),
(2, 'user', '2020-08-20 00:00:00', '2020-08-20 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `roleId` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `userImg` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `fullName`, `roleId`, `email`, `password`, `phone`, `address`, `userImg`, `createdAt`, `updatedAt`) VALUES
(1, 'Dewe Tour Admin', 1, 'admindewe@gmail.com', '$2b$10$dq68qPRVOa.0BicU01.TH.at5ZKN6HC4iDQHh4NRSAslCPdVQmwPy', '082164894643', 'Jl.Cemara', '', '2020-08-20 15:30:40', '2020-08-20 15:30:40'),
(2, 'Dewe Tour', 2, 'dewe@gmail.com', '$2b$10$5UaNTeq79mRKkduOgAvZYesMERvTSs5zDbe03rMUKzDXJu2bpwUx2', '082164894643', 'Jl.Dewe', 'img1.jpg', '2020-08-20 15:31:03', '2020-08-24 09:29:31'),
(6, 'sabtu', 2, 'sabtu@gmail.com', '$2b$10$5IYOknp5dniMjNTfOZREr.W.A/9tnQM9gP/QRF1zkRR9r7mQZOqSe', '082343456785', 'jl.sabtu', '', '2020-08-22 04:49:51', '2020-08-24 13:21:45'),
(12, 'selasa', 2, 'selasa@gmail.com', '$2b$10$ncYSLvAme0n8EaC4F8oaNOQrzMO0A3gbqpR.nVvpn.jw4k6cXrdBS', '082134543213', 'Jl.Selasa', NULL, '2020-08-25 14:53:58', '2020-08-25 14:53:58'),
(13, 'The Journey', 2, 'journey@gmail.com', '$2b$10$AnH3r88qjyWAAkYBjZQE5uQn3/0mJNUzhibOCGzfAkEp15rnv6LNS', '082134564321', 'Jl. Journey', NULL, '2020-08-26 13:51:33', '2020-08-26 13:51:33');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bmUserId` (`bmUserId`),
  ADD KEY `journeyId` (`journeyId`);

--
-- Indeks untuk tabel `journeys`
--
ALTER TABLE `journeys`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jnUserId` (`jnUserId`);

--
-- Indeks untuk tabel `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `userroles`
--
ALTER TABLE `userroles`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `bookmarks`
--
ALTER TABLE `bookmarks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=130;

--
-- AUTO_INCREMENT untuk tabel `journeys`
--
ALTER TABLE `journeys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `userroles`
--
ALTER TABLE `userroles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD CONSTRAINT `bookmarks_ibfk_1` FOREIGN KEY (`bmUserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bookmarks_ibfk_2` FOREIGN KEY (`journeyId`) REFERENCES `journeys` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `journeys`
--
ALTER TABLE `journeys`
  ADD CONSTRAINT `journeys_ibfk_1` FOREIGN KEY (`jnUserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
