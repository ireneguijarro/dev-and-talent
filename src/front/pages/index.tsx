import type { NextPage } from 'next';
import { Card, Spacer, Text } from '@nextui-org/react';
import Login from '../components/login';
import Users from '../components/users';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Card css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card.Body>
          <Login />
        </Card.Body>
        <Spacer y={2} />
        <Card.Footer>
          <Text small>You don&apos;t have an account yet?&nbsp;</Text>
          <Link href={'/register'}>Register</Link>
        </Card.Footer>
      </Card>

      <Spacer y={2} />

      <Users />
    </>
  );
};

export default Home;
