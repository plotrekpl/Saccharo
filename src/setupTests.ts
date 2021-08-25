jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')
const mockedNavigate = jest.fn()
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate })
}))

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}))

export {}
