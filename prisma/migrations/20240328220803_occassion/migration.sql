/*
  Warnings:

  - Added the required column `occasionId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` ADD COLUMN `occasionId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Occasion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Product_occasionId_idx` ON `Product`(`occasionId`);

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_occasionId_fkey` FOREIGN KEY (`occasionId`) REFERENCES `Occasion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
