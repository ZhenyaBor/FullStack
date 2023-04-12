import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService);
  const port = await config.get<number>('API_PORT');

  app.use(
    cors({
      origin: true,
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    }),
  );

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });

  await app.listen(port || 3030, () => {
    console.log(`started port ${port}`);
  });
}

bootstrap();
