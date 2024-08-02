import { Column, Entity } from 'typeorm';
import { GenericEntity } from '../entities/entity.entity';

@Entity('users')
export class User extends GenericEntity {
  @Column()
  nickname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
