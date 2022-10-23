import { ResourceWithOptions } from 'admin-bro';
import { User } from '../../modules/users/user.entity';

const UserResource: ResourceWithOptions = {
  resource: User,
  options: {},
};

export default UserResource;
