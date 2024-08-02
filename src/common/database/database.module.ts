import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'chat_db',
      entities: [join(__dirname, '../**/**.entity{.ts,.js}')],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
