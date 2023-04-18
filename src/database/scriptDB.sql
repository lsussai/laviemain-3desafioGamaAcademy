USE laviemain;

--
-- Table structure for table `paciente`
--

DROP TABLE IF EXISTS `paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paciente` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(70) NOT NULL,
    `idade` DATE NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `email` (`email`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente`
--

LOCK TABLES `paciente` WRITE;
/*!40000 ALTER TABLE `paciente` DISABLE KEYS */;
/*!40000 ALTER TABLE `paciente` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `psicologo`
--

DROP TABLE IF EXISTS `psicologo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `psicologo` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(70) NOT NULL,
    `senha` VARCHAR(250) NOT NULL,
    `apresentacao` TEXT,
    PRIMARY KEY (`id`),
    UNIQUE KEY `email` (`email`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `psicologo`
--

LOCK TABLES `psicologo` WRITE;
/*!40000 ALTER TABLE `psicologo` DISABLE KEYS */;
/*!40000 ALTER TABLE `psicologo` ENABLE KEYS */;
UNLOCK TABLES;

-- 
-- Create atendimento
-- 

CREATE TABLE `atendimento` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `agendamento` DATETIME NOT NULL,
    `observacao` TEXT,
    `paciente` INT NOT NULL,
    `psicologo` INT NOT NULL,
    PRIMARY KEY (`id`),
    KEY `atedimento_paciente` (`paciente`),
    KEY `atendimento_psicologo` (`psicologo`),
    CONSTRAINT `atedimento_paciente` FOREIGN KEY (`paciente`)
        REFERENCES `paciente` (`id`),
    CONSTRAINT `atendimento_psicologo` FOREIGN KEY (`psicologo`)
        REFERENCES `psicologo` (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;
/*!40101 SET character_set_client = @saved_cs_client */;

