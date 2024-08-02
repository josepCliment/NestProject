import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitiesService } from './entities/entities.service';
import { EntitiesController } from './entities/entities.controller';
import { GenericEntity } from './entities/entity.entity';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';


@Module({
  imports: [TypeOrmModule.forFeature([GenericEntity])],
  providers: [EntitiesService, UserService],
  controllers: [EntitiesController, UserController],
})
export class EntitiesModule {}
