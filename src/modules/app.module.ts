import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvConfig, TypeormConfig } from 'src/common/configs';
import { UsersModule } from './users/users.module';

// AdminBro.registerAdapter(TypeOrmAdapter);

@Module({
  imports: [
    ConfigModule.forRoot(EnvConfig),
    TypeOrmModule.forRootAsync(TypeormConfig),
    UsersModule,
  ],
})
export class AppModule {}
