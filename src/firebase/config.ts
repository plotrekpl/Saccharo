import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAiL_q8VP7bAGZm3k7nAW9JkEOoz0ozuhs',
  authDomain: 'reactnativeapp-9e3eb.firebaseapp.com',
  databaseURL: 'https://reactnativeapp-9e3eb.firebaseio.com',
  projectId: 'reactnativeapp-9e3eb',
  storageBucket: 'reactnativeapp-9e3eb.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: '789550583288: 1:1234:web:ee873bd1234c0deb7eba61ce',
};
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
if (!firebase.apps.length) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
