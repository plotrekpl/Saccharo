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

/** 
* If component has any logic and we use TypeScript in project, the component should be also Typed, even if it is not contain any render
* We postfix such files with .ts and type them as any other file.
* The exception is config files where we store only simple objects OR configuration of plug-in that may be not typed. Firebase is fully typed
* Please change this file to .ts and make appropriate check of types. 
* TIP: If you can't find type in documentation, type property as string or number, application or TS will throw error where you can find what type is required
*/

/**
* when you operate on .js files you should also check if property is available on object to prevent errors. We use hasOwnProperty function to do that.
* examples below
*/
// if (!firebase.hasOwnProperty('apps') || !firebase.apps.length) {
if (!firebase.apps.length) {

/** 
* Below may be redundant but name of method may change in time and version of plugin. It is worth check if method is declared before app crash.
* when we use TypeScript it is not necessary, TypeScript will inform us that method does not exists or is not declared on the fly
*/
// if(typeof firebase.initializeApp === 'function')
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
