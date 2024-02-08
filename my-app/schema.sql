-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema teamproject
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema teamproject
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `teamproject` DEFAULT CHARACTER SET utf8mb3 ;
USE `teamproject` ;

-- -----------------------------------------------------
-- Table `teamproject`.`client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teamproject`.`client` (
  `idclient` INT NOT NULL AUTO_INCREMENT,
  `namec` VARCHAR(45) NULL DEFAULT NULL,
  `lastnamec` VARCHAR(45) NULL DEFAULT NULL,
  `emailc` VARCHAR(45) NULL DEFAULT NULL,
  `passwordc` VARCHAR(45) NULL DEFAULT NULL,
  `addressc` VARCHAR(45) NULL DEFAULT NULL,
  `descriptionc` VARCHAR(45) NULL DEFAULT NULL,
  `imagec` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idclient`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teamproject`.`employer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teamproject`.`employer` (
  `idemployer` INT NOT NULL AUTO_INCREMENT,
  `namee` VARCHAR(45) NULL DEFAULT NULL,
  `lastnamee` VARCHAR(45) NULL DEFAULT NULL,
  `emaile` VARCHAR(45) NULL DEFAULT NULL,
  `passworde` VARCHAR(45) NULL DEFAULT NULL,
  `descriptione` LONGTEXT NULL DEFAULT NULL,
  `jobnamee` VARCHAR(45) NULL DEFAULT NULL,
  `imagee` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idemployer`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teamproject`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teamproject`.`post` (
  `idpost` INT NOT NULL AUTO_INCREMENT,
  `imagep` VARCHAR(45) NULL DEFAULT NULL,
  `statutp` LONGTEXT NULL DEFAULT NULL,
  `titlep` VARCHAR(45) NULL,
  `client_idclient` INT NOT NULL,
  PRIMARY KEY (`idpost`),
  INDEX `fk_post_client_idx` (`client_idclient` ASC) VISIBLE,
  CONSTRAINT `fk_post_client`
    FOREIGN KEY (`client_idclient`)
    REFERENCES `teamproject`.`client` (`idclient`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teamproject`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teamproject`.`comment` (
  `idcomment` INT NOT NULL AUTO_INCREMENT,
  `commentc` VARCHAR(45) NULL DEFAULT NULL,
  `employer_idemployer` INT NOT NULL,
  `post_idpost` INT NOT NULL,
  PRIMARY KEY (`idcomment`),
  INDEX `fk_comment_employer1_idx` (`employer_idemployer` ASC) VISIBLE,
  INDEX `fk_comment_post1_idx` (`post_idpost` ASC) VISIBLE,
  CONSTRAINT `fk_comment_employer1`
    FOREIGN KEY (`employer_idemployer`)
    REFERENCES `teamproject`.`employer` (`idemployer`),
  CONSTRAINT `fk_comment_post1`
    FOREIGN KEY (`post_idpost`)
    REFERENCES `teamproject`.`post` (`idpost`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teamproject`.`feedback`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teamproject`.`feedback` (
  `idfeedback` INT NOT NULL AUTO_INCREMENT,
  `feedbackf` VARCHAR(45) NULL DEFAULT NULL,
  `client_idclient` INT NOT NULL,
  `employer_idemployer` INT NOT NULL,
  PRIMARY KEY (`idfeedback`),
  INDEX `fk_feedback_client1_idx` (`client_idclient` ASC) VISIBLE,
  INDEX `fk_feedback_employer1_idx` (`employer_idemployer` ASC) VISIBLE,
  CONSTRAINT `fk_feedback_client1`
    FOREIGN KEY (`client_idclient`)
    REFERENCES `teamproject`.`client` (`idclient`),
  CONSTRAINT `fk_feedback_employer1`
    FOREIGN KEY (`employer_idemployer`)
    REFERENCES `teamproject`.`employer` (`idemployer`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
