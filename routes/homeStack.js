import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import Review from '../screens/Review';



const screens = {
  Home: {
    screen: Home
  },
  Review: {
    screen: Review
  }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

// const NavApp = ()=>{
//   return(
//     <NavigationContainer>

//     </NavigationContainer>
    
//   )
// }

// export default NavApp;