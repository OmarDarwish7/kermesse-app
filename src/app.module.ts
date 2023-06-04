import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { MagasinsModule } from './magasins/magasins.module';
import { ContractsModule } from './contracts/contracts.module';
import { JeuxModule } from './jeux/jeux.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { MouvementsModule } from './mouvements/mouvements.module';
import { RequestsModule } from './requests/requests.module';
import { FileController } from './file/file.controller';
import { FileService } from './file/file.service';
import { FileModule } from './file/file.module';
import { TestController } from './test/test.controller';
import { TestModule } from './test/test.module';
import { MagasinsModule } from './magasins/magasins.module';
@Module({
  imports: [
  //   MongooseModule.forRoot(
  //   'mongodb+srv://kermesse:kermesse@cluster0.9mzjz3t.mongodb.net/?retryWrites=true&w=majority'
  // ),
  MongooseModule.forRoot(
    'mongodb://kermesse:kermesse@ac-urdgbyt-shard-00-00.9mzjz3t.mongodb.net:27017,ac-urdgbyt-shard-00-01.9mzjz3t.mongodb.net:27017,ac-urdgbyt-shard-00-02.9mzjz3t.mongodb.net:27017/?ssl=true&replicaSet=atlas-12jqth-shard-0&authSource=admin&retryWrites=true&w=majority'
  ),
   ContractsModule, JeuxModule, UsersModule,MouvementsModule, RequestsModule, FileModule, TestModule, MagasinsModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
