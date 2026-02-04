import { Global, Module } from "@nestjs/common";
import { prisma } from "@repo/db/src/client";

@Global()
@Module({
  providers: [
    {
      provide: "PRISMA",
      useValue: prisma
    }
  ],
  exports: ["PRISMA"]
})
export class DbModule {}
