import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://kermesse-e2b68.web.app',
  });
  await app.listen(3000);
}
bootstrap();
