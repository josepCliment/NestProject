import { Column, Entity } from 'typeorm';
import { GenericEntity } from '../entities/entity.entity';

@Entity()
export class User extends GenericEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;
  
  @Column()
  password: string;
}
