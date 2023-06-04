import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { JeuxService } from './jeux.service';

@Controller('jeux')
export class JeuxController {

    constructor(
        private jeuxService:JeuxService
    ){}

    @Get('getalljeux')
    async getAllJeux(){
        const jeux = await this.jeuxService.getAllJeux();
        return jeux;
    }

    @Post('getmouvementjeux')
    async getMouvementJeux(@Body() mouvement:any){
        const jeux = await this.jeuxService.getMouvementJeux(mouvement.mouvement);
        return jeux;
    }

    @Post('searchByname')
    async searchByName(@Body() name){
     const jeux = await this.jeuxService.searchByName(name.name);
     return jeux;
    }

    @Post('addjeu')
    async addJeu(@Body() jeu:any){
        const result = await this.jeuxService.addJeu(jeu);
        return result;
    }

    @Post('deletejeu')
    async deleteJeux(@Body() objects:any){
        const result = await this.jeuxService.deleteJeux(objects);
        return result;
    }

    
}
