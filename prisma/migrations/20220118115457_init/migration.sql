-- CreateTable
CREATE TABLE "Promotion" (
    "id" SERIAL NOT NULL,
    "gameId" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "startsAt" TIMESTAMP(3) NOT NULL,
    "endsAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Promotion_pkey" PRIMARY KEY ("id")
);
