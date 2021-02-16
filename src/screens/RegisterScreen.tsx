import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CustomButton, Layout, Login, Register } from 'src/components';

export const RegisterScreen: React.FC = () => {
  const { t } = useTranslation();
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  return (
    <Layout>
      {isSignUp ? <Register /> : <Login />}
      <CustomButton
        label={isSignUp ? `${t('authorization.logIn')}` : `${t('authorization.signUp')}`}
        onPress={() => setIsSignUp(!isSignUp)}
      />
    </Layout>
  );
};
