/*
  Warnings:

  - You are about to drop the `collection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `collection`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `birth_date` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `handphone_no` INTEGER NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
