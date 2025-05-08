import { Controller, Get } from '@nestjs/common';
import { TaxaMetabolicaService } from './taxa-metabolica.service';

@Controller('taxa-metabolica')
export class TaxaMetabolicaController {
  constructor(private readonly taxaMetabolicaService: TaxaMetabolicaService) {}

  @Get()
  getHello(): string {
    return this.taxaMetabolicaService.getHello();
  }
}
