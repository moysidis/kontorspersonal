import { createStackNavigator } from 'react-navigation';

import JobbSokandeScreen from '../screens/JobbSokandeScreen';

const JobbSokandeStack = createStackNavigator({
  Home: {
    screen: JobbSokandeScreen,
  },
})

export default JobbSokandeStack
