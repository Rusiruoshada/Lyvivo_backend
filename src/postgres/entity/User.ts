import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsEmail, Length } from "class-validator";

// Step 1: Define the Enum
export enum UserType {
  ADMIN = "admin",
  USER = "user",
  SUPER_ADMIN = "super",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "enum",
    enum: UserType,  // reference the enum
    default: UserType.USER, // optional, set a default value
  })
  type!: UserType ;

  @Column()
  @Length(1, 255)
  firstName!: string;

  @Column()
  @Length(1, 255)
  lastName!: string;

  @Column({ unique: true })
  @IsEmail()
  email!: string;

  @Column({ nullable: false, unique: true })
  mobileNumber!: number;

  @Column()
  password!: string;
}
