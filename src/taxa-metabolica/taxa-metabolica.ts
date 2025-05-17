import { BadRequestException } from "@nestjs/common";
import { Sexo } from "@prisma/client";

export class TaxaMetabolica {
    taxa: number;
    constructor() {
        this.taxa = 0;
    }

    /*
    MASCULINO
        10 - 17 - ( 16.6 x peso(kg) ) + ( 77 x altura(m) ) + 572  
        18 - 29 -( 15.4 x peso(kg) ) - ( 27 x altura(m) ) + 717  
        30 - 60 -( 11.3 × peso(kg) ) + ( 16 × H in meter(m) ) + 901 
        > 60 - ( 8.8 × peso(kg) ) + ( 1128 × H in meter(m) ) − 1071 

    FEMININO
        10 - 17 - ( 7.4 × peso(kg) ) + (482 × altura (m) ) + 217 
        18 - 29 - ( 13.3 × peso(kg) ) + (334 × altura (m) ) + 35 
        30 - 60 - ( 8.7 × peso(kg) ) − (25 × altura (m) ) + 865 
        > 60 - (9.2 × peso(kg) )  + (637 × altura (m) ) − 302 
    */

    calcularTaxaMetabolicaBasal(peso: number, altura: number, idade: number, sexo: Sexo) {
        altura = altura / 100;

        if (sexo === 'MASCULINO') {
            if (idade >= 10 && idade <= 17) {
                this.taxa = 17 + (16.6 * peso) + (77 * altura) + 572;
            }
            else if (idade >= 18 && idade <= 29) {
                this.taxa = 15.4 + (15.4 * peso) + (27 * altura) + 717;
            }
            else if (idade >= 30 && idade <= 60) {
                this.taxa = 11.3 + (11.3 * peso) + (16 * altura) + 901;
            }
            else if (idade > 60) {
                this.taxa = 8.8 + (8.8 * peso) + (1128 * altura) - 1071;
            }
            else {
                throw new BadRequestException('Idade inválida.');
            }
        }
        else if (sexo === 'FEMININO') {
            if (idade >= 10 && idade <= 17) {
                this.taxa = 7.4 + (7.4 * peso) + (482 * altura) + 217;
            }
            else if (idade >= 18 && idade <= 29) {
                this.taxa = 13.3 + (13.3 * peso) + (334 * altura) + 35;
            }
            else if (idade >= 30 && idade <= 60) {
                this.taxa = 8.7 + (8.7 * peso) - (25 * altura) + 865;
            }
            else if (idade > 60) {
                this.taxa = 9.2 + (9.2 * peso) + (637 * altura) - 302;
            }
            else {
                throw new BadRequestException('Idade inválida.');
            }
        }
        else {
            throw new BadRequestException('Sexo inválido. Use "MASCULINO" ou "FEMININO".');
        }
        return this.taxa;
    }
}