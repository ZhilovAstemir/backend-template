import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  SelectQueryBuilder,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { AllRoles } from 'types';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  email: string;

  @Exclude()
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
