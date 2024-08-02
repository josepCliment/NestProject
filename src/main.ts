import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AllExceptionFilter } from './all-exception-filter/all-exception-filter.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionFilter(httpAdapter));

  setUpSwagger(app);
  //Use validation pipelines fot the inputs
  setUpGlobals(app)
  await app.listen(3010);
}
bootstrap();

function setUpSwagger(app: INestApplication<any>) {
  const config = new DocumentBuilder()
    .setTitle('Chat API')
    .setDescription('The chat API description')
    .setVersion('0.0.1')
    .addTag('chat')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

function setUpGlobals(app: INestApplication<any>) {
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  );
}
