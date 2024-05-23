/*
  Warnings:

  - You are about to drop the column `time` on the `thread` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `thread` DROP COLUMN `time`;

-- CreateTable
CREATE TABLE `Comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `blood_group` VARCHAR(191) NOT NULL,
    `history` VARCHAR(191) NOT NULL,
    `time` DATETIME(3) NOT NULL,
    `thread_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
