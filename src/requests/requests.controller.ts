import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { get } from 'http';
import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {
    constructor(
        private requestService:RequestsService
    ){}

    @Get('getallrequests')
    async getAllRequests(){
        const requests = await this.requestService.getAllRequests();
        return requests;
    }

    @Post('getmouvementrequests')
    async getMouvementRequests(@Body() mouvement){
        const requests = await this.requestService.getMouvementRequests(mouvement.mouvement);
        return requests;
    }

    @Post('addrequests')
    async addRequests(@Body() requests){
        const result = await this.requestService.addRequests(requests);
        return result;
    }

    @Post('deleterequests')
    async deleteRequests(@Body() requests){
        const result = await this.requestService.deleteRequests(requests);
        return result;
    }

    @Post('requestprinted')
    async requestPrinted(@Body() magasin){
        console.log("IN");
        const result = await this.requestService.requestPrinted(magasin.magasin);
    }
}
