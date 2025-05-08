import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { PrismaService } from 'src/prisma.service';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    
    getAllUsers() {
        try {
            const users = this.prisma.user.findMany({
                select: {
                    id: true,
                    nome: true,
                    email: true,
                    senha: false,
                }
            });
            return users;
        } catch (error) {
            console.error('Ocorreu um erro buscando os Úsuarios', error);
            throw new Error('Não foi possível buscar os usuários');
        }
    }

    getUserByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: {
                email: email,
            },
        });
    }

    async login(email: string, senha: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                email
            },
        });
        if (!user) {
            throw new BadRequestException('Usuário não encontrado');
        }
        const isPasswordValid = await bcrypt.compare(senha, user.senha);
        if (!isPasswordValid) {
            throw new BadRequestException('Senha inválida');
        }
        return {
            id: user.id,
            nome: user.nome,
            email: user.email,
            peso: user.peso,
            altura: user.altura,
            sexo: user.sexo,
            data_nascimento: user.data_nascimento,
            data_cadastro: user.data_cadastro,
            data_atualizacao: user.data_atualizacao,
        };
    }

    async createUser(CreateUserDto: CreateUserDto) {
        if (!CreateUserDto) {
            throw new BadRequestException('Não é aceito criar um usuário sem dados');
        }

        if (CreateUserDto.senha.length < 6) {
            throw new BadRequestException('A senha deve ter no mínimo 6 caracteres');
        } else if (CreateUserDto.senha.length > 20) {
            throw new BadRequestException('A senha deve ter no máximo 20 caracteres');
        }

        const hashedPassword = await bcrypt.hash(CreateUserDto.senha, 10);
        CreateUserDto.senha = hashedPassword;

        CreateUserDto.data_cadastro = new Date();
        CreateUserDto.data_atualizacao = new Date(); 

        return this.prisma.user.create({
            data: CreateUserDto,
        });
    }
}