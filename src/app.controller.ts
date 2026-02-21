import { Controller, Get, Header, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiProduces,
} from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  @ApiOperation({
    summary: 'Welcome page',
    description: 'Returns a welcome HTML page for the API',
  })
  @ApiProduces('text/html')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Returns welcome HTML page',
    schema: {
      type: 'string',
      example:
        '<h1>Welcome to NestJS Auth API</h1><p>Visit /api-docs for documentation</p>',
    },
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/health')
  @ApiOperation({
    summary: 'Health check endpoint',
    description:
      'Returns the health status of the API. Useful for monitoring and load balancers.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'API is healthy',
    schema: {
      type: 'string',
      example: 'OK',
    },
  })
  getHealth(): string {
    return 'OK';
  }

  @Get('/version')
  @ApiOperation({
    summary: 'Get API version',
    description: 'Returns the current version of the API',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'API version retrieved successfully',
    schema: {
      type: 'object',
      properties: {
        version: { type: 'string', example: '1.0.0' },
        name: { type: 'string', example: 'NestJS Auth API' },
        environment: { type: 'string', example: 'development' },
      },
    },
  })
  getVersion() {
    return {
      version: '1.0.0',
      name: 'NestJS Auth API',
      environment: process.env.NODE_ENV || 'development',
    };
  }

  @Get('public')
  @ApiOperation({
    summary: 'Public test endpoint',
    description:
      'A public endpoint that does not require authentication. Useful for testing API availability.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Public route accessed successfully',
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string', example: 'This is a public route' },
        timestamp: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
      },
    },
  })
  getPublic() {
    return {
      message: 'This is a public route',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('/info')
  @ApiOperation({
    summary: 'Get API information',
    description:
      'Returns detailed information about the API including available endpoints',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'API information retrieved successfully',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'NestJS Auth API' },
        version: { type: 'string', example: '1.0.0' },
        description: {
          type: 'string',
          example: 'Authentication API with JWT and MongoDB',
        },
        endpoints: {
          type: 'object',
          properties: {
            auth: { type: 'array', items: { type: 'string' } },
            users: { type: 'array', items: { type: 'string' } },
            articles: { type: 'array', items: { type: 'string' } },
          },
        },
      },
    },
  })
  getInfo() {
    return {
      name: 'NestJS Auth API',
      version: '1.0.0',
      description: 'Authentication API with JWT and MongoDB',
      endpoints: {
        auth: ['POST /auth/register', 'POST /auth/login'],
        users: ['GET /users/profile/:id'],
        articles: [
          'GET /articles',
          'POST /articles',
          'GET /articles/:id',
          'PATCH /articles/:id',
          'DELETE /articles/:id',
        ],
        docs: 'GET /api-docs',
      },
    };
  }

  @Get('/status')
  @ApiOperation({
    summary: 'Get detailed API status',
    description:
      'Returns detailed status information including uptime and database connection',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Status retrieved successfully',
    schema: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'operational' },
        uptime: { type: 'number', example: 3600 },
        timestamp: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
        database: { type: 'string', example: 'connected' },
      },
    },
  })
  getStatus() {
    return {
      status: 'operational',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      database: 'connected', // You can check actual DB connection here
      memory: process.memoryUsage(),
    };
  }
}
