import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {

    constructor(
        private testService: TestService
    ){}

    @Get('')
    async getAll(){
        const result = await this.testService.getAll();
        return result;
    }

    @Get('getallsimilar')
    async getSimilar(){
        const result = await this.testService.getSimilar();
        return result;
    }

}
