/*
  Warnings:

  - Added the required column `urlName` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` ADD COLUMN `urlName` VARCHAR(191) NOT NULL DEFAULT '';
