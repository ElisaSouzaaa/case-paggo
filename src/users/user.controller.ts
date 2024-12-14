import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: { name: string; email: string; password: string }): Promise<User> {
    return this.usersService.createUser(data);
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User | null> {
    return this.usersService.getUserById(Number(id));
  }

  @Get()
  async listUsers(): Promise<User[]> {
    return this.usersService.listUsers();
  }
}