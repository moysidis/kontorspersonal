import { createStackNavigator } from 'react-navigation';

import KontaktaScreen from '../screens/KontaktaScreen';

const KontaktaStack = createStackNavigator({
  MyAcount: {
    screen: KontaktaScreen,
  },
})

export default KontaktaStack;