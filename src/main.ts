import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setUpGlobals(app);
  await app.listen(process.env.HTTP_PORT);
  setUpSwagger(app);
  setUpWebPackapp(app);
}
bootstrap();


/**
 *  Function to set up the swagger
 * @param app The application
 */
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
  //Use validation pipelines fot the inputs
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
      whitelist: true,
    }),
  );
}

/**
 *  Function to set up the webpack for hot reload
 * @param app 
 */
function setUpWebPackapp(app: INestApplication<any>) {
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
