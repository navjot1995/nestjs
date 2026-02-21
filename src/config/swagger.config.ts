import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('NestJS Auth API')
    .setDescription(
      `
      ## API Documentation
      This is a complete authentication and articles management API built with NestJS, MongoDB, and JWT.
      
      ### Features
      * 🔐 JWT Authentication
      * 👥 User Management
      * 📝 Articles CRUD
      * 🗄️ MongoDB Integration
      * ✅ Request Validation
    `,
    )
    .setVersion('1.0')
    .addTag('Auth', 'Authentication endpoints (register, login)')
    .addTag('Users', 'User management endpoints')
    .addTag('Articles', 'Articles CRUD operations')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth', // This name is used in @ApiBearerAuth() decorator
    )
    .addServer('http://localhost:3000', 'Development server')
    .addServer('https://api.yourdomain.com', 'Production server')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Optional: Sort tags alphabetically
  document.tags = document.tags?.sort((a, b) => a.name.localeCompare(b.name));

  SwaggerModule.setup('api-docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true, // Keep JWT token after page refresh
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
      docExpansion: 'none', // Collapse all sections by default
      filter: true, // Enable filtering
      showRequestDuration: true, // Show request duration
    },
    customSiteTitle: 'NestJS Auth API Documentation',
    customCss: '.topbar-wrapper { display: none; }', // Hide swagger logo
    customfavIcon: 'https://nestjs.com/favicon.ico',
  });
}
