import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MagasinsService } from './magasins.service';

@Controller('magasins')
export class MagasinsController {
     constructor(private magService: MagasinsService){}
     @Get('getallmagasins')
     async getAllMagasins(){
        const magasins = await this.magService.getAllMagasins();
        return magasins;
     }

     @Post('getMouvementMagasins')
     async getMouvementMagasins(@Body() mouvement){
        const magasins = await this.magService.getMouvementMagasins(mouvement);
        return magasins;
     }

     @Post('searchByname')
     async searchByName(@Body() name){
      const magasins = await this.magService.searchByName(name.name);
      return magasins;
     }

     @Post('printed')
     async Printed(@Body() id){
      const result = await this.magService.Printed(id.id);
      return result;
     }

     @Post('printed2')
     async Printed2(@Body() magasin){
      const result = await this.magService.Printed2(magasin.magasin);
      return result;
     }



     @Get('getmouvements')
     async getMouvements(){
       const mouvements = await this.magService.getMouvements();
       return mouvements;
     }

     @Post('addmagasin')
     async addMagasin(@Body() magasin){
        const newmagasin = await this.magService.addMagasin(magasin);
        return newmagasin;
     }

     @Patch('updatemagasin')
     async updateMagasin(@Body() magasin){
        const updMagasin = this.magService.updateMagasin(magasin);
        return updMagasin;
     }
     
     @Post('renamemagasin')
     async renameMagasin(@Body() object){
      const response = this.magService.renameMagasin(object);
      return response;
     }

     @Post('deletemagasin')
     async deleteMagasin(@Body() objects){
     const result = await this.magService.deleteMagasin(objects);
     return result;
     }

     @Post('setPrinted')
     async setPrinted(){
      this.magService.setPrinted();
     }

     @Post('setBlocked')
     async setBlocked(){
      this.magService.setBlocked();
     }

     @Post('deletebymouvement')
     async deleteByMouvement(@Body() mouvement){
      const result = await this.magService.deleteByMouvement(mouvement.mouvement);
      return result;
     }
}
