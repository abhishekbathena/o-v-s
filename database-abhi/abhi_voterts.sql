-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: abhi
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `voterts`
--

DROP TABLE IF EXISTS `voterts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voterts` (
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `CandidateTId` int NOT NULL,
  `UseridId` int NOT NULL,
  `PositionTId` int NOT NULL,
  PRIMARY KEY (`UseridId`,`PositionTId`),
  KEY `PositionTId` (`PositionTId`),
  KEY `voterts_ibfk_1` (`CandidateTId`),
  CONSTRAINT `voterts_ibfk_1` FOREIGN KEY (`CandidateTId`) REFERENCES `candidatets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `voterts_ibfk_2` FOREIGN KEY (`UseridId`) REFERENCES `userids` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `voterts_ibfk_3` FOREIGN KEY (`PositionTId`) REFERENCES `positionts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voterts`
--

LOCK TABLES `voterts` WRITE;
/*!40000 ALTER TABLE `voterts` DISABLE KEYS */;
INSERT INTO `voterts` VALUES ('2022-01-26 06:51:39','2022-01-26 06:51:39',2,1,1),('2022-01-25 14:53:05','2022-01-25 14:53:05',1,2,1);
/*!40000 ALTER TABLE `voterts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-26 12:26:40
