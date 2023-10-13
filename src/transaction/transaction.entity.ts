import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Wallet } from '../wallet/wallet.entity';
import { Category } from '../category/category.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column({ type: 'float' })
  value: number;

  @ManyToOne(() => Wallet, (wallet) => wallet.transactions)
  wallet: number;

  @ManyToOne(() => Category, (category) => category.transactions)
  category: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
