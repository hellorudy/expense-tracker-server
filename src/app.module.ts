import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionModule } from './transaction/transaction.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TransactionModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'postgres',
      username: 'postgres',
      password: 'TrkJKXhA200218!',
      host: 'localhost',
      port: 5432,
      synchronize: true,
      entities: ['**/*.entity.js'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
