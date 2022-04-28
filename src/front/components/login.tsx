import { Input, Spacer } from '@nextui-org/react';

const Login = () => {
  return (
    <form>
      <Input placeholder="Name" />
      <Spacer x={1} />
      <Input placeholder="Password" type="password" />
    </form>
  );
};

export default Login;
