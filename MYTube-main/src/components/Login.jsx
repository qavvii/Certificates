import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (


    <Container maxW={'container.xl'}  h={[789]} p={'17'} >


      <form>
        <VStack
          alignItems={'center'}
          spacing={'6'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}>

          <Heading>Welcome Back</Heading>

          <Input
            placeholder={'Email'}
            type={'email'}
            color={'white'}
            required
            focusBorderColor={'purple.400'}/>


          <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={'purple.400'}/>



          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>


          <Button colorScheme={'purple'} type={'submit'}>
            Log In
          </Button>

          <Text textAlign={'center'}>
            New User?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>


        </VStack>
      </form>


    </Container>
  );
};

export default Login;
