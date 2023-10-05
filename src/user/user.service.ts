import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {} 

  getUser(): string {
    return 'User from service';
  }

  async createUser(updateUser: UpdateUserDto): Promise<User> {
    return this.userModel.create(updateUser);
  }
}
