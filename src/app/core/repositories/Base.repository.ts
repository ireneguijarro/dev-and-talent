import { DeleteResponse } from '../entities/Response.interface';

export interface BaseRepository<T> {
  findAll(): Promise<T[]>;
  findOne(key: { [key: string]: string }): Promise<T>;
  create(partialEntity: Partial<T>): Promise<T | undefined>;
  update(id: string, partialEntity: Partial<T>): Promise<T>;
  remove(id: string): Promise<DeleteResponse>;
}
