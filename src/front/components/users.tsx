import { useState } from 'react';
import { getUsers } from '../pages/api/auth';
import { Button, Card, Text } from '@nextui-org/react';
import { User } from '../models/user';

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const fetchUsers = async () => {
    const users: User[] = await getUsers();
    setUsers(users);
  };

  return (
    <Card>
      <Card.Header>
        <Text h2>Users</Text>
      </Card.Header>
      {users &&
        users.map((user: User) => (
          <Text h5 key={user.id}>
            {user.name}
          </Text>
        ))}
      <Button type="button" onClick={fetchUsers}>
        Fetch users
      </Button>
    </Card>
  );
};

export default Users;
