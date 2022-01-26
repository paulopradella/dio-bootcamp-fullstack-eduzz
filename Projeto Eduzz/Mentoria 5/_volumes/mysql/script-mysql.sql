USE `mentoriadio`;

CREATE TABLE `source` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
);

CREATE TABLE `campaign` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `source_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `investment` decimal(10,0) NOT NULL,
  `revenues` decimal(10,0) DEFAULT NULL,
  `begin_date` timestamp NOT NULL,
  `end_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_campaign_user_idx` (`user_id`),
  KEY `fk_campaign_source_idx` (`source_id`),
  CONSTRAINT `fk_campaign_source` FOREIGN KEY (`source_id`) REFERENCES `source` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_campaign_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

INSERT INTO `mentoriadio`.`source` (`name`) VALUES ('facebook');
INSERT INTO `mentoriadio`.`source` (`name`) VALUES ('instagram');
INSERT INTO `mentoriadio`.`source` (`name`) VALUES ('whatsapp');

-- selecionar as campanhas trazendo o nome do source
SELECT s.name, c.name, c.link, c.investment, c.revenues, c.begin_date, c.end_date FROM campaign c
INNER JOIN source s ON s.id = c.source_id
-- selecionar campanhas, trazendo o nome do source e o nome do usuario
SELECT u.name as user_name, s.name as source_name, c.name as campaign_name, c.link, c.investment, c.revenues, c.begin_date, c.end_date
FROM campaign c
INNER JOIN source s ON s.id = c.source_id
INNER JOIN user u ON c.user_id = u.id
-- selecionar usuarios trazendo as campanhas e os sources
SELECT u.name as user_name, s.name as source_name, c.name as campaign_name, c.link, c.investment, c.revenues, c.begin_date, c.end_date
FROM user u
LEFT JOIN campaign c ON c.user_id = u.id
LEFT JOIN source s ON s.id = c.source_id
ORDER BY u.name DESC

-- contar qtd de usuarios 
SELECT count(*) FROM user
-- contar qtd de usuarios do gmail
select count(*) from user where email like "%@teste.com"
-- contar qtd de campanhas por source
SELECT COUNT(c.source_id), s.name FROM campaign c INNER JOIN source s ON s.id = c.source_id
group by c.source_id
-- contar QTD de campanhas por usuário
SELECT u.id as user_id, u.name, Count(c.id) AS qtd_campanhas FROM user u
LEFT JOIN campaign c ON c.user_id = u.id
group by u.id
--SUM - somar valores de investimentos e receitas já operados
SELECT SUM(c.investment) as valor_investimento, SUM(c.revenues) as valor_receitas FROM campaign c ;

--avg - trazer média de valores por usuario
SELECT u.id as user_id, u.name, AVG(c.investment) media_investimento, AVG(c.revenues) media_receita FROM user u
LEFT JOIN campaign c ON c.user_id = u.id
group by u.id
--qual campanha tem o maior roi por usuario SELECT
u.name as nome_usuario, r.name as nome_campanha, r.roi * 100 as roi_porcentagem FROM user u
LEFT JOIN
(
SELECT
c.id, c.name, c.user_id,
(c.revenues - c.investment) / c.investment AS roi FROM campaign c
ORDER BY roi DESC
LIMIT 1
) AS r ON r.user_id = u.id