import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Tambah from './Tambah';
import Tampil from './Tampil';
import Edit from './Edit';


const RouteStack = createStackNavigator({
    Tambah : {
        screen:Tambah
    },
    Tampil : {
        screen:Tampil
    },
    Edit : {
        screen:Edit
    },
  },
  {
      initialRouteName:'Tambah',
      headerMode:'none'
  })
  
export default createAppContainer(RouteStack);