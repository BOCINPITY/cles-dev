// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GlobalExceptionFilter } from './utils/global-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 配置CORS跨域请求
  app.enableCors();

  // 注册全局异常过滤器
  app.useGlobalFilters(new GlobalExceptionFilter());

  // Swagger配置
  const config = new DocumentBuilder()
    .setTitle('路径规划系统API')
    .setDescription('接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);

  // 输出服务启动信息
  console.info(`服务已启动`);
  console.info(`运行模式: ${process.env.NODE_ENV || 'development'}`);
  console.info(`服务端口: 3000`);
  console.info(`API文档地址: http://localhost:3000/api-docs`);
}
bootstrap();
