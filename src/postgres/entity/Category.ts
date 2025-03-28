import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum CategoryType {
  ELECTRONICS = "Electronics",
  FOOD = "Food",
  PHARMACY = "Pharmacy",
  GROCERY = "Grocery",
}

@Entity("categories") // 'categories' is the table name
export class Category {
  @PrimaryGeneratedColumn() // Automatically generated primary key
  id!: number;

  @Column({
    type: "enum",
    enum: CategoryType, // reference the enum
    unique: true,
  }) // Category name column
  category!: CategoryType;
}
