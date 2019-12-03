
CREATE TABLE municipio (
  id_municipio INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NULL,
  PRIMARY KEY (id_municipio)
);

INSERT INTO municipio(id_municipio,nombre) VALUES (1,"Guatemala");


DELIMITER $$
-- -----------------------------------------------------
-- municipio
-- -----------------------------------------------------
USE sysdb$$	
CREATE PROCEDURE muniAddOrEdit (
  IN _id INT,
  IN _nombre VARCHAR(45)
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO municipio (nombre)
    VALUES (_nombre);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE municipio
    SET
    nombre = _nombre
    WHERE id_municipio = _id;
  END IF;

  SELECT _id AS 'id_municipio';
END$$







