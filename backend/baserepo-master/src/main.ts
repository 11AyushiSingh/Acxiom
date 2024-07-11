import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from 'process';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig, swaggerOptions } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Swagger configuration
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, swaggerDocument, swaggerOptions);
  app.enableCors();
  process.on('SIGINT', async () => {
    console.log('Shutting down...');
    await app.close();
    process.exit(0);
  });
  const port = env.PORT || 3000;
  app.useGlobalPipes(new ValidationPipe());
  console.log('running on port :', port);
  await app.listen(port);
}
bootstrap();
