import { createBottomTabNavigator } from 'react-navigation';
import PersonalUnderStack from './PersonalUnderStackNavigator';
import PersonalSjukStack from './PersonalSjukStackNavigator';
import PersonalSpecialistStack from './PersonalSpecialistStackNavigator';


const PersonalBottomTabNavigator = createBottomTabNavigator({
    Undersköterskor: { screen: PersonalUnderStack },
    Sjuksköterskor: { screen: PersonalSjukStack },
    Specialistsjuksköterskor: { screen: PersonalSpecialistStack },
  }, { initialRouteName: 'Undersköterskor',
       tabBarPosition: 'bottom',
       tabBarOptions: {
        activeBackgroundColor: '#205081',
        labelStyle: {
          fontSize: 14,
          color: 'white',
          marginTop: 0,
          flex:4,
        },
        tabStyle: {
        },
        style: {
          backgroundColor: '#251626',
        },
      }
  },);

export default PersonalBottomTabNavigator;
