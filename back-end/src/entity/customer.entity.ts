import { Column, Entity } from 'typeorm';

@Entity()
class CustomerEntity {
  @Column()
  public id: number;

  @Column()
  public email: string;

  @Column()
  public phone: number;

  @Column()
  public name: string;

  @Column()
  public birthday: number;

  @Column()
  public address: string;
}

export default CustomerEntity;
