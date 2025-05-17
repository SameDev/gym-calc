import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail, MinLength, IsNumber, IsOptional, IsDate } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @MinLength(3)
    nome: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(6)
    senha: string;

    @ApiProperty()
    data_nascimento: Date;

    @ApiProperty()
    data_cadastro: Date;

    @ApiProperty()
    data_atualizacao: Date;

    @ApiProperty()
    @IsNumber()
    peso: number;

    @ApiProperty()
    @IsNumber()
    altura: number;

    @ApiProperty()
    @IsNumber()
    idade: number;

    @ApiProperty()
    sexo: Sexo;
}

enum Sexo {
    MASCULINO = 'MASCULINO',
    FEMININO = 'FEMININO',
}