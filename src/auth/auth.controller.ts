import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Body,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import type { Request as ExpressRequest } from 'express';
import { LocalAuthGuard } from './local-auth.guard';
import { User } from '../common/interfaces/user-payload.interface';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { UserResponseDto } from 'src/users/dto/user-response.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { LoginResponseDto } from 'src/users/dto/login-response.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiOperation({
    summary: 'Register a new user',
    description:
      'Creates a new user account with the provided information. The password will be hashed before storage.',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User successfully registered',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Email already exists',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input data',
  })
  @ApiBody({
    type: CreateUserDto,
    examples: {
      user1: {
        summary: 'Regular user',
        value: {
          email: 'john@example.com',
          password: 'Password123!',
          name: 'John Doe',
        } as CreateUserDto,
      },
      user2: {
        summary: 'Another user',
        value: {
          email: 'jane@example.com',
          password: 'SecurePass456@',
          name: 'Jane Smith',
        } as CreateUserDto,
      },
    },
  })
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: ExpressRequest & { user: User }) {
    return req.user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({
    summary: 'User login',
    description:
      'Authenticates a user and returns a JWT token along with user information.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Login successful',
    type: LoginResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Invalid credentials',
  })
  @ApiBody({ type: LoginUserDto })
  login(@Request() req: ExpressRequest) {
    console.log('Login request:', req.body, req.user);
    return this.authService.login(req.user as unknown as User);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @ApiOperation({
    summary: 'User logout',
    description: 'Logs out the currently authenticated user.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Logout successful',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'User not authenticated',
  })
  logout(@Request() req: ExpressRequest) {
    return new Promise<void>((resolve, reject) => {
      req.logout((err) => {
        if (err) {
          reject(err instanceof Error ? err : new Error(String(err)));
        } else {
          resolve();
        }
      });
    });
  }
}
