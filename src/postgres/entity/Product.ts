import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Category } from "./Category";

@Entity("products") 
export class Product {
  @PrimaryGeneratedColumn() 
  id!: number;

  @Column({ type: "varchar", length: 255 })
  productName!: string;

  @ManyToOne(() => Category, (category) => category.id, { onDelete: "CASCADE" }) 
  @JoinColumn({ name: "category_id" }) // Foreign key column name in products table
  category!: Category;

  @Column({ type: "varchar", nullable: true }) // Weight column (nullable)
  weight!: string; 

  @Column({ type: "decimal", precision: 10, scale: 2 })
  regularPrice!: number;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: true }) // Discount price (nullable)
  discountPrice!: number;

  @Column({ type: "text", nullable: true }) // Description column (nullable)
  description!: string;

  @Column({ type: "varchar", length: 255 })
  image!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt!: Date;
}
