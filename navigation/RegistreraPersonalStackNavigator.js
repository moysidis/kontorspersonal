import { createStackNavigator } from 'react-navigation';

import RegistreraPersonalScreen from '../screens/RegistreraPersonalScreen';

const RegistreraPersonalStack = createStackNavigator({
  Home: {
    screen: RegistreraPersonalScreen,
  },
})

export default RegistreraPersonalStack;