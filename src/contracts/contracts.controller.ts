import { Body, Controller, Get, Post } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { ContractsService } from './contracts.service';

@Controller('contracts')
export class ContractsController {
    constructor(private contractService: ContractsService){}
    @Get('getallcontracts')
    async getAllContracts(){
        const contracts = await this.contractService.getAllContracts();
        return contracts;
    }

    @Post('addcontract')
    async addContract(@Body() contract){
        console.log('Here');
        console.log(contract);
        const result = await this.contractService.addContract(contract);
        return result;
    }

    @Get('getmouvementcontracts/:mouvement')
    async getMouvementContracts(@Param() mouvement){
        const mouv = mouvement.mouvement;
        const contracts = await this.contractService.getMouvementContracts(mouv);
        return contracts;
    }

    @Post('deletecontract')
    async deleteContract(@Body() objects){
        const result = await this.contractService.deleteContract(objects);
        return result;
    }
}
