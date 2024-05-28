/*
  Warnings:

  - A unique constraint covering the columns `[thread_id]` on the table `Request` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[comment_id]` on the table `Request` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Request_thread_id_key` ON `Request`(`thread_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Request_comment_id_key` ON `Request`(`comment_id`);
