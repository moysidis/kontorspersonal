import { createBottomTabNavigator } from 'react-navigation';
import RegistreraPersonalStack from './RegistreraPersonalStackNavigator';
import RegistreraKundStack from './RegistreraKundStackNavigator';



const RegistreracreateBottomTabNavigator = createBottomTabNavigator({
    Jobba: { screen: RegistreraPersonalStack },
    Anlita: { screen: RegistreraKundStack },
  }, { initialRouteName: 'Jobba',
       //tabBarComponent: TabBarBottom,
       tabBarPosition: 'bottom',
       tabBarOptions: {
        activeBackgroundColor: '#205081',
        labelStyle: {
          fontSize: 16,
          color: 'white',
          flex:4,
        },
        tabStyle: {
        },
        style: {
          backgroundColor: '#251626',
        },
      }
  },);

export default RegistreracreateBottomTabNavigator;
