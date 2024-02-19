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
-- Table structure for table `candidatets`
--

DROP TABLE IF EXISTS `candidatets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidatets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `PositionTId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `PositionTId` (`PositionTId`),
  CONSTRAINT `candidatets_ibfk_1` FOREIGN KEY (`PositionTId`) REFERENCES `positionts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidatets`
--

LOCK TABLES `candidatets` WRITE;
/*!40000 ALTER TABLE `candidatets` DISABLE KEYS */;
INSERT INTO `candidatets` VALUES (1,'Viraj','https://images.indianexpress.com/2021/09/Arjun-Rampal.jpg','SportsLeader',NULL,NULL,1),(2,'Anand','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIlASwhFC10ILYkeBpD4dLb0VMn2hthaTtOw&usqp=CAU','SportsLeader',NULL,NULL,1),(3,'Satya','https://images.indianexpress.com/2021/09/Arjun-Rampal.jpg','SportsLeader',NULL,NULL,1),(4,'Sai','https://images.indianexpress.com/2021/09/Arjun-Rampal.jpg','ClassLeader',NULL,NULL,2),(5,'Tej','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvWAdyS0M4ETyJzn5ZHg7y9GYLCUt3O0gfg&usqp=CAU','ClassLeader',NULL,NULL,2),(6,'Akash','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIlASwhFC10ILYkeBpD4dLb0VMn2hthaTtOw&usqp=CAU','ClassLeader',NULL,NULL,2),(7,'Arjun','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvWAdyS0M4ETyJzn5ZHg7y9GYLCUt3O0gfg&usqp=CAU','CollegeLeader',NULL,NULL,3),(8,'Nikhil','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvWAdyS0M4ETyJzn5ZHg7y9GYLCUt3O0gfg&usqp=CAU','CollegeLeader',NULL,NULL,3),(9,'Neeraj','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIlASwhFC10ILYkeBpD4dLb0VMn2hthaTtOw&usqp=CAU','CollegeLeader',NULL,NULL,3),(10,'Jai','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvWAdyS0M4ETyJzn5ZHg7y9GYLCUt3O0gfg&usqp=CAU','SportsLeader',NULL,NULL,1),(11,'Gani','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIlASwhFC10ILYkeBpD4dLb0VMn2hthaTtOw&usqp=CAU','Festcoordinator',NULL,NULL,4);
/*!40000 ALTER TABLE `candidatets` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-26 12:26:41
