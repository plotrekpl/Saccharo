import { CustomButton, Layout, Login, Register } from 'src/components';
import React, { useState } from 'react';

const RegisterScreen: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
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
