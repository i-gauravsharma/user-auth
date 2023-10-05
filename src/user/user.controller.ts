import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUser(): string {
    return this.userService.getUser();
  }

  @Post()
  createUser(@Req() request: Request, @Body() updateUser: UpdateUserDto) {
    return this.userService.createUser(updateUser);
  }
}
