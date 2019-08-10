import { StackNavigator } from 'react-navigation';

import RegistreraNScreen from '../screens/RegistreraNScreen';

const PersonalNStack = StackNavigator({
  Home: {
    screen: RegistreraNScreen,
  },
})

export default PersonalNStack
