import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitiesService } from './entities/entities.service';
import { EntitiesController } from './entities/entities.controller';
import { GenericEntity } from './entities/entity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GenericEntity])],
  providers: [EntitiesService],
  controllers: [EntitiesController],
})
export class EntitiesModule {}
