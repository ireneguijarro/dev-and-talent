import type { NextPage } from 'next';
import Head from 'next/head';
import { Button, Container, Card, Row, Spacer } from '@nextui-org/react';
import Login from '../components/login';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>dev-and-talent</title>
      </Head>

      <main>
        <Container>
          <h1>dev-and-talent</h1>
          <Card css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Login />
            <Spacer y={2} />
            <Row justify="center">
              <Button>Login</Button>
              <Spacer x={2} />
              <Button>Register</Button>
            </Row>
          </Card>
        </Container>
      </main>
    </div>
  );
};

export default Home;
