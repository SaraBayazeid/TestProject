import { TouchableOpacity } from 'react-native-gesture-handler';



const hotel = [
  
      {
        id: '1',
        name: 'Coffee House',
        image: require('../assets/coffee.jpg'),
        type: 'Free Coffee',
        points: '800 pts',
        value: 800,
        
      },
      {
        id: '2',
        name: 'Fitness Center',
        image: require('../assets/gym.jpg'),
        type: '10% off membership',
        points: '2000 pts',
        value:2000,
      },
      {
        id: '3',
        name: 'Local Library',
        image: require('../assets/bookss.jpg'),
        type: '5% your purchase',
        points: '1000 pts',
        value:1000,
      },
      {
        id: '4',
        name: 'The Family Diner',
        image: require('../assets/pasta.jpg'),
        type: '60 SR off',
        points: '1500 pts',
        value: 1500,
      },
    ];
  


export default hotel;