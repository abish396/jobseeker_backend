import { NestFactory } from '@nestjs/core';
import { UserServiceModule } from './user_service.module';

async function bootstrap() {
  const app = await NestFactory.create(UserServiceModule);
  await app.listen(3000);
}
bootstrap();
