import { PartialUser, User } from '../../models/user';

let token = '';

export const login = async (name: string, password: string) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const response = await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ name, password }),
  });

  if (!response.ok) {
    return false;
  }

  token = await response.text();
  return true;
};

export const register = async (user: PartialUser) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const response = await fetch('http://localhost:3000/auth/register', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    return false;
  }

  return true;
};

export const getUsers = async (): Promise<User[]> => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('auth', token);
  const response = await fetch('http://localhost:3000/users', {
    method: 'GET',
    headers: myHeaders,
  });
  if (!response.ok) {
    return [];
  }
  const { users } = await response.json();
  return users;
};
