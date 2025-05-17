import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from 'src/guards/auth.guard';
@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET
                ? process.env.JWT_SECRET
                : 'defaultSecret',
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [AuthController],
    exports: [AuthService],
    providers: [AuthService, PrismaService],
})
export class AuthModule { }