/*
  Warnings:

  - You are about to drop the column `available_status` on the `available_services` table. All the data in the column will be lost.
  - Added the required column `available_seats` to the `available_services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fees` to the `available_services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "available_services" DROP COLUMN "available_status",
ADD COLUMN     "available_seats" INTEGER NOT NULL,
ADD COLUMN     "fees" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "time_slots" ALTER COLUMN "start_time" SET DATA TYPE TEXT;
