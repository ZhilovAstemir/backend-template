import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { AllRoles } from 'types';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    default: null,
  })
  password: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  phone: string;

  @Column({
    type: 'enum',
    enum: AllRoles,
    default: AllRoles.MANAGER,
  })
  role?: AllRoles;

  @Column({
    type: 'boolean',
    nullable: false,
    default: true,
  })
  active: boolean;
}
