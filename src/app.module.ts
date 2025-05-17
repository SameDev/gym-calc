import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxaMetabolicaModule } from './taxa-metabolica/taxa-metabolica.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TaxaMetabolicaModule, 
    AuthModule,
    JwtModule.register({
        secret: process.env.JWT_SECRET
            ? process.env.JWT_SECRET
            : 'defaultSecret',
        signOptions: { expiresIn: '1h' },
    })
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}