import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { TaxaMetabolica } from './taxa-metabolica';

@Injectable()
export class TaxaMetabolicaService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  async getTaxa(user: User) {
    if (!user) {
      throw new UnauthorizedException('Usuário não fornecido, faça login.');
    }

    const userId = user.id;
    const User = await this.prismaService.user.findUnique({
      where: { id: userId },
    });
    if (!User) {
      throw new BadRequestException('Usuário não encontrado.');
    }

    const taxaMetabolica = new TaxaMetabolica();

    if (!User.peso || !User.altura || !User.idade || !User.sexo) {
      throw new BadRequestException('Dados insuficientes para calcular a taxa metabólica.');
    }

    const taxa = taxaMetabolica.calcularTaxaMetabolicaBasal(
      User.peso,
      User.altura,
      User.idade,
      User.sexo,
    );

    return taxa;
  }
}