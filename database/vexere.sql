-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: us-cdbr-east-05.cleardb.net    Database: heroku_9a3fc1b2fc2f89f
-- ------------------------------------------------------
-- Server version	5.5.62-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bang_tin`
--

DROP TABLE IF EXISTS `bang_tin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bang_tin` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `TieuDe` varchar(255) NOT NULL,
  `NoiDung` varchar(255) NOT NULL,
  `urlHinh` varchar(255) DEFAULT NULL,
  `NoiBan` varchar(255) NOT NULL,
  `Gia` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bang_tin`
--

LOCK TABLES `bang_tin` WRITE;
/*!40000 ALTER TABLE `bang_tin` DISABLE KEYS */;
INSERT INTO `bang_tin` VALUES (1,'Haha','<p>hom nay tui buon</p>','uMfT_91902045_2489181297850396_1806733913536593920_n.jpg','Quận 7','200000'),(2,'Hahahahaha','tin tuc buoi sang','','Quận 7','300000'),(3,'Hahahahaha','tin tuc buoi trua','','Quận 8','350000'),(4,'Bán vé tphcm-dl','tao là tôn',NULL,'Quận 7','200000'),(5,'Bán vé tphcm-dl','Tao là lợi nè haha',NULL,'Quận 10','300000'),(6,'ban ve tphcm-pt','test','a.jpg','TPHCM','300000'),(7,'Bán vé tphcm-pt','hom nay toi buon',NULL,'Quận 7','200000');
/*!40000 ALTER TABLE `bang_tin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ben`
--

DROP TABLE IF EXISTS `ben`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ben` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `TenBen` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ben`
--

LOCK TABLES `ben` WRITE;
/*!40000 ALTER TABLE `ben` DISABLE KEYS */;
INSERT INTO `ben` VALUES (1,'Thành phố Hồ Chí Minh'),(2,'Đà Lạt'),(3,'Phan Thiết'),(4,'Cần Thơ'),(5,'Đà nẵng'),(6,'Cà Mau');
/*!40000 ALTER TABLE `ben` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoadon`
--

DROP TABLE IF EXISTS `hoadon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoadon` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `NgayDatVe` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `TongTien` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `GhiChu` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `idKH` int(11) NOT NULL,
  `GheDaDat` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SoLuong` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoadon`
--

LOCK TABLES `hoadon` WRITE;
/*!40000 ALTER TABLE `hoadon` DISABLE KEYS */;
INSERT INTO `hoadon` VALUES (1,'2020-05-27 07:19:34','440000','Dat ve cho vui',12,'E1,E2','2'),(2,'2020-05-29 05:29:05','440000','Dat ve cho vui',12,'F1,F2','2'),(3,'2020-05-29 05:33:34','440000','Dat ve cho vui',12,'F3,F4','2'),(4,'2020-05-29 06:17:15','660000','Dat ve cho vui',1,'E3,E4,D3','3'),(5,'2020-05-30 02:39:14','440000','Dat ve cho vui',1,'D2,D1','2'),(6,'2020-06-04 13:01:40','440000','Dat ve cho vui',13,'A2,A1','2');
/*!40000 ALTER TABLE `hoadon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khachhang` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `HoTen` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `SDT` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `DiaChi` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
INSERT INTO `khachhang` VALUES (1,'Test','0999999999','test@gmail.com','quan 1'),(12,'Loi Duong','0999999996','lanmap@gmail.com','quan 8'),(13,'Lân mập','0123456789','lanmap@gmail.com','Quan 3333');
/*!40000 ALTER TABLE `khachhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khachhang_login`
--

DROP TABLE IF EXISTS `khachhang_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khachhang_login` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_kh` int(10) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `diachi` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `urlHinh` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang_login`
--

LOCK TABLES `khachhang_login` WRITE;
/*!40000 ALTER TABLE `khachhang_login` DISABLE KEYS */;
INSERT INTO `khachhang_login` VALUES (15,1,'Duong Tan Loi','test@gmail.com','0999999999','quan 7','eyJpdiI6IkRDQ3RsVEgrVjh6UTVZZTBndEgraWc9PSIsInZhbHVlIjoidWNPTTNOMXlDaE4yVzJpbXBQZmlBc09VUEY2QVwvNUFING1HNlNKdE5SWnc9IiwibWFjIjoiNWEzNTEzM2MxZTMzMTgzZDlkYzMxZmNjYmQwYjIxNWY5YjAzM2MwYjY1NWRjYWFkNzYzYTU2MmNjMmE4ODAwZCJ9',NULL,'default.png','2020-06-03 03:34:30','2020-06-03 03:34:30'),(16,NULL,'Lân mập','lanmap@gmail.com','0123456789','quan 3','eyJpdiI6ImNrMzBVUVg1alwvQWVuVVBIdDN0Y2h3PT0iLCJ2YWx1ZSI6Iklvc3VBbHlBK1k2S3U4a01ieStzSUE9PSIsIm1hYyI6IjJmYWI0ZTk4MDg1Y2RlNDY2YjgxYjM5MDNiMjM1ZWFlN2Q4NTdiOThjYmMwZTViN2ZkNDgzNjExN2RhMGVkMTUifQ==',NULL,'default.png','2020-06-04 01:43:08','2020-06-04 01:43:08');
/*!40000 ALTER TABLE `khachhang_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lichchay`
--

DROP TABLE IF EXISTS `lichchay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lichchay` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Gia` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `idTuyen` int(11) NOT NULL,
  `idXe` int(11) NOT NULL,
  `TenLC` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lichchay`
--

LOCK TABLES `lichchay` WRITE;
/*!40000 ALTER TABLE `lichchay` DISABLE KEYS */;
INSERT INTO `lichchay` VALUES (1,'220000',1,1,'Tp.Hồ Chí Minh - Đà Lạt'),(2,'250000',5,1,'Tp.Hồ Chí Minh - Cà Mau	'),(4,'220000',3,2,'Tp.Hồ Chí Minh - Cần Thơ'),(5,'150000',4,4,'Tp.Hồ Chí Minh - Đà Nẵng'),(6,'300000',6,3,'Đà Lạt - Tp.Hồ Chí Minh	'),(7,'220000',5,1,'Tp.Hồ Chí Minh - Cà Mau'),(8,'200000',7,4,'Đà Lạt - Cần Thơ	');
/*!40000 ALTER TABLE `lichchay` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (28,'2014_10_12_100000_create_password_resets_table',1),(29,'2019_10_02_003623_ben',1),(30,'2019_10_02_003635_tuyen',1),(31,'2019_10_02_003637_xe',1),(32,'2019_10_02_003638_lichchay',1),(33,'2019_10_02_003640_khachhang',1),(34,'2019_10_02_003642_hoadon',1),(35,'2019_10_02_003643_ve',1),(36,'2019_10_30_153236_ct_hoadon',1),(37,'2020_05_27_063721_create_users_table',1),(38,'2020_05_27_132740_khachhang_login',2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `Email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tuyen`
--

DROP TABLE IF EXISTS `tuyen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tuyen` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `TenTuyen` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `idBenDi` int(11) NOT NULL,
  `idBenDen` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tuyen`
--

LOCK TABLES `tuyen` WRITE;
/*!40000 ALTER TABLE `tuyen` DISABLE KEYS */;
INSERT INTO `tuyen` VALUES (1,'Tp.Hồ Chí Minh - Đà Lạt',1,2),(2,'Tp.Hồ Chí Minh - Phan thiết',1,3),(3,'Tp.Hồ Chí Minh - Cần Thơ',1,4),(4,'Tp.Hồ Chí Minh - Đà Nẵng',1,5),(5,'Tp.Hồ Chí Minh - Cà Mau',1,6),(6,'Đà Lạt  - Tp.Hồ Chí Minh',2,1),(7,'Đà Lạt  - Cần Thơ',2,4);
/*!40000 ALTER TABLE `tuyen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `level` int(11) NOT NULL,
  `urlHinh` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Loi Duong','loiduong@gmail.com',NULL,'$2y$10$u3yevyUARLep05jjgBf3Y.hw7C54IOF75Bb9FHrQP0opGfRKyoV6.',NULL,3,'','2020-05-18 11:01:36','2020-05-18 11:01:36'),(2,'Loi Duong 1','loiduong1@gmail.com',NULL,'$2y$10$/lbSHoBN/a0QFqqYKtxNkuucBFsJovA.tiz7KkQ763ovwA5M9VmLG',NULL,3,'4Wqi_91902045_2489181297850396_1806733913536593920_n.jpg','2020-05-18 11:13:36','2020-05-18 11:13:36'),(3,'Laan','lan@gmail.com',NULL,'$2y$10$nlrjSulz61I/J8hnPbCzkeTrf9BCJqxDtuS33qxcXaFZKTRQ1V.Oy',NULL,3,'','2020-05-28 21:54:23','2020-05-28 21:54:23'),(4,'Lan map','lanmap@gmail.com',NULL,'$2y$10$dRuKfkYrpzXYTacEae.D3.7G8TPydq6KPliYfH1XvMPpAMpsNOOxu',NULL,3,'','2020-05-31 23:10:05','2020-05-31 23:10:05');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ve`
--

DROP TABLE IF EXISTS `ve`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ve` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `NgayDatVe` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `idKH` int(11) NOT NULL,
  `idLC` int(11) NOT NULL,
  `idHD` int(11) NOT NULL,
  `idXe` int(11) NOT NULL,
  `NgayKhoiHanh` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `GioKhoiHanh` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `TrangThai` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ve`
--

LOCK TABLES `ve` WRITE;
/*!40000 ALTER TABLE `ve` DISABLE KEYS */;
INSERT INTO `ve` VALUES (1,'2020-05-27 07:19:34',12,1,1,1,'23-05-2020 03:50:53','2020-05-27 07:19:34',0),(2,'2020-05-29 05:29:05',12,1,2,1,'23-05-2020 00:00:00','2020-05-29 05:29:05',0),(3,'2020-05-29 05:33:34',12,1,3,1,'23-05-2020 00:00:00','2020-05-29 05:33:34',0),(4,'2020-05-29 06:17:15',1,1,4,1,'29-05-2020 06:16:08','2020-05-29 06:17:15',0),(5,'2020-05-30 02:39:14',1,1,5,1,'30-05-2020 02:35:43','2020-05-30 02:39:14',0),(6,'2020-06-04 13:01:40',13,1,6,1,'04-06-2020 13:00:01','2020-06-04 13:01:40',0);
/*!40000 ALTER TABLE `ve` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xe`
--

DROP TABLE IF EXISTS `xe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xe` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `BSXe` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `TatCaGhe` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `GheDaDat` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `SoDoGhe` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xe`
--

LOCK TABLES `xe` WRITE;
/*!40000 ALTER TABLE `xe` DISABLE KEYS */;
INSERT INTO `xe` VALUES (1,'51F - 151.55','A1,A2,A3,A4,B1,B2,B3,B4,C1,C2,C3,C4,D1,D2,D3,D4,E1,E2,E3,E4,F1,F2,F3,F4','A1,A2,D1,D2,D3,E4,E3,F4,F3,F2,F1,E2,E1,D5,D4,','1'),(2,'51F - 999.99','A1,A2,A3,A4,B1,B2,B3,B4,C1,C2,C3,C4,D1,D2,D3,D4,E1,E2,E3,E4,F1,F2,F3,F4','','1'),(3,'51F - 612.45','A1,A2,A3,A4,B1,B2,B3,B4,C1,C2,C3,C4,D1,D2,D3,D4,E1,E2,E3,E4,F1,F2,F3,F4','','1'),(4,'51F - 777.77','A1,A2,A3,A4,B1,B2,B3,B4,C1,C2,C3,C4,D1,D2,D3,D4,E1,E2,E3,E4,F1,F2,F3,F4','','1'),(5,'51F - 612.22','A1,A2,A3,A4,B1,B2,B3,B4,C1,C2,C3,C4,D1,D2,D3,D4,E1,E2,E3,E4,F1,F2,F3,F4','','1');
/*!40000 ALTER TABLE `xe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'heroku_9a3fc1b2fc2f89f'
--

--
-- Dumping routines for database 'heroku_9a3fc1b2fc2f89f'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-05 22:02:12
