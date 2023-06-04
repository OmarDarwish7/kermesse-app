import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { MouvementsService } from './mouvements.service';

@Controller('mouvements')
export class MouvementsController {
    constructor(private mouvService: MouvementsService){}
    @Get('getallmouvements')
    async getAllMouvements(){
        const mouvements = await this.mouvService.getAllMouvements();
        return mouvements;
    }

    @Post('getmouvement')
    async getMouvement(@Body() mouvement){
        const result = await this.mouvService.getMouvement(mouvement.name);
        return result;
    }

    @Post('deletemouvement')
    async deleteMouvement(@Body() mouvements){
        await this.mouvService.deleteMouvement(mouvements);
    }

    @Post('addmouvement')
    async addMouvement(@Body() mouvement){
        const newMouv = this.mouvService.addMouvement(mouvement);
    }

    @Post('addprint')
    async addPrint(@Body() mouvement){
     const result = await this.mouvService.addPrint(mouvement.mouvement);
     return result;
    }

    @Patch('resetprintcount')
    async ResetPrintCount(){
        await this.mouvService.ResetPrintCount();
    }
}
