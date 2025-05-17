
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    setTimeout(() => {
      const actualDate = new Date().toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        minute: '2-digit',
        hour: '2-digit',
        second: '2-digit',
      });
      console.log(`[${actualDate}] - Prisma Service connected to the database`);
    }, 200);
  }
}
