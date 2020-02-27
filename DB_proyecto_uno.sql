create database shop;

use shop;

CREATE TABLE user(
	id_user INT PRIMARY KEY auto_increment,
    name VARCHAR(75) NOT NULL,
    lastname VARCHAR(75) NOT NULL,
    email VARCHAR(100) NOT NULL,
    pass VARCHAR (15) NOT NULL,
    is_admin BOOLEAN NOT NULL
);

 SELECT 
    *
FROM
    user;

CREATE TABLE product (
    id_product INT PRIMARY KEY AUTO_INCREMENT,
    id_user INT NOT NULL,
    name_product VARCHAR(100) NOT NULL,
    size VARCHAR(75) NOT NULL,
    type VARCHAR(75) NOT NULL,
    category VARCHAR(75) NOT NULL,
    description TEXT NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL,
    img VARCHAR(200) NOT NULL,
    CONSTRAINT fk_user_2 FOREIGN KEY (id_user)
        REFERENCES user (id_user)
        ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO `shop`.`user` (`name`, `lastname`, `email`, `password`, `is_admin`) VALUES ('Juan', 'Rosales', 'rosales@starcrew.com', '12345', '1');
INSERT INTO `shop`.`user` (`name`, `lastname`, `email`, `password`, `is_admin`) VALUES ('Mara', 'Rilo', 'mara@starcrew.com', '12345', '1');
INSERT INTO `shop`.`user` (`name`, `lastname`, `email`, `password`, `is_admin`) VALUES ('Donete', 'Rosales', 'donete@starcrew.com', '12345', '0');


INSERT INTO `shop`.`product` (`id_user`, `name_product`, `size`, `type`, `category`, `description`, `price`, `stock`) VALUES ('1', 'Camiseta Surf', 'S', 'Female', 't-shirt', 'camiseta de algodón, suave suavecita', '20', '5');
INSERT INTO `shop`.`product` (`id_user`, `name_product`, `size`, `type`, `category`, `description`, `price`, `stock`) VALUES ('1', 'Camiseta Surf', 'M', 'Female', 't-shirt', 'camiseta de algodón, suave suavecita', '20', '5');
INSERT INTO `shop`.`product` (`id_user`, `name_product`, `size`, `type`, `category`, `description`, `price`, `stock`) VALUES ('1', 'Camiseta Surf', 'L', 'Female', 't-shirt', 'camiseta de algodón, suave suavecita', '20', '5');
INSERT INTO `shop`.`product` (`id_user`, `name_product`, `size`, `type`, `category`, `description`, `price`, `stock`) VALUES ('1', 'Camiseta Surf', 'XL', 'Female', 't-shirt', 'camiseta de algodón, suave suavecita', '20', '5');
INSERT INTO `shop`.`product` (`id_user`, `name_product`, `size`, `type`, `category`, `description`, `price`, `stock`) VALUES ('1', 'Camiseta Surf', 'XXL', 'Female', 't-shirt', 'camiseta de algodón, suave suavecita', '20', '5');

INSERT INTO `shop`.`product` (`id_user`, `name_product`, `size`, `type`, `category`, `description`, `price`, `stock`) VALUES ('2', 'Sudadera Snow', 'S', 'Male', 'sweatshirt', 'Jersey de la mama', '45', '5');
INSERT INTO `shop`.`product` (`id_user`, `name_product`, `size`, `type`, `category`, `description`, `price`, `stock`) VALUES ('2', 'Sudadera Snow', 'M', 'Male', 'sweatshirt', 'Jersey de la mama', '45', '5');
INSERT INTO `shop`.`product` (`id_user`, `name_product`, `size`, `type`, `category`, `description`, `price`, `stock`) VALUES ('2', 'Sudadera Snow', 'L', 'Male', 'sweatshirt', 'Jersey de la mama', '45', '5');
INSERT INTO `shop`.`product` (`id_user`, `name_product`, `size`, `type`, `category`, `description`, `price`, `stock`) VALUES ('2', 'Sudadera Snow', 'XL', 'Male', 'sweatshirt', 'Jersey de la mama', '45', '5');
INSERT INTO `shop`.`product` (`id_user`, `name_product`, `size`, `type`, `category`, `description`, `price`, `stock`) VALUES ('2', 'Sudadera Snow', 'XXL', 'Male', 'sweatshirt', 'Jersey de la mama', '45', '5');

INSERT INTO `shop`.`product` (`id_user`, `name_product`, `size`, `type`, `category`, `description`, `price`, `stock`) VALUES ('3', 'Camiseta Molona', 'S', 'Male', 't-shirt', 'camiseta de algodón, suave suavecita', '22', '10');
INSERT INTO `shop`.`product` (`id_user`, `name_product`, `size`, `type`, `category`, `description`, `price`, `stock`) VALUES ('3', 'Camiseta Molona', 'M', 'Male', 't-shirt', 'camiseta de algodón, suave suavecita', '22', '10');
INSERT INTO `shop`.`product` (`id_user`, `name_product`, `size`, `type`, `category`, `description`, `price`, `stock`) VALUES ('3', 'Camiseta Molona', 'L', 'Male', 't-shirt', 'camiseta de algodón, suave suavecita', '22', '10');
INSERT INTO `shop`.`product` (`id_user`, `name_product`, `size`, `type`, `category`, `description`, `price`, `stock`) VALUES ('3', 'Camiseta Molona', 'XL', 'Male', 't-shirt', 'camiseta de algodón, suave suavecita', '22', '10');
INSERT INTO `shop`.`product` (`id_user`, `name_product`, `size`, `type`, `category`, `description`, `price`, `stock`) VALUES ('3', 'Camiseta Molona', 'XXL', 'Male', 't-shirt', 'camiseta de algodón, suave suavecita', '22', '10');





 SELECT * FROM
    product;

 SELECT * FROM
    product
        LEFT JOIN
    user ON user.id_user = product.id_user;
    
    
DELETE FROM product 
WHERE
    id_user = 1 AND id_product = 1;
