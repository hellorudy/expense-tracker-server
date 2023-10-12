import { Injectable } from '@nestjs/common';
import { AddTransactionDto } from './dto/add-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction) private repo: Repository<Transaction>,
  ) {}

  getAll() {
    return this.repo.find();
  }

  getById(id: number): Promise<Transaction | null> {
    return this.repo.findOneBy({ id });
  }

  add(newTransaction: AddTransactionDto) {
    const transaction = this.repo.create({
      ...newTransaction,
    });
    return this.repo.save(transaction);
  }
}
