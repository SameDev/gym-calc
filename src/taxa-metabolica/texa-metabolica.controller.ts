import { Controller, Get, Req } from '@nestjs/common';
import { TaxaMetabolicaService } from './taxa-metabolica.service';
import { Auth } from 'src/decorators/auth.decorator';
import { User } from '@prisma/client';

@Controller('taxa-metabolica')
export class TaxaMetabolicaController {
  constructor(private readonly taxaMetabolicaService: TaxaMetabolicaService) {}

  @Auth()
  @Get()
  async getTaxa(@Req() req: any) {
    return await this.taxaMetabolicaService.getTaxa(req.user as User);
  }
}
