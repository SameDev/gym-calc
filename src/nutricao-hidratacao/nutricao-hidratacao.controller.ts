import { Controller, Get } from "@nestjs/common";

@Controller("nutricao-hidratacao")
export class NutricaoHidratacaoController {
    constructor() {}
    
    @Get('/macros/general')    
    async getMacrosGeneral() {
        return {
            "carboidratos": {
                "valor": 0,
                "unidade": "g"
            },
            "proteinas": {
                "valor": 0,
                "unidade": "g"
            },
            "lipidios": {
                "valor": 0,
                "unidade": "g"
            }
        };
    }
}