import { NestFactory } from '@nestjs/core';
import { EmailServiceModule } from './email-service.module';

async function bootstrap() {
  const app = await NestFactory.create(EmailServiceModule);
  await app.listen(3000);
}
bootstrap();
