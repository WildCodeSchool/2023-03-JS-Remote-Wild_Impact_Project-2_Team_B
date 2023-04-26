CREATE TABLE `heroe` (
`id` INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(100) NOT NULL,
`slug` VARCHAR(100),
`image_sm` VARCHAR(255) NOT NULL,
`image_md` VARCHAR(255) NOT NULL,
`gender` VARCHAR(100) NOT NULL,
`race` VARCHAR(100),
`eyeColor` VARCHAR(100) NOT NULL,
`hairColor` VARCHAR(100) NOT NULL,
`fullName` VARCHAR(100),
`placeOfBirth` VARCHAR(100),
`firstAppearance` VARCHAR(200) NOT NULL,
`work` VARCHAR(200) NOT NULL,
`intelligence` INT,
`strength` INT,
`speed` INT,
`durability` INT,
`power` INT,
`combat` INT,
PRIMARY KEY (`id`)
);

