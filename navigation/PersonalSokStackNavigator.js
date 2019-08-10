import { createStackNavigator } from 'react-navigation';

import PersonalSokScreen from '../screens/PersonalSokScreen';

const PersonalSokStack = createStackNavigator({
  Searching:{
    screen: PersonalSokScreen,
  },
})

export default PersonalSokStack;