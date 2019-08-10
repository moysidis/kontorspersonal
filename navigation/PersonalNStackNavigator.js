import { createStackNavigator } from 'react-navigation';

import PersonalNScreen from '../screens/PersonalNScreen';
import PersonalSokScreen from '../screens/PersonalSokScreen';

const PersonalNStack = createStackNavigator({
  NHome: {
    screen: PersonalNScreen,
  },
  NSearch: {
    screen: PersonalSokScreen,
  },
})

export default PersonalNStack
