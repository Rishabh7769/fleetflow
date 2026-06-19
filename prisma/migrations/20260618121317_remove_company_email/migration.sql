/*
  Warnings:

  - You are about to drop the column `email` on the `Company` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Company_email_key";

-- DropIndex
DROP INDEX "Company_gstNumber_key";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "email";
