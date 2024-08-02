import { Column, Entity, Table } from 'typeorm';
import { GenericEntity } from '../entities/entity.entity';

@Entity('users')
export class User extends GenericEntity {
  @Column({ unique: true })
  nickname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
