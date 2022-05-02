import { Connection } from 'typeorm';
import { DeleteResponse } from '../../../core/entities/Response.interface';
import { ClientRepository } from '../../../core/repositories/Client.repository';
import { Client, PartialClient } from '../../../core/entities/client';
import { ClientEntity } from '../entity/Client';

const clientRepositoryImplementation = (connection: Connection): ClientRepository => {
  const repositoryORM = connection.getRepository<Client>(ClientEntity);

  const findOne = async (key: { [key: string]: string }): Promise<Client> => {
    const client = await repositoryORM.findOneOrFail({ where: key });
    return client;
  };

  const findAll = async (): Promise<Client[]> => {
    const clients = await repositoryORM.find();
    return clients;
  };

  const create = async (client: PartialClient): Promise<Client> => {
    console.log('inside repository client create', client);
    const createdClient = await repositoryORM.insert(client);
    const idUpdated = createdClient.generatedMaps[0].id;
    return await repositoryORM.findOneOrFail(idUpdated);
  };

  const update = async (id: string, client: PartialClient): Promise<Client> => {
    await repositoryORM.update(id, client);
    return await repositoryORM.findOneOrFail(id);
  };

  const remove = async (id: string): Promise<DeleteResponse> => {
    const { affected } = await repositoryORM.delete(id);
    return affected;
  };

  return {
    ...repositoryORM,
    findOne,
    findAll,
    create,
    update,
    remove,
  };
};

export default clientRepositoryImplementation;
