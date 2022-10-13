import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

dotenv.config();

async function bootstrap() {
  const port: number = parseInt(process.env.NODE_PORT);

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true }, whitelist: true }),
  );
  app.enableCors();
  await app.listen(port);

  console.log(`Server running on PORT -> ${port}`);
}
bootstrap();
