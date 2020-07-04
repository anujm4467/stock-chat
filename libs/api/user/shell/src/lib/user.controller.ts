import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { User, UsersService } from '@stock-chat/api/shared/user/domain-user';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async index(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<User> {
    if (!id) {
      throw new HttpException(
        'ID parameter is missing',
        HttpStatus.BAD_REQUEST
      );
    }

    const user = await this.usersService.findById(id);
    if (!user) {
      throw new HttpException(
        `The user with the id: ${id} does not exists`,
        HttpStatus.BAD_REQUEST
      );
    }

    return user;
  }

  @Post()
  async create(@Body() user: User) {
    if (!user || (user && Object.keys(user).length === 0)) {
      throw new HttpException('Missing informations', HttpStatus.BAD_REQUEST);
    }

    await this.usersService.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() user: User) {
    if (!id) {
      throw new HttpException(
        'ID parameter is missing',
        HttpStatus.BAD_REQUEST
      );
    }

    await this.usersService.update(id, user);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    if (!id) {
      throw new HttpException(
        'ID parameter is missing',
        HttpStatus.BAD_REQUEST
      );
    }

    await this.usersService.delete(id);
  }
}
