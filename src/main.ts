/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { JwtAutGuard } from './auth/ jwt-auth.guard';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nest Api')
    .setDescription('MyNestApiDescription')
    .setVersion('1.0')
    .addBearerAuth()
    .setExternalDoc('Postman Collection', '/docs-json')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/app/docs', app, document);

  await app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
}
bootstrap();
