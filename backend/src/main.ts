import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 配置 Swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('四叉树路径规划演示系统api文档')
    .setDescription('API 文档描述')
    .setVersion('1.0')
    .addTag('标签')
    .build();

  // 创建 Swagger 文档
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  // 为 Swagger UI 设置路由
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
