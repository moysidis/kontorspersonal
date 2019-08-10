import { createStackNavigator } from 'react-navigation';

import RegistreraKundScreen from '../screens/RegistreraKundScreen';

const RegistreraKundStack = createStackNavigator({
  Home: {
    screen: RegistreraKundScreen,
  },
})

export default RegistreraKundStack