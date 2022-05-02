import { Input, Spacer, Button, FormElement } from '@nextui-org/react';
import { ChangeEvent, useState } from 'react';
import { login } from '../pages/api/auth';

const Login = () => {
  const [form, setForm] = useState({ name: '', password: '' });
  const [loginError, setLoginError] = useState(false);

  const onSubmit = async () => {
    const logged = await login(form.name, form.password);
    setLoginError(!logged);
  };

  const onNameChange = (e: ChangeEvent<FormElement>) => {
    setForm({ ...form, name: e.target.value });
  };

  const onPasswordChange = (e: ChangeEvent<FormElement>) => {
    setForm({ ...form, password: e.target.value });
  };

  return (
    <>
      <form>
        <Spacer x={1} />

        <Input labelPlaceholder="Name" onChange={onNameChange} status={loginError ? 'error' : 'default'} />
        <Spacer x={2} />
        <Input
          labelPlaceholder="Password"
          type="password"
          onChange={onPasswordChange}
          status={loginError ? 'error' : 'default'}
        />
        <Spacer x={2} />

        <Button type="button" onClick={onSubmit}>
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
