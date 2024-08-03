import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AllExceptionFilter } from './all-exception-filter/all-exception-filter.filter';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
import * as cookieParser from 'cookie-parser';

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.connectMicroservice({
    transport: Transport.TCP, 
    options:{
      host: '0.0.0.0', 
      port: configService.get('TCP_PORT')
    }
  })
  app.use(cookieParser())
  setUpGlobals(app);
  await app.startAllMicroservices();
  console.log(process.env.HTTP_PORT);
  
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
