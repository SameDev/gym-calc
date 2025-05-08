import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/dtos/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}

    @Get()
    getAllUsers() {
        return this.authService.getAllUsers();
    }

    @Get('user/:email')
    getUserByEmail(@Param('email') email: string) {
        return this.authService.getUserByEmail(email);
    }

    @Post('login')
    async login(@Body() userData: { email: string; senha: string }) {
        const { email, senha } = userData;
        const user = await this.authService.login(email, senha);
        if (!user) {
            throw new BadRequestException('Usuário ou senha inválidos');
        }
        return user;
    }

    @Post('register')
    async register(@Body() userData: CreateUserDto) {
        const existingUser = await this.authService.getUserByEmail(userData.email);
        if (existingUser) {
            throw new BadRequestException('Email já cadastrado');
        }
        const newUser = await this.authService.createUser(userData);
        return newUser;
    }
}
