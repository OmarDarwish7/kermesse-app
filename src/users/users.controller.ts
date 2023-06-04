import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}

   @Get('getallusers')
   async getAllUsers(){
    const users = await this.userService.getAllUsers();
    return users;
   }

   @Get('getuser/:id')
   async getUser(@Param() params){
     const user = await this.userService.getUser(params.id);
     return user;
   }


   @Post('login')
   async authenticateLogin(@Body() credentials){
        const result = await this.userService.authenticateUserLogin(credentials);
        return result;
   }

   @Post('adduser')
   async addNewUser(@Body() user){
    const result = await this.userService.addNewUser(user);
    return result;
   }

   @Patch('updateuser')
   async updateUser(@Body() user){
    const update = await this.userService.updateUser(user);
    return update;
   }

   @Post('deleteuser')
   async deleteUser(@Body() objects){
    const result = this.userService.deleteUser(objects);
    return result;
   }


}

