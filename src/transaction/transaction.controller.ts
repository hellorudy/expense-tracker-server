import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { AddTransactionDto } from './dto/add-transaction.dto';

@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get()
  getTransactions() {
    return this.transactionService.getAll();
  }

  @Post()
  addTransaction(@Body() body: AddTransactionDto) {
    return this.transactionService.add(body);
  }

  @Get('/:id')
  getTransaction(@Param('id') id: number) {
    return this.transactionService.getById(id);
  }
}
