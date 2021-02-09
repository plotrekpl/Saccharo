import React, { useState } from 'react';
import { Button } from 'react-native';

import { CustomButton, Layout, Login, Register } from 'src/components';

const RegisterScreen: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  return (
    <Layout>
      {isSignUp ? <Register /> : <Login />}
      <CustomButton
        label={isSignUp ? 'Log in' : 'Sign up'}
        onPress={() => setIsSignUp(!isSignUp)}
      />
    </Layout>
  );
};

export default RegisterScreen;
