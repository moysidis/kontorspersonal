import { createStackNavigator } from 'react-navigation';

import MittKontoScreen from '../screens/MittKontoScreen';

const MittKontoStack = createStackNavigator({
  MyAccount: {
    screen: MittKontoScreen,
  },
})

export default MittKontoStack;