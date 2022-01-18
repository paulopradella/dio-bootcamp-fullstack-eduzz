-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema Lojadevinhos
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Lojadevinhos` ;

-- -----------------------------------------------------
-- Schema Lojadevinhos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Lojadevinhos` ;
USE `Lojadevinhos` ;

-- -----------------------------------------------------
-- Table `Lojadevinhos`.`Regiao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Lojadevinhos`.`Regiao` ;

CREATE TABLE IF NOT EXISTS `Lojadevinhos`.`Regiao` (
  `codRegiao` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nomeRegiao` VARCHAR(100) NOT NULL,
  `descricaoRegiao` TEXT NULL,
  PRIMARY KEY (`codRegiao`),
  UNIQUE INDEX `codRegiao_UNIQUE` (`codRegiao` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Lojadevinhos`.`Vinicola`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Lojadevinhos`.`Vinicola` ;

CREATE TABLE IF NOT EXISTS `Lojadevinhos`.`Vinicola` (
  `codVinicola` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nomeVinicola` VARCHAR(100) NOT NULL,
  `descricaoVinicola` TEXT NULL,
  `foneVinicola` VARCHAR(15) NULL,
  `emailVinicola` VARCHAR(45) NULL,
  `Regiao_codRegiao` BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`codVinicola`),
  UNIQUE INDEX `codVinicola_UNIQUE` (`codVinicola` ASC) VISIBLE,
  INDEX `fk_Vinicola_Regiao1_idx` (`Regiao_codRegiao` ASC) VISIBLE,
  CONSTRAINT `fk_Vinicola_Regiao1`
    FOREIGN KEY (`Regiao_codRegiao`)
    REFERENCES `Lojadevinhos`.`Regiao` (`codRegiao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Lojadevinhos`.`Vinho`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Lojadevinhos`.`Vinho` ;

CREATE TABLE IF NOT EXISTS `Lojadevinhos`.`Vinho` (
  `codVinho` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nomeVinho` VARCHAR(50) NOT NULL,
  `tipoVinho` VARCHAR(30) NOT NULL,
  `anoVinho` INT NOT NULL,
  `descricaoVinho` TEXT NULL,
  `Vinicola_codVinicola` BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`codVinho`),
  UNIQUE INDEX `codVinho_UNIQUE` (`codVinho` ASC) VISIBLE,
  INDEX `fk_Vinho_Vinicola_idx` (`Vinicola_codVinicola` ASC) VISIBLE,
  CONSTRAINT `fk_Vinho_Vinicola`
    FOREIGN KEY (`Vinicola_codVinicola`)
    REFERENCES `Lojadevinhos`.`Vinicola` (`codVinicola`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
