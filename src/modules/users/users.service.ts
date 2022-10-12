import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(payload: User) {
    const password = payload.password;
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return this.userRepository.save({ ...payload, password: hash });
  }

  async updateUser(payload: any) {
    if (payload.password) {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(payload.password, salt);
      payload.password = hash;
    }

    return this.userRepository.save(payload);
  }

  getUser(id: string) {
    return this.userRepository.findOne({ id, active: true });
  }

  getUsers() {
    return this.userRepository.find();
  }

  delete(id: string) {
    return this.userRepository.save({
      id,
      active: false,
    });
  }
}
