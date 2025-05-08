import { Module } from '@nestjs/common';
import { TaxaMetabolicaController } from './texa-metabolica.controller';
import { TaxaMetabolicaService } from './taxa-metabolica.service';

@Module({
  imports: [],
  controllers: [TaxaMetabolicaController],
  providers: [TaxaMetabolicaService],
})
export class TaxaMetabolicaModule {}
