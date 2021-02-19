# Sacharro

## Installation

Install TodoApp with command

```npm
npm install
```

After npm install you must change files in node-modules

- Navigate to your node_modules/react-native/Libraries/Core/Timers/JSTimers.js file.
- Look for the variable MAX_TIMER_DURATION_MS
- Change its value to 10000 \* 1000

## Start App

After installation, run app with command.

```npm
npx react-native run-android
```

## Technologies

Project is created with:

- react
- react-native
- redux
- redux-saga
- firebase
