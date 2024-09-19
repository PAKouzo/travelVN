export class BaseModel<T> {
  id!: string;

  constructor(data: Partial<T>) {
    Object.assign(this, data);
  }
}
