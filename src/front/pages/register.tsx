import { Input, Spacer, Button, FormElement, Card, Text, Radio } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { PartialUser, UserAvailability } from '../models/user';
import { register } from '../pages/api/auth';

const Register = () => {
  const router = useRouter();
  const [newUser, setNewUser] = useState<PartialUser>({
    name: '',
    password: '',
    availability: UserAvailability.MORNINGS,
    email: '',
    country: '',
  });
  const [registerError, setRegisterError] = useState(false);

  const onSubmit = async () => {
    console.log({ newUser });
    const registered = await register(newUser);
    setRegisterError(!registered);
    if (registered) {
      router.push('/');
    }
  };

  const onNameChange = (e: ChangeEvent<FormElement>) => {
    setNewUser({ ...newUser, name: e.target.value });
  };

  const onEmailChange = (e: ChangeEvent<FormElement>) => {
    setNewUser({ ...newUser, email: e.target.value });
  };

  const onPasswordChange = (e: ChangeEvent<FormElement>) => {
    setNewUser({ ...newUser, password: e.target.value });
  };

  const onCountryChange = (e: ChangeEvent<FormElement>) => {
    setNewUser({ ...newUser, country: e.target.value });
  };
  const onAvailabilityChange = (newValue: string | number) => {
    if (Object.values(UserAvailability).includes(newValue as UserAvailability)) {
      setNewUser({ ...newUser, availability: newValue as UserAvailability });
    }
  };

  return (
    <Card css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card.Body>
        <form>
          <Spacer x={1} />
          <Input labelPlaceholder="Name" onChange={onNameChange} status={registerError ? 'error' : 'default'} />
          <Spacer x={2} />
          <Input
            labelPlaceholder="Email"
            type="email"
            onChange={onEmailChange}
            status={registerError ? 'error' : 'default'}
          />
          <Spacer x={2} />
          <Input labelPlaceholder="Country" onChange={onCountryChange} status={registerError ? 'error' : 'default'} />
          <Spacer x={2} />
          <Text>Availability</Text>
          <Radio.Group onChange={onAvailabilityChange} value={newUser.availability} size="xs">
            <Radio value={UserAvailability.MORNINGS}>Mornings</Radio>
            <Radio value={UserAvailability.AFTERNOON}>Afternoon</Radio>
            <Radio value={UserAvailability.EVENINGS}>Evenings</Radio>
            <Radio value={UserAvailability.NOT_AVAILABLE}>Not available</Radio>
          </Radio.Group>
          <Spacer x={2} />
          <Input
            labelPlaceholder="Password"
            type="password"
            onChange={onPasswordChange}
            status={registerError ? 'error' : 'default'}
          />
          <Spacer x={2} />

          <Button type="button" onClick={onSubmit}>
            Register
          </Button>
        </form>
      </Card.Body>
      <Card.Footer>
        <Text small>Back to&nbsp;</Text>
        <Link href={'/'}>Login</Link>
      </Card.Footer>
    </Card>
  );
};

export default Register;
