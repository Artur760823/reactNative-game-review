import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import Review from '../screens/Review';



const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'GameZone'
    }
  },
  Review: {
    screen: Review,
    navigationOptions: {
      title: 'Review Details'
    }
  }
}
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#F39C12', height: 120},
  }
});

export default createAppContainer(HomeStack);

// const NavApp = ()=>{
//   return(
//     <NavigationContainer>

//     </NavigationContainer>
    
//   )
// }

// export default NavApp;