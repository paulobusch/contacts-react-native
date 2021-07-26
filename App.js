import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeopleDetail from './src/screens/PeopleDetail';
import PeoplePage from './src/screens/PeoplePage';
import capitalizeFistLetter from './src/utils/capitalizeFistLetter';

const StackNavigator = createStackNavigator({
  'Main': { screen: PeoplePage },
  'PeopleDetail': { 
    screen: PeopleDetail,
    navigationOptions: ({ navigation }) => {
      const people = navigation.state.params;
      const personName = capitalizeFistLetter(people.name.first);

      return ({
        title: personName,
        headerTitleStyle: {
          color: 'white',
          fontSize: 30
        }
      });
    }
  }
}, {
  defaultNavigationOptions: {
    title: 'Contatos',
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
      textAlign: 'center'
    },
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomColor: '#C5C5C5',
      borderTopWidth: 1
    }
  }
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;