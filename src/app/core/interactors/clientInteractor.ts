import { Client, PartialClient } from '../entities/client';
import { DeleteResponse } from '../entities/Response.interface';
import { ClientRepository } from '../repositories/Client.repository';
import { NO_CLIENTS_FOUND, NO_CLIENT_FOUND } from './errors';

const clientInteractor = (clientRepository: ClientRepository): ClientRepository => {
  const findAll = async (): Promise<Client[]> => {
    const clients = await clientRepository.findAll();
    if (!clients) {
      throw new Error(NO_CLIENTS_FOUND);
    }
    return clients;
  };

  const findOne = async (key: { [key: string]: string }): Promise<Client> => {
    const client = await clientRepository.findOne(key);
    if (!client) {
      throw new Error(NO_CLIENT_FOUND);
    }
    return client;
  };

  const create = async (client: PartialClient): Promise<Client | undefined> => {
    const createdClient = await clientRepository.create(client);
    return createdClient;
  };

  const update = async (id: string, client: PartialClient): Promise<Client> => {
    await findOne({ id });
    const updatedClient = await clientRepository.update(id, client);
    return updatedClient;
  };

  const remove = async (id: string): Promise<DeleteResponse> => {
    return await clientRepository.remove(id);
  };

  return {
    findAll,
    findOne,
    create,
    update,
    remove,
  };
};

export default clientInteractor;
