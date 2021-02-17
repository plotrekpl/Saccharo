import { Alert } from 'react-native';

const alertHandler = (alertMessage: string, alertType: string) => {
  Alert.alert(alertType, alertMessage, [{ text: `Cancel` }], { cancelable: false });
};

export default alertHandler;
