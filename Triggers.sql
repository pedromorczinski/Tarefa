CREATE TABLE produto (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  quantidade INT
);




CREATE TABLE historico_estoque(
  id INT PRIMARY KEY AUTO_INCREMENT,
  produto_id INT,
  quantidade_anterior INT,
  quantidade_nova INT,
  data_alteracao DATETIME
);


DELIMITER //
CREATE TRIGGER registrar_alteracao_estoque
  AFTER UPDATE
  ON produto
  FOR EACH ROW
  BEGIN
  INSERT INTO historico_estoque (
      produto_id,
      quantidade_anterior,
      quantidade_nova,
      data_alteracao)
      VALUES (
       NEW.id,
       OLD.quantidade,
       NEW.quantidade,
       NOW()
       );
END//
DELIMITER ;


INSERT INTO produto (nome, quantidade)
  VALUES ('Arroz', 10);


INSERT INTO produto (nome, quantidade)
  VALUES ('Feijão', 20);


UPDATE produto
SET quantidade = 15
WHERE id = 1;


UPDATE produto
SET quantidade = 25
WHERE id = 2;


SELECT * FROM historico_estoque;
