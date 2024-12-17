import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Users {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ default: 1 })
  public role: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public password: string;

  @Column({ unique: true })
  public phone_number: string;

  @Column()
  public full_name: string;

  @Column()
  public birthday: Date;

  @Column({ nullable: true })
  public address: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createAt: Date;
}

export default Users;
