import { ConfigService, ConfigModule } from '@nestjs/config';
import { join } from 'path';

export const TypeormConfig = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService): Promise<unknown> => ({
    type: configService.get('db.type'),
    host: configService.get('db.host'),
    port: configService.get('db.port'),
    username: configService.get('db.username'),
    password: configService.get('db.password'),
    database: configService.get('db.name'),
    logging: configService.get('env.type') === 'development',
    entities: [join(__dirname, '../../', '/modules/**/*.entity.{js,ts}')],
    synchronize: true,
    autoLoadEntities: true,
  }),
  inject: [ConfigService],
};
