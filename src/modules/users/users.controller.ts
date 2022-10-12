import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UseInterceptors,
} from '@nestjs/common';

import { ErrorOutDto, HttpOut, ReqUser, SuccessOutDto } from 'types';
import { UsersService } from './users.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Put()
  async update(@Body() body: any): HttpOut {
    try {
      const user = await this.usersService.updateUser(body);

      return new SuccessOutDto(user);
    } catch (error) {
      return new ErrorOutDto(error);
    }
  }

  @Get()
  async getUsers(): HttpOut {
    try {
      const users = await this.usersService.getUsers();

      return new SuccessOutDto(users);
    } catch (error) {
      return new ErrorOutDto(error);
    }
  }

  @Get('/:id')
  async getUser(@Param('id') id: string): HttpOut {
    try {
      const user = await this.usersService.getUser(id);

      return new SuccessOutDto(user);
    } catch (error) {
      return new ErrorOutDto(error);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string): HttpOut {
    try {
      const data = await this.usersService.delete(id);
      return new SuccessOutDto(data);
    } catch (error) {
      return new ErrorOutDto(error);
    }
  }
}
