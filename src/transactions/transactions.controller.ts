import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { AddTransactionDto } from './dto/add-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionService: TransactionsService) {}

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
