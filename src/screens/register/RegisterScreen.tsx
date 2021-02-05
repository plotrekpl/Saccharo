import React, { useState } from 'react';

import { CustomButton, Layout, Login, Register } from 'src/components';

const RegisterScreen: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  /** You should use SafeAreaView in mobile apps to be sure that app content will not be displayed below navigation bars
   * Depending on what behaviour will be needed please implement it here or in Layout component if it will be your main one or in App component,
   * please rethink and consider in what situations which attempt should be used
   * */
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
