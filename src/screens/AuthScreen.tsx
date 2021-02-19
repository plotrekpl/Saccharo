import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { CustomButton, Layout, Login, Register } from 'src/components';
import { AppState } from 'src/store/store';

export const AuthScreen: React.FC = () => {
  const { t } = useTranslation();
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const { loading } = useSelector((state: AppState) => state.userReducer);
  return (
    <Layout>
      {isSignUp ? <Login /> : <Register />}
      <CustomButton
        label={isSignUp ? `${t('authorization.signUp')}` : `${t('authorization.logIn')}`}
        onPress={() => setIsSignUp(!isSignUp)}
        loading={loading}
      />
    </Layout>
  );
};
