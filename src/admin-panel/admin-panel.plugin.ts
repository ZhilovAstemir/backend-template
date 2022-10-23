import { INestApplication } from '@nestjs/common';
import AdminBro from 'admin-bro';
import { Database, Resource } from 'admin-bro-typeorm';

import * as AdminBroExpress from 'admin-bro-expressjs';

import UserResource from './resourses/user.resourse';

export async function setupAdminPanel(app: INestApplication): Promise<void> {
  AdminBro.registerAdapter({ Database, Resource });

  /** Create adminBro instance */
  const adminBro = new AdminBro({
    resources: [UserResource], // Here we will put resources
    rootPath: '/admin', // Define path for the admin panel
  });

  /** Create router */
  const router = AdminBroExpress.buildRouter(adminBro);

  /** Bind routing */
  app.use(adminBro.options.rootPath, router);
}
