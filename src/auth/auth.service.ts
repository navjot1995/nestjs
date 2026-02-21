import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../common/interfaces/user-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    console.log('Email:', email);
    console.log('Password (req):', password);

    const user = await this.usersService.findByEmail(email);

    console.log('User:', user);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    if (!password) {
      throw new UnauthorizedException('Password missing');
    }

    if (!user.password) {
      throw new UnauthorizedException('Password not in DB');
    }

    const isMatch = await bcrypt.compare(
      String(password),
      String(user.password),
    );

    console.log('Password match:', isMatch);

    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  // login(user: { email: string; _id: string; name: string }) {
  login(user: User) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  async register(createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    const { ...result } = user.toObject() as Record<string, any>;
    return result;
  }
}
