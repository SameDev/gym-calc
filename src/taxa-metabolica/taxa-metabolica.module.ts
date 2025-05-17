import { Module } from '@nestjs/common';
import { TaxaMetabolicaController } from './texa-metabolica.controller';
import { TaxaMetabolicaService } from './taxa-metabolica.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

@Module({
    imports: [JwtModule.register({
      secret: process.env.JWT_SECRET
        ? process.env.JWT_SECRET
        : 'defaultSecret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [TaxaMetabolicaController],
  providers: [TaxaMetabolicaService, PrismaService],
})
export class TaxaMetabolicaModule {}
