import { Exclude } from 'class-transformer';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserType } from './auth.pb';

@Entity()
export class Auth extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar' })
  public email!: string;

  @Exclude()
  @Column({ type: 'varchar' })
  public password!: string;

  @Column({ type: 'varchar', nullable: true })
  public lastName!: string;

  @Column({ type: 'varchar', nullable: true })
  public firstName!: string;

  @Column({ type: 'varchar', nullable: true })
  public type!: UserType;
}
