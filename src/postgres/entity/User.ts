import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, Length } from 'class-validator';

@Entity()
export class User  {
  @PrimaryGeneratedColumn()
  id!: number;

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