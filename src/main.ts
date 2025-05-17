import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  const actualDate = new Date().toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    minute: '2-digit',
    hour: '2-digit',
    second: '2-digit',
  });

  console.warn(`\n[${actualDate}] - Server is running on port ${process.env.PORT ?? 3000}`);
}
bootstrap();
